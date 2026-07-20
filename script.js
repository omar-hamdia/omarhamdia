const firebaseConfig = {
  apiKey: "AIzaSyDW3m_fS3tr3ABtK_mrXVq6oNorrl0eNj0",
  authDomain: "omarhamdai.firebaseapp.com",
  databaseURL: "https://omarhamdai-default-rtdb.firebaseio.com",
  projectId: "omarhamdai",
  storageBucket: "omarhamdai.firebasestorage.app",
  messagingSenderId: "67650144568",
  appId: "1:67650144568:web:e2d75ac178a041f89f99cd",
  measurementId: "G-98SBXYDD67"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const siteData = {
  settings: {
    site_name: "عمر حمدية",
    site_name_en: "Omar Hamdia",
    email: "omar@example.com",
    phone: "+972567557774",
    whatsapp: "972567557774",
    social_links: {
      github: "https://github.com/omar-hamdia",
      linkedin: "https://www.linkedin.com/in/omar-hamdia-541021369/",
      instagram: "",
      facebook: "",
      twitter: ""
    }
  },
  about: {
    title: "مطور Laravel ومهندس برمجيات متخصص في هندسة الأنظمة المعقدة",
    title_en: "Laravel Developer & Software Engineer specializing in complex systems engineering",
    hero_content: "مهندس برمجيات ومطور Laravel متخصص في بناء أنظمة برمجية متكاملة ولوحات تحكم متقدمة، مع دمج قوة الـ Backe[...]",
    hero_content_en: "Software Engineer and Laravel Developer specializing in building integrated systems, advanced dashboards, and high-performance web applications.",
    content: "أنا مهندس برمجيات ومطور Laravel متخصص في هندسة الأنظمة المعقدة (Systems Engineering)، وليس مجرد مواقع تقليدية. قم[...]",
    content_en: "I am a Software Engineer and Laravel Developer specializing in complex Systems Engineering and high-performance backend architectures, rather than just conventional websites. I ha[...]",
    skills: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "Python", "MySQL", "Git", "REST API", "Bootstrap"],
    years_experience: 1
  },
  services: [
    {
      title: "تطوير مواقع ويب",
      title_en: "Web Development",
      description: "بناء مواقع ويب احترافية ومتجاوبة باستخدام أحدث التقنيات مع التركيز على الأداء وتجربة المستخدم.",
      description_en: "Building professional, responsive websites using the latest technologies with a focus on performance and user experience.",
      icon: "bi-code-slash"
    },
    {
      title: "تطبيقات Laravel",
      title_en: "Laravel Applications",
      description: "تطوير تطبيقات ويب متكاملة باستخدام إطار عمل Laravel مع لوحات تحكم وأنظمة إدارة محتوى.",
      description_en: "Developing full-stack web applications using Laravel framework with admin panels and content management systems.",
      icon: "bi-lightning-fill"
    },
    {
      title: "تصميم واجهات المستخدم",
      title_en: "UI/UX Design",
      description: "تصميم واجهات مستخدم عصرية وجذابة مع التركيز على سهولة الاستخدام والتفاعل السلس.",
      description_en: "Designing modern and attractive user interfaces with a focus on usability and smooth interactions.",
      icon: "bi-palette-fill"
    }
  ],
  projects: [
    {
      id: 1,
      title: "نظام إدارة المكتبات",
      title_en: "Library Management System",
      description: "نظام متكامل لإدارة المكتبات يشمل إدارة الكتب، الأعضاء، عمليات الاستعارة والإرجاع، مع لوحة تحكم [...]",
      description_en: "A comprehensive library management system including book management, member management, borrowing and return operations, with a full admin dashboard and detailed reports.",
      image: "img/img_Library_management/Project_background/library_cover.png",
      images: [
        "img/img_Library_management/library_screenshot_1.png",
        "img/img_Library_management/library_screenshot_2.png",
        "img/img_Library_management/library_screenshot_3.png",
        "img/img_Library_management/library_screenshot_4.png",
        "img/img_Library_management/library_screenshot_5.png",
        "img/img_Library_management/library_screenshot_6.png",
        "img/img_Library_management/library_screenshot_7.png",
        "img/img_Library_management/library_screenshot_8.png",
        "img/img_Library_management/library_screenshot_9.png",
        "img/img_Library_management/library_screenshot_10.jpeg"
      ],
      link: "#",
      github: "https://github.com/omarhamdia",
      video: "https://raw.githubusercontent.com/omar-hamdia/omarhamdia/main/video/Library_management.mp4",
      views_count: 156,
      average_rating: 4.5,
      ratings_count: 12,
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      type: "تطبيق ويب متكامل",
      type_en: "Full-Stack Web App",
      date: "May 2026"
    },
    {
      id: 2,
      title: "نظام إدارة الموظفين",
      title_en: "Staff Management System",
      description: "نظام متكامل لإدارة الموظفين يشمل تتبع الحضور والغياب، إدارة الرواتب، وتنظيم بيانات الموظفين مع [...]",
      description_en: "A comprehensive staff management system including attendance tracking, payroll management, and employee data organization with a professional admin dashboard.",
      image: "img/img_Staff_management/Project_background/staff_cover.png",
      images: [
        "img/img_Staff_management/staff_screenshot_1.png",
        "img/img_Staff_management/staff_screenshot_2.png",
        "img/img_Staff_management/staff_screenshot_3.png",
        "img/img_Staff_management/staff_screenshot_4.png",
        "img/img_Staff_management/staff_screenshot_5.png",
        "img/img_Staff_management/staff_screenshot_6.png",
        "img/img_Staff_management/staff_screenshot_7.png",
        "img/img_Staff_management/staff_screenshot_8.jpeg"
      ],
      link: "#",
      github: "https://github.com/omarhamdia",
      video: "https://raw.githubusercontent.com/omar-hamdia/omarhamdia/main/video/Staff_management.mp4",
      views_count: 89,
      average_rating: 4.8,
      ratings_count: 8,
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      type: "تطبيق ويب متكامل",
      type_en: "Full-Stack Web App",
      date: "Apr 2026"
    },
    {
      id: 3,
      title: "نظام إدارة المدارس",
      title_en: "School Management System",
      description: "نظام شامل لإدارة المدارس يشمل إدارة الطلاب، المعلمين، الصفوف، الجداول الدراسية، والدرجات مع لو[...]",
      description_en: "A comprehensive school management system including student management, teacher management, classrooms, schedules, and grades with a full admin dashboard.",
      image: "img/img_school/Project_background/school_cover.png",
      images: [
        "img/img_school/school_screenshot_1.png",
        "img/img_school/school_screenshot_2.png",
        "img/img_school/school_screenshot_3.png",
        "img/img_school/school_screenshot_4.png",
        "img/img_school/school_screenshot_5.png",
        "img/img_school/school_screenshot_6.jpeg",
        "img/img_school/school_screenshot_7.jpeg"
      ],
      link: "#",
      github: "",
      video: "https://raw.githubusercontent.com/omar-hamdia/omarhamdia/main/video/school.mp4",
      views_count: 234,
      average_rating: 4.2,
      ratings_count: 15,
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      type: "تطبيق ويب متكامل",
      type_en: "Full-Stack Web App",
      date: "Mar 2026"
    }
  ],
  testimonials: [
    {
      name: "أحمد محمد",
      name_en: "Ahmed Mohammed",
      role: "صاحب شركة",
      role_en: "Business Owner",
      message: "عمل ممتاز واحترافية عالية في التنفيذ. عمر نفذ المشروع بجودة عالية وفي الوقت المحدد.",
      message_en: "Excellent work and high professionalism. Omar delivered the project with high quality and on time."
    },
    {
      name: "سارة علي",
      name_en: "Sara Ali",
      role: "مديرة تسويق",
      role_en: "Marketing Manager",
      message: "تعامل رائع وتصميم مذهل. أنصح بالتعامل مع عمر لأي مشروع ويب.",
      message_en: "Great collaboration and amazing design. I highly recommend working with Omar for any web project."
    },
    {
      name: "محمد خالد",
      name_en: "Mohammed Khaled",
      role: "مطور برمجيات",
      role_en: "Software Developer",
      message: "كود نظيف ومنظم وأداء ممتاز. عمر مطور محترف يفهم المتطلبات بسرعة.",
      message_en: "Clean, organized code and excellent performance. Omar is a professional developer who understands requirements quickly."
    }
  ]
};

// Global DOM Variables
const html = document.documentElement;
let currentLang = localStorage.getItem('lang') || 'ar';
let isDark = localStorage.getItem('theme') !== 'light';

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 600);
        }, 800);
    }
});

// Init Setup
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initCursor();
    initOrbs();
    initNav();
    initReveal();
    initReveal();
    
    // Check which page we're on
    if (document.getElementById('home')) {
        initIndexPage();
    } else if (document.getElementById('projectContent')) {
        initProjectPage();
    }
});


// --- THEME ---
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if(!toggle) return;
    
    const updateIcon = () => {
        toggle.innerHTML = isDark ? '<i class="bi bi-moon-fill"></i>' : '<i class="bi bi-sun-fill"></i>';
    };
    updateIcon();
    
    toggle.addEventListener('click', () => {
        isDark = !isDark;
        if(isDark) {
            html.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
        updateIcon();
    });
}

// --- LANGUAGE ---
function initLang() {
    const toggle = document.getElementById('langToggle');
    if(!toggle) return;
    
    const applyLang = () => {
        html.lang = currentLang;
        html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        toggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        
        if (document.getElementById('home')) populateIndexData();
        if (document.getElementById('projectContent')) renderProjectPage();
    };
    applyLang(); // initial
    
    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', currentLang);
        applyLang();
    });
}

// --- CURSOR ---
function initCursor() {
    if (window.innerWidth <= 768) return;
    
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if(!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });
    
    const renderRing = () => {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        requestAnimationFrame(renderRing);
    };
    requestAnimationFrame(renderRing);
    
    const addHover = () => {
        document.querySelectorAll('a, button, .service-card, .project-card, .gallery-item').forEach(el => {
            el.addEventListener('mouseenter', () => {
                ring.style.transform = 'translate(-50%, -50%) scale(1.8)';
                ring.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                ring.style.transform = 'translate(-50%, -50%) scale(1)';
                ring.style.backgroundColor = 'transparent';
            });
        });
    };
    addHover();
    // Re-apply hover listeners when DOM changes (observer)
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });
}

// --- ORBS ---
function initOrbs() {
    const orbs = document.querySelectorAll('.orb');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// --- NAVBAR & MENU ---
function initNav() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (backToTop) {
            if (window.scrollY > 500) backToTop.classList.add('show');
            else backToTop.classList.remove('show');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if(mobileBtn && closeBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
        closeBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('active'));
        });
    }

    // Active side and bottom link on scroll
    const sections = document.querySelectorAll('.section');
    const sideLinks = document.querySelectorAll('.side-link');
    const bottomLinks = document.querySelectorAll('.bottom-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 200;
            if (window.scrollY >= top) {
                current = sec.getAttribute('id');
            }
        });
        
        sideLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        bottomLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

let revealObserver;
function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Counter
                if(entry.target.classList.contains('about-image') && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = true;
                    document.querySelectorAll('.counter').forEach(count => {
                        const target = +count.getAttribute('data-count');
                        let c = 0;
                        const step = target / 40;
                        const update = () => {
                            if(c < target) {
                                c += step;
                                count.innerText = Math.ceil(c);
                                setTimeout(update, 30);
                            } else {
                                count.innerText = target;
                            }
                        };
                        update();
                    });
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// --- 3D TILT & INTERACTIVE EFFECTS ---
function addTiltEffect() {
    document.querySelectorAll('.project-card, .service-card, .gallery-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPct = (x / rect.width) - 0.5;
            const yPct = (y / rect.height) - 0.5;
            card.style.transform = `perspective(1000px) rotateY(${xPct * 15}deg) rotateX(${-yPct * 15}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'transform 0.1s ease';
            card.style.boxShadow = `${-xPct * 20}px ${yPct * 20}px 30px rgba(0,0,0,0.3)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            card.style.boxShadow = '';
        });
    });
}

function initRippleEffect() {
    document.querySelectorAll('.btn-primary, .btn-outline, .view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            this.style.overflow = 'hidden';
            this.style.position = 'relative';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Ensure CSS keyframes for ripple exists
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to { transform: translate(-50%, -50%) scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);

// --- PROJECT VIEWS TRACKING ---
async function getProjectViews(id) {
    try {
        const snapshot = await db.ref(`projects/${id}/views`).once('value');
        return snapshot.exists() ? snapshot.val() : 0;
    } catch (error) {
        console.warn('Firebase getProjectViews failed:', error);
        return 0;
    }
}

async function incrementProjectViews(id) {
    const sessionKey = `real_project_viewed_${id}`;
    
    if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, 'true');
        try {
            await db.ref(`projects/${id}/views`).transaction((currentViews) => {
                return (currentViews || 0) + 1;
            });
        } catch (error) {
            console.warn('Firebase incrementProjectViews failed:', error);
            return 0;
        }
    }
    
    return await getProjectViews(id);
}

// --- PROJECT RATING TRACKING ---
async function getProjectRating(id) {
    try {
        const snapshot = await db.ref(`projects/${id}/rating`).once('value');
        const data = snapshot.exists() ? snapshot.val() : { totalScore: 0, count: 0 };
        let avg = data.count > 0 ? (data.totalScore / data.count) : 0;
        return {
            average: parseFloat(avg.toFixed(1)),
            count: data.count
        };
    } catch (error) {
        console.warn('Firebase getProjectRating failed:', error);
        return { average: 0, count: 0 };
    }
}

async function submitProjectRating(id, rating) {
    const sessionKey = `real_project_rated_${id}`;
    if (localStorage.getItem(sessionKey)) {
        return false; // Already rated
    }

    await db.ref(`projects/${id}/rating`).transaction((currentData) => {
        if (!currentData) {
            return { totalScore: parseInt(rating), count: 1 };
        }
        return {
            totalScore: currentData.totalScore + parseInt(rating),
            count: currentData.count + 1
        };
    });
    
    localStorage.setItem(sessionKey, 'true'); 
    return await getProjectRating(id);
}

// ==========================================
// INDEX PAGE LOGIC
// ==========================================
function initIndexPage() {
    startScramble();
}

function populateIndexData() {
    const isEn = currentLang === 'en';
    
    // Nav & Links
    const waLink = `https://wa.me/${siteData.settings.whatsapp}`;
    document.getElementById('whatsappBtn').href = waLink;
    document.getElementById('whatsappText').textContent = isEn ? "Contact Me" : "تواصل معي";
    
    // Socials Hero
    const renderSocials = (containerId) => {
        const container = document.getElementById(containerId);
        if(!container) return;
        container.innerHTML = '';
        Object.entries(siteData.settings.social_links).forEach(([key, val]) => {
            if(val) {
                container.innerHTML += `<a href="${val}" target="_blank" class="social-link"><i class="bi bi-${key}"></i></a>`;
            }
        });
    };
    renderSocials('heroSocials');
    renderSocials('footerSocials');

    // Hero
    document.getElementById('heroAvailable').textContent = isEn ? "Available for work" : "متاح للعمل";
    document.getElementById('heroGreeting').textContent = isEn ? "I am" : "أنا";
    document.getElementById('heroName').textContent = isEn ? siteData.settings.site_name_en : siteData.settings.site_name;
    document.getElementById('heroDesc').textContent = isEn ? siteData.about.hero_content_en : siteData.about.hero_content;
    document.getElementById('btnExplore').textContent = isEn ? "Explore My Work" : "استكشف أعمالي";
    document.getElementById('btnTalk').innerHTML = `<i class="bi bi-whatsapp"></i> ${isEn ? "Let's Talk" : "تحدث معي"}`;
    document.getElementById('btnTalk').href = waLink;

    // About
    document.getElementById('statExp').textContent = isEn ? "Years Experience" : "سنوات خبرة";
    document.getElementById('statProj').textContent = isEn ? "Projects Done" : "مشروع مكتمل";
    document.getElementById('aboutLabel').textContent = isEn ? "Get to know me" : "تعرف علي";
    document.getElementById('aboutTitle').textContent = isEn ? "About Me" : "نبذة عني";
    document.getElementById('aboutContent').textContent = isEn ? siteData.about.content_en : siteData.about.content;
    document.getElementById('skillsTitle').textContent = isEn ? "Tech Stack" : "التقنيات المستخدمة";
    document.getElementById('btnDownloadCv').innerHTML = `<i class="bi bi-file-earmark-person"></i> ${isEn ? "View CV" : "عرض السيرة الذاتية"}`;
    
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    siteData.about.skills.forEach(skill => {
        skillsGrid.innerHTML += `<div class="skill-tag">${skill}</div>`;
    });

    // Services
    document.getElementById('servicesLabel').textContent = isEn ? "What I Do" : "ماذا أقدم";
    document.getElementById('servicesTitle').textContent = isEn ? "My Services" : "خدماتي";
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';
    siteData.services.forEach(s => {
        servicesGrid.innerHTML += `
            <div class="service-card reveal">
                <div class="service-icon"><i class="bi ${s.icon}"></i></div>
                <h3>${isEn ? s.title_en : s.title}</h3>
                <p>${isEn ? s.description_en : s.description}</p>
            </div>
        `;
    });

    // Projects
    document.getElementById('projectsLabel').textContent = isEn ? "Portfolio" : "معرض الأعمال";
    document.getElementById('projectsTitle').textContent = isEn ? "Featured Work" : "أعمال مميزة";
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const projectsPromises = siteData.projects.map(async (p, idx) => {
        const pViews = await getProjectViews(p.id);
        const pRating = await getProjectRating(p.id);
        return { p, idx, pViews, pRating };
    });

    Promise.all(projectsPromises).then(projectsData => {
        projectsData.forEach(({ p, idx, pViews, pRating }) => {
            projectsGrid.innerHTML += `
                <div class="project-card reveal ${idx % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}">
                    <img src="${p.image}" alt="${p.title_en}" class="project-img">
                    <div class="project-overlay">
                        <div class="project-badges">
                            <div class="p-badge" dir="ltr"><i class="bi bi-star-fill text-warning"></i> ${pRating.average}</div>
                            <div class="p-badge" dir="ltr"><i class="bi bi-eye"></i> ${pViews}</div>
                        </div>
                        <h3>${isEn ? p.title_en : p.title}</h3>
                        <p>${isEn ? p.description_en : p.description}</p>
                        <a href="project.html?id=${p.id}" class="view-btn">${isEn ? "View Details" : "عرض التفاصيل"} <i class="bi bi-arrow-${isEn?'right':'left'}"></i></a>
                    </div>
                </div>
            `;
        });
        addTiltEffect();
        initRippleEffect();
        initReveal();
    }).catch(error => {
        console.warn('Failed to load project statistics, rendering fallback cards:', error);
        siteData.projects.forEach((p, idx) => {
            projectsGrid.innerHTML += `
                <div class="project-card reveal ${idx % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}">
                    <img src="${p.image}" alt="${p.title_en}" class="project-img">
                    <div class="project-overlay">
                        <div class="project-badges">
                            <div class="p-badge" dir="ltr"><i class="bi bi-star-fill text-warning"></i> 0.0</div>
                            <div class="p-badge" dir="ltr"><i class="bi bi-eye"></i> 0</div>
                        </div>
                        <h3>${isEn ? p.title_en : p.title}</h3>
                        <p>${isEn ? p.description_en : p.description}</p>
                        <a href="project.html?id=${p.id}" class="view-btn">${isEn ? "View Details" : "عرض التفاصيل"} <i class="bi bi-arrow-${isEn?'right':'left'}"></i></a>
                    </div>
                </div>
            `;
        });
        addTiltEffect();
        initRippleEffect();
        initReveal();
    });

    // Testimonials
    document.getElementById('testLabel').textContent = isEn ? "Reviews" : "الآراء";
    document.getElementById('testTitle').textContent = isEn ? "Client Testimonials" : "آراء العملاء";
    const testWrapper = document.getElementById('testimonialsWrapper');
    testWrapper.innerHTML = '';
    siteData.testimonials.forEach(t => {
        testWrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="test-card">
                    <div class="test-quote"><i class="bi bi-quote"></i></div>
                    <p class="test-msg">${isEn ? t.message_en : t.message}</p>
                    <div class="test-author">
                        <div class="author-avatar">${isEn ? t.name_en[0] : t.name[0]}</div>
                        <div class="author-info">
                            <h4>${isEn ? t.name_en : t.name}</h4>
                            <p>${isEn ? t.role_en : t.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    // Init Swiper if not initialized
    if(window.swiperInst) window.swiperInst.destroy();
    window.swiperInst = new Swiper('.testimonials-slider', {
        slidesPerView: 1, spaceBetween: 30, loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });

    // Contact
    document.getElementById('contactLabel').textContent = isEn ? "Get In Touch" : "تواصل معي";
    document.getElementById('contactTitle').textContent = isEn ? "Contact Me" : "راسلني الآن";
    document.getElementById('lblFormName').textContent = isEn ? "Full Name" : "الاسم الكامل";
    document.getElementById('lblFormEmail').textContent = isEn ? "Email" : "البريد الإلكتروني";
    document.getElementById('lblFormSubject').textContent = isEn ? "Subject" : "الموضوع";
    document.getElementById('lblFormMessage').textContent = isEn ? "Message" : "الرسالة";
    document.getElementById('btnSubmit').textContent = isEn ? "Send Message" : "إرسال الرسالة";
    
    // Contact Form Logic
    const form = document.getElementById('contactForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert(isEn ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!");
        form.reset();
    };

    // Mobile Menu Links Update
    document.querySelectorAll('.mobile-link').forEach(link => {
        const id = link.getAttribute('data-id');
        const enText = {home:"Home", about:"About", services:"Services", projects:"Projects", testimonials:"Testimonials", contact:"Contact"};
        const arText = {home:"الرئيسية", about:"حولي", services:"خدماتي", projects:"مشاريعي", testimonials:"آراء العملاء", contact:"تواصل معي"};
        link.textContent = isEn ? enText[id] : arText[id];
    });

    // Footer
    document.getElementById('footerCopy').textContent = isEn ? `© 2026 ${siteData.settings.site_name_en}. All rights reserved.` : `© 2026 ${siteData.settings.site_name}. جميع الحقوق محفوظة.`;

    // Tooltips update
    const tooltipsEn = ["Home", "About", "Services", "Projects", "Testimonials", "Contact"];
    const tooltipsAr = ["الرئيسية", "حولي", "خدماتي", "مشاريعي", "آراء العملاء", "تواصل معي"];
    document.querySelectorAll('.side-link').forEach((link, idx) => {
        link.setAttribute('data-tooltip', isEn ? tooltipsEn[idx] : tooltipsAr[idx]);
    });
}

let scrambleAnim;
function startScramble() {
    const el = document.getElementById('scrambleText');
    if(!el) return;
    const isEn = currentLang === 'en';
    const phrases = isEn 
        ? ["Laravel Developer ⚡", "Full Stack Engineer 🚀", "Web Application Dev 💻"]
        : ["مطور Laravel ⚡", "مهندس Full Stack 🚀", "مطور تطبيقات ويب 💻"];
    
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const chars = "!<>-_\\/[]{}—=+*^?#_";

    function update() {
        const current = phrases[phraseIdx];
        if (isDeleting) {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
        } else {
            // Add scramble chars
            const text = current.substring(0, charIdx + 1);
            el.textContent = text + chars[Math.floor(Math.random() * chars.length)];
            charIdx++;
        }

        let speed = isDeleting ? 30 : 100;

        if (!isDeleting && charIdx === current.length) {
            el.textContent = current;
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 500;
        }
        scrambleAnim = setTimeout(update, speed);
    }
    clearTimeout(scrambleAnim);
    update();
}

// ==========================================
// PROJECT PAGE LOGIC
// ==========================================
function initProjectPage() {
    renderProjectPage();
}

function renderProjectPage() {
    const isEn = currentLang === 'en';
    
    document.getElementById('navBack').textContent = isEn ? "← Back to Home" : "← العودة للرئيسية";
    document.getElementById('navBack').href = "index.html";

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const project = siteData.projects.find(p => p.id === id);

    if (!project) {
        document.getElementById('projectContent').innerHTML = `<h1 class="text-center" style="margin-top:100px;">Project Not Found</h1>`;
        return;
    }

    const title = isEn ? project.title_en : project.title;
    const desc = isEn ? project.description_en : project.description;
    const type = isEn ? project.type_en : project.type;
    
    // Generate Tags HTML
    let tagsHtml = project.technologies.map(t => `<span class="p-badge" style="display:inline-block; margin-right:5px; margin-bottom:5px;">${t}</span>`).join('');

    // Rating Interface
    const rateText = isEn ? "Rate this work" : "قيّم هذا العمل";
    const submitText = isEn ? "Submit Rating" : "إرسال التقييم";

    let htmlContent = `
        <div class="breadcrumb">
            <a href="index.html">${isEn ? "Home" : "الرئيسية"}</a> > ${title} 
            <span class="p-badge" style="margin-left:auto; margin-right:0;" dir="ltr"><span id="dynamicViews">...</span> ${isEn?"Views":"مشاهدة"}</span>
        </div>
    
    <div class="grid-2 project-header" style="align-items:start;">
        <div>
            <h1 class="project-title-large grad-text">${title}</h1>
            <div style="margin-bottom: 1.5rem; display:flex; gap:0.5rem; align-items:center;">
                <span id="dynamicStars">...</span> <span id="dynamicRatingText" class="text-muted">(.../5 - ... ${isEn?"Ratings":"تقييمات"})</span>
            </div>
            <p class="project-desc-large">${desc}</p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                ${project.link !== '#' ? `<a href="${project.link}" target="_blank" class="btn-primary"><i class="bi bi-globe"></i> ${isEn?"Live Demo":"عرض مباشر"}</a>` : ''}
                ${project.github ? `<a href="${project.github}" target="_blank" class="btn-outline"><i class="bi bi-github"></i> ${isEn?"Source Code":"كود المصدر"}</a>` : ''}
            </div>
        </div>
        
        <div class="rating-card">
            <h3 style="margin-bottom:1rem;"><i class="bi bi-star-fill text-warning"></i> ${rateText}</h3>
            <div class="stars-interactive" id="rateStars">
                <i class="bi bi-star" data-val="1"></i>
                <i class="bi bi-star" data-val="2"></i>
                <i class="bi bi-star" data-val="3"></i>
                <i class="bi bi-star" data-val="4"></i>
                <i class="bi bi-star" data-val="5"></i>
            </div>
            <button class="btn-primary w-full" id="btnSubmitRate" style="margin-top:1rem;">${submitText}</button>
        </div>
    </div>

    <div class="divider"></div>

    <div class="project-meta-row">
        <div class="meta-card">
            <span class="meta-label"><i class="bi bi-calendar"></i> ${isEn?"Release Date":"تاريخ النشر"}</span>
            <span class="meta-value">${project.date}</span>
        </div>
        <div class="meta-card">
            <span class="meta-label"><i class="bi bi-code-square"></i> ${isEn?"Technologies":"التقنيات"}</span>
            <div style="margin-top:0.5rem;">${tagsHtml}</div>
        </div>
        <div class="meta-card">
            <span class="meta-label"><i class="bi bi-tag"></i> ${isEn?"Project Type":"نوع المشروع"}</span>
            <span class="meta-value">${type}</span>
        </div>
    </div>
    `;

    // Video Section
    if (project.video) {
        htmlContent += `
            <div class="video-section">
                <h2 class="section-title grad-text" style="font-size:2rem; margin-bottom:2rem;">${isEn ? "Watch in Action" : "شاهد المشروع"}</h2>
                <div class="video-container">
                    <video controls preload="metadata" poster="${project.image}" style="width:100%; border-radius:16px; background:#000;">
                        <source src="${project.video}" type="video/mp4">
                        ${isEn ? 'Your browser does not support the video tag.' : 'متصفحك لا يدعم تشغيل الفيديو.'}
                    </video>
                </div>
            </div>
        `;
    }

    // Gallery
    if(project.images && project.images.length > 0) {
        htmlContent += `
            <div class="gallery-section">
                <h2 class="section-title grad-text" style="font-size:2rem; margin-bottom:2rem;">${isEn ? "Screenshots" : "صور المشروع"}</h2>
                <div class="gallery-grid">
                    ${project.images.map((img, idx) => `
                        <div class="gallery-item" data-index="${idx}">
                            <img src="${img}" alt="Screenshot ${idx+1}">
                            <div class="gallery-overlay">
                                <div class="zoom-icon"><i class="bi bi-zoom-in"></i></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Other Projects Section
    const otherProjects = siteData.projects.filter(p => p.id !== project.id).slice(0, 2);
    if(otherProjects.length > 0) {
        htmlContent += `
            <div class="other-projects-section" style="margin-top:4rem;">
                <h2 class="section-title grad-text" style="font-size:2rem; margin-bottom:2rem;">${isEn ? "Browse Other Projects" : "تصفح مشاريع أخرى"}</h2>
                <div class="grid-2">
                    ${otherProjects.map(p => `
                        <div class="project-card reveal">
                            <img src="${p.image}" alt="${isEn ? p.title_en : p.title}" class="project-img">
                            <div class="project-overlay">
                                <h3>${isEn ? p.title_en : p.title}</h3>
                                <a href="project.html?id=${p.id}" class="view-btn">${isEn ? "View Details" : "عرض التفاصيل"} <i class="bi bi-arrow-${isEn?'right':'left'}"></i></a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    document.getElementById('projectContent').innerHTML = htmlContent;

    // Footer
    document.getElementById('footerCopy').textContent = isEn ? `© 2026 ${siteData.settings.site_name_en}. All rights reserved.` : `© 2026 ${siteData.settings.site_name}. جميع الحقوق محفوظة.`;

    // Rating Logic
    let selectedRating = 0;
    const stars = document.querySelectorAll('#rateStars i');
    stars.forEach(s => {
        s.addEventListener('mouseenter', function() {
            const val = this.dataset.val;
            stars.forEach(st => {
                if(st.dataset.val <= val) { st.classList.replace('bi-star', 'bi-star-fill'); }
                else { st.classList.replace('bi-star-fill', 'bi-star'); }
            });
        });
        s.addEventListener('mouseleave', function() {
            stars.forEach(st => {
                if(st.dataset.val <= selectedRating) { st.classList.replace('bi-star', 'bi-star-fill'); }
                else { st.classList.replace('bi-star-fill', 'bi-star'); }
            });
        });
        s.addEventListener('click', function() {
            selectedRating = this.dataset.val;
        });
    });
    
        document.getElementById('btnSubmitRate').addEventListener('click', async () => {
            if(selectedRating === 0) {
                alert(isEn ? "Please select a rating first!" : "الرجاء اختيار تقييم أولاً!");
            } else {
                const newRating = await submitProjectRating(project.id, selectedRating);
                if(newRating) {
                    alert(isEn ? `Thank you for rating ${selectedRating} stars!` : `شكراً لتقييمك ${selectedRating} نجوم!`);
                    setTimeout(() => location.reload(), 500);
                } else {
                    alert(isEn ? "You have already rated this project!" : "لقد قمت بتقييم هذا المشروع مسبقاً!");
                }
            }
        });

        // Lightbox Logic
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        const lightboxCounter = document.getElementById('lightboxCounter');
        
        let currentImgIdx = 0;
        
        const updateLightbox = () => {
            lightboxImg.src = project.images[currentImgIdx];
            lightboxCounter.textContent = `${currentImgIdx + 1} / ${project.images.length}`;
        };

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                currentImgIdx = parseInt(this.dataset.index);
                updateLightbox();
                lightbox.classList.add('active');
            });
        });

        if(lightboxClose) lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
        if(lightboxPrev) lightboxPrev.addEventListener('click', () => {
            currentImgIdx = (currentImgIdx - 1 + project.images.length) % project.images.length;
            updateLightbox();
        });
        if(lightboxNext) lightboxNext.addEventListener('click', () => {
            currentImgIdx = (currentImgIdx + 1) % project.images.length;
            updateLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if(!lightbox.classList.contains('active')) return;
            if(e.key === 'Escape') lightbox.classList.remove('active');
            if(e.key === 'ArrowLeft') {
                currentImgIdx = (currentImgIdx - 1 + project.images.length) % project.images.length;
                updateLightbox();
            }
            if(e.key === 'ArrowRight') {
                currentImgIdx = (currentImgIdx + 1) % project.images.length;
                updateLightbox();
            }
        });

        addTiltEffect();
        initReveal(); // Ensure other projects animate in
        
        // Fetch Firebase data async after rendering
        Promise.all([
            getProjectRating(project.id),
            incrementProjectViews(project.id)
        ]).then(([ratingData, viewsCount]) => {
            // Update Stars
            let newStarsHtml = '';
            const fullStars = Math.floor(ratingData.average);
            const hasHalf = ratingData.average % 1 !== 0;
            for(let i=0; i<5; i++){
                if(i < fullStars) newStarsHtml += '<i class="bi bi-star-fill text-warning"></i>';
                else if(i === fullStars && hasHalf) newStarsHtml += '<i class="bi bi-star-half text-warning"></i>';
                else newStarsHtml += '<i class="bi bi-star text-warning"></i>';
            }
            const dStars = document.getElementById('dynamicStars');
            const dRatingText = document.getElementById('dynamicRatingText');
            const dViews = document.getElementById('dynamicViews');
            
            if(dStars) dStars.innerHTML = newStarsHtml;
            if(dRatingText) dRatingText.textContent = `(${ratingData.average}/5 - ${ratingData.count} ${isEn?"Ratings":"تقييمات"})`;
            if(dViews) dViews.innerHTML = `<i class="bi bi-eye"></i> ${viewsCount}`;
        }).catch(error => {
            console.warn('Failed to load project rating or views:', error);
            const dStars = document.getElementById('dynamicStars');
            const dRatingText = document.getElementById('dynamicRatingText');
            const dViews = document.getElementById('dynamicViews');
            if(dStars) dStars.innerHTML = '<i class="bi bi-star text-warning"></i>'.repeat(5);
            if(dRatingText) dRatingText.textContent = `0.0/5 - 0 ${isEn?"Ratings":"تقييمات"}`;
            if(dViews) dViews.innerHTML = `<i class="bi bi-eye"></i> 0`;
        });
}
