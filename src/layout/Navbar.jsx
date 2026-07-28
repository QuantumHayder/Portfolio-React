import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#experience", label: "Experience"}, 
    {href: "#skills", label: "Skills"},
    {href: "#projects", label: "Projects"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
];
export const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return( 
    <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }  z-50`}
    >
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="flex flex-col text-3xl font-bold tracking-tight hover:text-primary hover:[text-shadow:0_0_10px_#d4af37]">
                <span>
                    Abdelrahman Hayder<span className="text-primary">.</span>
                </span>
                <span className="w-[168px] h-[2px] mt-1.5 bg-gradient-to-r from-primary to-transparent"></span>
            </a>

            {/* Desktop Nav*/}
            
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
                    ))}
                </div>
            </div>
                    {/* CTA Button */}
            <div className="hidden md:block">
                <Button size="sm"> Contact Me!</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                {isMobileMenuOpen ? <X /> :<Menu size={24}/>}
            </button>
        </nav>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="containermx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                        <a 
                        href={link.href}
                        key={index}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                    ))}
                    <Button> Contact Me!</Button>
                    </div>
            </div>
        )}
    </header>
    );
};