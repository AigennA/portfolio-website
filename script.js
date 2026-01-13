document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("projects-overview-btn")?.addEventListener("click", function(e) {
            e.preventDefault();
            // Switch to projects section
            sections.forEach(s => s.classList.remove("active"));
            document.getElementById("projects")?.classList.add("active");
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            document.querySelector('nav a[data-page="projects"]')?.classList.add("active");
            // Show projects overview
            showProjectsOverview();
            window.scrollTo(0, 0);
        });
    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("[data-page]");
    const sections = document.querySelectorAll("section");
    const logo = document.querySelector(".logo");

    const overviewCard = document.getElementById("projects-overview");
    const projectView = document.getElementById("project-view");

    sections.forEach(s => s.classList.remove("active"));
    document.getElementById("home")?.classList.add("active");


    menuIcon?.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuIcon.classList.toggle("fa-xmark");
        // Add overlay for mobile menu if opening
        if (nav.classList.contains("active")) {
            if (!document.getElementById("nav-overlay")) {
                const overlay = document.createElement("div");
                overlay.id = "nav-overlay";
                overlay.style.position = "fixed";
                overlay.style.top = 0;
                overlay.style.left = 0;
                overlay.style.width = "100vw";
                overlay.style.height = "100vh";
                overlay.style.zIndex = 9;
                overlay.style.background = "rgba(0,0,0,0)";
                overlay.addEventListener("click", () => {
                    nav.classList.remove("active");
                    menuIcon.classList.remove("fa-xmark");
                    overlay.remove();
                });
                document.body.appendChild(overlay);
            }
        } else {
            document.getElementById("nav-overlay")?.remove();
        }
    });

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.dataset.page;

            sections.forEach(s => s.classList.remove("active"));
            document.getElementById(target)?.classList.add("active");

            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            link.classList.add("active");

            nav.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            document.getElementById("nav-overlay")?.remove();

            projectView.innerHTML = "";
            projectView.style.display = "none";

            window.scrollTo(0, 0);
        });
    });

    logo?.addEventListener("click", () => {
        sections.forEach(s => s.classList.remove("active"));
        document.getElementById("home")?.classList.add("active");

        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        document.querySelector('nav a[data-page="home"]')?.classList.add("active");

        projectView.innerHTML = "";
        projectView.style.display = "none";

        window.scrollTo(0, 0);
    });

    const projects = [
        {
            title: "Testprojekt",
            children: [
                {
                    title: "Neonmeny",
                    type: "image",
                    src: "images/projects/fabuloso1.png",
                    description: "Modern menu UI with neon and glass effects built using HTML, CSS and JavaScript."
                },
                {
                    title: "AI-Chatbot AskBee",
                    type: "image",
                    src: "images/projects/projekt2.png",
                    description: "Modern web application built with React, Vite and Tailwind CSS."
                },
                {
                    title: "Dashboard UI",
                    type: "video",
                    src: "https://res.cloudinary.com/dciixwu6v/video/upload/dashboard_hg1wut.mp4",
                    description: "Responsive dashboard with focus on UX and component structure."
                },
                {
                    title: "E-Commerce TechVora",
                    type: "video",
                    src: "https://res.cloudinary.com/dciixwu6v/video/upload/techvora_dagryt.mp4",
                    description: "E-commerce project built with Lovable.",
                    links: {
                        live: "https://lovable.dev/projects/f5c87ca7-608c-4e0f-9f4b-e4e0a2de4099?permissionView=main",
                        github: "https://github.com/AigennA/techvora"
                    }
                },
                {
                    title: "E-Commerce Cotton",
                    type: "video",
                    src: "https://res.cloudinary.com/dciixwu6v/video/upload/cotton_axej1w.mp4",
                    description: "E-commerce project.",
                    links: {
                        live: "https://agnes-nora-git-all-fixes-aomurm-gmailcoms-projects.vercel.app/",
                        github: "https://github.com/AigennA/agnes-nora"
                    }
                },
                {
                    title: "Skolarbete",
                    children: [
                        {
                            title: "Gala Emporium",
                            type: "video",
                            src: "https://res.cloudinary.com/dciixwu6v/video/upload/gala-emporium-housetech_tz8aqe.mp4",
                            description: "Ett Skolprojekt som byggdes med gruppen. Html,Css,Js och en SPA site."
                        },
                        {
                            title: "Rocky",
                            type: "video",
                            src: "https://res.cloudinary.com/dciixwu6v/video/upload/rocky_ukwwnt.mp4",
                            description: "Skolarbete AI-Chatbot."
                        }
                    ]
                }
            ]
        },
        {
            title: "Backend API",
            type: "image",
            src: "images/projects/project-3.jpg",
            description: "API practice using C# and .NET."
        }
    ];

    function showProjectsOverview() {
        projectView.style.display = "block";
        let fromHome = window.location.hash === "#fromHome";
        projectView.innerHTML = `
            <button class="back-btn" id="projects-back">← Tillbaka</button>
            <h1>Projekt</h1>
            <div class="project-list">
                ${projects.map((p, i) =>
                    `<button data-index="${i}">${p.title}</button>`
                ).join("")}
            </div>
        `;
        document.querySelectorAll(".project-list button").forEach(btn => {
            btn.onclick = () => showProject(projects[btn.dataset.index]);
        });
        document.getElementById("projects-back").onclick = () => {
            sections.forEach(s => s.classList.remove("active"));
            document.getElementById("home")?.classList.add("active");
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            document.querySelector('nav a[data-page="home"]')?.classList.add("active");
            projectView.innerHTML = "";
            projectView.style.display = "none";
            window.scrollTo(0, 0);
        };
    }

    function showProject(project) {
        if (project.children) {
            projectView.innerHTML = `
                <button class="back-btn">← Tillbaka</button>
                <h1>${project.title}</h1>
                <div class="project-list">
                    ${project.children.map((c, i) =>
                        c.children
                        ? `<button data-child-index="${i}" class="project-group-btn">${c.title}</button>`
                        : `<button data-child-index="${i}">${c.title}</button>`
                    ).join("")}
                </div>
                <div class="project-group-view"></div>
            `;

            document.querySelector(".back-btn").onclick = showProjectsOverview;

            let openGroup = null;
            document.querySelectorAll(".project-list button").forEach(btn => {
                const idx = btn.dataset.childIndex;
                const child = project.children[idx];
                if (child.children) {
                    btn.onclick = () => {
                        const groupView = document.querySelector('.project-group-view');
                        if (openGroup === idx) {
                            groupView.innerHTML = "";
                            openGroup = null;
                        } else {
                            groupView.innerHTML = `
                                <h2>${child.title}</h2>
                                <div class="project-group-videos">
                                    ${child.children.map(videoProj =>
                                        `<div class="video-card">
                                            <div class="video-title">${videoProj.title}</div>
                                            <video src="${videoProj.src}" controls style="max-width:320px;width:100%;margin:0.5rem 0;"></video>
                                            <p>${videoProj.description}</p>
                                        </div>`
                                    ).join("")}
                                </div>
                            `;
                            openGroup = idx;
                        }
                    };
                } else {
                    btn.onclick = () => showProjectDetail(child);
                }
            });
        } else {
            showProjectDetail(project);
        }
    }

    function showProjectDetail(project) {
        projectView.innerHTML = `
            <button class="back-btn">← Tillbaka</button>
            <h1>${project.title}</h1>
            <div class="project-detail">
                ${
                    project.type === "image"
                        ? `<img src="${project.src}" alt="${project.title}">`
                        : `<video controls src="${project.src}"></video>`
                }
                <p>${project.description}</p>

                ${project.links ? `
                <div class="project-links">
                    <a href="${project.links.live}" target="_blank" class="btn">Live Demo</a>
                    <a href="${project.links.github}" target="_blank" class="btn">GitHub</a>
                </div>
                ` : ""}
            </div>
        `;

        document.querySelector(".back-btn").onclick = showProjectsOverview;
    }

    overviewCard?.addEventListener("click", showProjectsOverview);
    document.getElementById("projects-overview-link")?.addEventListener("click", function(e) {
        e.preventDefault();
        // Switch to projects section
        sections.forEach(s => s.classList.remove("active"));
        document.getElementById("projects")?.classList.add("active");
        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        document.querySelector('nav a[data-page="projects"]')?.classList.add("active");
        // Show projects overview
        window.location.hash = "#fromHome";
        showProjectsOverview();
        window.scrollTo(0, 0);
    });

    // Mobil responsiv fix för videogrid
    const videoGrid = document.querySelector('.home-video-grid');
    if (videoGrid) {
        videoGrid.style.maxWidth = '100%';
        videoGrid.style.overflowX = 'hidden';
    }

    // Lägg till fullscreen-funktion för startsidans videor
    document.querySelectorAll(".home-video-grid .video-card").forEach(card => {
        const iframe = card.querySelector("iframe");
        if (iframe) {
            // Gör kortet klickbart
            card.style.cursor = "pointer";
            
            // Klickhändelse på kortet (inte iframen)
            card.addEventListener("click", (e) => {
                // Om användaren klickar direkt på iframen, låt Cloudinary-spelaren hantera det
                if (e.target === iframe) return;
                
                // Öppna fullscreen med cross-browser-stöd
                if (iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                } else if (iframe.webkitRequestFullscreen) {
                    // Safari-stöd
                    iframe.webkitRequestFullscreen();
                } else if (iframe.msRequestFullscreen) {
                    // IE/Edge-stöd
                    iframe.msRequestFullscreen();
                }
            });
            
            // Visuell feedback vid hover (valfritt men rekommenderat)
            card.addEventListener("mouseenter", () => {
                card.style.transform = "scale(1.02)";
            });
            
            card.addEventListener("mouseleave", () => {
                card.style.transform = "scale(1)";
            });
        }
    });

    // =========================
    // VISITOR COUNTER
    // =========================
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        visitorCountElement.textContent = visitCount;
    }

    // =========================
    // PREMIUM CONTACT FORM
    // =========================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = contactForm?.querySelector('.premium-submit-btn');
    
    const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
    
    // Form validation
    function validateForm(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || name.trim().length < 2) {
            return { valid: false, message: 'Lütfen geçerli bir isim girin (en az 2 karakter)' };
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return { valid: false, message: 'Lütfen geçerli bir e-posta adresi girin' };
        }
        
        if (!message || message.trim().length < 10) {
            return { valid: false, message: 'Mesajınız en az 10 karakter olmalıdır' };
        }
        
        return { valid: true };
    }
    
    // Set loading state
    function setLoadingState(isLoading) {
        if (!submitBtn) return;
        
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitBtn.querySelector('.btn-text i').style.display = 'none';
        } else {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text i').style.display = 'inline-block';
        }
    }
    
    // Show form status message
    function showFormStatus(type, message) {
        if (!formStatus) return;
        
        formStatus.className = 'form-status';
        formStatus.classList.add(type, 'show');
        formStatus.textContent = message;
        
        // Auto-hide after 6 seconds
        setTimeout(() => {
            hideFormStatus();
        }, 6000);
    }
    
    // Hide form status message
    function hideFormStatus() {
        if (!formStatus) return;
        formStatus.classList.remove('show');
    }
    
    // Submit form handler
    async function submitForm(e) {
        e.preventDefault();
        
        if (!contactForm) return;
        
        const formData = new FormData(contactForm);
        
        // Validate form
        const validation = validateForm(formData);
        if (!validation.valid) {
            showFormStatus('error', validation.message);
            return;
        }
        
        // Set loading state
        setLoadingState(true);
        hideFormStatus();
        
        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                showFormStatus('success', 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
                contactForm.reset();
            } else {
                showFormStatus('error', data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            showFormStatus('error', 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
        } finally {
            setLoadingState(false);
        }
    }
    
    // Attach submit handler
    if (contactForm) {
        contactForm.addEventListener('submit', submitForm);
        
        // Add focus effects to inputs
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                if (input.value) {
                    input.parentElement.classList.add('has-value');
                } else {
                    input.parentElement.classList.remove('has-value');
                }
            });
        });
    }
});
