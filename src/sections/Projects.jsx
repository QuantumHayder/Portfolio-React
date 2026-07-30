import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import nebulogyPhoto from "@/assets/projects/Nebulogy.png";
import texterPhoto from "@/assets/projects/Texter.png";
import chatmaniaPhoto from "@/assets/projects/Chatmania.png";
import joblincPhoto from "@/assets/projects/JobLinc.png";
import fitpulsePhoto from "@/assets/projects/FitPulse.png";

const projects = [
    {
        title: "Nebulogy",
        description: "It's a built in 48 hours dashboard, a LangGraph summarization pipeline generating 3 persona-specific outputs across 600 NASA papers, with semantic search (>70% relevance) and a knowledge graph surfacing research gaps. ",
        stack: ["Python", "FastAPI", "React.js", "LangGraph", "GroqAPI", "Supabase", "LLMs", "Vercel", "HuggingFace", "Git"],
        image: nebulogyPhoto,
        github: "https://github.com/QuantumHayder/Space-Biology-Knowledge-Engine"
    },
    {
        title: "Texter",
        description: "A real-time multi-user text editor with custom CRDT tree logic, undo/redo, WebSocket sync, and permission-based access, and an upload/download module",
        stack: ["Java", "Spring Boot", "JavaFX", "STOMP over WebSocket", "H2 Database", "CRDT", "Postman", "Git"],
        image: texterPhoto,
        github: "https://github.com/QuantumHayder/Texter"
    },
    {
        title: "Chatmania",
        description:" A  full-stack production-ready document-aware chatbot using LangChain. It included PDF/Word/text ingestion and context-aware responses stored in PostgreSQL chat history and used interchangeable chunking methods. It also scaled to 20+ documents via similarity search",
        stack: ["Python", "FastAPI", "LangChain", "OpenAI", "Ollama", "Qwen/LM Studio", "Streamlit", "PostgreSQL", "PgVector", "Git"],
        image: chatmaniaPhoto,
        github: "https://github.com/QuantumHayder/Langchain-Chatbot"
    },
    {
        title: "JobLinc",
        description: "A LinkedIn clone, where I built backend modules for user profiles, Stripe payment integration (one-time & recurring), and an admin panel with 9 analytics metrics in a 19-member team following MVC and SOLID principles",
        stack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Stripe API", "RESTful APIs", "Mocha", "Git"],
        image: joblincPhoto,
        github: "https://github.com/JobLinc"
    },
    {
        title: "FitPulse",
        description: "A fitness web-application platform, that is considered a next-generation, as it does not only provide user with +500 exercises and +650 food options, but also allows the user to make connections with other athletes, join class, and obtain personalized plan all virtually through one platform, and the user is awarded points to attend free classes based on achievements unlocked.",
        stack: ["Python", "Flask", "HTMX", "TailwindCss", "Jinja templates", "Postgresql", "Git"],
        image: fitpulsePhoto,
        github: "https://github.com/QuantumHayder/FitPulse---Flask"
    }
]
export const Projects = () => {
    return(
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg Glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white">
                    {" "}
                    make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to
                    innovative tools that solve real-world problems.
                </p>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
        <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
                className="absolute inset-0 
            bg-gradient-to-t from-card via-card/50
                to-transparent opacity-60"
            />
            {/* Overlay Links */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                href={project.link}
                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                href={project.github}
                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                <FaGithub className="w-5 h-5" />
                </a>
            </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
            <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
                </h3>
                <ArrowUpRight
                className="w-5 h-5 
                text-muted-foreground group-hover:text-primary
                group-hover:translate-x-1 
                group-hover:-translate-y-1 transition-all"
                />
            </div>
            <p className="text-muted-foreground text-sm">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.stack.map((tag, tagIdx) => (
                <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                    {tag}
                </span>
                ))}
            </div>
            </div>
        </div>
        ))}

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
        </div>

        </div>
    </section>
    );
};
