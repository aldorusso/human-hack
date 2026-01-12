<script lang="ts">
   export let project: any;
</script>

<div class="project-card">
    <div class="image-wrapper">
        <img src={project.image || '/assets/logo.png'} alt={project.title} loading="lazy" />
        <div class="overlay">
            <a href="/projects/{project.slug}" class="btn-view">Ver Detalles</a>
        </div>
        {#if project.category}
            <span class="badge">{project.category}</span>
        {/if}
    </div>
    <div class="content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div class="meta">
            <div class="meta-item">
                <span class="icon">💶</span>
                <span>{project.specs?.cost || 'Gratis'}</span>
            </div>
            <div class="meta-item">
                <span class="icon">⏱</span>
                <span>{project.specs?.printTime || 'N/A'}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .project-card {
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(0,0,0,0.05);
    }
    
    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .image-wrapper {
        position: relative;
        height: 220px;
        overflow: hidden;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .project-card:hover .image-wrapper img {
        transform: scale(1.05);
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(2px);
    }

    .project-card:hover .overlay {
        opacity: 1;
    }

    .btn-view {
        background: white;
        color: var(--color-text);
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
        font-weight: 700;
        transform: translateY(10px);
        transition: transform 0.3s ease;
        text-decoration: none;
    }

    .project-card:hover .btn-view {
        transform: translateY(0);
    }

    .badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.95);
        color: var(--color-primary-dark);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 700;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .content {
        padding: 1.5rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--color-text);
    }

    p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        line-height: 1.5;
        margin-bottom: 1.5rem;
        flex-grow: 1;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        border-top: 1px solid #f1f5f9;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-text-muted);
    }

    .meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
