# 3D Product Viewer

An interactive 3D product viewer built with Three.js, featuring a robot model with dynamic camera controls and part highlighting.

## Features

- Interactive 3D robot model
- Orbit controls for camera manipulation
- Dynamic lighting
- Part highlighting on hover
- Responsive design
- Smooth camera animations

## Live Demo

Visit the live demo at: [Project URL will be added after deployment]

## Local Development

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd Graphics-Ass
```

3. Start a local server (you can use any HTTP server):
```bash
npx http-server
```

4. Open your browser and visit `http://localhost:8080`

## Technologies Used

- Three.js for 3D rendering
- JavaScript (ES6+)
- HTML5
- CSS3

## Project Structure

```
├── index.html           # Main HTML file
├── js/                  # JavaScript modules
│   ├── main.js         # Main application entry
│   ├── createProduct.js # Robot model creation
│   ├── initScene.js    # Three.js scene setup
│   ├── addLighting.js  # Lighting setup
│   ├── interaction.js  # User interaction handling
│   └── cameraAnimation.js # Camera movement
```