let globalColor = '#d0d0d0'

tsParticles.load('window', {
    particles: {
        shape: {
            type: 'circle',
        },
        color: {
            value: globalColor
        },
        number: {
            value: 20,
            density: {
                enable: true,
                area: 1000,
                factor: 1000
            }
        },
        move: {
            enable: true,
            speed: 3
        },
        links: {
            enable: true,
            color: {
                value: globalColor
            }
        }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onHover: {
                enable: true,
                mode: 'repulse'
            }
        },
        modes: {
            repulse: {
                distance: 160,
                speed: 0.1
            }
        }
    },
    backgroundMode: {
        enable: true
    },
    fpsLimit: 60
});