'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
    {
        id: '01',
        name: 'Mr. Krishan Kumar Bansal',
        role: 'Founder Director',
        image: '/mr-krishan-kumar-bansal.webp',
    },
    {
        id: '02',
        name: 'Mr. Parth Dodeja',
        role: 'Director',
        image: '/mr-parth-dodeja-big-377x474.webp',
    },
    {
        id: '03',
        name: 'Mr. Vijay Kr. Rawal',
        role: 'Director',
        image: '/vijay-rawal-377x474.webp',
    },
];

export default function TeamSection() {
    return (
        <section className="w-full overflow-hidden bg-white px-4 py-14 font-sans text-[#111111] sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto max-w-[1350px]">

                {/* Header */}
                <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end lg:mb-11">

                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#c99618]" />

                            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618] sm:text-[11px]">
                                Our Team
                            </p>
                        </div>

                        <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                            The People Behind{' '}
                            <span className="font-medium text-[#c99618]">
                                Resol Industries.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-xs leading-relaxed text-gray-500 sm:text-sm">
                        Experienced leadership driving trusted relationships,
                        quality products, and long-term growth across the polymer
                        and chemical industries.
                    </p>
                </div>

                {/* Team Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-[#f3f1ec]">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />

                                {/* Soft overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                                {/* Number */}
                                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/10 text-[10px] font-semibold text-white backdrop-blur-md">
                                    {member.id}
                                </div>

                                {/* Gold bottom line */}
                                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c99618] transition-all duration-500 group-hover:w-full" />
                            </div>

                            {/* Details */}
                            <div className="flex items-start justify-between gap-3 pt-4">

                                <div>
                                    <h3 className="text-base font-bold tracking-tight sm:text-lg">
                                        {member.name}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-[#c99618]" />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-[11px]">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Gold accent */}
                                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c99618]/30 bg-[#c99618]/5 transition-all duration-300 group-hover:bg-[#c99618]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#c99618] transition-colors duration-300 group-hover:bg-white" />
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}