// ============================================================
// DATA
// ============================================================
const bookPages = [
  {
    chapter: "Featured Work 01",
    title: "Project Alpha",
    desc: "A full-stack web application with user authentication, real-time database, and a responsive dashboard. Built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/YOUR_USERNAME/project-alpha",
    liveUrl: "https://your-live-site.com",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  },
  {
    chapter: "Featured Work 02",
    title: "Project Beta",
    desc: "An e-commerce platform with product listing, cart, payment integration, and admin panel. Focused on performance and UX.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/YOUR_USERNAME/project-beta",
    liveUrl: "https://your-live-site.com",
    videoUrl: ""
  },
  {
    chapter: "Featured Work 03",
    title: "Project Gamma",
    desc: "A mobile-first social app with real-time chat, notifications, and media uploads. RESTful API backend with JWT auth.",
    tags: ["React Native", "Express", "Socket.io", "AWS S3"],
    githubUrl: "https://github.com/YOUR_USERNAME/project-gamma",
    liveUrl: "",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  },
  {
    chapter: "Featured Work 04",
    title: "Project Delta",
    desc: "A data visualization dashboard pulling live API data and rendering interactive charts. Built for analytics teams.",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com/YOUR_USERNAME/project-delta",
    liveUrl: "https://your-live-site.com",
    videoUrl: ""
  }
];

const allProjects = [
  {
    name: "Project Alpha",
    category: "Full Stack",
    year: "2024",
    desc: "Full-stack app with React + Node.js + MongoDB. User auth, dashboard, REST API.",
    icon: "💻",
    github: "https://github.com/YOUR_USERNAME/project-alpha",
    live: "https://your-live-site.com",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  },
  {
    name: "Project Beta",
    category: "E-Commerce",
    year: "2024",
    desc: "E-commerce platform with cart, Stripe payments, and admin panel.",
    icon: "🛒",
    github: "https://github.com/YOUR_USERNAME/project-beta",
    live: "https://your-live-site.com",
    video: ""
  },
  {
    name: "Project Gamma",
    category: "Mobile App",
    year: "2023",
    desc: "Social app with real-time chat, media uploads, and push notifications.",
    icon: "📱",
    github: "https://github.com/YOUR_USERNAME/project-gamma",
    live: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  },
  {
    name: "Project Delta",
    category: "Data Viz",
    year: "2023",
    desc: "Interactive analytics dashboard with D3.js and live data APIs.",
    icon: "📊",
    github: "https://github.com/YOUR_USERNAME/project-delta",
    live: "https://your-live-site.com",
    video: ""
  },
  {
    name: "Project Epsilon",
    category: "Tool / CLI",
    year: "2023",
    desc: "Developer productivity CLI tool with automation scripts and config management.",
    icon: "🔧",
    github: "https://github.com/YOUR_USERNAME/project-epsilon",
    live: "",
    video: ""
  },
  {
    name: "Project Zeta",
    category: "UI / Design",
    year: "2022",
    desc: "A Figma-to-code design system with reusable components and theming.",
    icon: "🎨",
    github: "https://github.com/YOUR_USERNAME/project-zeta",
    live: "https://your-live-site.com",
    video: ""
  }
];

const CV_EMAIL = "youremail@gmail.com";

// ============================================================
// BOOK FLIP LOGIC
// ============================================================
let currentPage = 0;

function renderBookPage(idx, dir) {
  const page = bookPages[idx];
  const el = document.getElementById('bookPage');

  el.classList.remove('book-flip-enter', 'book-flip-exit');
  void el.offsetWidth;
  el.classList.add('book-flip-enter');

  el.innerHTML = `
    <div class="page-content">
      <div class="page-num">Page ${idx + 1} / ${bookPages.length}</div>
      <div class="page-chapter">${page.chapter}</div>
      <h2 class="page-title">${page.title}</h2>
      <p class="page-body">${page.desc}</p>
      <div class="page-tags">${page.tags.map(t=>`<span class="page-tag">${t}</span>`).join('')}</div>
      <div class="page-links">
        ${page.githubUrl ? `<a href="${page.githubUrl}" target="_blank" class="page-link-btn pl-github"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
        ${page.liveUrl ? `<a href="${page.liveUrl}" target="_blank" class="page-link-btn pl-live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>` : ''}
        ${page.videoUrl ? `<button class="page-link-btn pl-video" onclick="openVideo('${page.videoUrl}')"><i class="fa-solid fa-play"></i> Watch Demo</button>` : ''}
      </div>
    </div>
  `;

  document.getElementById('bookIndicator').textContent = `Page ${idx + 1} of ${bookPages.length}`;
  document.getElementById('bookPrev').disabled = idx === 0;
  document.getElementById('bookNext').disabled = idx === bookPages.length - 1;
}

function bookNav(dir) {
  currentPage = Math.max(0, Math.min(bookPages.length - 1, currentPage + dir));
  renderBookPage(currentPage, dir);
}

renderBookPage(0);

// ============================================================
// PROJECTS GRID
// ============================================================
const grid = document.getElementById('projectsGrid');
allProjects.forEach(p => {
  grid.innerHTML += `
    <div class="project-card fade-up">
      <div class="project-thumb">
        <div class="thumb-icon">${p.icon}</div>
        <div class="project-overlay"></div>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-cat">${p.category}</span>
          <span class="project-year">${p.year}</span>
        </div>
        <div class="project-name">${p.name}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-footer">
          ${p.github ? `<a href="${p.github}" target="_blank" class="p-btn p-gh"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank" class="p-btn p-live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ''}
          ${p.video ? `<button class="p-btn p-vid" onclick="openVideo('${p.video}')"><i class="fa-solid fa-play"></i> Demo</button>` : ''}
        </div>
      </div>
    </div>
  `;
});

// ============================================================
// VIDEO MODAL
// ============================================================
function openVideo(url) {
  document.getElementById('videoFrame').src = url;
  document.getElementById('videoModal').classList.add('active');
}
function closeVideoModal() {
  document.getElementById('videoFrame').src = '';
  document.getElementById('videoModal').classList.remove('active');
}
document.getElementById('videoModal').addEventListener('click', function(e) {
  if (e.target === this) closeVideoModal();
});

// ============================================================
// CV MODAL
// ============================================================
function openCvModal(e) {
  if (e) e.preventDefault();
  document.getElementById('cvModal').classList.add('active');
}
function closeCvModal() {
  document.getElementById('cvModal').classList.remove('active');
  setTimeout(() => {
    document.getElementById('cvSuccess').classList.remove('show');
    document.getElementById('cvFormWrap').style.display = 'block';
  }, 400);
}
function submitCvRequest() {
  const name = document.getElementById('cvName').value.trim();
  const email = document.getElementById('cvEmail').value.trim();
  const company = document.getElementById('cvCompany').value.trim();
  if (!name || !email) { alert('Please fill in your name and email.'); return; }

  const subject = encodeURIComponent(`CV Request from ${name}`);
  const body = encodeURIComponent(`Hello Md Swopon Ali,\n\nMy name is ${name}.\nEmail: ${email}\nCompany/Purpose: ${company}\n\nI would like to request a copy of your CV.\n\nThank you.`);
  window.location.href = `mailto:${CV_EMAIL}?subject=${subject}&body=${body}`;

  document.getElementById('cvFormWrap').style.display = 'none';
  document.getElementById('cvSuccess').classList.add('show');
}
document.getElementById('cvModal').addEventListener('click', function(e) {
  if (e.target === this) closeCvModal();
});

// ============================================================
// NAV SCROLL
// ============================================================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================================
// HAMBURGER
// ============================================================
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.transform = `scaleX(${parseInt(bar.dataset.w) / 100})`;
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => barObserver.observe(el));

// ============================================================
// FOOTER YEAR
// ============================================================
document.getElementById('yr').textContent = new Date().getFullYear();