'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChevronDown,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';

const faqs = [
    {
        question: 'What products does Resol Industries offer?',
        answer:
            'Resol Industries Ltd. offers polymers, resins, chemicals, plasticizers, fillers, colourants, and rubber products including PVC Resin, PET Resin, EVA, Calcium Carbonate, Citric Acid, Plasticizers, and Natural & Synthetic Rubber.',
    },
    {
        question: 'Which industries do you serve?',
        answer:
            'We serve a wide range of industries including Packaging, Plastics, PVC Pipes & Fittings, Paints & Coatings, Footwear, Flooring, Adhesives, Textiles, and other manufacturing applications.',
    },
    {
        question: 'Do you supply products in bulk?',
        answer:
            'Yes. Resol Industries specialises in B2B and wholesale distribution and supports bulk requirements based on product availability, specifications, quantity, and delivery requirements.',
    },
    {
        question: 'Where does Resol Industries operate?',
        answer:
            'Our head office is based in New Delhi, and we serve customers across India through our supply and distribution network.',
    },
    {
        question: 'How can I enquire about a product?',
        answer:
            'You can contact our team through the enquiry form or contact page. Share the product, required quantity, application, and delivery location, and our team will assist you with the relevant information.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full overflow-hidden bg-[#fafaf8] px-4 py-16 font-sans text-[#111111] sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-[1250px]">

                <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Decorative SVG */}
                        <div className="relative mx-auto flex aspect-square max-w-[430px] items-center justify-center">

                            {/* Outer circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-5 rounded-full border border-[#c99618]/20"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 45,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-16 rounded-full border border-dashed border-[#c99618]/25"
                            />

                            {/* Decorative SVG */}
                            <svg
                                viewBox="0 0 500 500"
                                className="absolute inset-0 h-full w-full"
                                fill="none"
                            >
                                <circle
                                    cx="250"
                                    cy="250"
                                    r="185"
                                    stroke="#c99618"
                                    strokeOpacity="0.12"
                                    strokeWidth="1"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="135"
                                    stroke="#c99618"
                                    strokeOpacity="0.18"
                                    strokeWidth="1"
                                    strokeDasharray="4 8"
                                />

                                <path
                                    d="M250 65V435M65 250H435"
                                    stroke="#c99618"
                                    strokeOpacity="0.08"
                                    strokeWidth="1"
                                />

                                <path
                                    d="M119 119L381 381M381 119L119 381"
                                    stroke="#c99618"
                                    strokeOpacity="0.06"
                                    strokeWidth="1"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="72"
                                    fill="#c99618"
                                    fillOpacity="0.06"
                                    stroke="#c99618"
                                    strokeOpacity="0.35"
                                    strokeWidth="1.5"
                                />

                                <circle
                                    cx="250"
                                    cy="250"
                                    r="8"
                                    fill="#c99618"
                                />

                                <circle
                                    cx="250"
                                    cy="65"
                                    r="5"
                                    fill="#c99618"
                                />

                                <circle
                                    cx="435"
                                    cy="250"
                                    r="5"
                                    fill="#c99618"
                                />

                                <circle
                                    cx="250"
                                    cy="435"
                                    r="5"
                                    fill="#c99618"
                                />

                                <circle
                                    cx="65"
                                    cy="250"
                                    r="5"
                                    fill="#c99618"
                                />
                            </svg>

                            {/* Center Content */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-[#c99618] shadow-xl">
                                    <Sparkles className="h-6 w-6" />
                                </div> */}

                                {/* <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c99618]">
                                    Resol Industries
                                </span> */}

                                {/* <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    We’re Here
                                    <br />
                                    <span className="font-medium text-gray-400">
                                        To Help.
                                    </span>
                                </h3> */}
                            </div>

                            {/* Floating dots */}
                            <motion.span
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute left-[16%] top-[27%] h-2 w-2 rounded-full bg-[#c99618]"
                            />

                            <motion.span
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute bottom-[25%] right-[17%] h-2 w-2 rounded-full bg-[#c99618]/50"
                            />
                        </div>

                        {/* Small text */}
                        <div className="mx-auto mt-3 max-w-sm text-center">
                            <p className="text-sm leading-relaxed text-gray-500">
                                Have a product requirement or need help
                                choosing the right material? Our team is ready
                                to assist you.
                            </p>

                            <a
                                href="/contact"
                                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#111111]"
                            >
                                Talk to our team

                                <ArrowUpRight className="h-4 w-4 text-[#c99618] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {/* Heading */}
                        <div className="mb-7">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#c99618]" />

                                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#c99618]">
                                    FAQ
                                </p>
                            </div>

                            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                                Frequently Asked
                                <br />
                                <span className="font-medium text-[#c99618]">
                                    Questions.
                                </span>
                            </h2>
                        </div>

                        {/* FAQ */}
                        <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="relative border-b border-gray-100 last:border-b-0"
                                    >
                                        {/* Active Line */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isOpen ? '100%' : '0%',
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-0 top-0 w-[3px] bg-[#c99618]"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenIndex(
                                                    isOpen ? null : index
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span
                                                    className={`text-[10px] font-bold tracking-widest ${isOpen
                                                            ? 'text-[#c99618]'
                                                            : 'text-gray-300'
                                                        }`}
                                                >
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                <span
                                                    className={`text-sm font-semibold sm:text-[15px] ${isOpen
                                                            ? 'text-[#111111]'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    {faq.question}
                                                </span>
                                            </div>

                                            <motion.div
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isOpen
                                                        ? 'bg-[#c99618] text-white'
                                                        : 'bg-gray-50 text-gray-400'
                                                    }`}
                                            >
                                                <ChevronDown className="h-4 w-4" />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: 'auto',
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        height: {
                                                            duration: 0.35,
                                                            ease: [
                                                                0.4,
                                                                0,
                                                                0.2,
                                                                1,
                                                            ],
                                                        },
                                                        opacity: {
                                                            duration: 0.25,
                                                        },
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-5 pl-[58px] pr-12 sm:pb-6">
                                                        <p className="text-sm leading-6 text-gray-500">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}