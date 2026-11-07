import React from "react";

export default function CredentialsSection() {
  const credentials = [
    {
      category: "INTERNATIONAL INNOVATION",
      title: "SnakeHack Africa · Nairobi, Kenya",
      organization: "Wellcome Snakebite Innovation Initiative",
      description:
        "Presented Bite2Care emergency triage and antivenom stock verification to an international panel of global clinicians and public health researchers.",
    },
    {
      category: "ACADEMIC & SCIENTIFIC RIGOR",
      title: "BSc Microbiology Thesis",
      organization: "Bayero University Kano",
      description:
        "Conducted empirical laboratory investigation on microbial contamination and antibiotic resistance, instilling the systems thinking that guides my software architecture.",
    },
    {
      category: "GLOBAL LEADERSHIP",
      title: "International Business Summit",
      organization: "AIM Global · Philippines",
      description:
        "Engaged with global entrepreneurial delegations on distributed team coaching, interpersonal communication, and organizational building.",
    },
    {
      category: "YOUTH MENTORSHIP",
      title: "AI & Digital Literacy Mentor",
      organization: "UNICCON Group",
      description:
        "Mentored young learners and kids aged five and above in digital capability, computational thinking, and responsible AI principles.",
    },
  ];

  return (
    <section id="credentials" className="py-20 sm:py-28 bg-[#F9FAFB] text-[#111827] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE1126] font-mono">
            Credentials &amp; Recognition
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-[#111827]">
            Professional Journey &amp; Honors
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-4 leading-relaxed">
            Demonstrated trajectory across venture leadership, healthcare innovation, empirical science, and technology mentorship.
          </p>
        </div>

        {/* Clean Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#CE1126] uppercase">
                  {cred.category}
                </span>
                <h3 className="text-lg font-bold text-[#111827] mt-2 mb-1">
                  {cred.title}
                </h3>
                <div className="text-xs text-zinc-500 font-medium mb-3">
                  {cred.organization}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
