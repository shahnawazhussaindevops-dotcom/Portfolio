"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "Bachelor of Computer Application (BCA)",
        institution: "Maharishi University of Information and Technology",
        location: "Noida, India",
        period: "Expected Graduation: 2026",
        status: "ongoing",
        grade: null,
        coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Computer Networks",
            "Operating Systems",
            "Cloud Computing",
            "Software Engineering",
        ],
        projects: [
            "Automated deployment scripts",
            "Database optimization solutions",
            "Network monitoring dashboards",
        ],
    },
    {
        degree: "Intermediate (Pre-University) — Mathematics & Science",
        institution: "Jamia Islamia College",
        location: "Aligarh, India",
        period: "Graduated: 2023",
        status: "completed",
        grade: "80%",
        coursework: ["Mathematics", "Physics", "Computer Science"],
        projects: [],
    },
];

export default function Education() {
    return (
        <section id="education" className="relative z-20 bg-[#0d0d0d] py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium">Academic Background</p>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Education</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="relative bg-white/4 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 group"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-6 right-6">
                                {edu.status === "ongoing" ? (
                                    <span className="flex items-center gap-2 px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                        In Progress
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-400 text-xs font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                        Completed
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Header */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 pr-28">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-cyan-400 font-medium text-base">{edu.institution}</p>
                                    <div className="flex flex-wrap gap-4 mt-2 text-gray-500 text-sm">
                                        <span>📍 {edu.location}</span>
                                        <span>🗓 {edu.period}</span>
                                        {edu.grade && (
                                            <span className="text-green-400 font-semibold">🏅 Score: {edu.grade}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Coursework */}
                                {edu.coursework.length > 0 && (
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-medium">Relevant Coursework</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((c) => (
                                                <span
                                                    key={c}
                                                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300"
                                                >
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Academic Projects */}
                                {edu.projects.length > 0 && (
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-medium">Academic Projects</p>
                                        <div className="space-y-2">
                                            {edu.projects.map((p) => (
                                                <div key={p} className="flex items-center gap-3 text-gray-400 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                                    {p}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
