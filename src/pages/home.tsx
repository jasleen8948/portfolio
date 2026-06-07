import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiPython, SiC, SiJavascript, SiHtml5, SiCss, 
  SiDjango, SiGit, SiGithub, SiSqlite 
} from "react-icons/si";
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiExternalLink, FiArrowRight, FiSun, FiMoon } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden">
      {/* Dark mode decorative background */}
      {dark && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
          {/* Top-left warm orb */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, hsla(15,70%,55%,0.18) 0%, transparent 70%)" }} />
          {/* Top-right cool orb */}
          <div className="absolute -top-16 right-0 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, hsla(30,60%,40%,0.12) 0%, transparent 70%)" }} />
          {/* Centre glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(ellipse, hsla(15,70%,55%,0.07) 0%, transparent 65%)" }} />
          {/* Bottom-right orb */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, hsla(30,50%,35%,0.14) 0%, transparent 70%)" }} />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(15,70%,65%) 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }} />
        </div>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif font-bold text-xl tracking-tight text-primary">JKB.</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#about" className="nav-link hover:text-foreground transition-colors">About</a>
              <a href="#skills" className="nav-link hover:text-foreground transition-colors">Skills</a>
              <a href="#projects" className="nav-link hover:text-foreground transition-colors">Projects</a>
              <a href="#experience" className="nav-link hover:text-foreground transition-colors">Experience</a>
              <a href="#contact" className="nav-link hover:text-foreground transition-colors">Contact</a>
            </div>
            <button
              data-testid="button-theme-toggle"
              onClick={() => setDark(d => !d)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              {dark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="float-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              B.Tech CSE Student
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-gradient text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Jasleen Kaur Bhatia
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Building precise, warm, and intentional digital experiences. 
              Currently studying at Shri Ramswaroop Memorial College, Lucknow.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="btn-glow rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects">View Projects <FiArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <a href="https://www.linkedin.com/in/jasleen-kaur-jk" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/jasleen8948" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="mailto:jasleenk2806@gmail.com" className="p-3 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="about" className="scroll-m-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-12">
              <span className="section-number">01 / EDUCATION</span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-serif">Education</h2>
                <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="card-shimmer h-full border border-border/40 shadow-sm bg-card/50 hover:bg-card hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="font-mono text-primary font-medium text-xs tracking-widest mb-3 uppercase">2023 – 2027</div>
                    <h3 className="text-xl font-serif font-medium mb-1">B.Tech, Computer Science</h3>
                    <p className="text-muted-foreground mb-5">Shri Ramswaroop Memorial College, Lucknow</p>
                    <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15">CGPA: 6.9</Badge>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="card-shimmer h-full border border-border/40 shadow-sm bg-card/50 hover:bg-card hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="font-mono text-primary font-medium text-xs tracking-widest mb-3 uppercase">2023</div>
                    <h3 className="text-xl font-serif font-medium mb-1">Class 12 (CBSE)</h3>
                    <p className="text-muted-foreground mb-5">Shri Rajendra Giri Memorial Academy</p>
                    <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15">Score: 76%</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-m-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-12">
              <span className="section-number">02 / SKILLS</span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-serif">Technical Canvas</h2>
                <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiC className="text-[#A8B9CC]" /> C
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiPython className="text-[#3776AB]" /> Python
                  </Badge>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 md:col-span-2">
                <h4 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiHtml5 className="text-[#E34F26]" /> HTML
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiCss className="text-[#1572B6]" /> CSS
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiJavascript className="text-[#F7DF1E]" /> JavaScript
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiDjango className="text-[#092E20] dark:text-[#44b78b]" /> Django
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    Streamlit
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiGit className="text-[#F05032]" /> Git
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiGithub className="text-foreground" /> GitHub
                  </Badge>
                  <Badge variant="outline" className="skill-badge cursor-default px-3 py-1.5 text-sm gap-2 bg-card/50 flex items-center">
                    <SiSqlite className="text-[#003B57] dark:text-[#57a8cc]" /> SQL
                  </Badge>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4 md:col-span-3 pt-4">
                <h4 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Concepts</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="skill-badge cursor-default text-foreground/80 bg-primary/5 border border-primary/15 px-4 py-2 rounded-full font-medium text-sm">Data Structures & Algorithms</span>
                  <span className="skill-badge cursor-default text-foreground/80 bg-primary/5 border border-primary/15 px-4 py-2 rounded-full font-medium text-sm">Event-Driven Programming</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-m-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-12">
              <span className="section-number">03 / PROJECTS</span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-serif">Selected Projects</h2>
                <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="group">
                <Card className="card-shimmer h-full border-border/40 bg-card/20 hover:bg-card transition-all duration-300 overflow-hidden relative hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
                        <SiPython className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground tracking-widest">01</span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors duration-200">MineSafe</h3>
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm">
                      A full-featured Minesweeper clone built with Python and Tkinter. Implements complex grid logic and flood-fill algorithms.
                    </p>
                    <ul className="space-y-1.5 mb-6 text-sm text-foreground/70">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Timer & difficulty levels</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Cell flagging system</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Safe first-click guarantee</li>
                    </ul>
                    <div className="flex gap-2 mt-auto flex-wrap">
                      <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">Python</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">Tkinter</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="group">
                <Card className="card-shimmer h-full border-border/40 bg-card/20 hover:bg-card transition-all duration-300 overflow-hidden relative hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all">
                        <span className="font-mono font-bold text-sm leading-none">AI</span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground tracking-widest">02</span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors duration-200">Social Media AI Caption Generator</h3>
                    <p className="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm">
                      An intelligent tool that generates context-aware social media captions from user inputs with a clean real-time UI.
                    </p>
                    <ul className="space-y-1.5 mb-6 text-sm text-foreground/70">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Real-time generation</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Context-based NLP</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary inline-block"></span> Streamlit Web UI</li>
                    </ul>
                    <div className="flex gap-2 mt-auto flex-wrap">
                      <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">Python</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">Streamlit</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">AI</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-m-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-12">
              <span className="section-number">04 / EXPERIENCE</span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-serif">Experience</h2>
                <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              
              <motion.div variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="timeline-dot-active flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-lg">SRDT Pvt. Ltd.</h3>
                    <time className="text-sm text-primary font-medium">Sept 2025</time>
                  </div>
                  <div className="text-sm font-medium text-foreground/80 mb-4">Intern</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Full-stack web development exposure focusing on modern web technologies and database integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-background/50 text-xs">HTML/CSS/JS</Badge>
                    <Badge variant="outline" className="bg-background/50 text-xs">Django</Badge>
                    <Badge variant="outline" className="bg-background/50 text-xs">SQL</Badge>
                    <Badge variant="outline" className="bg-background/50 text-xs">Git</Badge>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary transition-colors">
                  <span className="w-2 h-2 bg-foreground/30 rounded-full group-hover:bg-primary-foreground transition-colors"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-lg">GRP Career Pvt. Ltd.</h3>
                    <time className="text-sm text-muted-foreground font-medium">2025</time>
                  </div>
                  <div className="text-sm font-medium text-foreground/80 mb-4">Intern</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focused on digital presence, social media content strategy, and SEO fundamentals.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary transition-colors">
                  <span className="w-2 h-2 bg-foreground/30 rounded-full group-hover:bg-primary-foreground transition-colors"></span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif font-bold text-lg">L&T EduTech</h3>
                    <time className="text-sm text-muted-foreground font-medium"></time>
                  </div>
                  <div className="text-sm font-medium text-foreground/80 mb-4">Intern</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Successfully completed an intensive 34-hour Mobile App Development pathway.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="mb-12">
              <span className="section-number">05 / CERTIFICATIONS</span>
              <div className="flex items-baseline gap-4">
                <h2 className="text-3xl font-serif">Certifications</h2>
                <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Yuva AI Learning", issuer: "TCS iON" },
                { title: "Google Cloud Study Jams 2025", issuer: "GDG SRMCEM" },
                { title: "Generative AI", issuer: "Simplilearn" },
                { title: "Python Full Stack", issuer: "SRDT Pvt. Ltd." },
                { title: "CSS", issuer: "CodeKaro" },
                { title: "Interview Skills & Excel Training", issuer: "Younity.in" },
              ].map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="cert-card border-border/40 bg-card/20 hover:bg-card/60 transition-all duration-200">
                    <CardContent className="p-5 flex flex-col gap-1">
                      <span className="font-medium text-foreground text-sm leading-snug">{cert.title}</span>
                      <span className="text-xs text-primary/80 font-mono tracking-wide">{cert.issuer}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="bg-card rounded-3xl p-8 md:p-16 text-center border border-border/50 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-secondary/50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-serif mb-6 text-foreground">Let's build something.</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Currently open for collaborations, internships, and opportunities where I can contribute and grow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="btn-glow rounded-full px-8 w-full sm:w-auto">
                  <a href="mailto:jasleenk2806@gmail.com">
                    <FiMail className="mr-2 w-4 h-4" /> Say Hello
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto bg-transparent">
                  <a href="tel:+918887577381">
                    <FiPhone className="mr-2 w-4 h-4" /> +91-8887577381
                  </a>
                </Button>
              </div>

              <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Jasleen Kaur Bhatia.</p>
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/jasleen-kaur-jk" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <FiLinkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="https://github.com/jasleen8948" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                    <FiGithub className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}
