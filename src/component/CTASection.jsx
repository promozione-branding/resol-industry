'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Download,
    Phone,
    MessageCircle,
} from 'lucide-react';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from 'react-icons/fa';

/* =========================================
   Common Animation
========================================= */

const textVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.75,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    },
};

/* =========================================
   Character Reveal
========================================= */

const SplitReveal = ({ text, className = '', delay = 0 }) => {
    return (
        <motion.span
            className={`inline-block ${className}`}
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
                        staggerChildren: 0.035,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {text.split('').map((letter, index) => (
                <motion.span
                    key={`${letter}-${index}`}
                    className="inline-block"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 35,
                            filter: 'blur(8px)',
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            transition: {
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

/* =========================================
   CTA
========================================= */

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-[#f5f3ed] px-4 py-14 font-sans sm:px-8 sm:py-18 lg:px-12 lg:py-20">

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Top Gold Glow */}
                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c99618]/10 blur-[120px]" />

                {/* Bottom Gold Glow */}
                <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#c99618]/5 blur-[100px]" />

                {/* Decorative Circle */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        // once: true,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#c99618]/10"
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.7,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        // once: true,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.15,
                    }}
                    className="absolute -right-20 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-dashed border-[#c99618]/15"
                />
            </div>

            {/* =========================================
                CONTAINER
            ========================================= */}

            <div className="relative mx-auto max-w-[1250px]">

                {/* =========================================
                    MAIN CTA CARD
                ========================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 45,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        // once: true,
                        margin: '-100px',
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="relative overflow-hidden rounded-[32px] border border-black/[0.07] bg-white px-6 py-9 shadow-[0_25px_80px_rgba(0,0,0,0.07)] sm:px-10 sm:py-11 lg:px-14 lg:py-12"
                >

                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

                        {/* =========================================
                            LEFT CONTENT
                        ========================================= */}

                        <div className="relative z-10">

                            {/* Label */}
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    // once: true,
                                    amount: 0.5,
                                }}
                                className="mb-5 flex items-center gap-3"
                            >
                                <motion.span
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: 32,
                                    }}
                                    viewport={{
                                        // once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1,
                                    }}
                                    className="h-px bg-[#c99618]"
                                />

                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c99618]">
                                    LET&apos;S WORK TOGETHER
                                </span>
                            </motion.div>

                            {/* =========================================
                                MAIN TYPOGRAPHY
                            ========================================= */}

                            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">

                                <SplitReveal text="The right materials" />

                                <br />

                                <SplitReveal
                                    text="for your next project."
                                    delay={0.35}
                                    className="font-medium text-[#c99618]"
                                />

                            </h2>

                            {/* Description */}
                            <motion.p
                                variants={textVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    // once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    delay: 0.9,
                                }}
                                className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base"
                            >
                                Looking for reliable polymers, chemicals,
                                additives, or industrial materials? Talk to
                                Resol Industries and let our team understand
                                your requirement.
                            </motion.p>

                            {/* =========================================
                                BUTTONS
                            ========================================= */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 25,
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
                                    duration: 0.7,
                                    delay: 1.05,
                                }}
                                className="mt-8 flex flex-col gap-3 sm:flex-row"
                            >

                                {/* Download */}
                                <motion.a
                                    href="/Resol-Industries-Brochure.pdf"
                                    download
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c99618] px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#b38412] hover:shadow-[0_10px_35px_rgba(201,150,24,0.25)]"
                                >
                                    <Download className="h-4 w-4" />

                                    Download Brochure

                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </motion.a>

                                {/* Call */}
                                <motion.a
                                    href="tel:+910000000000"
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-4 py-3.5 text-sm font-semibold text-[#111827] transition-all duration-300 hover:border-[#c99618]/50 hover:bg-[#f3f0e7]"
                                >
                                    <Phone className="h-4 w-4 text-[#c99618]" />

                                    Call Now

                                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </motion.a>

                                {/* WhatsApp */}
                                <motion.a
                                    href="https://wa.me/910000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-[#f8f7f3] px-4 py-3.5 text-sm font-semibold text-[#111827] transition-all duration-300 hover:border-[#c99618]/50 hover:bg-[#f3f0e7]"
                                >
                                    <MessageCircle className="h-4 w-4 text-[#c99618]" />

                                    WhatsApp

                                    <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </motion.a>

                            </motion.div>
                        </div>

                        {/* =========================================
                            RIGHT PRODUCT VISUAL
                        ========================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 60,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            viewport={{
                                // once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.25,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="relative flex min-h-[300px] items-center justify-center lg:min-h-[390px]"
                        >

                            {/* Gold Glow */}
                            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c99618]/15 blur-[80px]" />

                            {/* Decorative Circle */}
                            <motion.div
                                initial={{
                                    rotate: -20,
                                    scale: 0.8,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    rotate: 0,
                                    scale: 1,
                                    opacity: 1,
                                }}
                                viewport={{
                                    // once: true,
                                }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.4,
                                }}
                                className="absolute h-[330px] w-[330px] rounded-full border border-[#c99618]/15"
                            />

                            {/* Product Image */}
                            <motion.div
                                initial={{
                                    y: 25,
                                    scale: 0.88,
                                }}
                                whileInView={{
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    // once: true,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.4,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    scale: 1.04,
                                    y: -6,
                                }}
                                className="relative z-10 flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f7f5ef] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.10)] sm:h-[310px] sm:w-[310px]"
                            >
                                <img
                                    src="/pvc4.webp"
                                    alt="Resol Industries Polymer Products"
                                    className="h-full w-full object-contain"
                                />
                            </motion.div>

                            {/* Floating Gold Dot */}
                            <motion.span
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute left-8 top-12 z-20 h-3 w-3 rounded-full bg-[#c99618]"
                            />

                            {/* Floating Small Dot */}
                            <motion.span
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute bottom-12 right-8 z-20 h-2 w-2 rounded-full bg-[#c99618]/50"
                            />

                        </motion.div>

                    </div>

                    {/* =========================================
                        SOCIAL ROW
                    ========================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
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
                            duration: 0.6,
                            delay: 1.2,
                        }}
                        className="relative z-10 mt-4 flex flex-col gap-5 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between"
                    >

                        <p className="text-xs text-gray-500">
                            Follow Resol Industries for product updates and
                            industry insights.
                        </p>

                        <div className="flex items-center gap-2">

                            {/* LinkedIn */}
                            <motion.a
                                href="#"
                                aria-label="LinkedIn"
                                whileHover={{
                                    y: -4,
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f8f7f3] text-gray-500 transition-all duration-300 hover:border-[#c99618] hover:bg-[#c99618] hover:text-white"
                            >
                                <FaLinkedinIn className="h-4 w-4" />
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                href="#"
                                aria-label="Instagram"
                                whileHover={{
                                    y: -4,
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f8f7f3] text-gray-500 transition-all duration-300 hover:border-[#c99618] hover:bg-[#c99618] hover:text-white"
                            >
                                <FaInstagram className="h-4 w-4" />
                            </motion.a>

                            {/* Facebook */}
                            <motion.a
                                href="#"
                                aria-label="Facebook"
                                whileHover={{
                                    y: -4,
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f8f7f3] text-gray-500 transition-all duration-300 hover:border-[#c99618] hover:bg-[#c99618] hover:text-white"
                            >
                                <FaFacebookF className="h-4 w-4" />
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/910000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                whileHover={{
                                    y: -4,
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f8f7f3] text-gray-500 transition-all duration-300 hover:border-[#c99618] hover:bg-[#c99618] hover:text-white"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                            </motion.a>

                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}