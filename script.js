:root {
  --bg1: #0b0b10;
  --accent1: #8ef0ff;
  --accent2: #b14dff;
  --accent3: #ff5ca8;
  --muted: rgba(255, 255, 255, 0.66);
  --glass: rgba(255, 255, 255, 0.03);
  --radius: 14px;
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  margin: 0;
  background: linear-gradient(180deg, #05050a 0%, #060616 60%);
  color: #e6eef6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#tsparticles {
  position: fixed;
  inset: 0;
  z-index: 0;
}
.neon-grid {
  pointer-events: none;
  position: fixed;
  inset: 0;
  background-image: linear-gradient(transparent 82%, rgba(255, 255, 255, 0.02) 82%),
    linear-gradient(90deg, transparent 82%, rgba(255, 255, 255, 0.02) 82%);
  mix-blend-mode: screen;
  opacity: 0.18;
  z-index: 1;
}

.nav {
  position: fixed;
  z-index: 60;
  left: 0;
  right: 0;
  top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  gap: 18px;
  background: rgba(11, 11, 20, 0.6);
  backdrop-filter: blur(8px);
  border-radius: var(--radius);
}
.brand {
  font-weight: 800;
  color: var(--accent1);
  font-size: 1.2rem;
}
.nav-links {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}
.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.25s ease;
}
.nav-links a:hover {
  color: var(--accent3);
}
.cta {
  background: linear-gradient(90deg, var(--accent2), var(--accent1));
  border: none;
  color: #010112;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease;
}
.cta:hover {
  background: linear-gradient(90deg, var(--accent3), var(--accent2));
}

.hero {
  min-height: 92vh;
  display: grid;
  grid-template-columns: 1fr 420px;
  align-items: center;
  padding: 96px 24px 64px;
  gap: 36px;
  position: relative;
  z-index: 10;
}
.hero-inner {
  max-width: 760px;
}
.hero-title {
  font-size: 44px;
  margin: 0 0 8px;
  color: #fff;
}
.name {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-subtitle {
  font-weight: 600;
  color: var(--accent1);
  margin-bottom: 14px;
  font-size: 1.25rem;
}
.hero-desc {
  color: var(--muted);
  max-width: 680px;
  font-size: 1rem;
  line-height: 1.5;
}
.btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--accent1), var(--accent3));
  color: #0b0710;
  text-decoration: none;
  font-weight: 700;
  margin-right: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  transition: background 0.3s ease;
}
.btn:hover {
  background: linear-gradient(90deg, var(--accent3), var(--accent1));
}

.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
.neon-orb {
  width: 360px;
  height: 360px;
  filter: blur(18px);
  background: radial-gradient(circle at center, var(--accent1), var(--accent3));
  border-radius: 50%;
}

/* PANELS */
.panel {
  padding: 72px 24px;
  position: relative;
  z-index: 5;
}
.panel.alt {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.012), rgba(255, 255, 255, 0.008));
  backdrop-filter: blur(6px);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.panel-title {
  font-size: 28px;
  margin: 0 0 20px;
  color: var(
