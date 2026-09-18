"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ClipboardCheck,
    Factory,
    PackageCheck,
    Truck,
    Handshake,
    CheckCircle2,
    ArrowDown,
} from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Understand",
        subtitle: "Start with the requirement",
        description:
            "We first understand your product requirement, application, quantity, grade, technical expectations, and delivery needs.",
        points: ["Product & grade", "Application", "Quantity planning"],
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Source",
        subtitle: "Connect with the right supply",
        description:
            "Our diversified supplier network helps us source polymers, chemicals, additives, and other materials according to your requirement.",
        points: ["Supplier network", "Availability", "Commercial coordination"],
        icon: Factory,
    },
    {
        number: "03",
        title: "Quality Check",
        subtitle: "Focus on consistency",
        description:
            "We focus on specifications and quality requirements so the material is aligned with the intended application and manufacturing needs.",
        points: ["Specification review", "Quality focus", "Application suitability"],
        icon: PackageCheck,
    },
    {
        number: "04",
        title: "Supply",
        subtitle: "From source to your business",
        description:
            "We coordinate packaging, dispatch, logistics, and delivery to support reliable bulk supply across India.",
        points: ["Bulk supply", "Logistics", "Pan-India reach"],
        icon: Truck,
    },
    {
        number: "05",
        title: "Build Relationships",
        subtitle: "Beyond a single order",
        description:
            "Our focus extends beyond one transaction. We work toward long-term relationships, recurring requirements, and future business needs.",
        points: ["Long-term partnerships", "Responsive support", "Ongoing supply"],
        icon: Handshake,
    },
];

export default function HowWeWork() {
    const sectionRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const progressHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"]
    );

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight * 0.5;

            const distance = viewportCenter - rect.top;

            const totalHeight = sectionRef.current.offsetHeight;

            const progress = distance / totalHeight;

            const index = Math.floor(
                progress * processSteps.length
            );

            setActiveStep(
                Math.max(
                    0,
                    Math.min(processSteps.length - 1, index)
                )
            );
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#f7f7f5] text-[#111]"
        >
            {/* HEADER */}
            <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f5bd24]"
                    >
                        How We Work
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-semibold leading-[1.05] text-[#0d2461] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
                    >
                        From requirement
                        <br />
                        <span className="text-[#0d2461]">
                            to reliable supply.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-5 max-w-2xl text-sm leading-7 text-black/60 sm:text-base"
                    >
                        A straightforward process built around understanding
                        requirements, reliable sourcing, quality focus, and
                        long-term customer relationships.
                    </motion.p>
                </div>
            </div>

            {/* MAIN STICKY AREA */}
            <div className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                    {/* LEFT STICKY */}
                    <div className="hidden lg:block">
                        <div className="sticky top-20 flex h-[calc(100vh-160px)] flex-col justify-center">

                            <div className="mb-8">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                                    Our Process
                                </p>

                                <h3 className="max-w-sm text-3xl font-semibold leading-tight text-[#0d2461]">
                                    A clear process for dependable supply.
                                </h3>
                            </div>

                            {/* STEP NAVIGATION */}
                            <div className="relative">
                                <div className="absolute left-[5px] top-0 h-full w-px bg-black/10" />

                                <motion.div
                                    style={{ height: progressHeight }}
                                    className="absolute left-[5px] top-0 w-px bg-[#f5bd24]"
                                />

                                <div className="space-y-5">
                                    {processSteps.map((step, index) => {
                                        const active = activeStep === index;

                                        return (
                                            <button
                                                key={step.number}
                                                type="button"
                                                className="group relative flex w-full items-center gap-5 text-left"
                                                onClick={() => {
                                                    const section = sectionRef.current;

                                                    if (!section) return;

                                                    const sectionTop =
                                                        section.getBoundingClientRect().top +
                                                        window.scrollY;

                                                    const sectionHeight =
                                                        section.offsetHeight;

                                                    const targetProgress =
                                                        index / processSteps.length;

                                                    window.scrollTo({
                                                        top:
                                                            sectionTop +
                                                            targetProgress * sectionHeight,
                                                        behavior: "smooth",
                                                    });
                                                }}
                                            >
                                                <span
                                                    className={`relative z-10 flex h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300 ${active
                                                        ? "scale-125 border-[#f5bd24] bg-[#f5bd24]"
                                                        : "border-black/20 bg-[#f7f7f5] group-hover:border-[#c99618]"
                                                        }`}
                                                />

                                                <span
                                                    className={`text-sm font-medium transition-all duration-300 ${active
                                                        ? "translate-x-1 text-[#0d2461]"
                                                        : "text-black/35 group-hover:text-black/70"
                                                        }`}
                                                >
                                                    {step.number} — {step.title}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ACTIVE COUNTER */}
                            <div className="mt-10 flex items-center gap-3">
                                <span className="text-4xl font-light text-[#0d2461]">
                                    {processSteps[activeStep].number}
                                </span>

                                <span className="h-px w-10 bg-[#c99618]" />

                                <span className="text-xs uppercase tracking-[0.18em] text-black/40">
                                    05 Steps
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SCROLL CONTENT */}
                    <div className="relative">
                        {/* MOBILE LINE */}
                        <div className="absolute left-[7px] top-0 h-full w-px bg-black/10 lg:hidden" />

                        <div>
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                const active = activeStep === index;

                                return (
                                    <div
                                        key={step.number}
                                        className="relative min-h-[70vh] py-12 lg:min-h-[70vh] lg:py-0"
                                    >
                                        <div className="flex min-h-full items-center">
                                            {/* MOBILE DOT */}
                                            <div
                                                className={`absolute left-0 top-16 z-10 h-4 w-4 rounded-full border-4 border-[#f7f7f5] lg:hidden ${active
                                                    ? "bg-[#c99618]"
                                                    : "bg-black/15"
                                                    }`}
                                            />

                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    y: 35,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: false,
                                                    amount: 0.35,
                                                }}
                                                transition={{
                                                    duration: 0.55,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className={`ml-8 w-full max-w-3xl lg:ml-0 transition-opacity duration-300 ${active
                                                    ? "opacity-100"
                                                    : "opacity-40 lg:opacity-30"
                                                    }`}
                                            >
                                                {/* NUMBER */}
                                                <div className="mb-5 flex items-center gap-4">
                                                    <span className="text-xs font-semibold tracking-[0.2em] text-[#c99618]">
                                                        {step.number}
                                                    </span>

                                                    <span className="h-px w-10 bg-[#c99618]" />
                                                </div>

                                                {/* ICON */}
                                                <div
                                                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${active
                                                        ? "border-[#c99618] bg-[#fffaf0]"
                                                        : "border-black/10 bg-white"
                                                        }`}
                                                >
                                                    <Icon
                                                        size={24}
                                                        strokeWidth={1.5}
                                                        className={
                                                            active
                                                                ? "text-[#c99618]"
                                                                : "text-[#0d2461]"
                                                        }
                                                    />
                                                </div>

                                                {/* TITLE */}
                                                <h3 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0d2461] sm:text-5xl lg:text-6xl">
                                                    {step.title}
                                                </h3>

                                                {/* SUBTITLE */}
                                                <p className="mt-4 text-lg font-medium text-black/70">
                                                    {step.subtitle}
                                                </p>

                                                {/* DESCRIPTION */}
                                                <p className="mt-2 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                                                    {step.description}
                                                </p>

                                                {/* POINTS */}
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {step.points.map((point) => (
                                                        <div
                                                            key={point}
                                                            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-black/65"
                                                        >
                                                            <CheckCircle2
                                                                size={14}
                                                                className="text-[#c99618]"
                                                            />

                                                            {point}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}