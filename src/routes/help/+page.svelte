<script lang="ts">
   import { fade, fly } from 'svelte/transition';
   import PageHeader from '$lib/components/PageHeader.svelte';

   let role = 'familiar';
   let interest = 'bionic-hand';
   
   const roles = [
       { id: 'familiar', label: 'Familiar / Usuario', icon: '👨‍👩‍👧' },
       { id: 'professional', label: 'Profesional Salud', icon: '🩺' },
       { id: 'ong', label: 'ONG / Asociación', icon: '🤝' }
   ];
</script>

<svelte:head>
    <title>Solicitar Ayuda | HumanHack.org</title>
</svelte:head>

<PageHeader 
    title="Solicitar Ayuda" 
    description="Si tú o un familiar necesita una de nuestras soluciones, estamos aquí para fabricarla. Sin coste de mano de obra, solo materiales."
    breadcrumbs={[{ label: 'Ayuda', href: '/help' }]}
/>

<div class="page-wrapper">
    <!-- BACKGROUND -->
    <div class="fixed-bg"></div>

    <div class="container content-wrapper">
        
        <!-- TOP PROCESS SECTION (Centered) -->
        <div class="process-section" in:fly={{ y: -20, duration: 800 }}>
            <div class="steps-mini">
                <div class="step">
                    <div class="step-num">1</div>
                    <p>Cuéntanos tu caso</p>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-num">2</div>
                    <p>Evaluamos viabilidad</p>
                </div>
                <div class="step-line"></div>
                <div class="step">
                    <div class="step-num">3</div>
                    <p>Asignamos un Maker</p>
                </div>
            </div>
            
            <div class="trust-pill">
                <span class="icon">🛡</span>
                <span><strong>Privacidad Garantizada:</strong> Tus datos solo se comparten con el coordinador médico.</span>
            </div>
        </div>

        <!-- MAIN FORM (Centered & Wide) -->
        <div class="form-container" in:fly={{ y: 20, duration: 800, delay: 200 }}>
            <form class="premium-form" on:submit|preventDefault={() => alert('Mensaje enviado. Nos pondremos en contacto pronto.')}>
                
                <div class="form-header-center">
                    <h3>Formulario de Solicitud</h3>
                    <p>Por favor, completa los siguientes datos para que podamos entender mejor tu situación.</p>
                </div>

                <div class="form-section">
                    <label class="section-label">¿Quién eres?</label>
                    <div class="role-grid">
                        {#each roles as r}
                            <button 
                                type="button" 
                                class="role-card {role === r.id ? 'active' : ''}" 
                                on:click={() => role = r.id}
                            >
                                <div class="role-icon">{r.icon}</div>
                                <span>{r.label}</span>
                            </button>
                        {/each}
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Nombre Completo</label>
                        <input type="text" id="name" placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="tucorreo@ejemplo.com" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="device">Dispositivo de Interés</label>
                    <div class="select-wrapper">
                        <select id="device" bind:value={interest}>
                            <option value="bionic-hand">Mano Biónica (Prótesis mecánica)</option>
                            <option value="radio">Radio Vintage (Accesibilidad cognitiva)</option>
                            <option value="pillbox">Pastillero Inteligente (Gestión medicación)</option>
                            <option value="eye-tracker">Asistente Ocular (Comunicación)</option>
                            <option value="other">Otro / Asesoría Técnica</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="message">Detalles del Caso</label>
                    <textarea id="message" rows="5" placeholder="Cuéntanos brevemente la situación, necesidades específicas o dudas que tengas..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-xl glow-effect">Enviar Solicitud</button>
            </form>
        </div>
    </div>
</div>

<style>
    .page-wrapper {
        min-height: 90vh;
        position: relative;
        padding: 0 0 6rem;
        background: #f8fafc;
        overflow: hidden;
    }
    
    .fixed-bg {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: radial-gradient(circle at 10% 20%, rgba(13, 148, 136, 0.05) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(249, 115, 22, 0.05) 0%, transparent 40%);
        z-index: 0;
    }

    .content-wrapper {
        position: relative;
        z-index: 1;
        max-width: 800px; /* Centered content constraint */
        margin: 0 auto;
    }

    /* PROCESS SECTION */
    .process-section {
        text-align: center;
        margin-bottom: 3rem;
    }

    .steps-mini {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    .step { text-align: center; width: 100px; position: relative; z-index: 2; }
    .step-num {
        width: 44px; height: 44px;
        background: white;
        border: 2px solid var(--color-primary);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-weight: 700; color: var(--color-primary);
        font-size: 1.1rem;
        margin: 0 auto 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .step p { font-size: 0.85rem; line-height: 1.2; font-weight: 600; color: var(--color-text); }
    .step-line {
        flex-grow: 1;
        height: 2px;
        background: #cbd5e1;
        margin-top: -24px; /* Align with center of circles roughly */
        z-index: 1;
        position: relative;
    }

    .trust-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(4px);
        padding: 0.75rem 1.5rem;
        border-radius: 2rem;
        border: 1px solid rgba(255,255,255,0.5);
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }
    .trust-pill .icon { font-size: 1.2rem; }

    /* FORM CONTAINER */
    .premium-form {
        background: white;
        padding: 4rem;
        border-radius: 2rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(255,255,255,0.5);
    }
    .form-header-center { text-align: center; margin-bottom: 3rem; }
    .form-header-center h3 { font-size: 2rem; margin-bottom: 0.5rem; }
    .form-header-center p { color: var(--color-text-muted); font-size: 1.1rem; }

    .section-label { display: block; font-size: 0.9rem; font-weight: 700; color: var(--color-text-muted); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; text-align: center; }

    .role-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
    .role-card {
        background: #f8fafc;
        border: 2px solid transparent;
        border-radius: 1rem;
        padding: 1.5rem 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.75rem;
    }
    .role-card:hover { background: #f1f5f9; transform: translateY(-3px); }
    .role-card.active {
        background: rgba(13, 148, 136, 0.08);
        border-color: var(--color-primary);
        color: var(--color-primary-dark);
        box-shadow: 0 10px 15px -3px rgba(13, 148, 136, 0.1);
    }
    .role-icon { font-size: 2rem; }
    .role-card span { font-size: 0.95rem; font-weight: 600; line-height: 1.2; }

    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .form-group { margin-bottom: 2rem; }
    
    label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 1rem; color: var(--color-text); }
    
    input, select, textarea {
        width: 100%;
        padding: 1.25rem;
        border: 2px solid #e2e8f0;
        border-radius: 1rem;
        font-size: 1.1rem;
        background: #f8fafc;
        transition: all 0.2s;
        font-family: inherit;
    }
    input:focus, select:focus, textarea:focus {
        outline: none;
        background: white;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.1);
    }
    
    .btn-xl { font-size: 1.25rem; padding: 1.5rem; border-radius: 1rem; font-weight: 700; margin-top: 1rem; }
    .glow-effect { box-shadow: 0 4px 14px 0 rgba(13, 148, 136, 0.39); }
    .glow-effect:hover { box-shadow: 6px 20px rgba(13, 148, 136, 0.23); transform: translateY(-2px); }

    @media (max-width: 768px) {
        .premium-form { padding: 2rem; }
        .form-row { grid-template-columns: 1fr; gap: 0; }
        .role-grid { grid-template-columns: 1fr; gap: 0.75rem; }
        .role-card { flex-direction: row; padding: 1rem; justify-content: flex-start; gap: 1rem; }
        .role-icon { font-size: 1.5rem; }
        .steps-mini { max-width: 100%; }
        .step { width: auto; flex: 1; }
    }
</style>
