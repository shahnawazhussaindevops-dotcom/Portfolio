"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter">SNH<span className="text-primary">.</span></h2>
                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Results-driven Linux System Administrator and Cloud Infrastructure Specialist specializing in enterprise-scale production environments.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="mailto:shahnawazhussaindevops@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a></li>
                            <li><a href="https://linkedin.com/in/shah-nawaz-hussain" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="tel:+918077644340" className="text-gray-400 hover:text-white transition-colors">Phone</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-6">Location</h4>
                        <p className="text-sm text-white/80">Firozabad, UP, India</p>
                        <p className="text-xs text-blue-400 mt-2 font-mono italic"># Open To Remote Globally</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                        © 2026 Shah Nawaz Hussain. Orchestrated with Precision.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <span className="text-[10px]">☁️</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <span className="text-[10px]">🐧</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
