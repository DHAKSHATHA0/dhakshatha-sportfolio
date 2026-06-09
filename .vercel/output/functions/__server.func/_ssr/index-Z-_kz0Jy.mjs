import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R } from "./router-BaU1B8J9.mjs";
import { R as Rocket, D as Download, P as Phone, M as Mail, a as MapPin, G as Github, L as Linkedin, X, b as Menu } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const links = [
  { href: "#home", label: "HOME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#achievements", label: "ACHIEVEMENTS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-background/70 border-b border-cyan/15" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-3 font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded border border-cyan text-cyan text-sm font-bold", children: "D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg tracking-[0.18em] font-semibold", children: [
          "DHAKSHATHA",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: " ." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan", children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-cyan", onClick: () => setOpen((o) => !o), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border border-cyan/20 rounded p-4 mb-3 backdrop-blur bg-background/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "text-xs tracking-[0.18em] text-muted-foreground hover:text-cyan", children: l.label }, l.href)) }) })
  ] }) });
}
const profileImg = "/assets/photo-DFvadYlf.jpeg";
const cert1 = "/assets/cert1-Dv0D3Qsc.jpeg";
const cert2 = "/assets/cert2-BfGr_953.jpeg";
const cert3 = "/assets/cert3-DNRBHBjH.jpeg";
const cert4 = "/assets/cert4-BD6qW5o0.jpeg";
const cert5 = "/assets/cert5-W3y1ngKn.jpeg";
const skillGroups = [{
  idx: "  01",
  title: "Programming",
  items: ["Python", "C/C++", "Java"]
}, {
  idx: "  02",
  title: "AI & ML",
  items: ["Scikit-learn", "Pandas", "NumPy"]
}, {
  idx: "  03",
  title: "Web Tech",
  items: ["React", "Node.js", "Flask", "FastAPI", "MongoDB", "Tailwind", "Postgre SQL"]
}, {
  idx: "  04",
  title: "Tools",
  items: ["Git & GitHub", "Docker", "Jupyter", "VS Code", "Power BI"]
}];
const codingProfiles = [{
  platform: "LeetCode",
  problems: "160+",
  highlight: "Rating: 1359",
  desc: "Active in LeetCode contests with strong competitive programming foundation.",
  bgImage: ""
}, {
  platform: "Skillrack",
  problems: "700+",
  highlight: "Problem Solving",
  desc: "Extensive problem-solving experience across multiple domains.",
  bgImage: ""
}, {
  platform: "CodeChef",
  problems: "100+",
  highlight: "Programming language",
  desc: "Strengthened programming language.",
  bgImage: ""
}, {
  platform: "HackerRank",
  problems: "200+",
  highlight: "DSA",
  desc: "Demonstrated strong foundation in Data structure and algorithms.",
  bgImage: ""
}];
const achievements = [{
  title: "Smart India Hackathon",
  place: " Sri Eshwar College of Engineering",
  desc: "Participated in India's largest national-level innovation hackathon focused on AI-driven solutions.",
  bgImage: ""
}, {
  title: "MSME Innovation Challenge",
  achievement: "selected in the internal round",
  place: " Sri Eshwar College of Engineering",
  desc: "selected in the first internal college screening round held in our college.",
  bgImage: ""
}, {
  title: "PEC Hackathon ",
  achievement: "5th Place",
  place: " Panimalar Engineering College",
  desc: "Secured 5th place among 50+ teams in a competitive hackathon.",
  bgImage: ""
}, {
  title: "Paper Presentation Competition",
  achievement: "1st Place",
  place: " Karpagam College of Engineering",
  desc: "Won 1st place in a paper presentation competition.",
  bgImage: ""
}, {
  title: "Project Expo ",
  achievement: "1st Place",
  place: " KPR Institute of Engineering and Technology",
  desc: "secured 1st place in Project Expo in inter College fest.",
  bgImage: ""
}];
const certifications = [{
  issuer: "Great Learning",
  title: "C Language for Beginners",
  year: "2024",
  bgImage: "",
  certImage: cert1
}, {
  issuer: "NPTEL",
  title: "Mastering Java Programming",
  year: "2025",
  bgImage: "",
  certImage: cert2
}, {
  issuer: "Saylor Academy",
  title: "Certified in Artificial Intelligence",
  year: "2025",
  bgImage: "",
  certImage: cert3
}, {
  issuer: "NPTEL",
  title: "Design Thinking – A Primer",
  year: "2026",
  bgImage: "",
  certImage: cert4
}, {
  issuer: "IBM SkillsBuild",
  title: "Introduction to Generative AI",
  year: "2025",
  bgImage: "",
  certImage: cert5
}, {
  issuer: "Zoho Young Creators Program",
  title: "Zoho Creator Student Training",
  year: "2025",
  bgImage: "",
  certImage: ""
}];
const projects = [{
  n: "01",
  title: "CareerMate AI",
  desc: "An AI-driven career guidance platform that recommends learning paths, internships and skill gaps using LLM-powered resume parsing.",
  fullDesc: "CareerMate AI is an intelligent career guidance system that leverages LLM technology to analyze resumes, identify skill gaps, and recommend personalized learning paths and internship opportunities.",
  tags: ["Python", "FastAPI", "LangChain", "React", "PostgreSQL"],
  images: ["", "", "", "", ""],
  // Up to 5 images - first one used as background
  stats: {
    users: 150,
    impact: "42K",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}, {
  n: "02",
  title: "Little Bloom",
  desc: "A child-development tracking app using ML to flag early growth anomalies, paired with personalized activity suggestions for parents.",
  fullDesc: "Little Bloom uses machine learning algorithms to monitor child development metrics and flag potential growth anomalies early, providing parents with personalized activity recommendations.",
  tags: ["TensorFlow", "Flask", "React Native", "Firebase"],
  images: ["", "", "", "", ""],
  stats: {
    users: 200,
    impact: "50K",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}, {
  n: "03",
  title: "Plagiarism Detection Engine",
  desc: "NLP-based semantic plagiarism detector using sentence-transformers and vector similarity to flag paraphrased content.",
  fullDesc: "Advanced plagiarism detection using transformer models and semantic similarity matching to identify paraphrased and disguised content with high accuracy.",
  tags: ["Python", "Transformers", "FAISS", "Streamlit"],
  images: ["", "", "", "", ""],
  stats: {
    users: 300,
    impact: "1M+",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}, {
  n: "04",
  title: "Crop Disease Classifier",
  desc: "A CNN model identifying 38 crop diseases from leaf images, deployed as a lightweight mobile-friendly PWA for farmers.",
  fullDesc: "Deep learning model trained to identify and classify 38 different crop diseases from leaf images, deployed as a progressive web app for easy farmer access.",
  tags: ["PyTorch", "CNN", "React PWA", "Docker"],
  images: ["", "", "", "", ""],
  stats: {
    users: 500,
    impact: "12K",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}, {
  n: "05",
  title: "GenAI Notes Summarizer",
  desc: "A retrieval-augmented summarizer that turns long lecture PDFs into structured study notes with bullet highlights and quizzes.",
  fullDesc: "Intelligent summarization tool using retrieval-augmented generation to transform educational content into concise, structured study notes with auto-generated quizzes.",
  tags: ["LangChain", "OpenAI", "Chroma", "Next.js"],
  images: ["", "", "", "", ""],
  stats: {
    users: 250,
    impact: "5K",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}, {
  n: "06",
  title: "Portfolio Intelligence",
  desc: "This very portfolio — a futuristic, recruiter-focused experience with smooth motion, monospace aesthetic and modular sections.",
  fullDesc: "A modern portfolio website built with cutting-edge web technologies, featuring smooth animations, responsive design, and an impressive showcase of projects and skills.",
  tags: ["React", "TailwindCSS", "Framer Motion", "TanStack Start"],
  images: ["", "", "", "", ""],
  stats: {
    users: 100,
    impact: "8K",
    status: "Live"
  },
  links: {
    demo: "#",
    github: "#"
  }
}];
const education = [{
  phase: "Phase_2024_2028",
  school: "Sri Eshwar College of Engineering",
  score: "CGPA: 8.45",
  program: "B.E. CSE (Artificial Intelligence & Machine Learning)",
  location: "COIMBATORE, INDIA"
}];
function SectionLabel({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-cyan" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono-label", children })
  ] });
}
function SectionTitle({
  kicker,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-extrabold tracking-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
        title.split(" ")[0],
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cyan text-glow", children: title.split(" ").slice(1).join(" ") })
    ] })
  ] });
}
function Portfolio() {
  const [certCarouselIndex, setCertCarouselIndex] = reactExports.useState(0);
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  const [galleryProject, setGalleryProject] = reactExports.useState(null);
  const [galleryImageIndex, setGalleryImageIndex] = reactExports.useState(0);
  const [fullscreenCert, setFullscreenCert] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-32 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-16 bg-cyan mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight", children: [
            "DHAKSHATHA ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cyan text-glow" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl md:text-3xl italic text-cyan text-glow font-semibold tracking-tight", children: "AI / ML ENGINEER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-l-2 border-cyan/60 pl-5 max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono-label mb-3", children: "ABOUT ME:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
              "I am an aspiring ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "AI & Machine Learning Engineer" }),
              " passionate about turning data into intelligent products. I work across the stack — from",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "Machine Learning" }),
              " models to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "production-ready" }),
              " web deployments. Always learning, and focused on solving real-world problems through AI and innovation."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-2 gap-4 max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "ACADEMIC", value: "8.45", unit: "CGPA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "PROJECTS", value: "10+", unit: "Built" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects", className: "group inline-flex items-center gap-3 bg-cyan text-primary-foreground px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:glow-cyan transition-all", children: [
              "VIEW MY WORK ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/resume.pdf", className: "inline-flex items-center gap-3 border border-cyan text-cyan px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:bg-cyan/10 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
              " MY Resume"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-[340px] h-[340px] md:w-[460px] md:h-[460px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-cyan/30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full border border-cyan/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-12 rounded-full border border-cyan/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border-2 border-dashed border-cyan/20 animate-radar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-px bg-cyan/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-0 right-0 h-px bg-cyan/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full overflow-hidden border border-cyan/40 glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImg, alt: "Dhakshatha portrait", className: "w-full h-full object-cover grayscale contrast-110", width: 460, height: 460 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -right-2 top-10 bracket relative bg-background/70 backdrop-blur px-4 py-3 text-[10px] tracking-[0.18em] text-cyan border border-cyan/40 rounded-sm", children: [
            "SUBJECT: DHAKSHATHA",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "DOMAIN: AI & ML",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "CURRENT_SEM : 6th"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CornerTicks, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Technical Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: skillGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card bracket relative p-6 hover:tech-card-hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan", children: [
            g.idx,
            "    "
          ] }),
          g.title
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: g.items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 bg-cyan" }),
          " ",
          s
        ] }, s)) })
      ] }, g.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "coding-profiles", className: "py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Coding Profiles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: codingProfiles.map((cp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card bracket relative p-6 hover:tech-card-hover overflow-hidden group", style: {
        backgroundImage: cp.bgImage ? `url(${cp.bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }, children: [
        cp.bgImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-cyan", children: cp.platform }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold", children: cp.problems }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-cyan tracking-[0.15em] mt-1", children: cp.highlight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: cp.desc })
        ] })
      ] }, cp.platform)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "achievements", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: " ", title: "Achievements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card bracket relative p-6 hover:tech-card-hover overflow-hidden group", style: {
        backgroundImage: a.bgImage ? `url(${a.bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }, children: [
        a.bgImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: a.title }),
          a.achievement && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-cyan text-sm tracking-[0.15em]", children: a.achievement }),
          a.place && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground tracking-[0.1em]", children: a.place.toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground border-l-2 border-cyan/40 pl-3", children: a.desc })
        ] })
      ] }, a.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: " " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 text-3xl font-extrabold", children: [
          "Certifications ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cyan text-glow", children: "& Courses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                  .cert-track { display:flex; gap:20px; align-items:center; }
                  @keyframes r2l { from { transform: translateX(0); } to { transform: translateX(-50%);} }
                ` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cert-track", style: {
            animation: `r2l 25s linear infinite`
          }, children: certifications.concat(certifications).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 flex-shrink-0 cursor-pointer", onClick: () => c.certImage && setFullscreenCert(c), children: c.certImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.certImage, alt: c.title, className: "w-full h-44 object-cover rounded-lg shadow-lg" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-cyan font-bold", children: c.issuer.toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: c.title })
          ] }) }, `${c.title}-${i}`)) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-6 bracket hover:scale-105 transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-cyan font-semibold", children: p.stats.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-xl font-bold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2 flex-wrap", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] bg-background/30 px-2 py-1 rounded-sm", children: t }, t)) })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-6 bracket", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: e.phase }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: e.school }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-cyan", children: e.program }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-muted-foreground", children: [
          e.score,
          " • ",
          e.location
        ] })
      ] }, e.school)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: " ", title: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card bracket relative p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono-label", children: "INITATE CONTACT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 text-3xl font-extrabold", children: [
          "Contact ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cyan text-glow", children: "Through" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Open to internships, research collaborations, and full-time AI/ML roles. Drop a message — I usually respond within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }), label: "Phone", value: "+91 6383247453" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }), label: "Personal-MAIL", value: "dhatchuu08@gmail.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }), label: "Official-MAIL", value: "dhakshatha.s2024aiml@sece.ac.in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }), label: "Living", value: "Coimbatore, India" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Social, { href: "https://github.com/DHAKSHATHA0", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Social, { href: "https://www.linkedin.com/in/dhakshatha-selvaraj-055139329/", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) })
        ] })
      ] }) })
    ] }) }),
    fullscreenCert && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute right-2 top-2 p-2 rounded-full bg-white/10", onClick: () => setFullscreenCert(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fullscreenCert.certImage || "", alt: fullscreenCert.title, className: "w-full h-auto rounded-lg" })
    ] }) })
  ] });
}
function Stat({
  label,
  value,
  unit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mono-label text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold mt-2", children: [
      value,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: unit })
    ] })
  ] });
}
function CornerTicks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-6 -top-6 w-12 h-12 border-t border-l border-cyan/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -bottom-6 w-12 h-12 border-b border-r border-cyan/40" })
  ] });
}
function ContactRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 flex items-center justify-center bg-background/10 rounded", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: value })
    ] })
  ] });
}
function Social({
  href,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-background/10 rounded-md hover:bg-background/20 transition", children: icon });
}
export {
  Portfolio as component,
  R as default
};
