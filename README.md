# Tetris

## Table of contents
1. [Description](#Description)
- [List of technologies used](#ListOfTech)
- [Implementation key parts](#KeyImplParts)
2. [Project setup and run](#ProjectSetupAndRun)

## Description
Simple implementation of common Tetris game. 
This project is dedicated to get intouch with Vue and Vuex frameworks.

### Implementation key parts <a name="KeyImplParts"/>
- User score record. Calculated by colored cells of block successfully placed on game field.
- User elapsed time record since game session started.
- Displaying next block to be generated.
- Ability to start and stop game with appropriate buttons.
- Ability to move tetris block in game field left/right/down with appropriate arrow keys.
- Ability to change speed of block movement via Level button

### List of technologies used <a name="ListOfTech"/>
1. [Vue3.js CLI](https://cli.vuejs.org/);
2. [Vuex](https://vuex.vuejs.org/guide/).

## Project setup and run <a name="ProjectSetupAndRun"/>
1. npm install
2. npm run serve
3. <your_prefered_browser> localhost:8080
