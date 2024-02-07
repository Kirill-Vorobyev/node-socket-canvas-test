# Node-Socket-Canvas-Test

## Description:
Simple tank game tech demo to demonstrate node + socket.io + canvas

## Demo:
https://tanks.voro.dev
#### Some changes/updates not present in this repo
- Key press + hold input (WASD+Space)
- Rotational movement
- Faster update rate
- Circular collisions
- Better tank graphics

## About this repo:
- Node + Express for file serving and game loop.
- Socket.io for communication.
- Canvas 2D as the local renderer.
- WASD movement + Spacebar to shoot
- Input sent on key release

## To set up and run:
This project requires node.js to be installed on the system.
https://nodejs.org/en/

- Download the Repository

- Open a terminal window in the root directory and execute the following commands
```
npm install
```
*This will install all the dependencies, may take some time.*

```
npm start
```
*This will launch the server.*

**Once you see:**
```
Server listening on port 31313
```
**You're good to go!**

#### Visit http://localhost:31313/ in a browser to view the game
*Up-to-date google chrome or firefox recommended*

## To have friends join:
- Use ngrok.io to create a temporary link to your local server.

- Open a new terminal window and execute the following commands.
```
npm install -g ngrok
```
*This will install ngrok globally*

```
ngrok http 31313
```
*This will create a temporary link to your machine on port 31313*

- **Share your unique link with friends while the server and ngrok are running!**
