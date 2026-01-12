<script lang="ts">
   import '../app.css';
   let { children } = $props();
</script>

<div class="app">
    <header class="header">
        <div class="container header-content">
            <a href="/" class="logo">
                <img src="/assets/logo.png" alt="HumanHack.org Logo" class="logo-img" />
            </a>
            <nav class="nav">
                <a href="/projects">Proyectos</a>
                <a href="/help">Ayuda</a>
                <a href="/about">Nosotros</a>
                <a href="/join" class="btn btn-outline-nav">Unirse</a>
                <a href="/donate" class="btn btn-primary btn-sm">Donar</a>
            </nav>
        </div>
    </header>

    <main>
        {@render children()}
    </main>

    <footer class="footer">
        <div class="container footer-content">
            <div class="col">
                <div class="logo-text-footer">humanhack.org</div>
                <p>Democratizando la tecnología de asistencia a través del hardware libre y el conocimiento compartido.</p>
            </div>
            <div class="col">
                <h4>Plataforma</h4>
                <a href="#">Repositorio</a>
                <a href="#">Documentación</a>
                <a href="/about">Nosotros</a>
                <a href="/help">Solicitar Ayuda</a>
            </div>
            <div class="col">
                <h4>Comunidad</h4>
                <a href="/join">Unirse como Maker</a>
                <a href="/help">Solicitar Ayuda</a>
                <a href="/join">Ciclo de Impacto</a>
            </div>
             <div class="col">
                <h4>Apoya el Proyecto</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: #94a3b8;">Tu donación se convierte en hardware real.</p>
                <div class="social-proof-mini">💙 12 dispositivos entregados</div>
            </div>
        </div>
        <div class="container copyright">
            <div>&copy; {new Date().getFullYear()} humanhack.org - Tecnología para la Humanidad.</div>
            <div class="legal">
                <a href="#">Privacidad</a>
                <a href="#">Términos</a>
                <a href="#">Cookies</a>
            </div>
        </div>
    </footer>
</div>

<style>
    .header {
        background: var(--color-surface);
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        position: sticky;
        top: 0;
        z-index: 10;
        padding: var(--spacing-sm) 0;
    }
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
    }
    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    .logo-img {
        height: 60px; /* Adjust based on logo aspect ratio */
        width: auto;
        object-fit: contain;
    }
    .nav {
        display: flex;
        gap: var(--spacing-md);
        align-items: center;
    }
    .nav a {
        font-weight: 500;
    }
    .nav a:hover {
        color: var(--color-primary);
    }
    .btn-sm {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
    
    main {
        min-height: 80vh;
    }

    .footer {
        background: var(--color-text);
        color: white;
        padding: var(--spacing-xl) 0 var(--spacing-lg);
        margin-top: 0;
    }
    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-lg);
    }
    .logo-text-footer {
        font-weight: 800;
        font-size: 1.25rem;
        color: white;
        margin-bottom: 0.5rem;
    }
    .footer h4 {
        color: var(--color-secondary);
        font-size: 1.1rem;
        margin-bottom: var(--spacing-sm);
    }
    .footer a {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--color-text-muted);
    }
    .footer a:hover {
        color: white;
    }
    .social-proof-mini {
        background: rgba(255,255,255,0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        display: inline-block;
    }
    .copyright {
        margin-top: var(--spacing-lg);
        padding-top: var(--spacing-md);
        border-top: 1px solid #334155;
        text-align: center;
        color: var(--color-text-muted);
        font-size: 0.9rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .legal a {
        display: inline-block;
        margin-left: 1rem;
    }
    .btn-outline-nav {
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        padding: 0.4rem 1rem;
        border-radius: var(--radius-md);
        font-size: 0.9rem;
        transition: all 0.2s;
    }
    .btn-outline-nav:hover {
        background: var(--color-primary);
        color: white;
    }
</style>
