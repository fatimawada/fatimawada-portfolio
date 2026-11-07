"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white text-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left side bold CONTACT, Right side Red Block (#E63946) with Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Architectural "CONTACT" Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E63946] uppercase">
              Get in Touch
            </span>
            <h2 className="mt-2 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#111827] leading-none uppercase">
              CONTACT
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
              Have a venture, engineering partnership, or technical challenge to discuss? Leave your details and let&apos;s build together.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 text-[#E63946] flex items-center justify-center font-bold text-xs">
                  ✉
                </span>
                <span className="font-semibold text-gray-900">contact@fatimawada.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 text-[#E63946] flex items-center justify-center font-bold text-xs">
                  📍
                </span>
                <span>Abuja &amp; Kano, Nigeria · Global Availability</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Red Block (#E63946) with Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#E63946] text-white p-8 sm:p-12 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-white/80 text-sm mb-8">
                Fill in the form below and I&apos;ll get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white text-[#E63946] flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold">Thank You!</h4>
                  <p className="text-white/85 text-sm">
                    Your message has been received. I look forward to connecting with you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#111827] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
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
                        className="w-full px-4 py-3 rounded-xl bg-white text-[#111827] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3 rounded-xl bg-white text-[#111827] placeholder-gray-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 text-xs text-white/90 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({ ...formData, consent: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded text-[#E63946] focus:ring-white accent-white"
                      />
                      <span>
                        I agree to be contacted regarding this message and understand my information is kept private.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-white text-[#E63946] font-extrabold text-sm sm:text-base hover:bg-white/95 active:scale-98 transition-all shadow-xl"
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
