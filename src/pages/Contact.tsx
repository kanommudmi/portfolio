import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Loader2,
} from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const heroRef = useRef(null);
  const connectSectionRef = useRef(null);
  const formRef = useRef(null);
  const detailsRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceId = "service_knwhc3o";
    const templateId = "template_jua5xm9";
    const publicKey = "04EuhxX36Kt3_1kc7";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey,
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      // Connect Section Animation
      gsap.from(connectSectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: connectSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Stagger animation for form elements
      gsap.from(formRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Stagger animation for contact details
      gsap.from(detailsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex-1">
      <div className="space-y-16 p-4 py-16 sm:p-8 sm:py-24 lg:p-12 lg:py-32">
        {/* Hero Section */}
        <section className="text-center" ref={heroRef}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Have a question or just want to say hi? I'd love to hear from you.
          </p>
        </section>

        {/* Connect Section */}
        <section
          className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8"
          ref={connectSectionRef}
        >
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Column: Contact Form */}
            <div ref={formRef}>
              <h3 className="mb-4 text-xl font-semibold">Send me a message</h3>
              <p className="mb-6 text-muted-foreground text-sm">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="I'd like to discuss a project opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...{" "}
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Mail className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div ref={detailsRef}>
              <h3 className="mb-4 text-xl font-semibold">Connect with me</h3>
              <p className="mb-6 text-muted-foreground text-sm">
                You can also reach out to me directly through these channels
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Github className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/kanommudmi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      github.com/kanommudmi
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/anuvut-hoonchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      linkedin.com/in/anuvut-hoonchat
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:anuvut.hoon@gmail.com"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      anuvut-hoonchat@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <span className="text-muted-foreground text-sm">
                      +66 926316803
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Current Location
                    </p>
                    <span className="text-muted-foreground text-sm">
                      Mueang Nakhon Ratchasima District, Nakhon Ratchasima (Korat)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
