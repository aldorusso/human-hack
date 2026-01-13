<script lang="ts">
    import { fade } from 'svelte/transition';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let profileType = 'maker'; // maker, health, beneficiary
</script>

<svelte:head>
    <title>Registro | HumanHack.org</title>
    <meta name="description" content="Crea tu cuenta en HumanHack para unirte a la red de makers, descargar planos y contribuir al hardware social." />
</svelte:head>

<div class="auth-layout">
    <div class="auth-container">
        
        <div class="auth-header">
            <a href="/" class="logo-text">humanhack.org</a>
            <h2>Únete a la comunidad</h2>
            <p>Para descargar planos y acceder a la documentación técnica, necesitamos saber un poco más de ti.</p>
        </div>

        <form class="auth-form" on:submit|preventDefault={() => window.location.href = '/dashboard'}>
            
            <div class="user-type-selector">
                <button type="button" class:active={profileType === 'maker'} on:click={() => profileType = 'maker'}>
                    <span class="icon">🛠</span>
                    <span>Maker / Ingeniero</span>
                </button>
                <button type="button" class:active={profileType === 'health'} on:click={() => profileType = 'health'}>
                    <span class="icon">🩺</span>
                    <span>Profesional Salud</span>
                </button>
                <button type="button" class:active={profileType === 'beneficiary'} on:click={() => profileType = 'beneficiary'}>
                    <span class="icon">🧡</span>
                    <span>Usuario / Familiar</span>
                </button>
            </div>

            <div class="form-group">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Ej: Ana García" required>
            </div>

            <div class="form-group">
                <label>Correo Electrónico</label>
                <input type="email" placeholder="ana@ejemplo.com" required>
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" placeholder="••••••••" required>
            </div>

            <div class="terms">
                <input type="checkbox" id="terms" required>
                <label for="terms">Acepto la <a href="#">Política de Privacidad</a> y uso de datos Open Source.</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg">Crear Cuenta y Descargar</button>
            
            <div class="auth-footer">
                ¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a>
            </div>
        </form>

    </div>
</div>

<style>
    .auth-layout {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f5f9;
        padding: 2rem;
    }

    .auth-container {
        width: 100%;
        max-width: 550px;
    }

    .auth-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    .logo-text {
        font-size: 1.5rem; font-weight: 800; color: var(--color-primary); text-decoration: none;
        display: block; margin-bottom: 1rem;
    }
    .auth-header h2 { font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-text); }
    .auth-header p { color: var(--color-text-muted); font-size: 1.1rem; }

    .auth-form {
        background: white;
        padding: 2.5rem;
        border-radius: 2rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    }

    /* USER TYPE SELECTOR */
    .user-type-selector {
        display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;
        margin-bottom: 2rem;
    }
    .user-type-selector button {
        background: #f8fafc;
        border: 2px solid transparent;
        border-radius: 1rem;
        padding: 1rem 0.5rem;
        cursor: pointer;
        display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
        transition: all 0.2s;
    }
    .user-type-selector button:hover { background: #f1f5f9; }
    .user-type-selector button.active {
        background: #f0fdfa; border-color: var(--color-primary); color: var(--color-primary);
    }
    .user-type-selector .icon { font-size: 1.5rem; }
    .user-type-selector span { font-size: 0.8rem; font-weight: 700; line-height: 1.2; }

    .form-group { margin-bottom: 1.5rem; }
    .form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.95rem; }
    .form-group input {
        width: 100%; padding: 1rem;
        border: 2px solid #e2e8f0; border-radius: 0.75rem;
        font-size: 1rem; font-family: inherit;
        background: #f8fafc;
    }
    .form-group input:focus { outline: none; border-color: var(--color-primary); background: white; }

    .terms { display: flex; align-items: start; gap: 0.75rem; margin-bottom: 2rem; font-size: 0.9rem; color: var(--color-text-muted); }
    .terms input { width: auto; margin-top: 0.2rem; }
    .terms a { color: var(--color-primary); text-decoration: underline; }

    .btn-block { width: 100%; display: block; }
    .btn-lg { padding: 1rem; font-size: 1.1rem; }

    .auth-footer { text-align: center; margin-top: 1.5rem; font-size: 0.95rem; }
    .auth-footer a { color: var(--color-primary); font-weight: 700; }
</style>
