"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#0B0D13] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E10600]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: Left side bold CONTACT, Right side Red Block (#E10600) with Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Gigantic Bold White "CONTACT" Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-widest text-[#E10600] uppercase mb-2">
              Start a Conversation
            </span>

            {/* Gigantic bold white capital letters filling width */}
            <h2 className="font-heading text-6xl sm:text-8xl lg:text-9xl text-white font-black tracking-tighter leading-none select-none">
              CONTACT
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-md leading-relaxed font-normal">
              Have a venture, engineering partnership, or technical challenge to discuss? Leave your details and let&apos;s build together.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 text-[#E10600] flex items-center justify-center font-bold text-xs">
                  ✉
                </span>
                <span className="font-semibold text-white">contact@fatimawada.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/10 text-[#E10600] flex items-center justify-center font-bold text-xs">
                  📍
                </span>
                <span>Abuja &amp; Kano, Nigeria · Global Availability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vivid Red Form Panel (#E10600) Overlapping the Section */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-[#E10600] text-white p-8 sm:p-12 lg:p-14 rounded-3xl shadow-[0_25px_60px_rgba(225,6,0,0.35)] relative overflow-hidden border border-red-500/30">
              
              {/* Pill Label "REACH US" */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-mono font-bold text-xs tracking-wider uppercase">
                  REACH US
                </span>
                <span className="text-xs text-white/70">Response within 24h</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-white/80 text-sm mb-8">
                Fill in the details below and I&apos;ll be in touch.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white text-[#E10600] flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <h4 className="font-heading text-2xl text-white">Message Sent!</h4>
                  <p className="text-white/90 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I look forward to connecting with you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/95 uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="Fatima"
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#111111] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 shadow-inner"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/95 uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Wada"
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#111111] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-white/95 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="hello@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#111111] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 shadow-inner"
                    />
                  </div>

                  {/* Message Box */}
                  <div>
                    <label className="block text-xs font-semibold text-white/95 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Type your message here"
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#111111] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 shadow-inner resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 text-xs text-white/90 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({ ...formData, consent: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded text-[#E10600] focus:ring-white accent-white"
                      />
                      <span>
                        I give permission to contact me at this email address.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-white text-[#E10600] font-extrabold text-sm sm:text-base hover:bg-white/95 active:scale-98 transition-all shadow-xl"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
