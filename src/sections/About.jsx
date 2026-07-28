import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

import { useMemo } from "react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
]
export const About = () => {
    const bubbles = useMemo(() => 
        [...Array(12)].map(() => ({
            size: `${6 + Math.random() * 10}px`,
            left: Math.random() * 100,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 5,
        })),
        []
    );
    return <section id="about"className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl mdLtext-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Building the future blocks,
                    <span className="font-serif italic font-normal text-white"> one microservice at a time.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        As a Communication and Computer Engineering undergraduate at Cairo University,
                        I specialize in bridging the gap between robust backend architectures and cutting-edge artificial intelligence.
                        My engineering philosophy centers on building scalable, intelligent systems that don't just function,
                        but actively drive user value.
                        From conceptualizing complex data pipelines to deploying advanced Large Language Model (LLM) frameworks,
                        I thrive at the intersection of structural software engineering and natural language processing,
                        ensuring that every deployment is both performant and future-proof.
                    </p>

                    <p>
                        I have a proven track record of transforming high-level product requirements into tangible, impactful applications under tight constraints.
                        Whether leading the development of Nebulogy, an AI-powered dynamic dashboard engineered during a 48-hour NASA Space Apps Hackathon
                        or architecting the backend subscription mechanics and real-time chat infrastructure for the DreamHouse real estate platform,
                        I focus on delivering seamless technical execution.
                        My hands-on experience extends to collaborative, large-scale ecosystems, such as engineering payment API logic for the professional networking app JobLinc 
                        and training sequence models for a sophisticated Arabic Diacritization system.
                    </p>

                    <p>
                        Beyond writing clean, maintainable code, I am deeply invested in the holistic product lifecycle and the continuous evolution of tech stacks.
                        As I progress toward my degree completion in 2027, my focus remains on building intelligent backend infrastructures that solve complex, real-world problems.
                        I am always exploring new methodologies to optimize application pipelines and integrate next-generation AI solutions, making me not just a developer,
                        but a strategic engineering partner ready to tackle ambitious technical challenges head-on.
                    </p>
                </div>

                <div className="relative glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 overflow-hidden border border-amber-400">
                    {/* Water tint */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/20 to-secondary/30 pointer-events-none" />

                    {/* Bubbles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {bubbles.map((bubble, i) => (
                            <span
                                key={i}
                                className="absolute rounded-full bg-white/20 border border-white/30 animate-bubble-rise"
                                style={{
                                    width: bubble.size,
                                    height: bubble.size,
                                    left: `${bubble.left}%`,
                                    animationDuration: `${bubble.duration}s`,
                                    animationDelay: `${bubble.delay}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <p className="relative z-10 text-lg font-medium italic text-foreground">
                        "To architect scalable, intelligent backend ecosystems that harness the power of artificial intelligence 
                        and natural language processing, transforming complex technical constraints into seamless, high-impact user experiences
                        that drive real-world value."
                    </p>
                    </div>
                </div>
                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item,idx) => (
                        <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100} ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
};
