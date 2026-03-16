import { PenTool, Code2 } from "lucide-react";

const highlights = [
    {
        icon: PenTool,
        title: "UI/UX Designer",
        description: "Designing intuitive, user-centered interfaces using Figma to craft meaningful experiences.",
    },
    {
        icon: Code2,
        title: "Front-End Developer",
        description: "Junior frontend developer building responsive interfaces using React.js and modern web technologies.",
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* left coloumn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif italic font-normal text-white" >
                        Hi Im, 
                        <span className="text-4xl md:text-5xl font-sans not-italic font-bold glow-text leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"> Al Zahra Ramadhani.</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                      <p>A UI/UX Designer and Junior Front-end Developer currently studying at Universitas Negeri Malang. As a UI/UX designer, I primarily use Figma to design user-centered interfaces and turn ideas into clean, thoughtful digital experiences.</p>
                      <p>I’m also exploring frontend development as a junior developer, using React.js to bring designs to life on the web. I actively participate in competitions and enjoy collaborating with others, believing that continuous learning, creativity, and teamwork are key to building impactful digital solutions.</p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg glow-text-white text-center font-medium italic text-foreground">"Leveraging AI to fuel innovation, not to extinguish human ingenuity."</p>
                    </div>
                </div>

                {/* right coloumn */} 
                <div className="grid gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `&{(idx + 1) * 100}ms`}}> 
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};