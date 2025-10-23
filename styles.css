:root{
  --bg1:#0b0b10;
  --accent1:#8ef0ff;
  --accent2:#b14dff;
  --accent3:#ff5ca8;
  --muted:rgba(255,255,255,0.66);
  --glass:rgba(255,255,255,0.03);
  --radius:14px;
  font-family:'Inter', system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background:linear-gradient(180deg,#05050a 0%,#060616 60%);
  color:#e6eef6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* Particles & overlay */
#tsparticles{position:fixed;inset:0;z-index:0}
.neon-grid{pointer-events:none;position:fixed;inset:0;background-image:linear-gradient(transparent 82%, rgba(255,255,255,0.02) 82%),linear-gradient(90deg, transparent 82%, rgba(255,255,255,0.02) 82%);mix-blend-mode:screen;opacity:0.18;z-index:1}

/* NAV */
.nav{position:fixed;z-index:60;left:0;right:0;top:18px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;gap:18px}
.brand{font-weight:800;color:var(--accent1)}
.nav-links{display:flex;gap:16px;list-style:none;margin:0;padding:0;align-items:center}
.nav-links a{color:var(--muted);text-decoration:none;font-weight:600;cursor:pointer;}
.cta{background:linear-gradient(90deg,var(--accent2),var(--accent1));border:none;color:#010112;padding:8px 12px;border-radius:10px;font-weight:700;cursor:pointer}

/* HERO */
.hero{min-height:92vh;display:grid;grid-template-columns:1fr 420px;align-items:center;padding:96px 24px 64px;gap:36px;position:relative;z-index:10}
.hero-inner{max-width:760px}
.hero-title{font-size:44px;margin:0 0 8px;color:#fff}
.name{background:linear-gradient(90deg,var(--accent1),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-subtitle{font-weight:600;color:var(--accent1);margin-bottom:14px}
.hero-desc{color:var(--muted);max-width:680px}
.btn{display:inline-block;padding:10px 16px;border-radius:10px;background:linear-gradient(90deg,var(--accent1),var(--accent3));color:#0b0710;text-decoration:none;font-weight:700;margin-right:10px;box-shadow:0 10px 30px rgba(0,0,0,0.45)}
.btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
.hero-visual{display:flex;align-items:center;justify-content:center}
.neon-orb{width:360px;height:360px;filter:blur(18px)}

/* PANELS */
.panel{padding:72px 24px;position:relative;z-index:5}
.panel.alt{background:linear-gradient(180deg, rgba(255,255,255,0.012), rgba(255,255,255,0.008));backdrop-filter: blur(6px)}
.container{max-width:1100px;margin:0 auto}
.panel-title{font-size:28px;margin:0 0 20px;color:var(--accent2)}

/* Grid & cards */
.panel-grid{display:grid;grid-template-columns:1fr 320px;gap:20px}
.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:14px;padding:20px;border:1px solid var(--glass)}
.info{list-style:none;padding:0;margin:0;color:var(--muted)}
.muted{color:var(--muted);font-size:13px}

/* Skills */
.skills-grid{display:flex;flex-wrap:wrap;gap:10px}
.skill{background:linear-gradient(90deg,var(--accent1),var(--accent2));padding:9px 12px;border-radius:999px;font-weight:700;color:#030312}

/* Projects */
.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:14px}
.project.card{padding:18px;border-radius:12px;box-shadow:0 6px 40px rgba(11,11,20,0.6);transition:transform .28s ease}

/* Project small meta */
.proj-meta{display:flex;gap:8px;align-items:center;margin-top:10px;color:var(--muted);font-size:13px}
.proj-meta span{display:inline-flex;gap:6px;align-items:center}

/* Contact */
.contact-grid{display:grid;grid-template-columns:1fr 420px;gap:22px;align-items:start}
.contact-form{display:flex;flex-direction:column;gap:12px;padding:18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid var(--glass)}
.contact-form label{display:flex;flex-direction:column;font-size:13px;color:var(--muted)}
.contact-form input, .contact-form textarea{padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.03);background:transparent;color:var(--muted);resize:vertical}

/* Footer */
.site-footer{padding:28px 24px;color:var(--muted);text-align:center}

/* Responsive */
@media (max-width:980px){
  .hero{grid-template-columns:1fr; padding:64px 18px}
  .hero-visual{display:none}
  .panel-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .nav-links{display:none}
}

/* Micro interactions */
.project.card:hover{transform:translateY(-6px)}

.experience-card {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.experience-card.show {
  opacity: 1;
  transform: translateY(0);
}
