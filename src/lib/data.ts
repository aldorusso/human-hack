export const projects = [
    {
        slug: 'imperial-signal-radio',
        title: 'Imperial Signal - Radio Vintage',
        description: 'Radio simplificada para personas con problemas de memoria. Sin menús complejos, solo música. Con estética vintage para mayor aceptación.',
        image: '/assets/vintage_radio_render.png',
        difficulty: 'Intermedio',
        category: 'Salud Mental',
        materials: ['Arduino Nano', 'Módulo FM', 'Amplificador PAM8403', 'Madera/PLA'],
        downloadUrl: '#',
        specs: {
            weight: '450g',
            printTime: '2-4h',
            cost: '€15'
        }
    },
    {
        slug: 'smart-pillbox',
        title: 'Pastillero Inteligente Wi-Fi',
        description: 'Dispositivo IoT que alerta a pacientes con Alzheimer si olvidan sus dosis. Envía notificaciones a familiares.',
        image: '/assets/smart_pillbox_render.png',
        difficulty: 'Medio',
        category: 'Tercera Edad',
        materials: ['ESP32', 'Servomotor', 'LEDs', 'PLA'],
        downloadUrl: '#',
        specs: {
            weight: '200g',
            printTime: '2-4h',
            cost: '€15'
        }
    },
    {
        slug: 'eye-comm-assistant',
        title: 'Asistente Comunicación Ocular',
        description: 'Sistema de bajo coste para personas con ELA o parálisis cerebral. Permite escribir y hablar con el movimiento de los ojos.',
        image: '/assets/eye_tracker_render.png',
        difficulty: 'Alto',
        category: 'Movilidad',
        materials: ['Webcam IR', 'Montura Impresa 3D', 'Software Open Source'],
        downloadUrl: '#',
        specs: {
            weight: '150g',
            printTime: '2-4h',
            cost: '€45'
        }
    },
    {
        slug: 'bionic-hand-v1',
        title: 'Mano Biónica V1',
        description: 'Prótesis mecánica de bajo costo accionada por el movimiento de la muñeca.',
        image: '/assets/bionic_hand_3d_render.png',
        difficulty: 'Intermedio',
        category: 'Movilidad',
        materials: ['PLA/PETG', 'Hilo de pescar', 'Bandas elásticas'],
        downloadUrl: '#',
        specs: {
            weight: '150g',
            printTime: '12h',
            cost: '€15'
        }
    }
];
