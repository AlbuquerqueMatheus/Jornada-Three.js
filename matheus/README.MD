### README: Descrição e Explicação do Código

Este projeto é uma cena 3D interativa desenvolvida com a biblioteca **Three.js** que exibe um cubo básico, com controles de órbita, uma interface gráfica de usuário (GUI) para interagir com as propriedades do objeto e uma animação simples. O objetivo é fornecer um exemplo básico de como configurar uma cena 3D, adicionar interatividade e animação usando Three.js, OrbitControls, e gsap para animações suaves.

#### Bibliotecas Importadas:
- **THREE**: A biblioteca principal usada para criar e renderizar a cena 3D.
- **OrbitControls**: Permite que o usuário gire, aproxime e afaste a câmera ao redor do objeto.
- **lil-gui**: Fornece uma interface gráfica para controlar propriedades da cena, como a cor do objeto e a sua visibilidade.
- **gsap**: Utilizado para animações, como rotacionar o cubo suavemente.

### Explicação Detalhada do Código

#### Importações
```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import gsap from 'gsap';
```
Essas importações trazem as bibliotecas necessárias. `THREE` é a principal para renderização 3D, `OrbitControls` permite interação com a câmera, `lil-gui` cria uma interface de controle, e `gsap` adiciona animações.

#### Seleção do Canvas
```javascript
const canvas = document.querySelector('.webgl');
```
Aqui, o código seleciona o elemento `<canvas>` do HTML com a classe `webgl`. Este canvas é onde a cena 3D será renderizada.

#### Criação da Cena e Adição de Eixos
```javascript
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(3); 
scene.add(axesHelper);
```
Uma nova cena é criada, e os eixos de referência são adicionados à cena. O `AxesHelper` ajuda a visualizar a orientação dos eixos no espaço 3D.

#### Objeto de Depuração
```javascript
const debugObject = {};
debugObject.color = 'red';
```
Este objeto (`debugObject`) é usado para armazenar valores que serão controlados via GUI. Neste caso, começamos com a cor do cubo definida como vermelha.

#### Criação de Geometria e Material
```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: debugObject.color });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```
Um cubo 3D é criado usando a geometria `BoxGeometry` e o material `MeshBasicMaterial`. O cubo é então adicionado à cena.

#### Função de Animação (Spin)
```javascript
debugObject.spin = () => {
    gsap.to(mesh.rotation, { duration: 5, y: mesh.rotation.y + Math.PI * 2 });
};
```
Esta função usa o `gsap` para animar a rotação do cubo ao longo do eixo Y por 360 graus (2π radianos) em 5 segundos.

#### Configuração da GUI
```javascript
const gui = new GUI();
```
Aqui, uma nova interface gráfica é criada, permitindo que o usuário interaja com certos parâmetros da cena.

##### Adição de Controles à GUI
```javascript
gui.add(debugObject, 'spin');
```
Um botão é adicionado à GUI que, quando clicado, chama a função `spin`, que rotaciona o cubo.

```javascript
gui.addColor(debugObject, 'color').onChange((value) => {
    material.color.set(debugObject.color);
});
```
Este controle permite alterar a cor do cubo, atualizando o material sempre que o valor mudar.

```javascript
gui.add(mesh.position, 'y', -3, 3, 0.01).min(-3).max(3).step(0.01).name('Elevation');
```
Aqui, é adicionado um controle para mover o cubo no eixo Y, com limites entre -3 e 3 e um incremento de 0.01.

```javascript
gui.add(mesh, 'visible');
gui.add(material, 'wireframe');
```
Esses controles permitem alternar a visibilidade do cubo e ativar/desativar o modo "wireframe" (estrutura de arame) do material.

#### Monitoramento do Cursor
```javascript
const cursor = { x: 0, y: 0 };

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
});
```
Esses eventos capturam a posição do cursor do mouse e normalizam os valores para um intervalo de -0.5 a 0.5, com base no tamanho da tela. Isso pode ser útil para interações futuras.

#### Configuração da Câmera
```javascript
const sizes = { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
```
A câmera é configurada com um campo de visão de 75 graus e uma proporção de aspecto baseada nas dimensões da janela do navegador. Ela é posicionada a 3 unidades de distância ao longo do eixo Z.

#### Atualização da Cena no Redimensionamento da Janela
```javascript
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});
```
Quando a janela do navegador é redimensionada, as proporções e o tamanho do renderizador são atualizados para manter a cena em proporção correta.

#### Controles de Órbita
```javascript
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
```
`OrbitControls` permite que o usuário interaja com a câmera, permitindo rotação, zoom e deslocamento ao redor da cena. A suavização (`damping`) é ativada para tornar os movimentos mais fluídos.

#### Configuração do Renderizador
```javascript
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
```
O renderizador WebGL é criado e vinculado ao canvas, com seu tamanho definido para corresponder ao tamanho da janela.

#### Animação e Renderização
```javascript
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};
tick();
```
Essa função de animação é chamada repetidamente usando `requestAnimationFrame`. Ela atualiza os controles de órbita e renderiza a cena a cada frame, criando um loop de animação.

### Resumo
Este código configura uma cena 3D simples com um cubo, que pode ser rotacionado e manipulado via uma interface gráfica. O usuário pode interagir com a cena usando o mouse e o GUI para ajustar propriedades como cor, visibilidade, elevação e modo de visualização (wireframe). A câmera pode ser orbitada ao redor da cena usando `OrbitControls`, e as animações são facilitadas pelo `gsap`.