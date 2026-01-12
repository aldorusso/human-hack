<script lang="ts">
    export let number: string;
    export let label: string;
    export let icon: string = '';
</script>

<div class="stat-card">
    {#if icon}
        <div class="icon">{icon}</div>
    {/if}
    <div class="number">{number}</div>
    <div class="label">{label}</div>
</div>

<style>
    .stat-card {
        background: white;
        padding: 2rem;
        border-radius: 1.5rem;
        text-align: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0,0,0,0.05);
        transition: transform 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .stat-card:hover {
        transform: translateY(-5px);
        border-color: var(--color-primary);
    }

    .stat-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .stat-card:hover::before {
        opacity: 1;
    }

    .number {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--color-text) 0%, var(--color-primary-dark) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.1;
        margin-bottom: 0.5rem;
    }

    .label {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text-muted);
    }
    
    .icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        opacity: 0.8;
    }
</style>
