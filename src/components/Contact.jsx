import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

  window.location.href = `mailto:contact@pancharasshubham.com?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@pancharasshubham.com",
      link: "mailto:contact@pancharasshubham.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pancharasshubham",
      link: "https://github.com/pancharasshubham"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubham-pancharas",
      link: "https://linkedin.com/in/shubham-pancharas"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-[#38BDF8] to-[#22C55E] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#38BDF8] to-[#22C55E] mx-auto mb-4"></div>
          <p className="text-center text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-[#94A3B8] mb-8">
              Feel free to reach out through any of these channels. I'm always excited to connect 
              with fellow developers, discuss potential collaborations, or explore new opportunities 
              in the tech space.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-[#1E293B] rounded-lg border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 transition-all"
                >
                  <div className="p-3 bg-gradient-to-br from-[#38BDF8]/20 to-[#22C55E]/20 rounded-lg">
                    <info.icon className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F8FAFC] hover:text-[#38BDF8] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#F8FAFC]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1E293B] p-8 rounded-xl border border-[#38BDF8]/20">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#38BDF8]/20 rounded-lg focus:outline-none focus:border-[#38BDF8] transition-colors text-[#F8FAFC]"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#38BDF8]/20 rounded-lg focus:outline-none focus:border-[#38BDF8] transition-colors text-[#F8FAFC]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0F172A] border border-[#38BDF8]/20 rounded-lg focus:outline-none focus:border-[#38BDF8] transition-colors text-[#F8FAFC] resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#38BDF8] to-[#22C55E] hover:from-[#38BDF8]/90 hover:to-[#22C55E]/90 text-white py-6 text-lg"
                >
                  Send Message <Send className="ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#94A3B8] mb-4">
            © 2026 Shubham Pancharas. Built with React, TailwindCSS, and passion for clean code.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/pancharasshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors"
            >
              <Github className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com/in/shubham-pancharas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:contact@pancharasshubham.com"
              className="p-3 bg-[#1E293B] rounded-lg hover:bg-[#38BDF8]/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-[#94A3B8] hover:text-[#38BDF8]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;