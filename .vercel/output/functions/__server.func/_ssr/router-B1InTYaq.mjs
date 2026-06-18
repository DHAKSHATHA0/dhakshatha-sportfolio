import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Rocket, D as Download, C as ChevronLeft, a as ChevronRight, P as Phone, M as Mail, b as MapPin, G as Github, L as Linkedin, X, c as Menu } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-cIWbRFAl.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dhakshatha — AI & ML Engineer Portfolio" },
      { name: "description", content: "Portfolio of Dhakshatha — AI & Machine Learning student building intelligent solutions." },
      { property: "og:title", content: "Dhakshatha — AI & ML Engineer Portfolio" },
      { property: "og:description", content: "Building intelligent solutions through AI, ML and Generative AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,700;1,800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
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
const cert4 = "/assets/cert4-4xVlnwH2.jpeg";
const cert5 = "/assets/cert5-BD6qW5o0.jpeg";
const cert6 = "/assets/cert6-W3y1ngKn.jpeg";
const heroAi = "/assets/hero-ai-7VBt9vU6.jpg";
const sihImg = "/assets/sih-pMlM6-__.jpeg";
const pecImg = "/assets/pec--tGKSzpj.jpeg";
const karpagamImg = "/assets/karpagam-DUN7SCVs.jpeg";
const kprImg = "/assets/kpr-CJ1Se1TM.jpeg";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhakshatha — AI & Machine Learning Engineer" },
      { name: "description", content: "Portfolio of Dhakshatha — AI & Machine Learning student engineering intelligent solutions with Python, ML, Deep Learning and GenAI." },
      { property: "og:title", content: "Dhakshatha — AI & ML Engineer Portfolio" },
      { property: "og:description", content: "Building intelligent solutions through AI, ML, and Generative AI." }
    ]
  }),
  component: Portfolio
});
const skillGroups = [
  { idx: "  01", title: "Programming", items: ["Python", "C/C++", "Java"] },
  { idx: "  02", title: "AI & ML", items: ["Scikit-learn", "Pandas", "NumPy", "Data Visualization"] },
  { idx: "  03", title: "Web Tech", items: ["React", "Node.js", "Flask", "FastAPI", "MongoDB", "Tailwind", "Postgre SQL"] },
  { idx: "  04", title: "Tools", items: ["Git & GitHub", "Docker", "Jupyter", "VS Code", "Power BI"] }
];
const codingProfiles = [
  { platform: "LeetCode", problems: "160+", highlight: "Rating: 1359", badge: "1", certification: "", desc: "Active in LeetCode contests with strong competitive programming foundation.", bgImage: "" },
  { platform: "Skillrack", problems: "700+", highlight: "Problem Solving", badge: "", certification: "5", desc: "Extensive problem-solving experience across multiple domains.", bgImage: "" },
  { platform: "CodeChef", problems: "100+", highlight: "Programming language", badge: "", certification: "", desc: "Strengthened programming language.", bgImage: "" },
  { platform: "HackerRank", problems: "", highlight: "DSA", badge: "1", certification: "1", desc: "Demonstrated strong foundation in Data structure and algorithms.", bgImage: "" }
];
const achievements = [
  { title: "Smart India Hackathon", place: " Sri Eshwar College of Engineering", desc: "Shortlisted in Internal round of India's largest national-level innovation hackathon focused on AI-driven solutions.", bgImage: sihImg },
  //{ title: "MSME Innovation Challenge", achievement: "selected in the internal round", place:" Sri Eshwar College of Engineering", desc: "selected in the first internal college screening round held in our college.", bgImage: "" },
  { title: "PEC Hackathon ", achievement: "5th Place", place: " Panimalar Engineering College", desc: "Secured 5th place among 50+ teams in a competitive hackathon.", bgImage: pecImg },
  { title: "Paper Presentation Competition", achievement: "1st Place", place: " Karpagam College of Engineering", desc: "Won 1st place in a paper presentation competition.", bgImage: karpagamImg },
  { title: "Project Expo ", achievement: "1st Place", place: " KPR Institute of Engineering and Technology", desc: "secured 1st place in Project Expo in inter College fest.", bgImage: kprImg }
];
const certifications = [
  { issuer: "Great Learning", title: "C Language for Beginners", year: "2024", bgImage: "", certImage: cert2 },
  { issuer: "NPTEL", title: "Mastering Java Programming", year: "2025", bgImage: "", certImage: cert3 },
  { issuer: "Saylor Academy", title: "Certified in Artificial Intelligence", year: "2025", bgImage: "", certImage: cert1 },
  { issuer: "NPTEL", title: "Design Thinking – A Primer", year: "2026", bgImage: "", certImage: cert4 },
  { issuer: "IBM SkillsBuild", title: "Introduction to Generative AI", year: "2025", bgImage: "", certImage: cert5 },
  { issuer: "Zoho Young Creators Program", title: "Zoho Creator Student Training", year: "2025", bgImage: "", certImage: cert6 }
];
const projects = [
  {
    n: "01",
    title: "CareerMate – AI-Powered Career Guidance Chatbot",
    desc: "AI-powered career guidance chatbot providing course recommendations, aptitude preparation resources, interview guidance, and career support through an interactive conversational interface.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MYSQL", "NLTK", "Scikit-learn", "TF-IDF", "Cosine Similarity", "Regex", "gemini API"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  },
  {
    n: "02",
    title: "Plagiarism Detection and prevention System",
    desc: "NLP-based application for detecting textual similarities and identifying plagiarism in documents, with similarity score generation and detailed detection reports.",
    tags: ["Python", "NLP", "Text Similarity", "SHAP Model", "CNN–LSTM", "XGBoost", "Chrome Extension"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  },
  {
    n: "03",
    title: "Resume Analyzer",
    desc: "Intelligent resume evaluation tool that extracts skills, analyzes keywords, and provides ATS optimization suggestions to improve resume compatibility.",
    tags: ["Python", "Numpy", "Pandas", "Pytorch", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  },
  {
    n: "04",
    title: "Little Bloom – Baby Products E-Commerce Website",
    desc: "Responsive e-commerce website for baby products with product catalog, filtering, navigation, and modern UI focused on user experience.",
    tags: ["React.js", "PostgreSQL", "java Spring Boot", "Tailwind CSS", "Machine Learning", "Linear Regression"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  },
  {
    n: "05",
    title: "Kidney Disorder Monitoring System",
    desc: "Machine learning-based healthcare system for kidney disease prediction and patient health monitoring using medical data analysis and visualization.",
    tags: ["Python", "Machine Learning", "Hardware Integeration", "React.js", "MongoDB", "Tailwind CSS", "node.js", "Express.js"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  },
  {
    n: "06",
    title: "Language Learning Web Application",
    desc: "Interactive web platform designed to enhance vocabulary, grammar, and language proficiency through structured learning modules and practice exercises.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "JWT Authentication", "Tailwind CSS"],
    bgImage: heroAi,
    stats: { status: "Built" },
    links: { demo: "#", github: "#" }
  }
];
const education = [
  {
    phase: "Phase_2024_2028",
    school: "Sri Eshwar College of Engineering",
    score: "CGPA: 8.5",
    program: "B.E. CSE (Artificial Intelligence & Machine Learning)",
    location: "COIMBATORE, INDIA"
  }
];
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-cyan" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mono-label", children })
  ] });
}
function SectionTitle({ kicker, title }) {
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
  const [fullscreenCert, setFullscreenCert] = reactExports.useState(null);
  const [fullscreenAchiev, setFullscreenAchiev] = reactExports.useState(null);
  const certTrackRef = reactExports.useRef(null);
  const [certPaused, setCertPaused] = reactExports.useState(false);
  const scrollCerts = (dir) => {
    const track = certTrackRef.current;
    if (!track) return;
    setCertPaused(true);
    track.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "ACADEMIC", value: "8.5", unit: "CGPA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "PROJECTS", value: "10+", unit: "Built" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects", className: "group inline-flex items-center gap-3 bg-cyan text-primary-foreground px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:glow-cyan transition-all", children: [
              "VIEW MY WORK ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/resume.html", download: "Dhakshatha_Resume.html", className: "inline-flex items-center gap-3 border border-cyan text-cyan px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:bg-cyan/10 transition-all", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full overflow-hidden border border-cyan/40 glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profileImg,
              alt: "Dhakshatha portrait",
              className: "w-full h-full object-cover grayscale contrast-110",
              width: 460,
              height: 460
            }
          ) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: codingProfiles.map((cp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tech-card bracket relative p-8 hover:tech-card-hover overflow-hidden group",
          style: {
            backgroundImage: cp.bgImage ? `url(${cp.bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center"
          },
          children: [
            cp.bgImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-cyan", children: cp.platform }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                cp.problems && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold", children: cp.problems }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-cyan tracking-[0.15em] mt-1", children: cp.highlight })
              ] }),
              (cp.badge || cp.certification) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-3", children: [
                cp.badge && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 bg-cyan/10 border border-cyan/40 text-cyan text-xs px-2 py-1 rounded-sm tracking-wide", children: [
                  "🏅 Badge: ",
                  cp.badge
                ] }),
                cp.certification && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 bg-cyan/10 border border-cyan/40 text-cyan text-xs px-2 py-1 rounded-sm tracking-wide", children: [
                  "📜 Certification: ",
                  cp.certification
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: cp.desc })
            ] })
          ]
        },
        cp.platform
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "achievements", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: " ", title: "Achievements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: achievements.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tech-card bracket relative p-8 hover:tech-card-hover overflow-hidden group cursor-pointer",
          style: {
            backgroundImage: a.bgImage ? `url(${a.bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "320px"
          },
          onClick: () => a.bgImage && setFullscreenAchiev(a),
          children: [
            a.bgImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: a.title }),
              a.achievement && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-cyan text-sm tracking-[0.15em]", children: a.achievement }),
              a.place && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground tracking-[0.1em]", children: a.place.toUpperCase() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground border-l-2 border-cyan/40 pl-3", children: a.desc })
            ] })
          ]
        },
        a.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: " " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 text-3xl font-extrabold", children: [
          "Certifications ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-cyan text-glow", children: "& Courses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => scrollCerts("left"),
              className: "absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-cyan text-black hover:bg-cyan/80 transition shadow-lg",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => scrollCerts("right"),
              className: "absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-cyan text-black hover:bg-cyan/80 transition shadow-lg",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto scrollbar-hide", ref: certTrackRef, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                  .cert-track { display:flex; gap:20px; align-items:center; width:max-content; }
                  .scrollbar-hide::-webkit-scrollbar { display:none; }
                  .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
                  @keyframes r2l { from { transform: translateX(0); } to { transform: translateX(-50%);} }
                  .cert-track-anim { animation: r2l 25s linear infinite; }
                  .cert-track-anim.paused { animation-play-state: paused; }
                ` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `cert-track${certPaused ? "" : " cert-track-anim"}`, children: (certPaused ? certifications : certifications.concat(certifications)).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-72 flex-shrink-0 cursor-pointer relative rounded-lg overflow-hidden shadow-lg",
                onClick: () => c.certImage && setFullscreenCert(c),
                children: c.certImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.certImage, alt: c.title, className: "w-full h-44 object-cover" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-cyan font-bold tracking-widest", children: c.issuer.toUpperCase() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white font-semibold mt-0.5 leading-tight", children: c.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60 mt-1 tracking-widest", children: c.year })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-4 rounded-lg h-44 flex flex-col justify-end border border-cyan/30 bg-background/80", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-cyan font-bold tracking-widest", children: c.issuer.toUpperCase() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold text-sm text-white leading-tight", children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-white/60 mt-1 tracking-widest", children: c.year })
                ] })
              },
              `${c.title}-${i}`
            )) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "tech-card bracket relative overflow-hidden group",
          style: {
            backgroundImage: p.bgImage ? `url(${p.bgImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "280px"
          },
          children: [
            p.bgImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-8 flex flex-col justify-end h-full", style: { minHeight: "280px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cyan/70 tracking-widest", children: p.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-cyan font-semibold tracking-[0.15em]", children: p.stats.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-extrabold", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-2xl", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2 flex-wrap", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] bg-cyan/10 border border-cyan/30 text-cyan px-2 py-1 rounded-sm tracking-wide", children: t }, t)) })
            ] })
          ]
        },
        p.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { kicker: "", title: "Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: education.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-6 bracket", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: e.phase }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-bold", children: e.school }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-cyan", children: e.program }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-muted-foreground", children: [
          e.score,
          "  ",
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
    fullscreenCert && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-6",
        onClick: () => setFullscreenCert(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl w-full", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute -top-4 -right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-cyan text-black font-bold hover:bg-cyan/80 transition shadow-lg",
              onClick: () => setFullscreenCert(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fullscreenCert.certImage || "", alt: fullscreenCert.title, className: "w-full h-auto rounded-lg" })
        ] })
      }
    ),
    fullscreenAchiev && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-6",
        onClick: () => setFullscreenAchiev(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl w-full", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute -top-4 -right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-cyan text-black font-bold hover:bg-cyan/80 transition shadow-lg",
              onClick: () => setFullscreenAchiev(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fullscreenAchiev.bgImage || "", alt: fullscreenAchiev.title, className: "w-full h-auto rounded-lg" })
        ] })
      }
    )
  ] });
}
function Stat({ label, value, unit }) {
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
function ContactRow({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 flex items-center justify-center bg-background/10 rounded", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: value })
    ] })
  ] });
}
function Social({ href, icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-background/10 rounded-md hover:bg-background/20 transition", children: icon });
}
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
