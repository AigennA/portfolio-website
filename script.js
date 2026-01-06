document.addEventListener("DOMContentLoaded", () => {
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
                    src: "videos/dashboard.mp4",
                    description: "Responsive dashboard with focus on UX and component structure."
                },
                {
                    title: "E-Commerce TechVora",
                    type: "video",
                    src: "videos/techvora.mp4",
                    description: "E-commerce project built with Lovable.",
                    links: {
                        live: "https://lovable.dev/projects/f5c87ca7-608c-4e0f-9f4b-e4e0a2de4099?permissionView=main",
                        github: "https://github.com/AigennA/techvora"
                    }
                },
                {
                    title: "E-Commerce Cotton",
                    type: "video",
                    src: "videos/cotton.mp4",
                    description: "E-commerce project.",
                    links: {
                        live: "https://agnes-nora-git-all-fixes-aomurm-gmailcoms-projects.vercel.app/",
                        github: "https://github.com/AigennA/agnes-nora"
                    }
                }
            ]
        },
        {
            title: "Web Application – Gala Emporium",
            type: "video",
            src: "videos/gala-emporium-housetech.mp4",
            description: "Ett Skolprojekt som byggdes med gruppen. Html,Css,Js och en SPA site."
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
        projectView.innerHTML = `
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
    }

    function showProject(project) {
        if (project.children) {
            projectView.innerHTML = `
                <button class="back-btn">← Tillbaka</button>
                <h1>${project.title}</h1>
                <div class="project-list">
                    ${project.children.map((c, i) =>
                        `<button data-child-index="${i}">${c.title}</button>`
                    ).join("")}
                </div>
            `;

            document.querySelector(".back-btn").onclick = showProjectsOverview;

            document.querySelectorAll(".project-list button").forEach(btn => {
                btn.onclick = () =>
                    showProjectDetail(project.children[btn.dataset.childIndex]);
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

    document.querySelectorAll(".home-video-grid video").forEach(video => {
        video.addEventListener("click", () => {
            video.controls = true;
            video.muted = false;
            video.play();

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            }
        });
    });

    overviewCard?.addEventListener("click", showProjectsOverview);
});
