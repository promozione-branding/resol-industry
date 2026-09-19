"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ClipboardCheck,
    Factory,
    PackageCheck,
    Truck,
    Handshake,
    CheckCircle2,
    ArrowUpRight,
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
        image: "/BLOG-citric-acid-origins.png",
    },
    {
        number: "02",
        title: "Source",
        subtitle: "Connect with the right supply",
        description:
            "Our diversified supplier network helps us source polymers, chemicals, additives, and other materials according to your requirement.",
        points: ["Supplier network", "Availability", "Commercial coordination"],
        icon: Factory,
        image: "/Polymers.webp",
    },
    {
        number: "03",
        title: "Quality Check",
        subtitle: "Focus on consistency",
        description:
            "We focus on specifications and quality requirements so the material is aligned with the intended application and manufacturing needs.",
        points: ["Specification review", "Quality focus", "Application suitability"],
        icon: PackageCheck,
        image: "/polymer-raw-materials-image-800x600-1.webp",
    },
    {
        number: "04",
        title: "Supply",
        subtitle: "From source to your business",
        description:
            "We coordinate packaging, dispatch, logistics, and delivery to support reliable bulk supply across India.",
        points: ["Bulk supply", "Logistics", "Pan-India reach"],
        icon: Truck,
        image: "/milky-white-filler-masterbatch-500x500.webp",
    },
    {
        number: "05",
        title: "Build Relationships",
        subtitle: "Beyond a single order",
        description:
            "Our focus extends beyond one transaction. We work toward long-term relationships, recurring requirements, and future business needs.",
        points: ["Long-term partnerships", "Responsive support", "Ongoing supply"],
        icon: Handshake,
        image: "/images (3).jpg",
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
        const unsubscribe = scrollYProgress.on("change", (value) => {
            const index = Math.min(
                processSteps.length - 1,
                Math.floor(value * processSteps.length)
            );

            setActiveStep(index);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#F4F2EC] text-[#0d2461] border border-[#f5bd24]"
        >
            {/* ================= HEADER ================= */}
            <div className="mx-auto max-w-[1400px] px-5 pb-5 pt-5 sm:px-8 lg:px-12 lg:pb-5 lg:pt-10">

                <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 flex items-center gap-3"
                        >
                            <span className="h-[2px] w-8 bg-[#f5bd24]" />

                            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#0d2461]/50">
                                How We Work
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[42px] font-extrabold leading-[0.95] tracking-[-2.5px] sm:text-5xl lg:text-[64px]"
                        >
                            From requirement
                            <br />
                            <span className="text-[#0d2461]/40">
                                to reliable supply.
                            </span>
                        </motion.h2>
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-[#0d2461]/50 lg:pb-2">
                        A straightforward process built around understanding
                        requirements, reliable sourcing, quality focus, and
                        long-term customer relationships.
                    </p>
                </div>
            </div>

            {/* ================= DESKTOP STICKY STORY ================= */}
            <div className="mx-auto hidden max-w-[1400px] px-5 sm:px-8 lg:block lg:px-12">

                <div className="grid grid-cols-[260px_1fr] gap-14">

                    {/* LEFT NAV */}
                    <div className="relative">

                        <div className="sticky top-24 h-[calc(100vh-180px)]">

                            <div className="flex h-full flex-col justify-center">

                                <div className="mb-9">
                                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[2.5px] text-[#0d2461]/35">
                                        Our Process
                                    </p>

                                    <h3 className="max-w-[220px] text-2xl font-extrabold leading-tight tracking-[-1px]">
                                        A clear path to dependable supply.
                                    </h3>
                                </div>

                                {/* TIMELINE */}
                                <div className="relative">

                                    <div className="absolute left-[5px] top-0 h-full w-px bg-[#0d2461]/10" />

                                    <motion.div
                                        style={{
                                            height: progressHeight,
                                        }}
                                        className="absolute left-[5px] top-0 w-[2px] bg-[#f5bd24]"
                                    />

                                    <div className="space-y-6">
                                        {processSteps.map(
                                            (step, index) => {
                                                const active =
                                                    activeStep === index;

                                                return (
                                                    <div
                                                        key={step.number}
                                                        className="relative flex items-center gap-5"
                                                    >
                                                        <span
                                                            className={`relative z-10 h-3 w-3 rounded-full border-2 transition-all duration-300 ${active
                                                                ? "scale-125 border-[#f5bd24] bg-[#f5bd24]"
                                                                : "border-[#0d2461]/15 bg-[#F4F2EC]"
                                                                }`}
                                                        />

                                                        <span
                                                            className={`text-xs font-bold transition-all ${active
                                                                ? "translate-x-1 text-[#0d2461]"
                                                                : "text-[#0d2461]/25"
                                                                }`}
                                                        >
                                                            {step.number} —{" "}
                                                            {step.title}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>

                                <div className="mt-10 flex items-center gap-3">
                                    <span className="text-4xl font-extrabold">
                                        {processSteps[activeStep].number}
                                    </span>

                                    <span className="h-[2px] w-9 bg-[#f5bd24]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#0d2461]/30">
                                        05 Steps
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SCROLL DRIVER */}
                    <div className="relative">

                        {/* THIS CREATES THE SCROLL LENGTH */}
                        <div className="relative h-[500vh]">

                            {/* ACTUAL STICKY CARD */}
                            <div className="sticky top-10 flex h-screen items-center py-16">

                                <div className="relative h-[74vh] w-full overflow-hidden border border-[#0d2461]/10 bg-white">

                                    {processSteps.map(
                                        (step, index) => {
                                            const Icon = step.icon;

                                            return (
                                                <motion.div
                                                    key={step.number}
                                                    initial={false}
                                                    animate={{
                                                        opacity:
                                                            activeStep ===
                                                                index
                                                                ? 1
                                                                : 0,
                                                        scale:
                                                            activeStep ===
                                                                index
                                                                ? 1
                                                                : 0.98,
                                                    }}
                                                    transition={{
                                                        duration: 0.45,
                                                        ease: [
                                                            0.22,
                                                            1,
                                                            0.36,
                                                            1,
                                                        ],
                                                    }}
                                                    className={`absolute inset-0 grid grid-cols-2 ${activeStep ===
                                                        index
                                                        ? "pointer-events-auto"
                                                        : "pointer-events-none"
                                                        }`}
                                                >

                                                    {/* IMAGE */}
                                                    <div className="relative overflow-hidden">

                                                        <Image
                                                            src={
                                                                step.image
                                                            }
                                                            alt={
                                                                step.title
                                                            }
                                                            fill
                                                            priority={
                                                                index ===
                                                                0
                                                            }
                                                            sizes="50vw"
                                                            className="object-cover"
                                                        />

                                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2461]/80 via-[#0d2461]/10 to-transparent" />

                                                        {/* BIG NUMBER */}
                                                        <div className="absolute bottom-5 left-6 text-[120px] font-extrabold leading-none tracking-[-10px] text-white/10">
                                                            {step.number}
                                                        </div>

                                                        {/* LABEL */}
                                                        <div className="absolute left-6 top-6 flex items-center gap-3">

                                                            <span className="flex h-11 w-11 items-center justify-center bg-[#f5bd24] text-xs font-extrabold text-[#0d2461]">
                                                                {step.number}
                                                            </span>

                                                            <span className="text-[9px] font-bold uppercase tracking-[2px] text-white">
                                                                Resol Industries
                                                            </span>
                                                        </div>

                                                        {/* SVG */}
                                                        <svg
                                                            className="absolute bottom-7 right-7 h-24 w-24 opacity-40"
                                                            viewBox="0 0 100 100"
                                                            fill="none"
                                                        >
                                                            <circle
                                                                cx="50"
                                                                cy="50"
                                                                r="38"
                                                                stroke="#f5bd24"
                                                            />

                                                            <circle
                                                                cx="50"
                                                                cy="50"
                                                                r="23"
                                                                stroke="white"
                                                            />

                                                            <path
                                                                d="M10 50H90M50 10V90"
                                                                stroke="#f5bd24"
                                                            />

                                                            <circle
                                                                cx="50"
                                                                cy="50"
                                                                r="4"
                                                                fill="#f5bd24"
                                                            />
                                                        </svg>
                                                    </div>

                                                    {/* CONTENT */}
                                                    <div className="relative flex flex-col justify-between overflow-hidden p-10 xl:p-14">

                                                        {/* BACKGROUND SVG */}
                                                        <svg
                                                            className="pointer-events-none absolute right-[-70px] top-[-70px] h-72 w-72 opacity-[0.035]"
                                                            viewBox="0 0 300 300"
                                                            fill="none"
                                                        >
                                                            <circle
                                                                cx="150"
                                                                cy="150"
                                                                r="125"
                                                                stroke="#0d2461"
                                                            />
                                                            <circle
                                                                cx="150"
                                                                cy="150"
                                                                r="90"
                                                                stroke="#0d2461"
                                                            />
                                                            <circle
                                                                cx="150"
                                                                cy="150"
                                                                r="55"
                                                                stroke="#0d2461"
                                                            />
                                                            <path
                                                                d="M0 150H300M150 0V300"
                                                                stroke="#0d2461"
                                                            />
                                                            <path
                                                                d="M45 45L255 255M255 45L45 255"
                                                                stroke="#0d2461"
                                                            />
                                                        </svg>

                                                        <div className="relative z-10">

                                                            <div className="mb-8 flex items-center justify-between">

                                                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f5bd24] bg-[#f5bd24]/10">
                                                                    <Icon
                                                                        size={
                                                                            23
                                                                        }
                                                                        strokeWidth={
                                                                            1.5
                                                                        }
                                                                    />
                                                                </div>

                                                                <ArrowUpRight
                                                                    size={
                                                                        23
                                                                    }
                                                                    strokeWidth={
                                                                        1.4
                                                                    }
                                                                    className="text-[#0d2461]/25"
                                                                />
                                                            </div>

                                                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[3px] text-[#f5bd24]">
                                                                Step{" "}
                                                                {
                                                                    step.number
                                                                }
                                                            </p>

                                                            <h3 className="max-w-lg text-[48px] font-extrabold leading-[0.95] tracking-[-2px] text-[#0d2461] xl:text-[62px]">
                                                                {
                                                                    step.title
                                                                }
                                                            </h3>

                                                            <p className="mt-6 text-lg font-semibold text-[#0d2461]/70">
                                                                {
                                                                    step.subtitle
                                                                }
                                                            </p>

                                                            <p className="mt-3 max-w-lg text-sm leading-7 text-[#0d2461]/50 xl:text-[15px]">
                                                                {
                                                                    step.description
                                                                }
                                                            </p>
                                                        </div>

                                                        {/* BOTTOM */}
                                                        <div className="relative z-10 border-t border-[#0d2461]/10 pt-6">

                                                            <p className="mb-3 text-[9px] font-bold uppercase tracking-[2px] text-[#0d2461]/35">
                                                                Focus Areas
                                                            </p>

                                                            <div className="flex flex-wrap gap-2">
                                                                {step.points.map(
                                                                    (
                                                                        point
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                point
                                                                            }
                                                                            className="flex items-center gap-2 border border-[#0d2461]/10 bg-[#F4F2EC] px-3 py-2 text-[10px] font-semibold text-[#0d2461]/65"
                                                                        >
                                                                            <CheckCircle2
                                                                                size={
                                                                                    13
                                                                                }
                                                                                className="text-[#f5bd24]"
                                                                            />

                                                                            {
                                                                                point
                                                                            }
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* ACTIVE LINE */}
                                                        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#f5bd24]" />
                                                    </div>
                                                </motion.div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="px-5 pb-16 sm:px-8 lg:hidden">

                <div className="space-y-8">

                    {processSteps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="overflow-hidden border border-[#0d2461]/10 bg-white"
                            >
                                <div className="relative h-[260px]">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2461]/80 to-transparent" />

                                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-[#f5bd24] text-xs font-extrabold">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="p-6">

                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#f5bd24] bg-[#f5bd24]/10">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="text-4xl font-extrabold leading-none tracking-[-1.5px] text-[#0d2461]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-sm font-semibold text-[#0d2461]/65">
                                        {step.subtitle}
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#0d2461]/50">
                                        {step.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {step.points.map((point) => (
                                            <span
                                                key={point}
                                                className="border border-[#0d2461]/10 bg-[#F4F2EC] px-3 py-2 text-[10px] font-semibold text-[#0d2461]/60"
                                            >
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-1 bg-[#f5bd24]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}