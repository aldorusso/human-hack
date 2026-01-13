<script lang="ts">
   import { page } from '$app/stores';
   import { fade, fly } from 'svelte/transition';
   import { projects, authors } from '$lib/data';

   // Get project from slug (simulated data access)
   $: slug = $page.params.slug;
   $: project = projects.find(p => p.slug === slug) || projects[0];
   $: author = authors.find(a => a.id === project.authorId);

   // Mock BOM data
   const bom = [
       { item: 'Filamento PLA', qty: '200g' },
       { item: 'Arduino Nano', qty: '1' },
       { item: 'Servomotores SG90', qty: '5' },
       { item: 'Cableado AWG24', qty: '2m' },
       { item: 'Tornillería M3', qty: '1 Kit' }
   ];
</script>

<svelte:head>
    <title>{project.title} | HumanHack.org</title>
</svelte:head>

<div class="project-page" in:fade>
    
    <!-- FULL WIDTH HERO -->
    <section class="project-hero">
        <div class="hero-bg" style="background-image: url('{project.image || '/assets/hero_bg.png'}');"></div>
        <div class="hero-overlay"></div>
        
        <div class="container hero-content">
            <a href="/projects" class="back-link">← Volver al Catálogo</a>
            
            <div class="title-block" in:fly={{ y: 20, duration: 800 }}>
                <span class="category-pill">{project.category}</span>
                <h1>{project.title}</h1>
                
                <div class="stats-row">
                    <div class="stat">
                        <span class="label">Dificultad</span>
                        <span class="value">{project.difficulty}</span>
                    </div>
                    <div class="stat separator"></div>
                    <div class="stat">
                        <span class="label">Tiempo Impresión</span>
                        <span class="value">{project.specs?.printTime || 'N/A'}</span>
                    </div>
                    <div class="stat separator"></div>
                    <div class="stat">
                        <span class="label">Licencia</span>
                        <span class="value">CC BY-NC 4.0</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container content-layout">
        
        <!-- MAIN DESCRIPTION -->
        <div class="main-column">
            <div class="description-block">
                <h2>Descripción</h2>
                <p class="lead">{project.description}</p>
                <p>Este dispositivo ha sido diseñado siguiendo los estándares de ergonomía open source. Es compatible con modificaciones paramétricas y su montaje no requiere herramientas especializadas, solo un destornillador estándar y pegamento de cianoacrilato.</p>
            </div>

            <div class="bom-block">
                <h3>Lista de Materiales (BOM)</h3>
                <div class="bom-grid">
                    {#each bom as item}
                        <div class="bom-item">
                            <span class="qty">{item.qty}</span>
                            <span class="name">{item.item}</span>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- SIDEBAR ACTION (Sticky but subtle) -->
        <div class="action-column">
            <div class="download-card">
                <h3>Archivos de Fabricación</h3>
                <p>Incluye STL, esquemas y código.</p>
                
                <a href="/register" class="btn btn-primary btn-block btn-download">
                    <span class="icon">📥</span> Descargar Pack
                </a>
                
                <div class="meta-info">
                    <small>Versión 2.4 (Estable)</small>
                    <small>Actualizado: Ene 2026</small>
                </div>
            </div>

            {#if author}
                <div class="author-card">
                    <div class="author-header">
                        <img src={author.avatar} alt={author.name} class="author-img" />
                        <div class="author-meta">
                            <span class="author-label">Autor del Proyecto</span>
                            <a href="/authors/{author.id}" class="author-name">{author.name}</a>
                        </div>
                    </div>
                    <p class="author-bio-short">{author.bio}</p>
                    <div class="author-stats">
                        <div class="a-stat">
                            <span class="a-val">{author.contributions}</span>
                            <span class="a-lab">Proyectos</span>
                        </div>
                        <div class="a-stat">
                            <span class="a-val">{author.joined}</span>
                            <span class="a-lab">Miembro</span>
                        </div>
                    </div>
                    <a href="/authors/{author.id}" class="btn-outline btn-block">Ver Perfil Completo</a>
                </div>
            {/if}
        </div>

    </div>
</div>

<style>
    .project-page {
        background: white;
        min-height: 100vh;
    }

    /* HERO SECTION */
    .project-hero {
        position: relative;
        height: 60vh;
        min-height: 500px;
        display: flex;
        align-items: flex-end;
        color: white;
        margin-bottom: 4rem;
    }
    .hero-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-size: cover;
        background-position: center;
        z-index: 0;
    }
    .hero-overlay {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(15, 23, 42, 0.9) 100%);
        z-index: 1;
    }
    .hero-content {
        position: relative;
        z-index: 2;
        padding-bottom: 4rem;
        width: 100%;
    }

    .back-link {
        position: absolute;
        top: -4rem; /* Move up into the cleaner area of image */
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.2s;
        backdrop-filter: blur(4px);
        background: rgba(0,0,0,0.2);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
    }
    .back-link:hover { color: white; background: rgba(0,0,0,0.4); }

    .category-pill {
        background: var(--color-primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.85rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
        display: inline-block;
    }

    h1 {
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 2rem;
        font-weight: 800;
        text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .stats-row {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-family: inherit;
    }
    .stat { display: flex; flex-direction: column; }
    .stat .label { 
        font-size: 0.8rem; 
        text-transform: uppercase; 
        letter-spacing: 0.1em; 
        color: rgba(255,255,255,0.6); 
        margin-bottom: 0.2rem;
    }
    .stat .value {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
    }
    .separator {
        width: 1px; height: 40px; background: rgba(255,255,255,0.2);
    }

    /* CONTENT LAYOUT */
    .content-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 5rem;
        padding-bottom: 6rem;
    }

    .description-block { margin-bottom: 4rem; }
    .description-block h2 { font-size: 1.75rem; margin-bottom: 1.5rem; color: var(--color-text); border-bottom: 2px solid var(--color-primary); display: inline-block; padding-bottom: 0.5rem; }
    .description-block p { font-size: 1.1rem; line-height: 1.8; color: #475569; margin-bottom: 1.5rem; }
    .description-block .lead { font-size: 1.25rem; color: var(--color-text); font-weight: 500; }

    .bom-block h3 { font-size: 1.5rem; margin-bottom: 1.5rem; }
    .bom-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .bom-item {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #e2e8f0;
    }
    .bom-item .qty { font-weight: 700; color: var(--color-primary); background: rgba(13, 148, 136, 0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.9rem; }
    .bom-item .name { font-weight: 500; color: var(--color-text); }

    /* DOWNLOAD CARD */
    .download-card {
        background: white;
        border: 1px solid #e2e8f0;
        padding: 2rem;
        border-radius: 1rem;
        position: sticky;
        top: 2rem;
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
    }
    .download-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .download-card p { color: var(--color-text-muted); margin-bottom: 1.5rem; font-size: 0.95rem; }

    .btn-download {
        padding: 1.25rem;
        font-size: 1.1rem;
        display: flex; align-items: center; justify-content: center; gap: 0.75rem;
        transition: transform 0.2s;
    }
    .btn-download:hover { transform: translateY(-3px); }
    
    .meta-info {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #e2e8f0;
        display: flex; justify-content: space-between;
        color: #94a3b8;
    }

    /* AUTHOR CARD */
    .author-card {
        margin-top: 2rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        padding: 1.5rem;
        border-radius: 1rem;
    }
    .author-header {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
    }
    .author-img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid white;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .author-label {
        display: block;
        font-size: 0.75rem;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
    }
    .author-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-text);
        text-decoration: none;
        transition: color 0.2s;
    }
    .author-name:hover { color: var(--color-primary); }
    .author-bio-short {
        font-size: 0.9rem;
        color: #475569;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }
    .author-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid #e2e8f0;
    }
    .a-stat { display: flex; flex-direction: column; }
    .a-val { font-weight: 700; color: var(--color-text); font-size: 0.95rem; }
    .a-lab { font-size: 0.75rem; color: #94a3b8; }

    .btn-outline {
        display: block;
        text-align: center;
        padding: 0.75rem;
        border: 1px solid #cbd5e1;
        border-radius: 0.5rem;
        color: #475569;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.2s;
    }
    .btn-outline:hover {
        background: white;
        border-color: var(--color-primary);
        color: var(--color-primary);
    }

    @media (max-width: 900px) {
        .project-hero { height: 50vh; }
        h1 { font-size: 2.5rem; }
        .content-layout { grid-template-columns: 1fr; gap: 3rem; }
        .download-card { position: static; margin-top: 2rem; }
        .bom-grid { grid-template-columns: 1fr; }
    }
</style>
