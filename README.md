# 🤖 3D Product Viewer

An interactive 3D product viewer built with Three.js — featuring a robot model, camera animations, and hover highlights 🚀

## 🔗 Live Demo  
👉 [https://entuelias.github.io/3d-product-viewer/](https://entuelias.github.io/3d-product-viewer/)

## 🎯 Features

- 🤖 Interactive 3D robot model using basic meshes (box, cylinder, sphere, etc.)
- 🎥 Orbit camera controls + automatic camera rotation
- 💡 Realistic lighting (ambient + directional)
- 🖱️ Mouse hover/click effects with part feedback
- 📱 Fully responsive to screen size
- 🌈 Smooth animations (camera + mesh)

## 🛠 Local Development

1. Clone the repository:
```bash
git clone https://github.com/entuelias/3d-product-viewer.git
````

2. Navigate into the folder:

```bash
cd 3d-product-viewer
```

3. Start a local server (use `http-server`, Python, or VS Code Live Server):

```bash
npx http-server
```

4. Open your browser and visit:
   `http://localhost:8080`

## 🧰 Technologies Used

* 🌐 [Three.js](https://threejs.org/) – 3D engine
* 📜 JavaScript (ES6+)
* 📄 HTML5
* 🎨 CSS3

## 📁 Project Structure

```
├── index.html              # Entry point
├── js/
│   ├── main.js             # App initializer
│   ├── createProduct.js    # Build the robot model
│   ├── initScene.js        # Set up camera, scene, renderer
│   ├── addLighting.js      # Add ambient & directional lights
│   ├── interaction.js      # Raycasting & mouse interaction
│   └── cameraAnimation.js  # Smooth camera auto-rotation
```

---

Made with ❤️ by Entisar Elias
✨ [GitHub](https://github.com/entuelias) | 💼 [LinkedIn](https://www.linkedin.com/in/entisar-elias-q/)

```

---

Let me know when it’s deployed and I’ll go check the **robot in action 🤖** 🎉
```
