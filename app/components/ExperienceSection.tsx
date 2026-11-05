import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Current",
      role: "Founder & CEO / Product and Technology Lead",
      organization: "Relyvora",
      badge: "Operating Company · FinTech",
      badgeColor: "text-[#34D399] bg-[#10B981]/15 border-[#10B981]/30",
      dotColor: "bg-[#10B981] border-[#34D399]",
      description:
        "Leading company formation, strategic direction, product architecture, payment workflow design, and partner coordination for Relyvora. Structuring payment and compliance infrastructure arrangements with Anchor Technologies Limited, modeling a 3% transaction fee revenue model, and executing market expansion from Nigeria into regional African hubs.",
      skills: ["Company Formation", "Payment Infrastructure", "Escrow & Release Workflows", "Partner Coordination", "Market Strategy"],
    },
    {
      period: "Current",
      role: "Founder / Product Architect / MVP Developer",
      organization: "PulseClime",
      badge: "Climate Finance Infrastructure",
      badgeColor: "text-[#2DD4BF] bg-[#0D9488]/15 border-[#0D9488]/30",
      dotColor: "bg-[#0D9488] border-[#2DD4BF]",
      description:
        "Leading concept development, problem definition, and product architecture for an emerging climate-finance infrastructure initiative. Built the functional MVP connecting hyper-local climate intelligence and early warning guidance for frontline communities, while designing the architectural roadmap for parametric financing triggers.",
      skills: ["Climate Risk Intelligence", "Parametric Architecture", "MVP Engineering", "Resilience Financing", "Systems Strategy"],
    },
    {
      period: "Innovation Project",
      role: "Product & Technology Lead (Multidisciplinary Team)",
      organization: "Bite2Care · SnakeHack Africa",
      badge: "Wellcome Snakebite Initiative",
      badgeColor: "text-[#FB7185] bg-[#E11D48]/15 border-[#E11D48]/30",
      dotColor: "bg-[#E11D48] border-[#FB7185]",
      description:
        "Led product architecture and technical coordination for a multidisciplinary team developing an emergency coordination system for snakebite incidents across rural Africa. Designed deterministic first-aid decision trees, antivenom stock verification protocols, and WhatsApp frontline interactions. Represented the project in Nairobi, Kenya, presenting to international judges.",
      skills: ["Emergency Coordination", "Healthtech Product Strategy", "International Presentation", "Multidisciplinary Leadership"],
    },
    {
      period: "April – August 2026",
      role: "AI & Digital Literacy Mentor",
      organization: "UNICCON",
      badge: "Youth Technology Education",
      badgeColor: "text-[#9BA3B4] bg-[#19202E] border-[#273144]",
      dotColor: "bg-[#3B82F6] border-[#60A5FA]",
      description:
        "Mentored young learners, including children aged five and above, in digital literacy, computational thinking, and artificial intelligence fundamentals. Guided students through age-appropriate curricula, introduced responsible and ethical AI principles, and facilitated structured learning assessments to inspire early technological capability.",
      skills: ["Responsible AI Education", "Youth Mentorship", "Digital Literacy", "Curriculum Facilitation"],
    },
    {
      period: "Operations",
      role: "Customer Relations & User Operations",
      organization: "MySmartMedic (UNICCON)",
      badge: "Telemedicine & Healthtech",
      badgeColor: "text-[#9BA3B4] bg-[#19202E] border-[#273144]",
      dotColor: "bg-[#0D9488] border-[#2DD4BF]",
      description:
        "Managed user operations, patient-doctor onboarding, and platform support for an AI telemedicine platform serving Nigerian clinical users. Documented operational bottlenecks, user friction points, and healthcare delivery realities, gaining first-hand insight into frontline digital health adoption in emerging markets.",
      skills: ["Telemedicine Operations", "User Onboarding", "Customer Support", "Clinical Adoption Analysis"],
    },
    {
      period: "April 2023 – November 2025",
      role: "Team Leader",
      organization: "AIM Global",
      badge: "Entrepreneurial Leadership",
      badgeColor: "text-[#9BA3B4] bg-[#19202E] border-[#273144]",
      dotColor: "bg-[#D4AF37] border-[#E5C07B]",
      description:
        "Coached and mentored distributed team members, developed leadership and interpersonal communication programs, and supported entrepreneurial capacity building. Participated in an international business conference in the Philippines, developing cross-cultural leadership and organizational coaching competencies.",
      skills: ["Team Building", "Mentorship", "Interpersonal Communication", "International Conference Participation"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#121620]/70 border-t border-[#1E2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#34D399] uppercase tracking-wider mb-2.5 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Career &amp; Executive Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F4EE] tracking-tight">
            Professional Experience &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#9BA3B4] mt-2.5">
            Demonstrated trajectory across venture founding, product architecture, multidisciplinary team coordination, and technology education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#1E2536] ml-3 sm:ml-6 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role + exp.organization} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${exp.dotColor} bg-[#0B0D13] transition-transform duration-300 group-hover:scale-125`}
              />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0D13] border border-[#273144] hover:border-[#34D399]/40 transition-colors shadow-lg shadow-black/40">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-mono font-semibold text-[#34D399]">
                    {exp.period}
                  </span>
                  <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F6F4EE] mb-1">
                  {exp.role}
                </h3>
                <div className="text-xs font-mono text-[#9BA3B4] mb-4">
                  {exp.organization}
                </div>

                <p className="text-xs sm:text-sm text-[#F6F4EE]/80 leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#121620] text-[#9BA3B4] border border-[#1E2536]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}