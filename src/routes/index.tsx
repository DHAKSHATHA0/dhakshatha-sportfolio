import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone,
  Rocket, Send, ChevronLeft, ChevronRight, X,
} from "lucide-react";
import { Nav } from "../components/portfolio/Nav";
import profileImg from "../assets/photo.jpeg";
import cert1 from "../assets/certs/cert1.jpeg";
import cert2 from "../assets/certs/cert2.jpeg";
import cert3 from "../assets/certs/cert3.jpeg";
import cert4 from "../assets/certs/cert4.jpeg";
import cert5 from "../assets/certs/cert5.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhakshatha — AI & Machine Learning Engineer" },
      { name: "description", content: "Portfolio of Dhakshatha — AI & Machine Learning student engineering intelligent solutions with Python, ML, Deep Learning and GenAI." },
      { property: "og:title", content: "Dhakshatha — AI & ML Engineer Portfolio" },
      { property: "og:description", content: "Building intelligent solutions through AI, ML, and Generative AI." },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */
const skillGroups = [
  { idx: "  01", title: "Programming", items: ["Python", "C/C++", "Java"] },
  { idx: "  02", title: "AI & ML", items: ["Scikit-learn", "Pandas", "NumPy"] },
  { idx: "  03", title: "Web Tech", items: ["React", "Node.js", "Flask", "FastAPI", "MongoDB", "Tailwind","Postgre SQL"] },
  { idx: "  04", title: "Tools", items: ["Git & GitHub", "Docker", "Jupyter", "VS Code", "Power BI"] },
];

const codingProfiles = [
  { platform: "LeetCode", problems: "160+", highlight: "Rating: 1359", desc: "Active in LeetCode contests with strong competitive programming foundation.", bgImage: "" },
  { platform: "Skillrack", problems: "700+", highlight: "Problem Solving", desc: "Extensive problem-solving experience across multiple domains.", bgImage: "" },
  { platform: "CodeChef", problems: "100+", highlight: "Programming language", desc: "Strengthened programming language.", bgImage: "" },
  { platform: "HackerRank", problems: "200+", highlight: "DSA", desc: "Demonstrated strong foundation in Data structure and algorithms.", bgImage: "" }
];

const achievements = [
  { title: "Smart India Hackathon",place:" Sri Eshwar College of Engineering", desc: "Participated in India's largest national-level innovation hackathon focused on AI-driven solutions.", bgImage: "" },
  { title: "MSME Innovation Challenge", achievement: "selected in the internal round", place:" Sri Eshwar College of Engineering", desc: "selected in the first internal college screening round held in our college.", bgImage: "" },
  { title: "PEC Hackathon ", achievement: "5th Place",place:" Panimalar Engineering College", desc: "Secured 5th place among 50+ teams in a competitive hackathon.", bgImage: "" },
  { title: "Paper Presentation Competition", achievement: "1st Place",place:" Karpagam College of Engineering", desc: "Won 1st place in a paper presentation competition.", bgImage: "" },
  { title: "Project Expo ", achievement: "1st Place",place:" KPR Institute of Engineering and Technology", desc: "secured 1st place in Project Expo in inter College fest.", bgImage: "" },
];

const certifications = [
  { issuer: "Great Learning", title: "C Language for Beginners", year: "2024", bgImage: "", certImage: cert1 },
  { issuer: "NPTEL", title: "Mastering Java Programming", year: "2025", bgImage: "", certImage: cert2 },
  { issuer: "Saylor Academy", title: "Certified in Artificial Intelligence", year: "2025", bgImage: "", certImage: cert3 },
  { issuer: "NPTEL", title: "Design Thinking – A Primer", year: "2026", bgImage: "", certImage: cert4 },
  { issuer: "IBM SkillsBuild", title: "Introduction to Generative AI", year: "2025", bgImage: "", certImage: cert5 },
  { issuer: "Zoho Young Creators Program", title: "Zoho Creator Student Training", year: "2025", bgImage: "", certImage: "" },
];

const projects = [
  {
    n: "01",
    title: "CareerMate AI",
    desc: "An AI-driven career guidance platform that recommends learning paths, internships and skill gaps using LLM-powered resume parsing.",
    fullDesc: "CareerMate AI is an intelligent career guidance system that leverages LLM technology to analyze resumes, identify skill gaps, and recommend personalized learning paths and internship opportunities.",
    tags: ["Python", "FastAPI", "LangChain", "React", "PostgreSQL"],
    images: ["", "", "", "", ""], // Up to 5 images - first one used as background
    stats: { users: 150, impact: "42K", status: "Live" },
    links: { demo: "#", github: "#" },
  },
  {
    n: "02",
    title: "Little Bloom",
    desc: "A child-development tracking app using ML to flag early growth anomalies, paired with personalized activity suggestions for parents.",
    fullDesc: "Little Bloom uses machine learning algorithms to monitor child development metrics and flag potential growth anomalies early, providing parents with personalized activity recommendations.",
    tags: ["TensorFlow", "Flask", "React Native", "Firebase"],
    images: ["", "", "", "", ""],
    stats: { users: 200, impact: "50K", status: "Live" },
    links: { demo: "#", github: "#" },
  },
  {
    n: "03",
    title: "Plagiarism Detection Engine",
    desc: "NLP-based semantic plagiarism detector using sentence-transformers and vector similarity to flag paraphrased content.",
    fullDesc: "Advanced plagiarism detection using transformer models and semantic similarity matching to identify paraphrased and disguised content with high accuracy.",
    tags: ["Python", "Transformers", "FAISS", "Streamlit"],
    images: ["", "", "", "", ""],
    stats: { users: 300, impact: "1M+", status: "Live" },
    links: { demo: "#", github: "#" },
  },
  {
    n: "04",
    title: "Crop Disease Classifier",
    desc: "A CNN model identifying 38 crop diseases from leaf images, deployed as a lightweight mobile-friendly PWA for farmers.",
    fullDesc: "Deep learning model trained to identify and classify 38 different crop diseases from leaf images, deployed as a progressive web app for easy farmer access.",
    tags: ["PyTorch", "CNN", "React PWA", "Docker"],
    images: ["", "", "", "", ""],
    stats: { users: 500, impact: "12K", status: "Live" },
    links: { demo: "#", github: "#" },
  },
  {
    n: "05",
    title: "GenAI Notes Summarizer",
    desc: "A retrieval-augmented summarizer that turns long lecture PDFs into structured study notes with bullet highlights and quizzes.",
    fullDesc: "Intelligent summarization tool using retrieval-augmented generation to transform educational content into concise, structured study notes with auto-generated quizzes.",
    tags: ["LangChain", "OpenAI", "Chroma", "Next.js"],
    images: ["", "", "", "", ""],
    stats: { users: 250, impact: "5K", status: "Live" },
    links: { demo: "#", github: "#" },
  },
  {
    n: "06",
    title: "Portfolio Intelligence",
    desc: "This very portfolio — a futuristic, recruiter-focused experience with smooth motion, monospace aesthetic and modular sections.",
    fullDesc: "A modern portfolio website built with cutting-edge web technologies, featuring smooth animations, responsive design, and an impressive showcase of projects and skills.",
    tags: ["React", "TailwindCSS", "Framer Motion", "TanStack Start"],
    images: ["", "", "", "", ""],
    stats: { users: 100, impact: "8K", status: "Live" },
    links: { demo: "#", github: "#" },
  },
];

const education = [
  {
    phase: "Phase_2024_2028",
    school: "Sri Eshwar College of Engineering",
    score: "CGPA: 8.45",
    program: "B.E. CSE (Artificial Intelligence & Machine Learning)",
    location: "COIMBATORE, INDIA",
  },
];

/* ---------- Components ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-12 bg-cyan" />
      <span className="mono-label">{children}</span>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <SectionLabel>{kicker}</SectionLabel>
      <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-foreground">{title.split(" ")[0]} </span>
        <span className="italic text-cyan text-glow">{title.split(" ").slice(1).join(" ")}</span>
      </h2>
    </div>
  );
}

/* ---------- Page ---------- */
function Portfolio() {
  const [certCarouselIndex, setCertCarouselIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [galleryProject, setGalleryProject] = useState<(typeof projects)[0] | null>(null);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const [fullscreenCert, setFullscreenCert] = useState<(typeof certifications)[0] | null>(null);

  const nextCert = () => {
    setCertCarouselIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCertCarouselIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className="min-h-screen text-foreground">
      <Nav />

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Left */}
          <div>
            <div className="h-1 w-16 bg-cyan mb-6" />
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              DHAKSHATHA <span className="italic text-cyan text-glow"></span>
            </h1>
            <div className="mt-2 text-2xl md:text-3xl italic text-cyan text-glow font-semibold tracking-tight">
              AI / ML ENGINEER
            </div>

            <div className="mt-10 border-l-2 border-cyan/60 pl-5 max-w-xl">
              <div className="mono-label mb-3">ABOUT ME:</div>
              <p className="text-muted-foreground leading-relaxed">
                I am an aspiring <span className="text-foreground font-semibold">AI &amp; Machine Learning Engineer</span> passionate
                about turning data into intelligent products. I work across the stack — from{" "}
                <span className="text-cyan">Machine Learning</span> models to{" "}
                <span className="text-cyan">production-ready</span> web deployments. Always learning,
                 and focused on solving real-world problems through AI and innovation.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <Stat label="ACADEMIC" value="8.45" unit="CGPA" />
              <Stat label="PROJECTS" value="10+" unit="Built" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-3 bg-cyan text-primary-foreground px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:glow-cyan transition-all">
                VIEW MY WORK <Rocket size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-3 border border-cyan text-cyan px-6 py-3 rounded-sm font-bold tracking-[0.15em] text-sm hover:bg-cyan/10 transition-all">
                <Download size={16} /> MY Resume
              </a>
            </div>
          </div>

          {/* Right — radar profile */}
          <div className="relative mx-auto w-[340px] h-[340px] md:w-[460px] md:h-[460px]">
            {/* rings */}
            <div className="absolute inset-0 rounded-full border border-cyan/30" />
            <div className="absolute inset-6 rounded-full border border-cyan/20" />
            <div className="absolute inset-12 rounded-full border border-cyan/15" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan/20 animate-radar" />
            {/* crosshair lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan/15" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan/15" />
            {/* image */}
            <div className="absolute inset-16 rounded-full overflow-hidden border border-cyan/40 glow-cyan">
              <img
                src={profileImg}
                alt="Dhakshatha portrait"
                className="w-full h-full object-cover grayscale contrast-110"
                width={460}
                height={460}
              />
            </div>
            {/* HUD label */}
            <div className="absolute -right-2 top-10 bracket relative bg-background/70 backdrop-blur px-4 py-3 text-[10px] tracking-[0.18em] text-cyan border border-cyan/40 rounded-sm">
              SUBJECT: DHAKSHATHA<br />
              DOMAIN: AI & ML<br />
              CURRENT_SEM : 6th
            </div>
            {/* corner ticks */}
            <CornerTicks />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="" title="Technical Skills" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillGroups.map((g) => (
              <div key={g.title} className="tech-card bracket relative p-6 hover:tech-card-hover">
                <div className="flex items-start justify-between mb-5">
                  <h3 className="text-xl font-bold">
                    <span className="text-cyan">{g.idx}    </span>{g.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 bg-cyan" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CODING PROFILES */}
      <section id="coding-profiles" className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="" title="Coding Profiles" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codingProfiles.map((cp) => (
              <div
                key={cp.platform}
                className="tech-card bracket relative p-6 hover:tech-card-hover overflow-hidden group"
                style={{
                  backgroundImage: cp.bgImage ? `url(${cp.bgImage})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {cp.bgImage && (
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                )}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-cyan">{cp.platform}</h3>
                  <div className="mt-3">
                    <div className="text-3xl font-extrabold">{cp.problems}</div>
                    <div className="text-sm text-cyan tracking-[0.15em] mt-1">{cp.highlight}</div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{cp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker=" " title="Achievements" />
          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="tech-card bracket relative p-6 hover:tech-card-hover overflow-hidden group"
                style={{
                  backgroundImage: a.bgImage ? `url(${a.bgImage})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {a.bgImage && (
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                )}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">{a.title}</h3>
                  {a.achievement && <div className="mt-1 text-cyan text-sm tracking-[0.15em]">{a.achievement}</div>}
                  {a.place && <div className="text-xs text-muted-foreground tracking-[0.1em]">{a.place.toUpperCase()}</div>}
                  <p className="mt-3 text-sm text-muted-foreground border-l-2 border-cyan/40 pl-3">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <SectionLabel> </SectionLabel>
            <h3 className="mt-3 text-3xl font-extrabold">
              Certifications <span className="italic text-cyan text-glow">&amp; Courses</span>
            </h3>

            {/* Certifications row — horizontal scroll, clean layout, right-to-left animation */}
            <div className="mt-8">
              <div className="overflow-hidden">
                <style>{`\n                  .cert-track { display:flex; gap:20px; align-items:center; }\n                  @keyframes r2l { from { transform: translateX(0); } to { transform: translateX(-50%);} }\n                `}</style>
                <div
                  className="cert-track"
                  style={{ animation: `r2l 25s linear infinite` }}
                >
                  {certifications.concat(certifications).map((c, i) => (
                    <div key={`${c.title}-${i}`} className="w-72 flex-shrink-0 cursor-pointer" onClick={() => c.certImage && setFullscreenCert(c)}>
                      {c.certImage ? (
                        <img src={c.certImage} alt={c.title} className="w-full h-44 object-cover rounded-lg shadow-lg" />
                      ) : (
                        <div className="tech-card p-4 rounded-lg"> 
                          <div className="text-[10px] text-cyan font-bold">{c.issuer.toUpperCase()}</div>
                          <div className="mt-2 font-semibold">{c.title}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects (kept minimal) */}
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="" title="Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((p) => (
              <div key={p.title} className="tech-card p-6 bracket hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">{p.n}</div>
                  <div className="text-sm text-cyan font-semibold">{p.stats.status}</div>
                </div>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[12px] bg-background/30 px-2 py-1 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="" title="Education" />
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e) => (
              <div key={e.school} className="tech-card p-6 bracket">
                <div className="text-xs text-muted-foreground">{e.phase}</div>
                <h3 className="mt-2 text-xl font-bold">{e.school}</h3>
                <div className="mt-1 text-sm text-cyan">{e.program}</div>
                <div className="mt-2 text-sm text-muted-foreground">{e.score} • {e.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker=" " title="Contact" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left info */}
            <div className="tech-card bracket relative p-8">
              <div className="mono-label">INITATE CONTACT</div>
              <h3 className="mt-3 text-3xl font-extrabold">
                Contact <span className="italic text-cyan text-glow">Through</span>
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Open to internships, research collaborations, and full-time AI/ML roles.
                Drop a message — I usually respond within 24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <ContactRow icon={<Phone size={14} />} label="Phone" value="+91 6383247453" />
                <ContactRow icon={<Mail size={14} />} label="Personal-MAIL" value="dhatchuu08@gmail.com" />
                <ContactRow icon={<Mail size={14} />} label="Official-MAIL" value="dhakshatha.s2024aiml@sece.ac.in" />
                <ContactRow icon={<MapPin size={14} />} label="Living" value="Coimbatore, India" />
              </div>
              <div className="mt-8 flex gap-3">
      
                <Social href="https://github.com/DHAKSHATHA0" icon={<Github size={16} />} />
                <Social href="https://www.linkedin.com/in/dhakshatha-selvaraj-055139329/" icon={<Linkedin size={16} />} />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen cert modal */}
      {fullscreenCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full">
            <button className="absolute right-2 top-2 p-2 rounded-full bg-white/10" onClick={() => setFullscreenCert(null)}><X /></button>
            <img src={fullscreenCert.certImage || ''} alt={fullscreenCert.title} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

    </div>
  );
}

/* ---------- Small helpers ---------- */
function Stat({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="stat-card p-4">
      <div className="mono-label text-xs">{label}</div>
      <div className="text-2xl font-bold mt-2">{value} <span className="text-sm text-muted-foreground">{unit}</span></div>
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <div className="absolute -left-6 -top-6 w-12 h-12 border-t border-l border-cyan/40" />
      <div className="absolute -right-6 -bottom-6 w-12 h-12 border-b border-r border-cyan/40" />
    </>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 flex items-center justify-center bg-background/10 rounded">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-sm text-muted-foreground">{value}</div>
      </div>
    </div>
  );
}

function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/10 rounded-md hover:bg-background/20 transition">
      {icon}
    </a>
  );
}

export default Route;
