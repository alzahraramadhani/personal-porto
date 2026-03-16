import { useState } from "react"; // 1. WAJIB DIIMPORT
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "alzahra.workhub@gmail.com",
        href: "mailto:alzahra.workhub@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 856 0450 5503",
        href: "tel:+6285604505503",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Malang, Jawa Timur",
        href: "#",
    },        
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type:null, message:""});
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey)

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Contact Me
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind atau just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form Section */}
                    <div className="glass p-8 rounded-3xl border border-primary/20 animate-fade-in animation-delay-300">
                        <form onSubmit={handleSubmit} className="space-y-6" >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="name"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                    id="email"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    type="email"
                                    required
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    placeholder="Your message"
                                />
                            </div>

                            <Button className="w-full gap-2" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? (<>Sending...</>) : (<>Send Message<Send className="w-5 h-5"/></>)}
                            </Button> 

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${
                                        submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-lg flex items-center gap-2"
                                            : "bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg flex items-center gap-2"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}                                             
                        </form>
                    </div>

                    {/* Info Section */}
                    
                    <div className="space-y-8 animate-fade-in animation-delay-400">
                        <div className="glass p-8 rounded-3xl border border-primary/20 animate-fade-in animation-delay-300">
                            <div className="grid gap-5">
                                {contactInfo.map((info, idx) => (
                                <a 
                                    key={idx} 
                                    href={info.href}
                                    className="flex items-center gap-5 p-4 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{info.label}</p>
                                        <p className="font-medium">{info.value}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass rounded-3xl p-8 border border-primary/20 bg-primary/5">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="font-medium text-foreground">Currently Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};