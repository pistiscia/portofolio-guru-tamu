/**
 * PORTOFOLIO SEA BLUE - AGAFIEL PISTISCIA TORRES
 * Siswa Rekayasa Perangkat Lunak (RPL) SMK Telkom Lampung
 * File: script.js (Vanilla Modern JavaScript)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ===================================================================
     1. DATA PROYEK AUTENTIK (SISWA RPL SMK TELKOM LAMPUNG)
     =================================================================== */
  const projectDatabase = {
    'portal-telkom': {
      title: 'Telkom Smart School Portal',
      category: 'Sistem Sekolah & Kejuruan',
      badge: '🏫 SMK Telkom Lampung',
      date: '2024 &bull; Semester 3-4',
      description: 'Sistem portal web terpadu yang dirancang khusus untuk memfasilitasi kebutuhan informasi akademik siswa dan guru jurusan Rekayasa Perangkat Lunak di SMK Telkom Lampung. Proyek ini memusatkan pengumuman resmi kejuruan, jadwal praktikum laboratorium, bank modul pemrograman, dan jadwal program Guru Tamu industri.',
      features: [
        'Dashboard responsif dengan widget kalender akademik dan agenda harian sekolah.',
        'Katalog materi pembelajaran kejuruan RPL (HTML, CSS, JavaScript, PHP, Database).',
        'Sistem autentikasi peran (Admin, Guru Pembimbing, dan Siswa RPL).',
        'Notifikasi jadwal kedatangan Guru Tamu industri untuk sesi workshop interaktif.'
      ],
      tags: ['HTML5 Semantik', 'CSS3 Grid', 'Vanilla JavaScript', 'PHP Backend', 'MySQL Database'],
      status: 'Selesai &bull; Versi 1.2',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    },
    'e-canteen': {
      title: 'Kantin Digital RPL (E-Canteen)',
      category: 'Aplikasi Web & Kasir',
      badge: '🍱 Kantin Telkom Schools',
      date: '2024 &bull; Project Based Learning',
      description: 'Aplikasi kasir dan pre-order menu makanan kantin sekolah modern berbasis web. Dibuat untuk mengatasi antrean panjang siswa SMK Telkom Lampung selama jam istirahat sekolah yang singkat, memungkinkan pemesanan cepat serta kalkulasi otomatis pembayaran.',
      features: [
        'Katalog menu makanan & minuman kantin sekolah dengan filter kategori dinamis.',
        'Keranjang belanja real-time menggunakan penyimpanan LocalStorage browser.',
        'Kalkulasi otomatis total bayar, diskon hari Jumat, dan cetak struk pesanan digital.',
        'Antarmuka kasir cepat untuk konfirmasi pesanan siswa.'
      ],
      tags: ['JavaScript ES6', 'LocalStorage API', 'CSS Flexbox', 'Modal UI', 'Event Handling'],
      status: 'Selesai &bull; Siap Pakai di Kantin',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    },
    'perpus-link': {
      title: 'PerpusLink - E-Library Digital RPL',
      category: 'Sistem Informasi Sekolah',
      badge: '📚 Perpustakaan Kejuruan',
      date: '2024 &bull; Proyek Kolaborasi RPL',
      description: 'Platform perpustakaan digital kejuruan yang mengelola koleksi buku teks teknologi, e-book pemrograman, dan modul praktikum laboratorium RPL SMK Telkom Lampung. Memudahkan siswa mencari ketersediaan buku fisik di rak maupun mengunduh PDF modul materi.',
      features: [
        'Mesin pencarian instan (live search) berdasarkan judul buku, pengarang, dan kategori IT.',
        'Sistem reservasi peminjaman buku kejuruan dengan barcode virtual.',
        'Pelacakan tanggal pengembalian dan kalkulasi denda otomatis.',
        'Statistik buku terpopuler yang paling banyak dipinjam siswa RPL.'
      ],
      tags: ['HTML5 & CSS3', 'JavaScript DOM', 'Filter Search', 'MySQL Relasional', 'Responsive'],
      status: 'Selesai &bull; Versi 2.0',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    },
    'edutrack': {
      title: 'EduTrack - Jurnal Monitoring PKL',
      category: 'Aplikasi Manajemen Kejuruan',
      badge: '📋 Persiapan Magang Industri',
      date: '2025 &bull; Proyek Unggulan RPL',
      description: 'Platform web manajemen pelaporan dan monitoring kegiatan Praktik Kerja Lapangan (PKL) bagi siswa jurusan Rekayasa Perangkat Lunak SMK Telkom Lampung. Menjembatani koordinasi antara siswa yang berada di kantor industri mitra dengan guru pembimbing di sekolah.',
      features: [
        'Formulir logbook kegiatan harian siswa magang dengan validasi waktu nyata.',
        'Fitur unggah bukti dokumentasi kegiatan kerja di industri.',
        'Verifikasi dan catatan evaluasi berkala dari pembimbing industri & guru sekolah.',
        'Ekspor otomatis rekap jurnal magang ke format laporan siap cetak.'
      ],
      tags: ['Form Validation JS', 'PHP CRUD', 'CSS Dashboard', 'Responsive Layout', 'Export Report'],
      status: 'Selesai &bull; Modul Teruji',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    },
    'technova': {
      title: 'TechNova - RPL Day Showcase & Competition',
      category: 'Front-End & UI/UX Event',
      badge: '🚀 Event Tahunan RPL',
      date: '2025 &bull; Event Landing Page',
      description: 'Landing page interaktif untuk perhelatan akbar tahunan jurusan Rekayasa Perangkat Lunak SMK Telkom Lampung (RPL Day). Menampilkan informasi kompetisi coding, pameran produk perangkat lunak siswa, dan registrasi peserta secara online.',
      features: [
        'Hitung mundur (countdown timer) interaktif menuju hari pelaksanaan event RPL Day.',
        'Galeri showcase karya perangkat lunak siswa dengan animasi Sea Blue modern.',
        'Formulir pendaftaran tim peserta kompetisi web design & competitive programming.',
        'Tabel jadwal seminar teknologi yang menghadirkan Guru Tamu praktisi IT.'
      ],
      tags: ['Countdown Timer JS', 'Keyframe Animations', 'Sea Blue Palette', 'Clean HTML5', 'Responsive'],
      status: 'Aktif &bull; Live Event',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    },
    'sea-blue-porto': {
      title: 'Agafiel Personal Sea Blue Portfolio',
      category: 'Front-End & Portofolio Personal',
      badge: '🌊 Identitas Siswa RPL',
      date: '2026 &bull; Rilis Resmi',
      description: 'Website portofolio personal Agafiel Pistiscia Torres yang dibangun secara mandiri menggunakan teknologi web murni (HTML5, CSS3, dan Vanilla JavaScript). Mengusung tema Sea Blue yang elegan, ringan, responsif, dan sarat interaktivitas.',
      features: [
        'Arsitektur murni 3 file (index.html, style.css, script.js) tanpa ketergantungan library luar.',
        'Latar belakang animasi partikel laut (Oceanic Canvas Particles) yang dinamis.',
        'Konter statistik proyek dan rekam jejak siswa RPL dengan animasi count-up otomatis.',
        'Modal detail proyek interaktif dan sistem notifikasi toast modern.'
      ],
      tags: ['HTML5', 'Modern CSS3', 'Vanilla JavaScript', 'Canvas API', 'IntersectionObserver'],
      status: 'Rilis &bull; 100% Data Siswa',
      demoUrl: '#',
      repoUrl: 'https://github.com'
    }
  };

  /* ===================================================================
     2. NAVBAR & MOBILE DRAWER NAVIGATION
     =================================================================== */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Shrink navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active navigation link on scroll (Scrollspy)
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* ===================================================================
     3. TYPEWRITER EFFECT (HERO ROLE)
     =================================================================== */
  const typewriterElement = document.getElementById('typewriter-text');
  const roles = [
    'Web Developer',
    'Siswa RPL SMK Telkom Lampung',
    'Front-End Enthusiast',
    'Creative Code Explorer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeWriter() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(typeWriter, typingSpeed);
  }
  typeWriter();

  /* ===================================================================
     4. ANIMATED STATS COUNTER (KONTER PROYEK & PENGALAMAN SISWA)
     =================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const duration = 1800; // 1.8 detik
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);

        stat.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Intersection Observer for Stats Section
  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    statsObserver.observe(statsSection);
  }

  /* ===================================================================
     5. FILTER KATEGORI KARYA / PROYEK
     =================================================================== */
  const projectTabs = document.querySelectorAll('.project-tab');
  const projectCards = document.querySelectorAll('.project-card');

  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ===================================================================
     6. FILTER KATEGORI KEAHLIAN / SKILLS
     =================================================================== */
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ===================================================================
     7. MODAL DETAIL PROYEK INTERAKTIF
     =================================================================== */
  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentArea = document.getElementById('modal-content-area');
  const modalOpenButtons = document.querySelectorAll('.btn-open-modal');

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data || !modalContentArea || !projectModal) return;

    modalContentArea.innerHTML = `
      <div class="modal-header-chip">${data.badge} &bull; ${data.category}</div>
      <h3 class="modal-project-title">${data.title}</h3>
      <p class="modal-project-desc">${data.description}</p>

      <h4 style="font-size: 1rem; color: var(--color-cyan); margin-bottom: 0.75rem; font-weight: 700;">
        Fitur Utama & Implementasi:
      </h4>
      <ul class="modal-features-list">
        ${data.features.map(feat => `<li>${feat}</li>`).join('')}
      </ul>

      <h4 style="font-size: 1rem; color: var(--color-cyan); margin-bottom: 0.75rem; font-weight: 700;">
        Teknologi & Lingkungan Kerja:
      </h4>
      <div class="modal-tech-stack">
        ${data.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="#contact" class="btn btn-primary btn-sm modal-action-btn" onclick="document.getElementById('project-modal').classList.remove('active');">
          Diskusi Terkait Proyek Ini
        </a>
        <button class="btn btn-secondary btn-sm" onclick="document.getElementById('project-modal').classList.remove('active');">
          Tutup
        </button>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalOpenButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      openProjectModal(targetId);
    });
  });

  // Also clicking directly on the project card triggers detail if desired
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicked inside overlay button, handled by modalOpenButtons
      if (e.target.closest('.btn-open-modal')) return;
      const targetId = card.getAttribute('data-id');
      if (targetId) openProjectModal(targetId);
    });
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  /* ===================================================================
     8. TOAST NOTIFIKASI SYSTEM
     =================================================================== */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message, icon = '✓') {
    if (!toast || !toastMessage) return;

    const toastIcon = document.getElementById('toast-icon');
    if (toastIcon) toastIcon.textContent = icon;
    toastMessage.textContent = message;

    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

  /* ===================================================================
     9. SALIN EMAIL & UNDUH CV ACTIONS
     =================================================================== */
  const btnCopyEmail = document.getElementById('btn-copy-email');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'agafiel.torres@gmail.com';
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast(`Email ${email} berhasil disalin ke clipboard!`, '📋');
        })
        .catch(() => {
          showToast(`Alamat email: ${email}`, '✉️');
        });
    });
  }

  const btnQuickCv = document.getElementById('btn-quick-cv');
  if (btnQuickCv) {
    btnQuickCv.addEventListener('click', () => {
      showToast('Resume Agafiel Pistiscia Torres (RPL SMK Telkom Lampung) siap diunduh!', '📄');
    });
  }

  /* ===================================================================
     10. FORMULIR KONTAK VALIDASI & SUBMIT INTERAKTIF
     =================================================================== */
  const contactForm = document.getElementById('contact-form');
  const btnSubmitForm = document.getElementById('btn-submit-form');
  const btnSubmitText = document.getElementById('btn-submit-text');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'error-name', true);
        isValid = false;
      } else {
        showFieldError(nameInput, 'error-name', false);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'error-email', true);
        isValid = false;
      } else {
        showFieldError(emailInput, 'error-email', false);
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showFieldError(subjectInput, 'error-subject', true);
        isValid = false;
      } else {
        showFieldError(subjectInput, 'error-subject', false);
      }

      // Validate Message (min 10 chars)
      if (messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'error-message', true);
        isValid = false;
      } else {
        showFieldError(messageInput, 'error-message', false);
      }

      if (!isValid) return;

      // Animate submission
      if (btnSubmitForm && btnSubmitText) {
        btnSubmitForm.disabled = true;
        btnSubmitText.textContent = 'Mengirim Pesan...';

        setTimeout(() => {
          btnSubmitForm.disabled = false;
          btnSubmitText.textContent = 'Kirim Pesan Sekarang';
          contactForm.reset();
          showToast(`Terima kasih, ${nameInput.value}! Pesan Anda telah diterima oleh Agafiel.`, '🚀');
        }, 1200);
      }
    });
  }

  function showFieldError(input, errorId, hasError) {
    const errorEl = document.getElementById(errorId);
    if (hasError) {
      input.classList.add('error');
      if (errorEl) errorEl.classList.add('visible');
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.classList.remove('visible');
    }
  }

  /* ===================================================================
     11. BACK TO TOP BUTTON
     =================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ===================================================================
     12. CANVAS PARTIKEL SAMUDRA (SEA BLUE OCEAN PARTICLES)
     =================================================================== */
  const canvas = document.getElementById('ocean-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 45;
    const maxDistance = 110;

    let mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f2fe';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce back from walls
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const fx = (dx / dist) * force * 1.5;
            const fy = (dy / dist) * force * 1.5;
            this.x -= fx;
            this.y -= fy;
          }
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateOcean() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animateOcean);
    }
    animateOcean();
  }

  // Console Welcome Badge
  console.log(
    '%c Agafiel Pistiscia Torres %c Web Developer • SMK Telkom Lampung (RPL) ',
    'background: #00f2fe; color: #030f1e; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
    'background: #06182c; color: #38bdf8; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});
