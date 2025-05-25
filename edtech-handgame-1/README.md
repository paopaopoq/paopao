# EdTech Hand Game

## Project Overview
The EdTech Hand Game is an interactive educational game that utilizes video image recognition technology to allow players to control the game using hand gestures and facial expressions. The game aims to enhance learning through engaging gameplay while leveraging modern technology for an immersive experience.

## Features
- Real-time hand and face detection using video capture.
- Interactive gameplay controlled by hand gestures.
- Visual feedback on player actions.
- Audio cues for successful task completion.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/edtech-handgame.git
   ```
2. Navigate to the project directory:
   ```
   cd edtech-handgame
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

## Usage
1. Open `index.html` in a web browser.
2. Allow access to your webcam when prompted.
3. Follow the on-screen instructions to play the game using your hands and facial expressions.

## File Structure
```
edtech-handgame
├── src
│   ├── sketch.js          # Main game logic and video capture
│   ├── game
│   │   ├── gameLogic.js   # Game rules and scoring
│   │   └── ui.js          # User interface elements
│   ├── assets
│   │   └── sounds
│   │       └── success.mp3 # Sound effect for successful actions
│   └── utils
│       └── videoUtils.js  # Video processing utilities
├── index.html             # Entry point of the application
├── package.json           # NPM configuration file
└── README.md              # Project documentation
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.