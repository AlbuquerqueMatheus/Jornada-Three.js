import * as THREE from 'three' // Importa a biblioteca THREE.js, que é usada para criar e visualizar gráficos 3D

// Canvas
const canvas = document.querySelector('canvas.webgl') // Seleciona o elemento canvas HTML onde a cena será renderizada

// Scene
const scene = new THREE.Scene() // Cria uma nova cena, que é um contêiner para objetos, luzes e câmeras

/** 
 * Axes Helper 
 */
const axesHelper = new THREE.AxesHelper(2) // Cria um auxiliar de eixos, útil para visualizar a orientação dos eixos x, y e z no espaço, com comprimento 2 unidades
scene.add(axesHelper) // Adiciona o auxiliar de eixos à cena para visualização

/** 
 * Objects 
 */
const group = new THREE.Group() // Cria um grupo, que permite agrupar múltiplos objetos para transformações conjuntas
group.scale.y = 2 // Escala o grupo no eixo Y, dobrando sua altura
group.rotation.y = 0.2 // Rotaciona o grupo em torno do eixo Y, aplicando uma rotação de 0.2 radianos
scene.add(group) // Adiciona o grupo à cena

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cria uma geometria de cubo com dimensões 1x1x1
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Cria um material básico de malha com cor vermelha
)
cube1.position.x = -1.5 // Define a posição do cubo1 no eixo X para -1.5 unidades
group.add(cube1) // Adiciona o cubo1 ao grupo

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cria uma geometria de cubo idêntica ao primeiro
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Usa o mesmo material vermelho básico
)
cube2.position.x = 0 // Define a posição do cubo2 no eixo X para 0 unidades, centralizado
group.add(cube2) // Adiciona o cubo2 ao grupo

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), // Cria outra geometria de cubo
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Usa o mesmo material vermelho
)
cube3.position.x = 1.5 // Define a posição do cubo3 no eixo X para 1.5 unidades, deslocando à direita
group.add(cube3) // Adiciona o cubo3 ao grupo

/** 
 * Sizes 
 */
const sizes = {
    width: 800, // Define a largura da área de renderização para 800 pixels
    height: 600 // Define a altura da área de renderização para 600 pixels
}

/** 
 * Camera 
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // Cria uma câmera perspectiva com campo de visão de 75 graus e razão de aspecto baseada nas dimensões definidas
camera.position.z = 3 // Define a posição da câmera no eixo Z para 3 unidades, afastando-a da origem para visualizar a cena
// camera.lookAt(new THREE.Vector3(0, - 1, 0)) // (Comentado) Faz a câmera olhar para um ponto específico, se ativado
scene.add(camera) // Adiciona a câmera à cena

/** 
 * Renderer 
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // Usa o canvas selecionado anteriormente para renderizar a cena
})
renderer.setSize(sizes.width, sizes.height) // Define o tamanho do renderizador para corresponder ao tamanho especificado
renderer.render(scene, camera) // Renderiza a cena a partir da perspectiva da câmera
