const solarSystem = document.getElementById('solar-system');
const infoPanel = document.getElementById('info-panel');
const planetName = document.getElementById('planet-name');
const planetInfo = document.getElementById('planet-info');
const speedControl = document.getElementById('speed-control');
const toggleBtn = document.getElementById('toggle-rotation');
const resetBtn = document.getElementById('reset-view');

const planetsData = {
    sun: {
        name: 'Sol',
        type: 'Estrella enana amarilla',
        diameter: '1,392,700 km',
        temperature: '5,500°C (superficie)',
        mass: '1.989 × 10³⁰ kg',
        age: '4,600 millones de años',
        distance: 'Centro del sistema',
        description: 'El Sol es la estrella central del sistema solar. Contiene el 99.86% de la masa total del sistema y proporciona la energía necesaria para la vida en la Tierra.',
        funFact: 'El Sol quanea 400 millones de toneladas de materia cada segundo para producir su energía.'
    },
    mercury: {
        name: 'Mercurio',
        type: 'Planeta rocoso',
        diameter: '4,879 km',
        temperature: '-180°C a 430°C',
        mass: '3.30 × 10²³ kg',
        distance: '57.9 millones de km del Sol',
        orbitalPeriod: '88 días terrestres',
        description: 'Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. No tiene atmósfera significativa y su superficie está cubierta de cráteres.',
        funFact: 'Mercurio es el planeta más rápido del sistema solar, orbitando el Sol cada 88 días.'
    },
    venus: {
        name: 'Venus',
        type: 'Planeta rocoso',
        diameter: '12,104 km',
        temperature: '462°C (promedio)',
        mass: '4.87 × 10²⁴ kg',
        distance: '108.2 millones de km del Sol',
        orbitalPeriod: '225 días terrestres',
        description: 'Venus es el planeta más caliente del sistema solar debido a su efecto invernadero descontrolado. Gira en dirección opuesta a la mayoría de planetas.',
        funFact: 'Un día en Venus (243 días terrestres) es más largo que su año (225 días terrestres).'
    },
    earth: {
        name: 'Tierra',
        type: 'Planeta rocoso',
        diameter: '12,742 km',
        temperature: '-89°C a 57°C',
        mass: '5.97 × 10²⁴ kg',
        distance: '149.6 millones de km del Sol',
        orbitalPeriod: '365.25 días',
        description: 'La Tierra es el único planeta conocido con vida. Tiene agua líquida en su superficie y una atmósfera protectora que permite condiciones ideales para la vida.',
        funFact: 'La Tierra es el único planeta que no debe su nombre a un dios griego o romano.'
    },
    mars: {
        name: 'Marte',
        type: 'Planeta rocoso',
        diameter: '6,779 km',
        temperature: '-140°C a 20°C',
        mass: '6.42 × 10²³ kg',
        distance: '227.9 millones de km del Sol',
        orbitalPeriod: '687 días terrestres',
        description: 'Marte es el "planeta rojo" debido al óxido de hierro en su superficie. Posee el volcán más alto del sistema solar, el Monte Olimpo, con 21 km de altura.',
        funFact: 'Marte tiene el cañón más grande del sistema solar: Valles Marineris, con 4,000 km de longitud.'
    },
    jupiter: {
        name: 'Júpiter',
        type: 'Gigante gaseoso',
        diameter: '139,820 km',
        temperature: '-110°C (nubosidad)',
        mass: '1.90 × 10²⁷ kg',
        distance: '778.5 millones de km del Sol',
        orbitalPeriod: '11.86 años terrestres',
        description: 'Júpiter es el planeta más grande del sistema solar. Su Gran Mancha Roja es una tormenta que ha durado más de 350 años. Tiene al menos 95 lunas conocidas.',
        funFact: 'Júpiter es tan grande que todos los demás planetas cabrían dentro de él con espacio de sobra.'
    },
    saturn: {
        name: 'Saturno',
        type: 'Gigante gaseoso',
        diameter: '116,460 km',
        temperature: '-140°C',
        mass: '5.68 × 10²⁶ kg',
        distance: '1,434 millones de km del Sol',
        orbitalPeriod: '29.46 años terrestres',
        description: 'Saturno es famoso por su espectacular sistema de anillos compuestos de hielo y roca. Es el menos denso de los planetas; flotaría en el agua si existiera una piscina lo suficientemente grande.',
        funFact: 'Saturno tiene 146 lunas confirmadas y sus anillos se extienden hasta 282,000 km del planeta.'
    },
    uranus: {
        name: 'Urano',
        type: 'Gigante de hielo',
        diameter: '50,724 km',
        temperature: '-195°C',
        mass: '8.68 × 10²⁵ kg',
        distance: '2,871 millones de km del Sol',
        orbitalPeriod: '84.01 años terrestres',
        description: 'Urano es único porque gira de lado, con su eje de rotación casi paralelo al plano de su órbita. Tiene un sistema de anillos tenue y un color azul verdoso distintivo.',
        funFact: 'Urano fue el primer planeta descubierto con un telescopio, en 1781 por William Herschel.'
    },
    neptune: {
        name: 'Neptuno',
        type: 'Gigante de hielo',
        diameter: '49,244 km',
        temperature: '-200°C',
        mass: '1.02 × 10²⁶ kg',
        distance: '4,495 millones de km del Sol',
        orbitalPeriod: '164.8 años terrestres',
        description: 'Neptuno es el planeta más alejado del Sol. Tiene los vientos más fuertes del sistema solar, alcanzando hasta 2,100 km/h. Fue el primer planeta localizado mediante cálculos matemáticos.',
        funFact: 'Neptuno tiene un sistema climático extremadamente activo con tormentas visibles como la Gran Mancha Oscura.'
    }
};

const planets = [
    { name: 'mercury', distance: 100, speed: 4, size: 12, class: 'mercury', angle: 0 },
    { name: 'venus', distance: 150, speed: 3, size: 18, class: 'venus', angle: 45 },
    { name: 'earth', distance: 200, speed: 2.5, size: 20, class: 'earth', angle: 90 },
    { name: 'mars', distance: 260, speed: 2, size: 16, class: 'mars', angle: 135 },
    { name: 'jupiter', distance: 340, speed: 1, size: 50, class: 'jupiter', angle: 180 },
    { name: 'saturn', distance: 420, speed: 0.8, size: 40, class: 'saturn', angle: 225, hasRings: true },
    { name: 'uranus', distance: 500, speed: 0.5, size: 28, class: 'uranus', angle: 270 },
    { name: 'neptune', distance: 570, speed: 0.4, size: 26, class: 'neptune', angle: 315 }
];

let isRotating = true;
let globalSpeed = 0.3;

function createOrbit(distance) {
    const orbit = document.createElement('div');
    orbit.className = 'orbit-ring';
    orbit.style.width = distance * 2 + 'px';
    orbit.style.height = distance * 2 + 'px';
    orbit.style.left = '0px';
    orbit.style.top = '0px';
    solarSystem.appendChild(orbit);
    return orbit;
}

function createPlanet(planet) {
    const container = document.createElement('div');
    container.className = 'planet-container';
    container.dataset.planet = planet.name;

    const planetEl = document.createElement('div');
    planetEl.className = `planet ${planet.class}`;
    planetEl.dataset.planet = planet.name;

    if (planet.hasRings) {
        const rings = document.createElement('div');
        rings.className = 'rings';
        planetEl.appendChild(rings);
    }

    const label = document.createElement('div');
    label.className = 'planet-label';
    label.textContent = planet.name.charAt(0).toUpperCase() + planet.name.slice(1);

    container.appendChild(planetEl);
    container.appendChild(label);
    solarSystem.appendChild(container);

    planet.element = container;
    planet.planetEl = planetEl;
    planet.currentAngle = planet.angle;
    planet.orbitSpeed = planet.speed * 0.01;

    planetEl.addEventListener('click', (e) => {
        e.stopPropagation();
        showPlanetInfo(planet.name);
    });

    return planet;
}

function showPlanetInfo(planetKey) {
    const data = planetsData[planetKey];
    if (!data) return;

    planetName.textContent = data.name;
    planetInfo.innerHTML = '';

    const items = [
        { label: 'Tipo', value: data.type },
        { label: 'Diámetro', value: data.diameter },
        { label: 'Temperatura', value: data.temperature },
        { label: 'Masa', value: data.mass },
        { label: 'Distancia del Sol', value: data.distance },
        { label: 'Periodo orbital', value: data.orbitalPeriod || 'N/A' },
        { label: 'Descripción', value: data.description },
        { label: 'Dato curioso', value: data.funFact }
    ];

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'info-item';
        div.innerHTML = `<span class="label">${item.label}:</span><span class="value">${item.value}</span>`;
        planetInfo.appendChild(div);
    });

    infoPanel.classList.add('active');
}

document.getElementById('close-panel').addEventListener('click', () => {
    infoPanel.classList.remove('active');
});

planets.forEach(createOrbit);
planets.forEach(createPlanet);

document.querySelector('.sun').addEventListener('click', () => {
    showPlanetInfo('sun');
});

speedControl.addEventListener('input', (e) => {
    globalSpeed = e.target.value / 100;
});

toggleBtn.addEventListener('click', () => {
    isRotating = !isRotating;
    toggleBtn.textContent = isRotating ? 'Pausar' : 'Reanudar';
});

resetBtn.addEventListener('click', () => {
    solarSystem.style.animation = 'none';
    setTimeout(() => {
        solarSystem.style.animation = 'rotateSystem 60s linear infinite';
    }, 10);
});

function createStars() {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 300; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            opacity: Math.random()
        });
    }

    function drawStars() {
        ctx.fillStyle = '#000010';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    drawStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStars();
    });
}

createStars();

function animate() {
    if (isRotating) {
        planets.forEach(planet => {
            planet.currentAngle += planet.orbitSpeed * globalSpeed;
            const x = Math.cos(planet.currentAngle) * planet.distance;
            const z = Math.sin(planet.currentAngle) * planet.distance;
            planet.element.style.transform = `translate3d(${x}px, 0, ${z}px)`;
        });
    }
    requestAnimationFrame(animate);
}

animate();
