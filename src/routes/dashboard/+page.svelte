<script lang="ts">
    import { fade } from 'svelte/transition';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
    <title>Mi Panel | HumanHack.org</title>
</svelte:head>

<!-- Simplified Header for Auth Area -->
<header class="dashboard-header">
    <div class="container d-flex">
        <a href="/" class="logo font-bold text-xl">humanhack.org <span class="badge">Backoffice</span></a>
        <div class="user-menu">
            <span>Hola, <strong>Ana (Maker)</strong></span>
            <div class="avatar">AG</div>
        </div>
    </div>
</header>

<div class="dashboard-layout container">
    
    <!-- Sidebar -->
    <aside class="sidebar">
        <nav>
            <a href="/dashboard" class="active">📥 Mis Descargas</a>
            <a href="#">📂 Mis Proyectos</a>
            <a href="#">💬 Mensajes</a>
            <a href="#">📜 Certificados</a>
            <div class="sep"></div>
            <a href="/" class="logout">Cerrar Sesión</a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content" in:fade>
        <div class="welcome-banner">
            <h2>¡Bienvenida a la colmena, Ana! 🐝</h2>
            <p>Gracias por unirte a nuestra red de Makers. Aquí tienes acceso a los archivos protegidos.</p>
        </div>

        <div class="section-title">Archivos Recientes</div>
        
        <div class="downloads-list">
            <div class="download-item">
                <div class="file-icon">📦</div>
                <div class="file-info">
                    <h4>Mano Biónica - Modelo V2.4 (STL)</h4>
                    <p>Actualizado: 12 Ene 2026 • 24.5 MB</p>
                </div>
                <button class="btn btn-primary btn-sm">Descargar Pack</button>
            </div>

            <div class="download-item">
                <div class="file-icon">📄</div>
                <div class="file-info">
                    <h4>Guía de Ensamblaje (PDF)</h4>
                    <p>Español • v2.0</p>
                </div>
                <button class="btn btn-outline btn-sm">Ver PDF</button>
            </div>
             <div class="download-item">
                <div class="file-icon">💻</div>
                <div class="file-info">
                    <h4>Firmware Arduino (INO)</h4>
                    <p>Github Repository Link</p>
                </div>
                <button class="btn btn-outline btn-sm">Ir a Repo</button>
            </div>
        </div>
    </main>

</div>

<style>
    .dashboard-header {
        background: white; border-bottom: 1px solid #e2e8f0; padding: 1rem 0;
        margin-bottom: 2rem;
    }
    .d-flex { display: flex; justify-content: space-between; align-items: center; }
    
    .logo { color: var(--color-text); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; }
    .badge { background: #f1f5f9; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-muted); }
    
    .user-menu { display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; }
    .avatar { width: 40px; height: 40px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }

    .dashboard-layout {
        display: grid; grid-template-columns: 250px 1fr; gap: 3rem;
        min-height: 80vh;
    }

    /* SIDEBAR */
    .sidebar nav { display: flex; flex-direction: column; gap: 0.5rem; }
    .sidebar a {
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        color: var(--color-text-muted);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s;
    }
    .sidebar a:hover { background: #f8fafc; color: var(--color-text); }
    .sidebar a.active { background: #f0fdfa; color: var(--color-primary); font-weight: 700; }
    
    .sep { height: 1px; background: #e2e8f0; margin: 1rem 0; }
    .logout { color: #ef4444 !important; }
    .logout:hover { background: #fef2f2 !important; }

    /* CONTENT */
    .welcome-banner {
        background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
        color: white;
        padding: 2rem;
        border-radius: 1.5rem;
        margin-bottom: 2.5rem;
        box-shadow: 0 10px 25px -5px rgba(13, 148, 136, 0.4);
    }
    .welcome-banner h2 { font-size: 1.75rem; margin-bottom: 0.5rem; color: white; }
    .welcome-banner p { color: #ccfbf1; font-size: 1.1rem; }

    .section-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; }

    .downloads-list { display: flex; flex-direction: column; gap: 1rem; }
    .download-item {
        background: white; border: 1px solid #e2e8f0;
        padding: 1.5rem; border-radius: 1rem;
        display: flex; align-items: center; gap: 1.5rem;
        transition: transform 0.2s;
    }
    .download-item:hover { transform: translateX(5px); border-color: var(--color-primary); }
    
    .file-icon { font-size: 2rem; background: #f8fafc; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 0.75rem; }
    .file-info { flex-grow: 1; }
    .file-info h4 { font-size: 1.1rem; margin-bottom: 0.25rem; font-weight: 600; }
    .file-info p { color: var(--color-text-muted); font-size: 0.85rem; }

    @media (max-width: 900px) {
        .dashboard-layout { grid-template-columns: 1fr; }
        .sidebar { display: none; /* Mobile nav would go here */ }
    }
</style>
