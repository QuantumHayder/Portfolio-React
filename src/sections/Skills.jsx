import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Programming Languages
    { name: "C", level: 90, category: "languages" },
    { name: "C++", level: 85, category: "languages" },
    { name: "C#", level: 85, category: "languages" },
    { name: "Java", level: 95, category: "languages" },
    { name: "Python", level: 95, category: "languages" },
    { name: "JavaScript", level: 80, category: "languages" },
    { name: "TypeScript", level: 90, category: "languages" },

    // Backend
    { name: "REST APIs", level: 95, category: "backend" },
    { name: "Spring Boot", level: 95, category: "backend" },
    { name: "Spring Security", level: 95, category: "backend" },
    { name: "Node.js (Express.js)", level: 90, category: "backend" },
    { name: "Django", level: 65, category: "backend" },
    { name: "Flask", level: 75, category: "backend" },
    { name: "FastAPI", level: 95, category: "backend" },
    { name: "Postman", level: 95, category: "backend" },
    { name: "Swagger UI", level: 95, category: "backend" },

    // Frontend
    { name: "HTML", level: 85, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "HTMX", level: 70, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },

    // Database Administration
    { name: "SQL", level: 90, category: "database" },
    { name: "MySQL", level: 90, category: "database" },
    { name: "NoSQL", level: 85, category: "database" },
    { name: "H2 Database", level: 90, category: "database" },
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "MongoDB", level: 85, category: "database" },
    { name: "Supabase", level: 85, category: "database" },

    // NLP
    { name: "TF-IDF", level: 90, category: "nlp" },
    { name: "FastText", level: 90, category: "nlp" },
    { name: "N-Gram", level: 95, category: "nlp" },
    { name: "RNN", level: 95, category: "nlp" },
    { name: "LSTM", level: 95, category: "nlp" },
    { name: "AraBERT", level: 90, category: "nlp" },
    { name: "CRF", level: 85, category: "nlp" },

    // Generative AI
    { name: "Ollama", level: 90, category: "genai" },
    { name: "LangChain", level: 95, category: "genai" },
    { name: "OpenAI API", level: 80, category: "genai" },
    { name: "pgvector", level: 90, category: "genai" },
    { name: "Streamlit", level: 85, category: "genai" },
    { name: "Docling", level: 85, category: "genai" },
    { name: "nomic-ai", level: 85, category: "genai" },
    { name: "Qwen", level: 90, category: "genai" },

    // Data Analysis
    { name: "Excel", level: 85, category: "data" },
    { name: "Power BI", level: 70, category: "data" },
    { name: "Pandas", level: 85, category: "data" },
    { name: "NumPy", level: 80, category: "data" },
    { name: "Seaborn", level: 75, category: "data" },
    { name: "Matplotlib", level: 80, category: "data" },

    // Version Control
    { name: "Git (GitHub)", level: 90, category: "tools" },

    // Spoken Languages (CEFR: B2→70, C1→85, C2→95)
    { name: "German", level: 70, category: "spoken" },
    { name: "English", level: 85, category: "spoken" },
    { name: "Arabic", level: 95, category: "spoken" },
];

const categories = [
    "all",
    "languages",
    "backend",
    "frontend",
    "database",
    "nlp",
    "genai",
    "data",
    "tools",
    "spoken",
];

const categoryLabels = {
    all: "All",
    languages: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    nlp: "NLP",
    genai: "Generative AI",
    data: "Data Analysis",
    tools: "Version Control",
    spoken: "Spoken Languages",
};

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Ambient background blobs, matching Contact section */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        What I Work With
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        My{" "}
                        <span className="text-primary glow-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A breakdown of the languages, frameworks, and tools I use to
                        build and ship real products.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in animation-delay-300">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1 flex-wrap justify-center">
                        {categories.map((category, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm capitalize transition-all duration-300",
                                    activeCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-surface"
                                )}
                            >
                                {categoryLabels[category]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={skill.name}
                            className="glass rounded-2xl p-6 glow-border animate-fade-in"
                            style={{ animationDelay: `${400 + key * 50}ms` }}
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg text-foreground">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-surface h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};