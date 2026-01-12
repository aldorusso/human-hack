<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let step = 1;
    let amount = 50;
    let customAmount = false;

    // Impact logic
    $: impactText = calculateImpact(amount);

    function calculateImpact(val: number) {
        if (val < 15) return 'Contribuye a tornillería y cables.';
        if (val < 30) return '1 Kit de filamento PLA.';
        if (val < 80) return '1 Radio Vintage completa.';
        if (val < 150) return '2 Radios Vintage completas.';
        if (val < 300) return '1 Mano Biónica Básica.';
        return 'Impacto mayor: Financia múltiples dispositivos.';
    }

    function nextStep() {
        step = 2;
    }
</script>

<svelte:head>
    <title>Donar | HumanHack.org</title>
</svelte:head>

<PageHeader 
    title="Tu inversión en Humanidad" 
    description="Cada céntimo se destina directamente a la compra de componentes electrónicos. Nosotros ponemos la ingeniería, tú pones los materiales."
    breadcrumbs={[{ label: 'Donar', href: '/donate' }]}
/>

<div class="page-wrapper">
    <div class="container layout-grid">
        
        <!-- LEFT COLUMN: Trust & Info -->
        <div class="info-col">
            <div class="trust-cards">
                <div class="trust-item">
                    <div class="icon">📹</div>
                    <div class="text">
                        <h3>Transparencia Total</h3>
                        <p>Recibe un video de la entrega de tu equipo.</p>
                    </div>
                </div>
                <div class="trust-item">
                    <div class="icon">🔒</div>
                    <div class="text">
                        <h3>Pago Seguro</h3>
                        <p>Encriptación de nivel bancario.</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-box">
                <p class="quote">"Gracias a donantes como tú, ya hemos entregado 12 dispositivos este mes."</p>
                <div class="author">- Equipo HumanHacks</div>
            </div>
        </div>

        <!-- RIGHT COLUMN: Interactive Form -->
        <div class="form-col">
            <div class="donation-card">
                <!-- Progress Header -->
                <div class="step-header">
                    <div class="step-indicator">
                        <span class:active={step >= 1}>1</span>
                        <div class="line" class:filled={step >= 2}></div>
                        <span class:active={step >= 2}>2</span>
                    </div>
                    <h4>{step === 1 ? 'Selecciona tu impacto' : 'Información de pago'}</h4>
                </div>

                <div class="step-content">
                    {#if step === 1}
                        <div in:fade class="step-1">
                            <label class="amount-label">Elige una cantidad (€)</label>
                            <div class="amount-grid">
                                <button class="amt-btn" class:selected={amount === 15} on:click={() => amount = 15}>€15</button>
                                <button class="amt-btn" class:selected={amount === 30} on:click={() => amount = 30}>€30</button>
                                <button class="amt-btn" class:selected={amount === 50} on:click={() => amount = 50}>€50</button>
                                <button class="amt-btn" class:selected={amount === 100} on:click={() => amount = 100}>€100</button>
                            </div>

                            <div class="custom-input-wrapper">
                                <span>€</span>
                                <input type="number" bind:value={amount} min="1">
                            </div>

                            <div class="impact-display">
                                <span class="emoji">🎁</span>
                                <span class="text">Impacto estimado: <strong>{impactText}</strong></span>
                            </div>

                            <button class="btn btn-primary btn-block btn-xl mt-4" on:click={nextStep}>
                                Continuar
                            </button>
                        </div>
                    {:else}
                        <div in:fade class="step-2">
                            <form on:submit|preventDefault={() => alert('¡Gracias! Esto es una demo, no se ha cobrado nada.')}>
                                <div class="form-group">
                                    <label>Nombre y Apellidos</label>
                                    <input type="text" placeholder="Tu nombre" required>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="tucorreo@ejemplo.com" required>
                                </div>
                                
                                <div class="stripe-mock">
                                    <label>Tarjeta de Crédito</label>
                                    <div class="stripe-input">
                                        <span class="card-icon">💳</span>
                                        <input type="text" placeholder="0000 0000 0000 0000" maxlength="19">
                                        <input type="text" placeholder="MM/YY" class="small" maxlength="5">
                                        <input type="text" placeholder="CVC" class="small" maxlength="3">
                                    </div>
                                    <div class="secure-badge">
                                        🔒 Transacción segura procesada por Stripe
                                    </div>
                                </div>

                                <div class="summary-row">
                                    <span>Total a donar:</span>
                                    <span class="total-amount">€{amount}</span>
                                </div>

                                <div class="btn-row">
                                    <button type="button" class="btn btn-outline" on:click={() => step = 1}>Atrás</button>
                                    <button type="submit" class="btn btn-primary btn-grow">Completar Donación</button>
                                </div>
                            </form>
                        </div>
                    {/if}
                </div>
            </div>
        </div>

    </div>
</div>

<style>
    .page-wrapper {
        min-height: 80vh;
        background: #f8fafc;
        padding-bottom: 4rem;
    }

    .layout-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 4rem;
        align-items: start;
    }

    /* LEFT COL */
    .info-col { padding-top: 1rem; }
    .trust-item {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }
    .trust-item .icon {
        font-size: 2rem;
        width: 60px; height: 60px;
        background: white;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        color: var(--color-primary);
    }
    .trust-item h3 { margin-bottom: 0.25rem; font-size: 1.1rem; }
    .trust-item p { color: var(--color-text-muted); font-size: 0.95rem; }

    .testimonial-box {
        background: #fff7ed;
        border: 1px solid #fed7aa;
        padding: 1.5rem;
        border-radius: 1rem;
        margin-top: 2rem;
        position: relative;
    }
    .testimonial-box::before {
        content: '"';
        position: absolute;
        top: -10px; left: 20px;
        font-size: 4rem;
        color: #fdba74;
        font-family: serif;
        opacity: 0.5;
        line-height: 1;
    }
    .quote { font-style: italic; color: #9a3412; font-size: 1.1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
    .author { font-weight: 700; color: #ea580c; text-align: right; font-size: 0.9rem; }

    /* RIGHT COL - CARD */
    .donation-card {
        background: white;
        border-radius: 1.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        padding: 2.5rem;
        border: 1px solid #e2e8f0;
    }

    /* WIZARD HEADER */
    .step-header { margin-bottom: 2rem; text-align: center; }
    .step-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        gap: 0.5rem;
    }
    .step-indicator span {
        width: 30px; height: 30px;
        border-radius: 50%;
        background: #e2e8f0;
        color: #94a3b8;
        display: flex; align-items: center; justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
        transition: all 0.3s;
    }
    .step-indicator span.active {
        background: var(--color-primary);
        color: white;
    }
    .step-indicator .line {
        width: 50px; height: 2px; background: #e2e8f0;
    }
    .step-indicator .line.filled { background: var(--color-primary); }

    .step-header h4 { font-size: 1.25rem; color: var(--color-text); margin: 0; }

    /* STEP 1 UTILS */
    .amount-label { display: block; font-weight: 700; margin-bottom: 1rem; }
    .amount-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1.5rem; }
    .amt-btn {
        padding: 1rem 0.5rem;
        border: 2px solid #e2e8f0;
        background: white;
        border-radius: 0.5rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 1.1rem;
    }
    .amt-btn:hover { border-color: #cbd5e1; }
    .amt-btn.selected {
        border-color: var(--color-primary);
        background: #f0fdfa; /* Teal 50 */
        color: var(--color-primary);
    }
    
    .custom-input-wrapper {
        display: flex;
        align-items: center;
        border: 2px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
    .custom-input-wrapper input {
        border: none;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-text);
        padding-left: 0.5rem;
    }
    .custom-input-wrapper input:focus { outline: none; }

    .impact-display {
        background: #eff6ff;
        padding: 1rem;
        border-radius: 0.75rem;
        display: flex; gap: 0.75rem; align-items: start;
        border: 1px solid #dbeafe;
    }
    .impact-display strong { color: #2563eb; display: block; }
    
    .btn-block { width: 100%; display: block; }
    .btn-xl { font-size: 1.1rem; padding: 1rem; font-weight: 700; }
    .mt-4 { margin-top: 1.5rem; }

    /* STEP 2 UTILS */
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.4rem; }
    .form-group input { 
        width: 100%; padding: 0.75rem; 
        border: 1px solid #cbd5e1; 
        border-radius: 0.5rem;
        font-family: inherit;
    }

    .stripe-mock {
        margin: 1.5rem 0;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        padding: 1rem;
        border-radius: 0.75rem;
    }
    .stripe-input {
        display: flex; gap: 0.5rem;
        background: white;
        border: 1px solid #cbd5e1;
        padding: 0.5rem;
        border-radius: 0.5rem;
        align-items: center;
    }
    .stripe-input input { border: none; padding: 0.25rem; }
    .stripe-input input:focus { outline: none; }
    .small { width: 60px; text-align: center; border-left: 1px solid #e2e8f0 !important; }
    
    .secure-badge { text-align: center; font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.5rem; }

    .summary-row {
        display: flex; justify-content: space-between; align-items: center;
        margin-bottom: 1.5rem; border-top: 1px solid #e2e8f0; padding-top: 1rem;
        font-weight: 700;
    }
    .total-amount { font-size: 1.5rem; color: var(--color-primary); }

    .btn-row { display: flex; gap: 1rem; }
    .btn-grow { flex-grow: 1; }
    .btn-outline { border: 1px solid #cbd5e1; background: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; }

    @media (max-width: 900px) {
        .layout-grid { grid-template-columns: 1fr; gap: 2rem; }
        .info-col { order: 2; }
    }
</style>
