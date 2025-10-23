/* Neon tech single page script
   - tsParticles background
   - Typed.js hero subtitle
   - GSAP scroll animations
   - GitHub API fetch for projects (user: Abhin-sv)
   - Formspree submission handler (graceful client-side UX)
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1) Particles
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 50, density: { enable: true, area: 900 } },
      color: { value: ["#8ef0ff", "#b14dff", "#ff5ca8"] },
      shape: { type: "circle" },
      opacity: { value: 0.12 },
      size: { value: { min: 1, max: 4 } },
      move: { enable: true, speed: 0.9, outModes: "out" },
      links: { enable: true, distance: 140, color: "#7bd6ff", opacity: 0.06, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 80 }, push: { quantity: 3 } }
    },
    detectRetina: true
  });

  // 2) Typed.js
  const typed = new Typed('#typed', {
    strings: ["Systems Automation • Cloud • CI/CD", "Linux • Kubernetes • Terraform", "Infrastructure as Code • Monitoring"],
    typeSpeed: 45, backSpeed: 25, backDelay: 1600, loop: true
  });

  // 3) GSAP scroll animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", { y: 24, opacity: 0, duration: 1, ease: "power3.out" });
  gsap.from(".hero-subtitle", { y: 16, opacity: 0, delay: 0.2, duration: 0.9 });
  gsap.from(".hero-desc", { y: 12, opacity: 0, delay: 0.35, duration: 0.8 });

  gsap.utils.toArray('.card, .project.card').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 30, opacity: 0, duration: 0.9, ease: "power3.out"
    });
  });

  gsap.from(".skill", {
    scrollTrigger: { trigger: "#skills", start: "top 80%" },
    y: 18, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power2.out"
  });

  gsap.to(".neon-orb", { y: -14, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

  // Button micro interactions
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('mouseenter', () => gsap.to(b, { scale: 1.02, duration: 0.18 }));
    b.addEventListener('mouseleave', () => gsap.to(b, { scale: 1, duration: 0.18 }));
  });

  // 4) Fetch GitHub repos and render projects grid
  loadGithubProjects('Abhin-sv');

  // 5) Formspree UX: intercept submit to show status, but let native post happen
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      const statusEl = document.getElementById('formStatus');
      statusEl.textContent = 'Sending message…';
      setTimeout(() => {
        statusEl.textContent = 'If the page did not navigate, your message was probably sent. Check your email.';
      }, 1400);
    });
  }
}); // DOMContentLoaded end

// Smoothly scroll to contact
function scrollToContact(){
  const el = document.querySelector('#contact');
  if (el) el.scrollIntoView({behavior:'smooth'});
}

// -------------- GitHub fetcher --------------
async function loadGithubProjects(username){
  const grid = document.getElementById('projects-grid');
  if(!grid) return;
  grid.innerHTML = `<div class="loader-card">Loading projects…</div>`;

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`);
    if(!res.ok) throw new Error('GitHub API error: ' + res.status);
    const repos = await res.json();

    const filtered = repos
      .filter(r => !r.fork)
      .sort((a,b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at) - new Date(a.updated_at)))
      .slice(0,12);

    if(filtered.length === 0){
      grid.innerHTML = `<div class="project card"><h4>No public projects found</h4><p>Add some repos to GitHub or make them public to populate this section.</p></div>`;
      return;
    }

    grid.innerHTML = '';
    filtered.forEach(repo => {
      const card = document.createElement('article');
      card.className = 'project card neon-glow';
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${escapeHtml(repo.name)}</a></h3>
        <p>${escapeHtml(repo.description || 'No description')}</p>
        <div class="proj-meta">
          <span title="Language">${escapeHtml(repo.language || '—')}</span>
          <span title="Stars">⭐ ${repo.stargazers_count}</span>
          <span title="Updated">${new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      `;
      grid.appendChild(card);
    });

    gsap.from('.project.card', { y: 18, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power2.out", scrollTrigger: { trigger: '#projects', start: 'top 80%' } });
  } catch (err) {
    console.error(err);
    grid.innerHTML = `<div class="project card"><h4>Unable to load projects</h4><p class="muted">There was an error fetching repos from GitHub (rate limit or network). Try again later.</p></div>`;
  }
}

// small HTML escape to avoid XSS from repo descriptions (defensive)
function escapeHtml(str){
  return String(str).replace(/[&<>"'`=\/]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'}[s]));
}
// Animate experience cards on scroll
const expCards = document.querySelectorAll('.experience-card');
const expObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

expCards.forEach(card => expObserver.observe(card));

