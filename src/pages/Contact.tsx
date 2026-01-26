import React from "react";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="space-y-16 p-4 py-16 sm:p-8 sm:py-24 lg:p-12 lg:py-32">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Have a question or just want to say hi? I'd love to hear from you.
          </p>
        </section>

        {/* Connect Section */}
        <section className="mx-auto max-w-7xl rounded-xl border bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-8 text-center text-3xl font-semibold">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left Column: Contact Form */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">Send me a message</h3>
              <p className="mb-6 text-muted-foreground text-sm">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="I'd like to discuss a project opportunity..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Right Column: Contact Details */}
            <div>
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
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      github.com/your-github
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
                      href="https://linkedin.com/in/your-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      linkedin.com/in/your-linkedin
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-muted-foreground hover:text-primary text-sm"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <span className="text-muted-foreground text-sm">
                      +18575766733
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
                      Boston, Massachusetts, USA
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
