import * as THREE from 'three';

const renderCube = () => {

  // 创建场景
  const scene = new THREE.Scene()
  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )

  // 初始化渲染器
  const renderer = new THREE.WebGLRenderer()
  // 设置渲染的尺寸和大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 将渲染器添加到body中
  document.getElementById('three_area')?.appendChild(renderer.domElement)

  // 添加物体
  // 创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const meterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  // 根据几何体和材质创建物体
  const cube = new THREE.Mesh(geometry, meterial)
  // 将几何体添加到场景中
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    // 使用渲染器，通过相机将场景渲染进来
    renderer.render(scene, camera)
  }

  animate()
}
export default renderCube