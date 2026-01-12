<script lang="ts">
    import { fade } from 'svelte/transition';

    export let title: string;
    export let description: string = '';
    export let breadcrumbs: { label: string; href: string }[] = [];

    // Always prepend Home to breadcrumbs if not present
    $: allBreadcrumbs = [{ label: 'Home', href: '/' }, ...breadcrumbs];
</script>

<div class="page-header-wrapper" in:fade>
    <div class="container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="breadcrumb">
            {#each allBreadcrumbs as crumb, i}
                <div class="crumb-item">
                    {#if i > 0}
                        <span class="separator">/</span>
                    {/if}
                    {#if i === allBreadcrumbs.length - 1}
                        <span class="current" aria-current="page">{crumb.label}</span>
                    {:else}
                        <a href={crumb.href}>{crumb.label}</a>
                    {/if}
                </div>
            {/each}
        </nav>

        <!-- Content -->
        <h1>{title}</h1>
        {#if description}
            <p class="description">{description}</p>
        {/if}
    </div>
</div>

<style>
    .page-header-wrapper {
        background: var(--color-surface);
        padding: 3rem 0;
        border-bottom: 1px solid #e2e8f0;
        margin-bottom: 2rem;
    }

    .breadcrumbs {
        display: flex;
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-bottom: 1rem;
    }

    .crumb-item {
        display: flex;
        align-items: center;
    }

    .separator {
        margin: 0 0.5rem;
        color: #cbd5e1;
    }

    a {
        text-decoration: none;
        transition: color 0.2s;
    }
    
    a:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .current {
        color: var(--color-text);
        font-weight: 600;
    }

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
        color: var(--color-text);
        line-height: 1.1;
    }

    .description {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        max-width: 800px;
        line-height: 1.6;
    }
</style>
