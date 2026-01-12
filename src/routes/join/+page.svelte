<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let skill = 'code';
</script>

<svelte:head>
    <title>Únete a Nosotros | HumanHack.org</title>
</svelte:head>

<PageHeader 
    title="Únete a la Red de Innovación Social" 
    description="Estamos construyendo la infraestructura tecnológica para un mundo más accesible. Necesitamos tu talento para escalar este impacto."
    breadcrumbs={[{ label: 'Unirse', href: '/join' }]}
/>

<!-- ROLES / OPPORTUNITIES -->
<section class="section">
    <div class="container">
        <div class="grid-3">
            <div class="role-card" in:fly={{ y: 20, duration: 600, delay: 0 }}>
                <div class="icon-wrapper">💻</div>
                <h3>Contribuir Código</h3>
                <p>Mejora el firmware de nuestros dispositivos y el software de gestión en nuestro repositorio abierto.</p>
                <button class="btn-text" on:click={() => skill = 'code'}>Aplicar a este rol →</button>
            </div>
            <div class="role-card" in:fly={{ y: 20, duration: 600, delay: 150 }}>
                <div class="icon-wrapper">🏭</div>
                <h3>Laboratorios Locales</h3>
                <p>Conviértete en un nodo de fabricación validado para imprimir y montar los pedidos de tu ciudad.</p>
                <button class="btn-text" on:click={() => skill = 'maker'}>Aplicar a este rol →</button>
            </div>
            <div class="role-card" in:fly={{ y: 20, duration: 600, delay: 300 }}>
                <div class="icon-wrapper">📐</div>
                <h3>Validación Técnica</h3>
                <p>Ayúdanos a revisar diseños 3D y esquemas electrónicos para asegurar la máxima calidad y seguridad.</p>
                <button class="btn-text" on:click={() => skill = 'design'}>Aplicar a este rol →</button>
            </div>
        </div>
    </div>
</section>

<!-- BENEFITS -->
<section class="section bg-dark">
    <div class="container text-center">
        <h2 class="text-white">¿Por qué unirte?</h2>
        <div class="grid-2 benefits-grid">
            <div class="benefit-item">
                <div class="benefit-icon">🌍</div>
                <div class="benefit-content">
                    <h3>Comunidad Internacional</h3>
                    <p>Conecta con ingenieros, diseñadores y makers de todo el mundo apasionados por el hardware social.</p>
                </div>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">💙</div>
                <div class="benefit-content">
                    <h3>Impacto Real</h3>
                    <p>Tus horas de trabajo no se pierden en el vacío: se traducen directamente en autonomía para familias reales.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- REGISTRATION FORM -->
<section class="section">
    <div class="container form-container">
        <div class="form-wrapper">
            <div class="form-header">
                <h2>Formulario de Inscripción</h2>
                <p>Cuéntanos cómo te gustaría colaborar.</p>
            </div>
            
            <form on:submit|preventDefault={() => alert('¡Gracias por unirte! Revisa tu correo.')}>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Nombre Completo</label>
                        <input type="text" id="name" placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="area">Me gustaría colaborar en:</label>
                    <select id="area" bind:value={skill}>
                        <option value="code">Desarrollo de Software / Firmware</option>
                        <option value="maker">Fabricación e Impresión 3D</option>
                        <option value="design">Diseño Industrial / Electrónica</option>
                        <option value="communication">Difusión y Comunidad</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="bio">Breve presentación y habilidades</label>
                    <textarea id="bio" rows="4" placeholder="Ej: Tengo una Ender 3 y experiencia en Arduino..."></textarea>
                </div>

                <div class="form-group checkbox-group">
                    <input type="checkbox" id="terms" required>
                    <label for="terms">Acepto el <a href="#">Código de Conducta</a> de la comunidad.</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-lg">Enviar Inscripción</button>
            </form>
        </div>
    </div>
</section>

<style>
    .section { padding: 5rem 0; }
    .bg-dark { background: #0f172a; color: white; }
    .text-white { color: white; }
    .text-center { text-align: center; }

    .grid-3 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 4rem;
    }

    /* ROLE CARDS */
    .role-card {
        background: white;
        padding: 2.5rem;
        border-radius: 1.5rem;
        border: 1px solid #e2e8f0;
        transition: transform 0.2s, box-shadow 0.2s;
        text-align: center;
    }
    .role-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px -5px rgba(0,0,0,0.1);
        border-color: var(--color-primary);
    }
    .icon-wrapper {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        background: #f1f5f9;
        width: 80px; height: 80px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin-left: auto; margin-right: auto;
    }
    .role-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--color-text); }
    .role-card p { color: var(--color-text-muted); margin-bottom: 1.5rem; line-height: 1.6; }
    
    .btn-text {
        background: none; border: none;
        color: var(--color-primary);
        font-weight: 700;
        cursor: pointer;
        padding: 0;
        font-size: 0.95rem;
    }
    .btn-text:hover { text-decoration: underline; }

    /* BENEFITS */
    .benefits-grid { margin-top: 3rem; text-align: left; }
    .benefit-item {
        display: flex;
        gap: 1.5rem;
        background: rgba(255,255,255,0.05);
        padding: 2rem;
        border-radius: 1rem;
        border: 1px solid rgba(255,255,255,0.1);
    }
    .benefit-icon { font-size: 2.5rem; }
    .benefit-content h3 { color: white; margin-bottom: 0.5rem; }
    .benefit-content p { color: #cbd5e1; }

    /* FORM section */
    .form-container { max-width: 800px; margin: 0 auto; }
    .form-wrapper {
        background: white;
        padding: 3rem;
        border-radius: 2rem;
        box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        border: 1px solid #f1f5f9;
    }
    .form-header { text-align: center; margin-bottom: 2.5rem; }
    
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .form-group { margin-bottom: 1.5rem; }
    
    label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--color-text); }
    
    input[type="text"], input[type="email"], select, textarea {
        width: 100%;
        padding: 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 0.75rem;
        font-size: 1rem;
        transition: all 0.2s;
        font-family: inherit;
        background: #f8fafc;
    }
    input:focus, select:focus, textarea:focus {
        outline: none;
        border-color: var(--color-primary);
        background: white;
    }

    .checkbox-group { display: flex; align-items: center; gap: 0.75rem; }
    .checkbox-group input { width: auto; }
    .checkbox-group label { margin-bottom: 0; font-weight: 400; }
    .checkbox-group a { color: var(--color-primary); text-decoration: underline; }

    .btn-block { width: 100%; display: block; }
    .btn-lg { font-size: 1.1rem; padding: 1.25rem; margin-top: 1rem; }

    @media (max-width: 768px) {
        .grid-2, .grid-3 { grid-template-columns: 1fr; }
        .form-row { grid-template-columns: 1fr; }
        .benefits-grid { text-align: center; }
        .benefit-item { flex-direction: column; align-items: center; }
        .form-wrapper { padding: 1.5rem; }
    }
</style>
