<script lang="ts">
    import { page } from '$app/stores';
    import { authors, projects } from '$lib/data';
    import { fade, fly } from 'svelte/transition';

    $: id = $page.params.id;
    $: author = authors.find(a => a.id === id);
    $: authorProjects = projects.filter(p => p.authorId === id);
</script>

<svelte:head>
    <title>{author?.name || 'Autor'} | HumanHack.org</title>
    <meta name="description" content="Perfil de {author?.name}, {author?.role} en HumanHack.org. Conoce sus contribuciones al hardware social open source." />
</svelte:head>

{#if author}
    <div class="author-page" in:fade>
        <div class="header-band"></div>

        <div class="container main-content">
            <div class="profile-sidebar">
                <div class="profile-card">
                    <img src={author.avatar} alt={author.name} class="avatar" />
                    <h1>{author.name}</h1>
                    <p class="role">{author.role}</p>
                    <div class="location">
                        <span class="icon">📍</span> {author.location}
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="contact-section">
                        <h3>Contacto</h3>
                        {#if author.contact.email}
                            <a href="mailto:{author.contact.email}" class="contact-link">
                                <span class="icon">✉️</span> {author.contact.email}
                            </a>
                        {/if}
                        {#if author.contact.github}
                            <a href="https://github.com/{author.contact.github}" target="_blank" class="contact-link">
                                <span class="icon">🐙</span> GitHub
                            </a>
                        {/if}
                        {#if author.contact.twitter}
                            <a href="https://twitter.com/{author.contact.twitter}" target="_blank" class="contact-link">
                                <span class="icon">🐦</span> Twitter
                            </a>
                        {/if}
                    </div>

                    <div class="divider"></div>

                    <div class="license-section">
                        <h3>Licencias Habituales</h3>
                        <div class="tags">
                            {#each author.licenses as license}
                                <span class="tag">{license}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile-main">
                <section class="bio-block">
                    <h2>Sobre el Autor</h2>
                    <p>{author.bio}</p>
                    <div class="member-since">Miembro desde {author.joined}</div>
                </section>

                <section class="projects-block">
                    <h2>Aportaciones ({authorProjects.length})</h2>
                    <div class="projects-grid">
                        {#each authorProjects as project}
                            <a href="/projects/{project.slug}" class="project-card-mini">
                                <div class="img-wrapper">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div class="card-info">
                                    <span class="cat">{project.category}</span>
                                    <h4>{project.title}</h4>
                                </div>
                            </a>
                        {/each}
                    </div>
                </section>
            </div>
        </div>
    </div>
{:else}
    <div class="container not-found">
        <h1>Autor no encontrado</h1>
        <p>El perfil solicitado no existe o ha sido movido.</p>
        <a href="/projects" class="btn btn-primary">Volver al catálogo</a>
    </div>
{/if}

<style>
    .author-page {
        min-height: 100vh;
        background: #f8fafc;
        padding-bottom: 6rem;
    }

    .header-band {
        height: 200px;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    .main-content {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 3rem;
        margin-top: -100px;
    }

    /* SIDEBAR */
    .profile-card {
        background: white;
        padding: 2rem;
        border-radius: 1.5rem;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        border: 1px solid #e2e8f0;
        text-align: center;
    }

    .avatar {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        margin: 0 auto 1.5rem;
        border: 4px solid white;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        object-fit: cover;
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        color: #0f172a;
    }

    .role {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .location {
        color: #64748b;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .divider {
        height: 1px;
        background: #e2e8f0;
        margin: 1.5rem 0;
    }

    .contact-section h3, .license-section h3 {
        text-align: left;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #94a3b8;
        margin-bottom: 1rem;
    }

    .contact-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: #475569;
        text-decoration: none;
        margin-bottom: 0.75rem;
        font-size: 0.95rem;
        transition: color 0.2s;
        text-align: left;
    }
    .contact-link:hover { color: var(--color-primary); }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: flex-start;
    }
    .tag {
        background: #f1f5f9;
        color: #475569;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    /* MAIN AREA */
    .bio-block {
        background: white;
        padding: 2.5rem;
        border-radius: 1.5rem;
        border: 1px solid #e2e8f0;
        margin-bottom: 2rem;
    }

    .bio-block h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #0f172a;
    }

    .bio-block p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #475569;
        margin-bottom: 1.5rem;
    }

    .member-since {
        font-size: 0.85rem;
        color: #94a3b8;
    }

    .projects-block h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #0f172a;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    .project-card-mini {
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        border: 1px solid #e2e8f0;
        text-decoration: none;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-card-mini:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    }

    .img-wrapper {
        height: 160px;
        overflow: hidden;
    }

    .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-info {
        padding: 1.25rem;
    }

    .card-info .cat {
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--color-primary);
        letter-spacing: 0.05em;
        display: block;
        margin-bottom: 0.4rem;
    }

    .card-info h4 {
        margin: 0;
        font-size: 1.1rem;
        color: #0f172a;
    }

    /* NOT FOUND */
    .not-found {
        padding: 10rem 0;
        text-align: center;
    }

    @media (max-width: 800px) {
        .main-content {
            grid-template-columns: 1fr;
        }
        .profile-sidebar {
            margin-bottom: 2rem;
        }
    }
</style>
