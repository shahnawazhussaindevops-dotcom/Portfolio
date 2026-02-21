"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        title: "Enterprise Cloud Migration",
        year: "2024",
        impact: "25% Cost Reduction",
        desc: "Led migration of on-premise infrastructure to AWS, implementing EC2 auto-scaling, S3 backups, and CloudWatch monitoring."
    },
    {
        title: "Automated Deployment Pipeline",
        year: "2024",
        impact: "60% Faster Delivery",
        desc: "Developed Kickstart-based framework reducing server deployment time from 4 hours to 45 minutes."
    },
    {
        title: "Infrastructure Optimization",
        year: "2024",
        impact: "30% Latency Reduction",
        desc: "Redesigned network architecture implementing VLANs, optimized routing, and enhanced firewall rules."
    }
];

export default function Projects() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0d0d0d]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">Major Milestones</h2>
                    <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block"></div>
                    <p className="text-gray-500 font-mono text-sm max-w-xs text-right">SCROLL TO DISCOVER KEY PROJECTS & IMPACT METRICS</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group relative h-[400px] flex flex-col justify-between p-8 rounded-[2rem] overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 group-hover:to-blue-500/10 transition-all"></div>

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-xs font-mono text-gray-500 tracking-tighter">{item.year}</span>
                                <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] rounded-full uppercase tracking-widest">{item.impact}</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Decorative background number */}
                            <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white/[0.02] -z-10 group-hover:text-white/[0.05] transition-colors">
                                {idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
