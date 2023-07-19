import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// // Clock
// const clock = new THREE.Clock()

const box2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
box2.position.x = -2

const box3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
box3.position.x = 2

const group = new THREE.Group()
group.add(mesh)
group.add(box2)
group.add(box3)

scene.add(group)

const executeAnimations = (group) => {

    console.log(group.children);

    for (const target in group.children) {
        gsap.to(group.children[target].rotation, { duration: 1, delay: 1, y: Math.floor(Math.random() * 10) })
        gsap.to(group.children[target].rotation, { duration: 1, delay: 2, z: Math.floor(Math.random() * 10) })
        gsap.to(group.children[target].rotation, { duration: 1, delay: 3, x: Math.floor(Math.random() * 10) })
        gsap.to(group.children[target].rotation, { duration: 1, delay: 4, y: 0 })
        gsap.to(group.children[target].rotation, { duration: 1, delay: 4, z: 0 })
        gsap.to(group.children[target].rotation, { duration: 1, delay: 4, x: 0 })
    }
}

executeAnimations(group)

// Animation
const tick = () => {
    // // Clock
    // const elapsedTime = clock.getElapsedTime()

    // // Update objects
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()