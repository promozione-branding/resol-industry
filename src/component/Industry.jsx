"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronRight,
    Package,
    Boxes,
    Paintbrush,
    Workflow,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
    {
        id: 1,
        icon: Package,
        title: "Packaging",
        description:
            "Durable and flexible resins for food, consumer, and industrial packaging solutions.",
        isImageCard: false,
        bgImage: "/industry3.webp",
    },
    {
        id: 2,
        icon: Boxes,
        title: "Plastic",
        description:
            "Specialty polymers and materials supporting a wide range of plastic manufacturing applications.",
        isImageCard: true,
        bgImage: "/pvcpenal.webp",
    },
    {
        id: 3,
        icon: Paintbrush,
        title: "Paints & Coatings",
        description:
            "Additives and fillers designed for consistent performance across paints and coating applications.",
        isImageCard: false,
        bgImage: "/footwear.webp",
    },
    {
        id: 4,
        icon: Workflow,
        title: "PVC Pipes & Fittings",
        description:
            "Reliable polymer materials for manufacturing durable PVC pipes, fittings, profiles, and related products.",
        isImageCard: false,
        bgImage: "/pipe.webp",
    },
];

const ease = [0.22, 1, 0.36, 1];

/* =============================================================
   TEXT REVEAL
   Different animation from Product section
============================================================= */

function RevealText({
    children,
    className = "",
    delay = 0,
}) {
    return (
        <motion.span
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                // once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.span>
    );
}

/* =============================================================
   SMALL WORD REVEAL
============================================================= */

function WordReveal({
    children,
    delay = 0,
}) {
    const words = children.split(" ");

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{
                // once: true,
                amount: 0.4,
            }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.045,
                        delayChildren: delay,
                    },
                },
            }}
            className="inline-flex flex-wrap"
        >
            {words.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 15,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.45,
                                ease,
                            },
                        },
                    }}
                    className="mr-[0.25em] inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

export default function IndustriesSection() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (id) => {
        if (window.innerWidth < 1024) {
            setActiveCard((prev) => (prev === id ? null : id));
        }
    };

    return (
        <section className="w-full overflow-hidden bg-white px-4 py-4 font-sans text-[#111111] antialiased sm:px-8 sm:py-8 lg:px-12">
            <div className="mx-auto max-w-[1750px] space-y-8 lg:px-6">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <header className="mx-auto flex max-w-3xl flex-col items-center pt-4 text-center">

                    {/* Small Label */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            // once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.45,
                            ease,
                        }}
                        className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 sm:text-[11px]"
                    >
                        INDUSTRIES WE SERVE
                    </motion.p>

                    {/* Heading */}
                    <h2 className="mb-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
                        <RevealText>
                            Materials That
                        </RevealText>{" "}

                        <RevealText
                            delay={0.08}
                            className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text font-medium text-transparent"
                        >
                            Power
                        </RevealText>{" "}

                        <RevealText delay={0.14}>
                            Industries.
                        </RevealText>
                    </h2>

                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 18,
                            filter: "blur(4px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{
                            // once: true,
                            amount: 0.35,
                        }}
                        transition={{
                            duration: 0.55,
                            delay: 0.15,
                            ease,
                        }}
                        className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base"
                    >
                        <WordReveal delay={0.15}>
                            From packaging and plastics to paints, coatings, and PVC applications, Resol Industries supplies quality polymers, chemicals, additives, and materials for diverse industrial needs.
                        </WordReveal>
                    </motion.p>
                </header>

                {/* =====================================================
                    INDUSTRIES GRID
                ===================================================== */}

                <div className="grid grid-cols-1 items-start gap-6 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:pb-20 lg:pt-10">

                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        const isStaggered = index % 2 === 0;

                        return (
                            <div
                                key={industry.id}
                                className={`transition-transform duration-700 ease-out ${isStaggered
                                    ? "lg:translate-y-16"
                                    : "lg:-translate-y-8"
                                    }`}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 35,
                                        scale: 0.97,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                    }}
                                    viewport={{
                                        // once: true,
                                        margin: "-50px",
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                        ease,
                                    }}
                                    onClick={() =>
                                        handleCardClick(industry.id)
                                    }
                                    className={`group relative flex min-h-[380px] cursor-pointer flex-col justify-between overflow-hidden rounded-[32px] p-6 transition-all duration-500 sm:min-h-[420px] sm:p-6 ${industry.isImageCard
                                        ? "border border-transparent shadow-2xl"
                                        : "border border-[#e5e7eb] bg-gradient-to-b from-white to-[#f4f5f7] shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                                        }`}
                                >
                                    {/* Background Image */}
                                    <div
                                        className={`
                                            absolute
                                            inset-0
                                            z-0
                                            overflow-hidden
                                            transition-opacity
                                            duration-700

                                            ${industry.isImageCard
                                                ? "opacity-100"
                                                : `
                                                        max-lg:opacity-100
                                                        lg:opacity-0
                                                        lg:group-hover:opacity-100
                                                    `
                                            }

                                            ${activeCard === industry.id
                                                ? "max-lg:opacity-100"
                                                : ""
                                            }
                                        `}
                                    >
                                        <Image
                                            src={industry.bgImage}
                                            alt={industry.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-[1.5s]
                                                ease-out
                                                max-lg:scale-100
                                                lg:group-hover:scale-110
                                            "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90 transition-opacity duration-500" />
                                    </div>

                                    {/* Card Top */}
                                    <div className="relative z-10 space-y-6">

                                        {/* Icon */}
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{
                                                // once: true,
                                                amount: 0.3,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.07 + 0.12,
                                                ease,
                                            }}
                                            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${industry.isImageCard
                                                ? "border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md"
                                                : `
                                                        border
                                                        border-gray-100
                                                        bg-white
                                                        text-[#111111]
                                                        shadow-sm

                                                        max-lg:border-white/30
                                                        max-lg:bg-white/20
                                                        max-lg:text-white
                                                        max-lg:shadow-lg
                                                        max-lg:backdrop-blur-md

                                                        lg:group-hover:border-white/30
                                                        lg:group-hover:bg-white/20
                                                        lg:group-hover:text-white
                                                        lg:group-hover:shadow-lg
                                                        lg:group-hover:backdrop-blur-md
                                                    `
                                                }`}
                                        >
                                            <Icon className="h-7 w-7 stroke-[1.5]" />
                                        </motion.div>

                                        {/* Title & Description */}
                                        <div className="space-y-3">

                                            <h3
                                                className={`
                                                    text-xl
                                                    font-bold
                                                    leading-snug
                                                    tracking-tight
                                                    transition-colors
                                                    duration-500
                                                    sm:text-2xl

                                                    ${industry.isImageCard
                                                        ? "text-white"
                                                        : `
                                                                max-lg:text-white
                                                                lg:text-[#111111]
                                                                lg:group-hover:text-white
                                                            `
                                                    }
                                                `}
                                            >
                                                {industry.title}
                                            </h3>

                                            <p
                                                className={`
                                                    text-sm
                                                    leading-relaxed
                                                    transition-colors
                                                    duration-500

                                                    ${industry.isImageCard
                                                        ? "text-white"
                                                        : `
                                                                max-lg:text-gray-300
                                                                lg:text-[#111111]
                                                                lg:group-hover:text-white
                                                            `
                                                    }
                                                `}
                                            >
                                                {industry.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Bottom */}
                                    <div className="relative z-10 flex justify-end pt-8">
                                        <Link
                                            href="/industries"
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className={`
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-full
                                                transition-all
                                                duration-500

                                                ${industry.isImageCard
                                                    ? "bg-white text-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110"
                                                    : `
                                                            border
                                                            border-gray-200
                                                            bg-white
                                                            text-[#111111]
                                                            shadow-sm

                                                            lg:group-hover:border-transparent
                                                            lg:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                                                            lg:group-hover:scale-110
                                                        `
                                                }
                                            `}
                                        >
                                            <ChevronRight className="h-5 w-5 stroke-[2]" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}