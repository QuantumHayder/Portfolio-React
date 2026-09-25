import { Star, ArrowRight, Download, ChevronDown} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { Button } from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import hayderPhoto from "@/assets/Hayder-Gemini.jpeg";
import bluePhoto from "@/assets/Blue-gradient-bg.jpg";

const skills = [
    "Backend Development",
    "Frontend Development",
    "Full Stack",
    "Data Analysis",
    "Data Science",
    "Data Engineering",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLMs",
    "Automation",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
                src={bluePhoto}
                alt="Hero Image"
                className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to background"/>
        </div>

        {/* Golden Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
        <Star
            key={i}
            className="absolute opacity-60"
            size={6 + Math.random() * 4}
            fill="#FFD700"
            color="#FFD700"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }}
        />
    ))}
</div>

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/*left Column - Text Content*/}
            <div className="space-y-8 ">
                <div className="animate-fade-in ">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary border border-primary bg-primary/10">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                    Software Engineer • Backend Specialist • AI Enthusiast
                    </span>
                </div>
                {/*Headline*/}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Building <span className="text-primary glow-text [text-shadow:0_0_10px_#d4af37]">SaaS</span>
                        <br />
                        solutions to solve
                        <br />
                        <span className="font-serif italic font-normal text-white">
                            complex problems
                        </span>
                    </h1>
                    <p
                    className="text-lg text-[#C0C0C0] [text-shadow:0_0_6px_#C0C0C0] animate-fade-in animation-delay-200">
                        Hi, I'm Abdelrahman Hayder - a software engineer with hands on experience in
                        web development and AI. I create solutions that solve complex problems and
                        help clients grow their business.
                    </p>
                </div>
                {/*CTAs*/}
                <div className="flex display-flex gap-4 animate-fade-in animation-delay-300">
                    <Button size="lg">
                        Contact Me <ArrowRight className="w-5 h-5"/>
                    </Button>
                    <AnimatedBorderButton
                        href="https://drive.google.com/uc?export=download&id=1g-vNjxTPVYwjg46u7nPYYuK99aFgoeE_"
                        download="Abdelrahman-Hayder-CV.pdf"
                    >
                        <Download className="w-5 h-5" />
                        Download CV
                    </AnimatedBorderButton>
                </div>
                {/*Social Icons*/}
                <div className="flex gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground py-2">Follow me: </span>
                    {[
                        {icon: FaGithub, href: "https://github.com/QuantumHayder"},
                        {icon: FaLinkedin, href:"https://www.linkedin.com/in/abdel-rahman04/"},
                    ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-6 h-6" />}
                </a>
                ))}
                </div>
            </div>
            {/*Right Column - Profile Image*/}
            <div className="relative animate-fade-in animation-delay-300">
                {/* Profile Image */}
                <div className="relative max-w-md mx-auto">
                    <div 
                        className="absolute inset-0 
                    rounded-3xl bg-gradient-to-br 
                    from-primary/30 via-transparent 
                    to-primary/10 blur-2xl animate-pulse"
                    />
                    <div className="relative glass rounded-3xl p-2 glow-border">
                        <img 
                            src={hayderPhoto} 
                            alt="Abdelrahman Hayder" 
                            className="w-full aspect-[4/5] object-cover rounded-2xl"
                        />
                         {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                <span className="text-sm, font-medium">Available for work</span>
                            </div>
                        </div>
                        {/* Stats badge */}
                        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary">15+</div>
                            <div className="text-xs text-muted-foreground">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                My Domain Expertise:
            </p>
            <div className="relative overflow-hidden flex w-full">
                <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    );
};
