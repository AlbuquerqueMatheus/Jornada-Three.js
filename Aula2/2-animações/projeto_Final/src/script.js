// Importa a biblioteca THREE.js para criar e visualizar gráficos 3D
import * as THREE from 'three'

// Importa a biblioteca GSAP para animações
import gsap from 'gsap'

/** 
 * Base 
 */
// Seleciona o elemento canvas no HTML onde a cena será renderizada
const canvas = document.querySelector('canvas.webgl')

// Cria uma nova cena, que é um contêiner para objetos, luzes e câmeras
const scene = new THREE.Scene()

/** 
 * Base 
 */
// Cria uma geometria de cubo (1x1x1)
const geometry = new THREE.BoxGeometry(1, 1, 1)
// Cria um material básico de malha com cor vermelha
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// Cria um objeto mesh combinando a geometria do cubo e o material
const mesh = new THREE.Mesh(geometry, material)
// Adiciona o mesh à cena
scene.add(mesh)

/** 
 * Sizes 
 */
// Define as dimensões da renderização
const sizes = {
    width: 800, // Largura de 800 pixels
    height: 600 // Altura de 600 pixels
}

/** 
 * Camera 
 */
// Cria uma câmera perspectiva com campo de visão de 75 graus e razão de aspecto baseada nas dimensões definidas
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Define a posição da câmera no eixo Z para afastá-la da origem
camera.position.z = 3
// Adiciona a câmera à cena
scene.add(camera)

/** 
 * Renderer 
 */
// Cria um renderizador WebGL usando o canvas selecionado
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// Define o tamanho do renderizador para corresponder às dimensões especificadas
renderer.setSize(sizes.width, sizes.height)

/** 
 * Animate 
 */
// Usa GSAP para animar a posição do mesh. A animação dura 1 segundo, com um atraso de 1 segundo, movendo o mesh no eixo X para a posição 2.
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })

// Função de animação, chamada a cada quadro
const tick = () => {
    // Renderiza a cena a partir da perspectiva da câmera
    renderer.render(scene, camera)
    // Solicita ao navegador para chamar tick novamente no próximo quadro de animação
    window.requestAnimationFrame(tick)
}

// Inicia o loop de animação
tick()
