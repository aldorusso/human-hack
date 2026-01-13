<script lang="ts">
   import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
    <title>Nosotros | HumanHack.org</title>
</svelte:head>

<PageHeader 
    title="Nuestra Misión" 
    description="Humanhacks es un repositorio colaborativo de hardware social. Diseñamos soluciones propias y curamos los mejores proyectos open source de la comunidad global, dando crédito y visibilidad a sus creadores."
    breadcrumbs={[{ label: 'Nosotros', href: '/about' }]}
/>

<!-- Values Grid -->
<section class="section">
    <div class="container">
        <div class="values-grid">
            <div class="value-card">
                <div class="icon">🎯</div>
                <h3>Curación de Calidad</h3>
                <p>Seleccionamos y validamos proyectos de terceros para asegurar su utilidad y seguridad antes de compartirlos.</p>
            </div>
            <div class="value-card">
                <div class="icon">🔍</div>
                <h3>Transparencia</h3>
                <p>Todo nuestro código y diseños son abiertos, auditables y gratuitos.</p>
            </div>
            <div class="value-card">
                <div class="icon">⚡</div>
                <h3>Eficiencia</h3>
                <p>Buscamos el mínimo coste posible sin sacrificar la fiabilidad técnica.</p>
            </div>
            <div class="value-card">
                <div class="icon">🌍</div>
                <h3>Global</h3>
                <p>Nuestra biblioteca es universal, pensada para ser replicada en cualquier lugar del mundo.</p>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section class="section team-section">
    <div class="container">
        <h2>El Equipo</h2>
        <p class="section-subtitle">Impulsado por ingenieros y makers comprometidos.</p>
        
        <div class="team-grid">
            <div class="team-member">
                <div class="avatar">O</div>
                <h3>Oscar</h3>
                <span class="role">Ingeniería & Hardware</span>
                <p>Especialista en sistemas embebidos y diseño de circuitos de bajo coste.</p>
            </div>
            <div class="team-member">
                <div class="avatar">C</div>
                <h3>Carlos</h3>
                <span class="role">Diseño Industrial</span>
                <p>Experto en fabricación aditiva y ergonomía aplicada a la asistencia.</p>
            </div>
            <div class="team-member">
                <div class="avatar">A</div>
                <h3>Aldo</h3>
                <span class="role">Desarrollo de Software</span>
                <p>Arquitecto de sistemas y defensor de la democratización tecnológica.</p>
            </div>
        </div>
    </div>
</section>

<!-- Development Context -->
<section class="section bg-light">
    <div class="container context-content">
        <div class="text-block">
            <h2>Desarrollo del Proyecto</h2>
            <p>El desarrollo de Humanhacks se basa en la colaboración abierta. No solo creamos, sino que buscamos activamente soluciones brillantes desarrolladas por makers de todo el mundo. Nuestra plataforma actúa como un altavoz y un filtro de calidad.</p>
            <p>Cada prototipo subido, sea propio o de un tercero, pasa por un proceso de revisión técnica riguroso. Nos aseguramos de respetar escrupulosamente las licencias open source, garantizando que cada autor reciba el reconocimiento que merece por su aportación a la humanidad.</p>
            
            <div class="mission-highlight">
                <strong>Misión:</strong> Construir el repositorio de hardware social más fiable y útil del mundo.
            </div>
        </div>
    </div>
</section>

<style>
    .section { padding: 5rem 0; }
    .bg-light { background: #f8fafc; }

    /* Values */
    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
    }
    .value-card {
        padding: 2rem;
        border: 1px solid #e2e8f0;
        border-radius: var(--radius-lg);
        background: white;
        transition: transform 0.2s;
    }
    .value-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }
    .icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .value-card h3 { color: var(--color-primary); margin-bottom: 0.5rem; }

    /* Team */
    .team-section { text-align: center; }
    .section-subtitle { margin-bottom: 3rem; color: var(--color-text-muted); font-size: 1.2rem; }
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
    }
    .team-member {
        background: white;
        padding: 2rem;
        border-radius: var(--radius-lg);
    }
    .avatar {
        width: 100px;
        height: 100px;
        background: var(--color-secondary);
        color: white;
        font-size: 3rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 auto 1.5rem;
    }
    .role {
        display: block;
        color: var(--color-primary);
        font-weight: 700;
        margin: 0.5rem 0 1rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
    }

    /* Context */
    .context-content { max-width: 800px; margin: 0 auto; }
    .text-block p { font-size: 1.1rem; margin-bottom: 1.5rem; line-height: 1.8; color: var(--color-text); }
    .mission-highlight {
        margin-top: 3rem;
        padding: 2rem;
        background: white;
        border-left: 5px solid var(--color-secondary);
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--color-text);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
</style>
