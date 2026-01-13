<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<svelte:head>
    <title>Iniciar Sesión | HumanHack.org</title>
</svelte:head>

<div class="auth-layout">
    <div class="auth-container" in:fade>
        
        <div class="auth-header">
            <a href="/" class="logo-text">humanhack.org</a>
            <h2>Bienvenido de nuevo</h2>
            <p>Accede a tu panel de Maker o gestiona tus solicitudes.</p>
        </div>

        <form class="auth-form" on:submit|preventDefault={() => window.location.href = '/dashboard'}>
            
            <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
            </div>

            <div class="form-group">
                <div class="label-row">
                    <label for="password">Contraseña</label>
                    <a href="/forgot-password" class="forgot-link">¿Olvidaste tu contraseña?</a>
                </div>
                <input type="password" id="password" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg">Iniciar Sesión</button>
            
            <div class="auth-footer">
                ¿No tienes cuenta aún? <a href="/register">Regístrate aquí</a>
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
        max-width: 480px;
    }

    .auth-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    .logo-text {
        font-size: 1.5rem; font-weight: 800; color: var(--color-primary); text-decoration: none;
        display: block; margin-bottom: 1rem;
    }
    .auth-header h2 { font-size: 1.75rem; margin-bottom: 0.5rem; color: var(--color-text); }
    .auth-header p { color: var(--color-text-muted); font-size: 1rem; }

    .auth-form {
        background: white;
        padding: 2.5rem;
        border-radius: 2rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    }

    .form-group { margin-bottom: 1.5rem; }
    .label-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; }
    
    label { display: block; font-weight: 600; font-size: 0.95rem; }
    .forgot-link { font-size: 0.85rem; color: var(--color-primary); text-decoration: none; }
    .forgot-link:hover { text-decoration: underline; }

    input {
        width: 100%; padding: 1rem;
        border: 2px solid #e2e8f0; border-radius: 0.75rem;
        font-size: 1rem; font-family: inherit;
        background: #f8fafc;
    }
    input:focus { outline: none; border-color: var(--color-primary); background: white; }

    .btn-block { width: 100%; display: block; }
    .btn-lg { padding: 1rem; font-size: 1.1rem; }

    .auth-footer { text-align: center; margin-top: 1.5rem; font-size: 0.95rem; }
    .auth-footer a { color: var(--color-primary); font-weight: 700; }
</style>
