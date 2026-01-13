<script lang="ts">
   import PageHeader from '$lib/components/PageHeader.svelte';
   import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
    <title>Nosotros | HumanHack.org</title>
    <meta name="description" content="Conoce la misión de HumanHack.org: democratizar la tecnología de asistencia mediante hardware social open source, diseño industrial y software libre." />
</svelte:head>

<PageHeader 
    title="Nuestra Misión" 
    description="Humanhacks es un repositorio colaborativo de hardware social. Diseñamos soluciones propias y curamos los mejores proyectos de la comunidad global."
    breadcrumbs={[{ label: 'Nosotros', href: '/about' }]}
/>

<!-- Story Section: Realistic Image & Text -->
<section class="section story-section" in:fade>
    <div class="container grid-2">
        <div class="image-block" in:fly={{ x: -20, duration: 800 }}>
            <img src="/assets/about/workspace.png" alt="Nuestro Taller" class="img-fluid rounded shadow-lg" />
            <div class="img-caption">El taller donde nacen los prototipos.</div>
        </div>
        <div class="text-block" in:fly={{ x: 20, duration: 800 }}>
            <span class="badge">Nuestra Filosofía</span>
            <h2>Tecnología con Alma Maker</h2>
            <p>No somos una corporación, somos un grupo de entusiastas que creen que el conocimiento debe ser libre. En este rincón digital, compartimos no solo el resultado final, sino también el proceso, los errores y los aprendizajes.</p>
            <p>Cada tornillo y cada línea de código en HumanHack tiene un propósito: ser útil, ser barato y ser replicable por cualquier persona con ganas de ayudar.</p>
        </div>
    </div>
</section>

<!-- Process Section: Digital & 3D Tools -->
<section class="section bg-light" in:fade>
    <div class="container">
        <div class="section-header text-center">
            <h2>Cómo Trabajamos</h2>
            <p>Combinamos el diseño digital avanzado con la fabricación local.</p>
        </div>

        <div class="workflow-grid">
            <div class="workflow-item">
                <div class="workflow-img">
                    <img src="/assets/about/digital.png" alt="Diseño Digital" />
                </div>
                <div class="workflow-info">
                    <h3>1. Diseño & Código</h3>
                    <p>Utilizamos herramientas open source para modelar en 3D y programar el firmware. La precisión digital nos permite optimizar cada gramo de material.</p>
                </div>
            </div>

            <div class="workflow-item reverse">
                <div class="workflow-img">
                    <img src="/assets/about/prototyping.png" alt="Prototipado de Precisión" />
                </div>
                <div class="workflow-info">
                    <h3>2. Validación Física</h3>
                    <p>Nada se publica sin ser probado. Usamos calibres, multímetros y mucha paciencia para asegurar que lo que descargas realmente funciona.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values Grid -->
<section class="section">
    <div class="container">
        <div class="values-grid">
            <div class="value-card">
                <div class="icon">🎯</div>
                <h3>Curación Real</h3>
                <p>Seleccionamos proyectos de terceros con criterios reales de fabricación y coste.</p>
            </div>
            <div class="value-card">
                <div class="icon">🔍</div>
                <h3>Auditable</h3>
                <p>Nuestros archivos son transparentes. Puedes ver cómo se hicieron y proponer mejoras.</p>
            </div>
            <div class="value-card">
                <div class="icon">⚡</div>
                <h3>Accesibilidad</h3>
                <p>Priorizamos materiales que puedas encontrar en una ferretería o pedir online fácilmente.</p>
            </div>
            <div class="value-card">
                <div class="icon">🌍</div>
                <h3>Comunidad</h3>
                <p>HumanHack vive gracias a la red global de makers que imprimen y entregan estos diseños.</p>
            </div>
        </div>
    </div>
</section>

<!-- Team Section: No photos, professional roles -->
<section class="section team-section bg-dark text-white">
    <div class="container">
        <div class="section-header">
            <h2>El Equipo</h2>
            <p>Las manos detrás del repositorio.</p>
        </div>
        
        <div class="team-minimal-grid">
            <div class="team-member-minimal">
                <div class="t-icon">⚛️</div>
                <h3>Oscar</h3>
                <span class="role">Ingeniería & Hardware</span>
                <p>Encargado de que la electrónica sea robusta y los circuitos eficientes.</p>
            </div>
            <div class="team-member-minimal border-l">
                <div class="t-icon">📐</div>
                <h3>Carlos</h3>
                <span class="role">Diseño Industrial</span>
                <p>Especialista en que las piezas impresas en 3D encajen a la primera.</p>
            </div>
            <div class="team-member-minimal border-l">
                <div class="t-icon">🌐</div>
                <h3>Aldo</h3>
                <span class="role">Software & Web</span>
                <p>Responsable de esta plataforma y de la integración digital del proyecto.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .section { padding: 6rem 0; }
    .bg-light { background: #f8fafc; }
    .bg-dark { background: #0f172a; }
    .text-white { color: white; }
    .text-white h2, .text-white p { color: white; }
    .text-center { text-align: center; }

    .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    .img-fluid { max-width: 100%; height: auto; }
    .rounded { border-radius: 1.5rem; }
    .shadow-lg { box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }

    .image-block { position: relative; }
    .img-caption {
        position: absolute;
        bottom: 1.5rem;
        left: 1.5rem;
        background: rgba(255,255,255,0.9);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.85rem;
        font-weight: 600;
        backdrop-filter: blur(4px);
    }

    .badge {
        background: var(--color-primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 2rem;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 1rem;
        display: inline-block;
    }

    .text-block h2 { font-size: 3rem; margin-bottom: 1.5rem; }
    .text-block p { font-size: 1.15rem; line-height: 1.7; color: #475569; margin-bottom: 1.5rem; }

    /* Workflow */
    .section-header { margin-bottom: 4rem; }
    .section-header h2 { font-size: 2.5rem; }
    .workflow-grid { display: flex; flex-direction: column; gap: 4rem; }
    .workflow-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }
    .workflow-item.reverse { direction: rtl; }
    .workflow-item.reverse .workflow-info { direction: ltr; }
    
    .workflow-img {
        overflow: hidden;
        border-radius: 1.5rem;
        aspect-ratio: 16/10;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    }
    .workflow-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .workflow-item:hover .workflow-img img { transform: scale(1.05); }

    .workflow-info h3 { font-size: 1.75rem; margin-bottom: 1rem; color: var(--color-primary-dark); }
    .workflow-info p { font-size: 1.1rem; line-height: 1.7; color: #64748b; }

    /* Values */
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    .value-card {
        padding: 2.5rem;
        border: 1px solid #e2e8f0;
        border-radius: var(--radius-lg);
        background: white;
        transition: all 0.3s;
    }
    .value-card:hover { transform: translateY(-5px); border-color: var(--color-primary); box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .icon { font-size: 3rem; margin-bottom: 1.5rem; }
    .value-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }

    /* Team Minimal */
    .team-minimal-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1.5rem;
        overflow: hidden;
        background: rgba(255,255,255,0.02);
    }
    .team-member-minimal {
        padding: 4rem 2rem;
        text-align: center;
        transition: background 0.3s;
    }
    .team-member-minimal:hover { background: rgba(255,255,255,0.05); }
    .border-l { border-left: 1px solid rgba(255,255,255,0.1); }
    .t-icon { font-size: 2.5rem; margin-bottom: 1.5rem; opacity: 0.8; }
    .team-member-minimal h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .role { display: block; color: var(--color-primary); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.1em; margin-bottom: 1rem; }
    .team-member-minimal p { font-size: 0.95rem; color: #94a3b8; line-height: 1.6; }

    @media (max-width: 900px) {
        .grid-2, .workflow-item, .workflow-item.reverse { grid-template-columns: 1fr; gap: 2rem; direction: ltr; }
        .team-minimal-grid { grid-template-columns: 1fr; }
        .border-l { border-left: none; border-top: 1px solid rgba(255,255,255,0.1); }
        .text-block h2 { font-size: 2.5rem; }
    }
</style>
