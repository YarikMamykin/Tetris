import { TetrisBlock, MoveDirection } from '@/store/common/tetris_block';
import { GameOver, OverFlow, MapFailure } from '@/store/common/errors/game_errors'
import { BlockGenerator } from '@/store/common/block_generator'
import { Timer } from '@/store/common/timer'

const Keys = {
  space: 32,
  left: 37,
  right: 39,
  down: 40
};

class GameController {
  constructor({ record_timeout, level, maxLevel, storage }) {

    this.record_timer = new Timer(
      record_timeout, 
      ()=>{ this.storage.commit('record_timer/update'); });

    this.game_timer = new Timer(
      this.game_timeout_by_level(level, maxLevel), 
      ()=>{ this.move_block(MoveDirection.down); });

    this.blockgen = new BlockGenerator();

    this.storage = storage;

    this.running = false;
  }

  game_timeout_by_level(level, maxLevel) {
     return 100 * (maxLevel - level) + 50;
  }

  update_next_block() {
    this.nextBlock = this.blockgen.generate();
    this.storage.commit('next_block_matrix/clear');
    this.storage.commit('next_block_matrix/map', this.nextBlock);
  }

  clear_ui() {
    this.storage.commit('game_matrix/clear');
    this.storage.commit('score/clear');
    this.storage.commit('record_timer/clear');
  }

  on_level_changed(level, maxLevel) {
    this.game_timer.stop();
    this.game_timer.timeout = this.game_timeout_by_level(level, maxLevel);
    this.game_timer.start();
  }

  subscribe_on_keydown() {
    window.onkeydown = (event) => {
      if(event.keyCode === Keys.left) this.move_block(MoveDirection.left);
      if(event.keyCode === Keys.right) this.move_block(MoveDirection.right);
      if(event.keyCode === Keys.down) this.move_block(MoveDirection.down);

      if(event.keyCode === Keys.space) 
        event.preventDefault(); // block spacebar press -> causes additional game starts
    };
  }

  unsubscribe_on_keydown() {
    window.onkeydown = null;
  }

  update_current_block(block) {
    if(block === null || block === undefined)
      this.currentBlock = this.blockgen.generate().move(MoveDirection.up);
    else
      this.currentBlock = TetrisBlock.copy(block).move(MoveDirection.up);
  }

  move_block(direction) {
    try {

      let movedBlock = TetrisBlock.copy(this.currentBlock).move(direction);

      this.storage.commit('game_matrix/unmap', this.currentBlock);
      this.storage.commit('game_matrix/map', movedBlock);

      this.currentBlock = movedBlock;

    } catch (error) {

      if(error instanceof GameOver) {
        this.stop();
        return;
      }

      if(error instanceof OverFlow || error instanceof MapFailure) {

        if(direction === MoveDirection.down) {
          this.storage.commit('score/increment', this.currentBlock.score());
          this.storage.commit('game_matrix/map', this.currentBlock);
          this.update_current_block(this.nextBlock);
          this.update_next_block();
        }

        if(direction === MoveDirection.right || direction === MoveDirection.left) {

          try {

            this.storage.commit('game_matrix/map', this.currentBlock);

          } catch (error) {

            if(error instanceof OverFlow) {
              // Here we can trap when currentBlock is placed and cannot be moved
              // but user trying to move block anyway.
              return;
            }
          }
        }

      }
    }
  }

  start() {

    // If user spam-clicks start button 
    // do not spam multiple timers :)
    if(this.running) return;

    this.clear_ui();

    this.update_current_block();
    this.update_next_block();
    
    this.record_timer.start();
    this.game_timer.start();
    this.subscribe_on_keydown();

    this.running = true;

  }

  stop() {

    this.record_timer.stop();
    this.game_timer.stop();
    this.unsubscribe_on_keydown();

    this.running = false;
  }
};

export { GameController };
