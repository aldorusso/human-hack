<script lang="ts">
   import { fade, fly } from 'svelte/transition';
   import PageHeader from '$lib/components/PageHeader.svelte';
   import { projects } from '$lib/data';

   let searchQuery = '';
   let selectedCategory = 'Todos';
   let selectedDifficulty = 'Todas';

   const categories = ['Todos', 'Tercera Edad', 'Movilidad', 'Salud Mental', 'Visual'];
   const difficulties = ['Todas', 'Bajo', 'Medio', 'Alto', 'Intermedio'];

   $: filteredProjects = projects.filter(project => {
       const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             (project.category && project.category.toLowerCase().includes(searchQuery.toLowerCase()));
       
       const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
       const matchesDifficulty = selectedDifficulty === 'Todas' || project.difficulty === selectedDifficulty;

       return matchesSearch && matchesCategory && matchesDifficulty;
   });
</script>

<svelte:head>
    <title>Catálogo de Proyectos | HumanHack.org</title>
</svelte:head>

<PageHeader 
    title="Catálogo de Proyectos" 
    description="Descarga archivos Open Source listos para imprimir."
    breadcrumbs={[{ label: 'Proyectos', href: '/projects' }]}
/>

<div class="container controls-section">
    <!-- Search Bar -->
    <div class="search-wrapper">
        <div class="search-icon">🔍</div>
        <input 
            type="text" 
            placeholder="Buscar proyectos por nombre, categoría o componente..." 
            bind:value={searchQuery}
            class="search-input"
        />
    </div>

    <!-- Category Filter -->
    <div class="filter-row">
        <span class="filter-label">FILTRAR POR:</span>
        <div class="chips-container">
            {#each categories as category}
                <button 
                    class="chip {selectedCategory === category ? 'active' : ''}"
                    on:click={() => selectedCategory = category}
                >
                    {category}
                </button>
            {/each}
        </div>
    </div>

    <!-- Difficulty Filter -->
    <div class="filter-row difficulty-row">
        <span class="filter-label">Dificultad:</span>
        <div class="segmented-control">
            {#each difficulties as diff}
                <button 
                    class="segment {selectedDifficulty === diff ? 'active' : ''}"
                    on:click={() => selectedDifficulty = diff}
                >
                    {diff}
                </button>
            {/each}
        </div>
    </div>
</div>

<div class="container grid">
    {#if filteredProjects.length > 0}
        {#each filteredProjects as project (project.slug)}
        <div class="project-card" in:fly={{ y: 20, duration: 300 }}>
            <div class="image-wrapper">
                {#if project.image}
                    <img src={project.image} alt={project.title} />
                {:else}
                    <div class="image-placeholder">🦾</div>
                {/if}
                {#if project.category}
                    <span class="category-tag">{project.category}</span>
                {/if}
            </div>
            <div class="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div class="meta">
                    <span class="tag difficulty">{project.difficulty}</span>
                    <span class="tag spec">{project.specs?.printTime || 'N/A'}</span>
                </div>
                <a href="/projects/{project.slug}" class="btn btn-primary full-width">Ver Detalles</a>
            </div>
        </div>
        {/each}
    {:else}
        <div class="no-results">
            <p>No encontramos proyectos con esos filtros.</p>
            <button class="btn btn-outline" on:click={() => {
                searchQuery = '';
                selectedCategory = 'Todos';
                selectedDifficulty = 'Todas';
            }}>Limpiar Filtros</button>
        </div>
    {/if}
</div>

<style>
    /* Controls Styling */
    .controls-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: var(--radius-lg);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
    }

    .search-wrapper {
        position: relative;
        margin-bottom: 2rem;
    }
    .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--color-text-muted);
        font-size: 1.2rem;
        pointer-events: none;
    }
    .search-input {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem;
        border: 1px solid #cbd5e1;
        border-radius: var(--radius-md);
        font-size: 1rem;
        font-family: inherit;
        transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-input:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
    }

    .filter-row {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    .difficulty-row {
        margin-bottom: 0;
    }
    
    .filter-label {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--color-text);
        text-transform: uppercase;
        min-width: 100px;
    }
    .filter-label::before {
        content: 'Y';
        display: inline-block;
        margin-right: 0.5rem;
        transform: rotate(180deg); /* Trying to mimic filter icon roughly */
        font-family: monospace;
        font-size: 1.1rem;
    }
    .difficulty-row .filter-label::before {
        content: none;
    }

    /* Chips */
    .chips-container {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
    }
    .chip {
        background: white;
        border: 1px solid #e2e8f0;
        padding: 0.5rem 1.25rem;
        border-radius: 2rem;
        font-size: 0.9rem;
        color: var(--color-text-muted);
        cursor: pointer;
        transition: all 0.2s;
        font-weight: 500;
    }
    .chip:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
    }
    .chip.active {
        background: var(--color-text);
        color: white;
        border-color: var(--color-text);
    }

    /* Segmented Control */
    .segmented-control {
        display: flex;
        border: 1px solid #e2e8f0;
        border-radius: var(--radius-md);
        overflow: hidden;
    }
    .segment {
        background: white;
        border: none;
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
        cursor: pointer;
        border-right: 1px solid #e2e8f0;
        color: var(--color-text-muted);
        transition: background 0.2s;
    }
    .segment:last-child {
        border-right: none;
    }
    .segment:hover {
        background: #f8fafc;
    }
    .segment.active {
        background: var(--color-text);
        color: white;
    }

    /* Grid & Cards (Reused) */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding-bottom: 6rem;
    }
    .project-card {
        border: 1px solid #e2e8f0;
        border-radius: 1rem;
        overflow: hidden;
        background: white;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
    }
    .image-wrapper {
        height: 200px;
        background: #f1f5f9;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .category-tag {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        background: rgba(255,255,255,0.9);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--color-text);
    }
    .image-placeholder {
        font-size: 4rem;
    }
    .content {
        padding: 1.5rem;
    }
    .content h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .content p { font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    
    .meta {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    .tag {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    .tag.difficulty { background: #eff6ff; color: var(--color-primary); }
    .tag.spec { background: #f1f5f9; color: var(--color-text-muted); }
    
    .full-width {
        width: 100%;
        text-align: center;
    }

    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem;
        color: var(--color-text-muted);
    }
    .btn-outline {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid #cbd5e1;
        background: white;
        border-radius: var(--radius-md);
        cursor: pointer;
    }
</style>
