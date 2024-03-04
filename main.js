import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// 定義一個長寬高為1 的立方體
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }, wireframe: true);

const mesh = new THREE.Mesh(geometry, material);

const scene = new THREE.Scene();

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

// Camera
// field of view, aspect ratio
// field of view 是度數, 且是由垂直的方向展開
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// 預設 camera 和 object 的位置都是 (0, 0, 0), 所以 camera 一開始都在 object 的內部
// 所以要把 camera 往後移動
// z 軸為正的方向是螢幕往使用者的垂直方向
camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
