<script lang="ts">
   import { fade } from 'svelte/transition';
   let sent = false;
</script>

<svelte:head>
    <title>Recuperar Contraseña | HumanHack.org</title>
</svelte:head>

<div class="auth-layout">
    <div class="auth-container" in:fade>
        
        <div class="auth-header">
            <a href="/" class="logo-text">humanhack.org</a>
            <h2>Recuperar Contraseña</h2>
            <p>Introduce tu email y te enviaremos un enlace para restablecerla.</p>
        </div>

        {#if !sent}
            <form class="auth-form" on:submit|preventDefault={() => sent = true}>
                
                <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-lg">Enviar Enlace</button>
                
                <div class="auth-footer">
                    <a href="/login">← Volver a Iniciar Sesión</a>
                </div>
            </form>
        {:else}
            <div class="auth-form success-state" in:fade>
                <div class="icon">📧</div>
                <h3>¡Correo Enviado!</h3>
                <p>Revisa tu bandeja de entrada. Hemos enviado un enlace temporal.</p>
                <a href="/login" class="btn btn-outline btn-block">Volver al Login</a>
            </div>
        {/if}

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
    
    label { display: block; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem; }

    input {
        width: 100%; padding: 1rem;
        border: 2px solid #e2e8f0; border-radius: 0.75rem;
        font-size: 1rem; font-family: inherit;
        background: #f8fafc;
    }
    input:focus { outline: none; border-color: var(--color-primary); background: white; }

    .btn-block { width: 100%; display: block; }
    .btn-lg { padding: 1rem; font-size: 1.1rem; }
    .btn-outline { margin-top: 1rem; text-align: center; border: 1px solid #e2e8f0; padding: 0.75rem; border-radius: 0.75rem; text-decoration: none; color: var(--color-text); }

    .auth-footer { text-align: center; margin-top: 1.5rem; font-size: 0.95rem; }
    .auth-footer a { color: var(--color-primary); font-weight: 700; text-decoration: none; }

    .success-state { text-align: center; }
    .success-state .icon { font-size: 3rem; margin-bottom: 1rem; }
    .success-state h3 { margin-bottom: 0.5rem; color: var(--color-primary); }
    .success-state p { color: var(--color-text-muted); margin-bottom: 1.5rem; }
</style>
