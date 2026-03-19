import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "CareUs",
        description: "An integrated digital healthcare platform for seamless consultations and medicine tracking.",
        image: "/projects/project3.jpg",
        tags: ["UI/UX Design"],
        link: "#",
    },  
    {
        title: "Lifelinemlg",
        description: "A website for Instax camera rentals in Malang, making it easy to book cameras for special moments.",
        image: "/projects/project2.jpg",
        tags: ["UI/UX Design"],
        link: "#",
    }, 
    {
        title: "BetterMe",
        description: "An AI-powered mobile health app for smarter diet, workout, and wellness tracking.",
        image: "/projects/project1.jpg",
        tags: ["UI/UX Design"],
        link: "#",
    },
]

export const Projects = () => {
    return (
    <section id="projects" className="py-16 md:py-32 relative overflow-hidden">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Recent work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">My Projects</h2>
                <p className="text-muted-foreground">A selection of my recent work focused on creating intuitive and meaningful digital experiences.</p>
            </div>
            {/* project grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, idx)=>(
                    <div 
                    key={idx} 
                    className="group glass rounded-2xl overflow-hidden md:row-span-1"
                    style={{animationDelay: `&{(idx + 1) * 100}ms`}}>
                        {/* image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                        </div>
                        {/* content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};