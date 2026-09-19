"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const team = [
    {
        id: "02",
        name: "Mr. Krishan Kumar Bansal",
        role: "Founder Director",
        image: "/mr-krishan-kumar-bansal.webp",
    },
    {
        id: "03",
        name: "Mr. Parth Dodeja",
        role: "Director",
        image: "/mr-parth-dodeja-big-377x474.webp",
    },
    {
        id: "04",
        name: "Mr. Vijay Kr. Rawal",
        role: "Director",
        image: "/vijay-rawal-377x474.webp",
    },
];

export default function TeamSection() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    const [contentWidth, setContentWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            if (contentRef.current) {
                setContentWidth(contentRef.current.scrollWidth);
            }

            setViewportWidth(window.innerWidth);
        };

        updateSize();

        const resizeObserver = new ResizeObserver(updateSize);

        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        window.addEventListener("resize", updateSize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const scrollDistance = Math.max(contentWidth - viewportWidth, 0);

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollDistance]
    );

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F4F2EC] font-sans"
            style={{
                height: contentWidth
                    ? `calc(80vh + ${scrollDistance}px)`
                    : "180vh",
            }}
        >
            <div className="sticky top-15 h-screen overflow-hidden">

                {/* Top Progress */}
                <div className="absolute left-0 top-0 z-50 h-[2px] w-full bg-[#0d2461]/10">
                    <motion.div
                        style={{
                            scaleX: scrollYProgress,
                            transformOrigin: "left",
                        }}
                        className="h-full bg-[#f5bd24]"
                    />
                </div>

                {/* Section Label */}
                {/* <div className="absolute left-5 top-6 z-40 flex items-center gap-3 lg:left-10">
                    <span className="h-px w-7 bg-[#0d2461]/30" />

                    <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#0d2461]/50">
                        Resol Industries / Leadership
                    </span>
                </div> */}

                {/* Horizontal Track */}
                <motion.div
                    ref={contentRef}
                    style={{ x }}
                    className="flex h-full w-max items-center"
                >

                    {/* =====================================
                        01 — EXPERIENCE
                    ====================================== */}

                    <div className="relative flex h-[78vh] w-[82vw] shrink-0 items-center bg-[#0d2461] px-7 md:w-[570px] md:px-12 lg:h-[76vh] lg:w-[620px] lg:px-14">

                        {/* Yellow line */}
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#f5bd24]" />

                        {/* Background number */}
                        <div className="pointer-events-none absolute bottom-[-25px] right-[-15px] text-[210px] font-extrabold leading-none tracking-[-20px] text-white/[0.025] md:text-[260px]">
                            01
                        </div>

                        <div className="relative z-10">

                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#f5bd24]" />

                                <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#f5bd24]">
                                    Our Experience
                                </span>
                            </div>

                            <h2 className="mt-6 text-[42px] font-extrabold leading-[0.95] tracking-[-2.5px] text-white md:text-[55px]">
                                20+
                                <br />

                                <span className="text-[#f5bd24]">
                                    Years
                                </span>

                                <br />

                                of Industry
                                <br />
                                Experience.
                            </h2>

                            <p className="mt-6 max-w-[430px] text-[12px] leading-[1.8] text-white/60 md:text-[14px]">
                                Established in 2005, Resol Industries brings
                                extensive experience in importing and
                                distributing industrial materials across India.
                            </p>

                            <div className="mt-7 flex items-center gap-4">
                                <span className="text-[9px] font-bold uppercase tracking-[2px] text-white/40">
                                    Meet our leadership
                                </span>

                                <span className="h-px w-12 bg-[#f5bd24]" />
                            </div>

                        </div>
                    </div>

                    {/* =====================================
                        02 / 03 / 04 — DIRECTORS
                    ====================================== */}

                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="relative flex h-[78vh] w-[78vw] shrink-0 items-center px-4 md:w-[500px] md:px-7 lg:h-[76vh] lg:w-[540px]"
                        >

                            {/* Background Number */}
                            <div className="pointer-events-none absolute bottom-[-15px] left-0 text-[220px] font-extrabold leading-none tracking-[-20px] text-[#0d2461]/[0.045] md:text-[280px]">
                                {member.id}
                            </div>

                            {/* Person Card */}
                            <div className="group relative z-10 h-full max-h-[650px] w-full overflow-hidden bg-[#dedbd3]">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 78vw, 540px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2461]/95 via-[#0d2461]/15 to-transparent" />

                                {/* Top Label */}
                                <div className="absolute left-0 top-0 flex items-center gap-2 bg-[#f5bd24] px-4 py-2.5">

                                    <span className="text-[10px] font-extrabold text-[#0d2461]">
                                        {member.id}
                                    </span>

                                    <span className="h-3 w-px bg-[#0d2461]/30" />

                                    <span className="text-[8px] font-bold uppercase tracking-[1.5px] text-[#0d2461]">
                                        {member.role}
                                    </span>

                                </div>

                                {/* Person Info */}
                                <div className="absolute bottom-0 left-0 w-full p-5 md:p-7">

                                    <div className="mb-4 h-[2px] w-10 bg-[#f5bd24]" />

                                    <h3 className="max-w-[420px] text-[24px] font-extrabold leading-[1.05] tracking-[-1px] text-white md:text-[29px]">
                                        {member.name}
                                    </h3>

                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#f5bd24]" />

                                        <p className="text-[9px] font-bold uppercase tracking-[2px] text-white/65">
                                            {member.role}
                                        </p>
                                    </div>

                                </div>

                                {/* Hover Line */}
                                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#f5bd24] transition-all duration-500 group-hover:w-full" />

                            </div>
                        </div>
                    ))}

                    {/* =====================================
                        05 — CTA
                    ====================================== */}

                    <div className="relative flex h-[78vh] w-[82vw] shrink-0 items-center bg-[#f5bd24] px-7 md:w-[600px] md:px-12 lg:h-[76vh] lg:w-[680px] lg:px-14">

                        {/* Background Number */}
                        <div className="pointer-events-none absolute bottom-[-20px] right-[-15px] text-[240px] font-extrabold leading-none tracking-[-25px] text-[#0d2461]/[0.06]">
                            05
                        </div>

                        <div className="relative z-10">

                            <div className="flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-[#0d2461]/50" />

                                <span className="text-[9px] font-bold uppercase tracking-[3px] text-[#0d2461]/60">
                                    Resol Industries Ltd.
                                </span>
                            </div>

                            <h2 className="mt-6 text-[42px] font-extrabold leading-[0.94] tracking-[-2.5px] text-[#0d2461] md:text-[52px]">

                                Strong
                                <br />

                                Leadership.

                                <br />

                                <span className="text-white">
                                    Trusted
                                </span>

                                <br />

                                Partnerships.

                            </h2>

                            <p className="mt-6 max-w-[420px] text-[12px] leading-[1.8] text-[#0d2461]/65 md:text-[14px]">
                                Driven by experience, trusted relationships and
                                a commitment to dependable industrial material
                                supply across India.
                            </p>

                            <a
                                href="/contact"
                                className="mt-7 inline-flex items-center gap-4 bg-[#0d2461] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[2px] text-[#f5bd24] transition-all duration-300 hover:bg-[#0a1c4d]"
                            >
                                Connect With Us

                                <span className="text-base">
                                    →
                                </span>
                            </a>

                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}