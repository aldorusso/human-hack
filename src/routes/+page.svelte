<script lang="ts">
   import { fade, fly } from 'svelte/transition';
   import { projects } from '$lib/data';
   import ProjectCard from '$lib/components/ProjectCard.svelte';
   import StatCard from '$lib/components/StatCard.svelte';

   const featuredProjects = projects.slice(0, 3);
</script>

<svelte:head>
  <title>HumanHack.org | Tecnología para Todos</title>
</svelte:head>

<!-- HERO SECTION: Premium & Interactive -->
<section class="hero">
   <div class="hero-overlay"></div>
   <div class="container hero-content">
       <div class="hero-text" in:fly={{ y: 30, duration: 800, delay: 200 }}>
           <h1 class="hero-title">
               Tecnología que <br>
               <span class="gradient-text">Humaniza</span>
           </h1>
           <p class="hero-subtitle">
               Diseñamos hardware de código abierto para devolver la autonomía a quienes más lo necesitan. Sin patentes. Sin barreras.
           </p>
           <div class="hero-actions">
               <a href="/projects" class="btn btn-primary btn-xl shadow-hover">Ver Catálogo</a>
               <a href="#donate" class="btn btn-white btn-xl shadow-hover">Unirse a la Misión</a>
           </div>
       </div>
   </div>
</section>

<!-- IMPACT STATS: Clean Cards -->
<section class="section stats-section">
   <div class="container">
       <div class="section-header text-center">
           <h2>Nuestro Impacto</h2>
           <p>Resultados reales de nuestra comunidad global.</p>
       </div>
       <div class="stats-grid">
           <StatCard number="3" label="Prototipos Ofciales" icon="🚀" />
           <StatCard number="100%" label="Open Hardware" icon="🔓" />
           <StatCard number="+10" label="Makers Fundadores" icon="👩‍💻" />
           <StatCard number="Activa" label="Misión Global" icon="🌍" />
       </div>
   </div>
</section>

<!-- FEATURED PROJECTS: Using Component -->
<section class="section bg-gradient">
   <div class="container">
       <div class="section-header">
           <h2>Proyectos Destacados</h2>
           <p>Soluciones validadas y listas para fabricar.</p>
       </div>
       <div class="projects-grid">
           {#each featuredProjects as project}
               <ProjectCard {project} />
           {/each}
       </div>
       <div class="text-center mt-xl">
           <a href="/projects" class="btn btn-outline btn-lg">Explorar Todo el Catálogo</a>
       </div>
   </div>
</section>

<!-- IMPACT CYCLE: Visual Journey -->
<section class="section impact-cycle-section">
   <div class="container relative">
       <div class="section-header text-center">
           <h2>Ciclo de Impacto Directo</h2>
           <p>Transformamos tu donación en autonomía tangible.</p>
       </div>
       
       <div class="cycle-container">
           <!-- Step 1 -->
           <div class="cycle-card">
               <div class="card-icon-wrapper">
                   <div class="step-badge">1</div>
                   <div class="icon">💙</div>
               </div>
               <h3>Tú Donas</h3>
               <p>Apadrinas materiales por <strong>€15</strong>.</p>
           </div>
           
           <!-- Connector -->
           <div class="cycle-connector">
                <div class="arrow">➜</div>
           </div>

           <!-- Step 2 -->
           <div class="cycle-card">
               <div class="card-icon-wrapper">
                    <div class="step-badge">2</div>
                   <div class="icon">🔨</div>
               </div>
               <h3>Fabricamos</h3>
               <p>Voluntarios imprimen y ensamblan.</p>
           </div>

            <!-- Connector -->
            <div class="cycle-connector">
                <div class="arrow">➜</div>
            </div>

           <!-- Step 3 -->
           <div class="cycle-card">
               <div class="card-icon-wrapper">
                    <div class="step-badge">3</div>
                   <div class="icon">🎁</div>
               </div>
               <h3>Entregamos</h3>
               <p>El dispositivo llega a quien lo necesita.</p>
           </div>
       </div>

       <div class="cycle-bg-blur"></div>
   </div>
</section>

<!-- DONATION CTA: Premium Widget Style -->
<section id="donate" class="section donate-section">
   <div class="container donate-grid">
       <div class="donate-info">
           <h2>Tu ayuda tiene <br><span class="highlight">Rostro y Nombre</span></h2>
           <p class="lead">Esta semana estamos recaudando para fabricar <strong>10 Radios Vintage</strong> para un centro de mayores en Madrid.</p>
           
           <ul class="benefits-list">
               <li>✓ 100% Transparencia garantizada</li>
               <li>✓ Recibes foto de la entrega</li>
               <li>✓ Certificado de donación</li>
           </ul>
       </div>

       <div class="donate-card">
           <div class="card-header">
               <h4>Meta Semanal: Radios Vintage</h4>
               <div class="progress-badge">70%</div>
           </div>
           <div class="progress-container">
               <div class="progress-bar" style="width: 70%"></div>
           </div>
           <div class="raised-info">
               <strong>€350</strong> recaudados de €500
           </div>

           <div class="donation-options">
               <button class="donation-btn">€5</button>
               <button class="donation-btn active">€15</button>
               <button class="donation-btn">€50</button>
           </div>
           
           <button class="btn btn-primary btn-block btn-xl">Donar €15 Ahora</button>
           <p class="secure-note">🔒 Pago 100% Seguro vía Stripe/PayPal</p>
       </div>
   </div>
</section>

<!-- MANIFESTO: Big Impact -->
<section class="manifesto-section">
   <div class="manifesto-bg"></div>
   <div class="container relative text-center">
       <h2 class="manifesto-title">"La tecnología no es un lujo,<br>es un <span class="highlight-text">derecho</span>."</h2>
       <div class="divider-line"></div>
       <p class="manifesto-subtitle">Únete a la revolución del hardware social.</p>
       <a href="/about" class="btn btn-outline-white btn-lg mt-rem">Conoce nuestra Filosofía</a>
   </div>
</section>

<style>
   /* UTILS */
   .section { padding: 6rem 0; }
   .text-center { text-align: center; }
   .mt-xl { margin-top: 4rem; }
   .section-header { margin-bottom: 4rem; text-align: center;}
   .section-header h2 { font-size: 2.5rem; color: var(--color-primary-dark); margin-bottom: 0.5rem; }
   .section-header p { font-size: 1.25rem; color: var(--color-text-muted); }
   .bg-gradient { background: linear-gradient(180deg, #f8fafc 0%, var(--color-accent) 100%); }

   /* MANIFESTO REDESIGN */
   .manifesto-section {
       position: relative;
       padding: 8rem 0;
       background: #000;
       color: white;
       overflow: hidden;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   
   .manifesto-bg {
       position: absolute;
       top: 0; left: 0; width: 100%; height: 100%;
       background: url('/assets/hero_bg.png') no-repeat center center/cover;
       opacity: 0.3;
       filter: grayscale(100%) contrast(120%);
       transition: transform 10s ease;
   }
   .manifesto-section:hover .manifesto-bg {
       transform: scale(1.1);
   }

   .manifesto-title {
       font-family: 'Times New Roman', serif; /* Keeping serif for "statement" feel */
       font-style: italic;
       font-size: 3.5rem;
       font-weight: 400;
       line-height: 1.2;
       margin-bottom: 2rem;
       letter-spacing: -1px;
       position: relative;
       z-index: 2;
   }
   
   .highlight-text {
       color: var(--color-secondary);
       font-style: normal;
       font-weight: 800;
       font-family: sans-serif; /* Contrast */
       display: inline-block;
       position: relative;
   }
   .highlight-text::after {
       content: '';
       position: absolute;
       bottom: 5px; left: 0; width: 100%; height: 10px;
       background: var(--color-secondary);
       opacity: 0.3;
       z-index: -1;
   }

   .divider-line {
       height: 1px;
       width: 100px;
       background: white;
       margin: 0 auto 2rem;
       opacity: 0.5;
   }

   .manifesto-subtitle {
       font-size: 1.5rem;
       font-weight: 300;
       color: #e2e8f0;
       margin-bottom: 2rem;
       letter-spacing: 1px;
       text-transform: uppercase;
   }

   .btn-outline-white {
       border: 1px solid rgba(255,255,255,0.3);
       color: white;
       padding: 1rem 2rem;
       transition: all 0.3s;
       text-transform: uppercase;
       font-size: 0.9rem;
       letter-spacing: 2px;
   }
   .btn-outline-white:hover {
       background: white;
       color: black;
       border-color: white;
   }
   .mt-rem { margin-top: 1rem; }

   @media (max-width: 768px) {
       .manifesto-title { font-size: 2.5rem; }
   }


   /* HERO */
   .hero {
       position: relative;
       min-height: 80vh;
       display: flex;
       align-items: center;
       background: url('/assets/hero_bg.png') no-repeat center center/cover;
       overflow: hidden;
   }
   .hero-overlay {
       position: absolute;
       inset: 0;
       background: linear-gradient(90deg, rgba(15,35,84,0.95) 0%, rgba(15,35,84,0.6) 100%);
   }
   .hero-content {
       position: relative;
       z-index: 10;
       padding-top: 4rem;
   }
   .hero-title {
       font-size: 5rem;
       line-height: 1;
       color: white;
       margin-bottom: 1.5rem;
       font-weight: 800;
   }
   .gradient-text {
       background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
   }
   .hero-subtitle {
       font-size: 1.5rem;
       color: #cbd5e1;
       max-width: 600px;
       margin-bottom: 3rem;
       font-weight: 300;
   }
   .hero-actions { display: flex; gap: 1rem; }
   
   /* BUTTONS */
   .btn-xl { padding: 1rem 2.5rem; font-size: 1.1rem; }
   .btn-white { background: white; color: var(--color-text); }
   .btn-white:hover { background: #f1f5f9; }
   .shadow-hover { transition: transform 0.2s, box-shadow 0.2s; }
   .shadow-hover:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
   .btn-outline { border: 2px solid var(--color-primary); color: var(--color-primary); background: transparent; font-weight: 600; }
   .btn-outline:hover { background: var(--color-primary); color: white; }

   /* STATS GRID */
   .stats-grid { 
       display: grid; 
       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
       gap: 2rem; 
   }

   /* PROJECTS GRID */
   .projects-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
       gap: 2.5rem;
   }

   /* IMPACT CYCLE REDESIGN */
   .impact-cycle-section {
       background: #0f172a;
       color: white;
       position: relative;
       overflow: hidden;
   }
   .impact-cycle-section .section-header h2 { color: white; }
   .impact-cycle-section .section-header p { color: #94a3b8; }

   .cycle-container {
       display: flex;
       justify-content: space-between;
       align-items: center;
       position: relative;
       z-index: 2;
       gap: 1rem;
   }
   
   .cycle-card {
       background: rgba(255, 255, 255, 0.05); /* Glass effect dark */
       backdrop-filter: blur(10px);
       border: 1px solid rgba(255, 255, 255, 0.1);
       padding: 2.5rem 1.5rem;
       border-radius: 1.5rem;
       text-align: center;
       flex: 1;
       transition: transform 0.3s ease;
   }
   .cycle-card:hover {
       transform: translateY(-10px);
       background: rgba(255, 255, 255, 0.1);
       border-color: var(--color-primary);
   }

   .card-icon-wrapper {
       position: relative;
       width: 80px; height: 80px;
       margin: 0 auto 1.5rem;
       background: radial-gradient(circle at center, rgba(73, 136, 196, 0.2) 0%, transparent 70%);
       display: flex; align-items: center; justify-content: center;
   }
   .icon { font-size: 3rem; }
   .step-badge {
       position: absolute;
       top: -5px; right: -5px;
       width: 30px; height: 30px;
       background: var(--color-primary);
       color: white;
       border-radius: 50%;
       font-weight: 800;
       display: flex; align-items: center; justify-content: center;
       font-size: 0.9rem;
       box-shadow: 0 4px 6px rgba(0,0,0,0.3);
   }

   .cycle-connector {
       color: rgba(255,255,255,0.2);
       font-size: 2rem;
       animation: pulse 2s infinite;
   }
   @keyframes pulse {
       0% { opacity: 0.2; transform: translateX(0); }
       50% { opacity: 0.8; transform: translateX(5px); }
       100% { opacity: 0.2; transform: translateX(0); }
   }

   .cycle-card h3 { font-size: 1.5rem; margin-bottom: 0.5rem; color: white; }
   .cycle-card p { color: #cbd5e1; font-size: 1.1rem; }
   
   .cycle-bg-blur {
       position: absolute;
       top: 50%; left: 50%;
       transform: translate(-50%, -50%);
       width: 80%; height: 200px;
       background: radial-gradient(ellipse at center, var(--color-primary-dark) 0%, transparent 70%);
       opacity: 0.2;
       filter: blur(60px);
       z-index: 1;
       pointer-events: none;
   }

   @media (max-width: 768px) {
       .cycle-container { flex-direction: column; gap: 2rem; }
       .cycle-connector { transform: rotate(90deg); margin: 1rem 0; }
       @keyframes pulse {
           0% { opacity: 0.2; transform: rotate(90deg) translateY(0); }
           50% { opacity: 0.8; transform: rotate(90deg) translateY(5px); }
           100% { opacity: 0.2; transform: rotate(90deg) translateY(0); }
       }
   }

   /* DONATION SECTION */
   .donate-section { background: #0f172a; color: white; }
   .donate-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
   @media (max-width: 768px) { .donate-grid { grid-template-columns: 1fr; } }
   
   .donate-info h2 { font-size: 3rem; line-height: 1.1; margin-bottom: 1.5rem; }
   .highlight { color: var(--color-secondary); }
   .lead { font-size: 1.25rem; color: #94a3b8; margin-bottom: 2rem; }
   .benefits-list { list-style: none; padding: 0; }
   .benefits-list li { margin-bottom: 0.75rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem; }
   
   /* DONATE CARD */
   .donate-card {
       background: white;
       color: var(--color-text);
       padding: 2.5rem;
       border-radius: 1.5rem;
       box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
   }
   .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
   .card-header h4 { font-size: 1.1rem; font-weight: 700; margin: 0; }
   .progress-badge { background: var(--color-primary); color: white; padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 700; font-size: 0.8rem; }
   
   .progress-container { background: #f1f5f9; height: 10px; border-radius: 5px; overflow: hidden; margin-bottom: 0.5rem; }
   .progress-bar { height: 100%; background: var(--color-primary); border-radius: 5px; }
   .raised-info { font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 2rem; }
   
   .donation-options { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
   .donation-btn {
       flex: 1;
       padding: 1rem;
       border: 2px solid #e2e8f0;
       background: white;
       border-radius: 0.5rem;
       font-weight: 700;
       font-size: 1.1rem;
       cursor: pointer;
       transition: all 0.2s;
   }
   .donation-btn:hover, .donation-btn.active { border-color: var(--color-primary); color: var(--color-primary); background: var(--color-accent); }
   
   .btn-block { width: 100%; display: block; }
   .secure-note { text-align: center; font-size: 0.8rem; color: var(--color-text-muted); margin-top: 1rem; }
</style>
