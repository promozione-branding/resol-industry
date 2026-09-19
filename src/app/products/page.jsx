"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    Factory,
    FlaskConical,
    MessageCircle,
    PackageCheck,
    Phone,
    ShieldCheck,
    Truck,
    X,
} from "lucide-react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const product = {
    name: "PVC Resin",
    category: "Polymers",
    grade: "Industrial Grade",
    shortDescription:
        "High-quality PVC Resin supplied for reliable performance across pipes, profiles, flooring, footwear, cables, and other PVC applications.",

    images: [
        "/pvc4.webp",
        "/Polymers.webp",
        "/pipe.webp",
    ],

    overview:
        "PVC Resin is a versatile thermoplastic material widely used across industrial and manufacturing applications. Resol Industries supplies quality polymer materials to support consistent processing, durability, and finished-product performance.",

    features: [
        {
            icon: ShieldCheck,
            title: "Consistent Quality",
            description:
                "Reliable material quality suitable for demanding manufacturing applications.",
        },
        {
            icon: Factory,
            title: "Industrial Applications",
            description:
                "Suitable for a wide range of PVC processing and manufacturing requirements.",
        },
        {
            icon: PackageCheck,
            title: "Bulk Supply",
            description:
                "Available for wholesale and bulk industrial requirements.",
        },
        {
            icon: Truck,
            title: "Reliable Supply",
            description:
                "Supported by Resol Industries' established sourcing and distribution network.",
        },
    ],

    specifications: [
        ["Product", "PVC Resin"],
        ["Category", "Polymers"],
        ["Grade", "Industrial Grade"],
        ["Application", "PVC Pipes, Profiles, Flooring, Footwear & More"],
        ["Form", "Powder"],
        ["Packaging", "25 Kg / 50 Kg Bags"],
        ["Supply Type", "Bulk / Wholesale"],
        ["Origin", "Imported / As per availability"],
    ],
};

const relatedProducts = [
    {
        name: "Polystyrene (PS)",
        category: "Pet Resin",
        image: "/ChatGPT Image Sep 19, 2026, 02_55_55 PM.png",
        href: "/products/pet-resin",
    },
    {
        name: "Polypropylene (PP)",
        category: "Fillers",
        image: "/ChatGPT Image Sep 19, 2026, 02_59_32 PM.png",
        href: "/products/calcium-carbonate",
    },
    {
        name: "EVA Resin",
        category: "Chemicals & Additives",
        image: "/ChatGPT Image Sep 19, 2026, 03_01_04 PM.png",
        href: "/products/plasticizers",
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const TypewriterText = memo(function TypewriterText({
    text,
    speed = 100,
    onComplete,
    className = '',
}) {
    const [displayedText, setDisplayedText] = useState('');
    const completeRef = useRef(onComplete);

    useEffect(() => {
        completeRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        let index = 0;
        let timeoutId = null;


        setDisplayedText('');

        const typeNext = () => {
            index += 1;

            setDisplayedText(text.slice(0, index));

            if (index < text.length) {
                timeoutId = setTimeout(typeNext, speed);
            } else {
                completeRef.current?.();
            }
        };

        if (text.length > 0) {
            timeoutId = setTimeout(typeNext, speed);
        } else {
            completeRef.current?.();
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };


    }, [text, speed]);

    const isTyping = displayedText.length < text.length;

    return (<span className={className}>
        {displayedText}


        {isTyping && (
            <span
                className="ml-1 inline-block font-light"
                aria-hidden="true"
            >
                |
            </span>
        )}
    </span>


    );
});

export default function ProductDetailsPage() {
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setActiveImage((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const whatsappNumber = "919873735716";
    const phoneNumber = "+919873735716";

    const whatsappMessage = encodeURIComponent(
        `Hello Resol Industries, I am interested in ${product.name}. Please share the price, specifications and availability.`
    );

    return (<>
        <Navbar />

        <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">

            {/* =====================================================
                HERO / PRODUCT
            ====================================================== */}

            <section className="relative overflow-hidden border-b border-black/5 bg-white">
                {/* Background decoration */}
                <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c99618]/5 blur-3xl" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0d2461]/5 blur-3xl" />

                <div className="relative mx-auto max-w-[1750px] px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-10">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-400"
                    >
                        <Link
                            href="/"
                            className="transition hover:text-[#c99618]"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <Link
                            href="/products"
                            className="transition hover:text-[#c99618]"
                        >
                            Products
                        </Link>

                        <span>/</span>

                        <span className="text-[#111111]">
                            {product.name}
                        </span>
                    </motion.div>

                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-[#f3f3f0]">

                                {/* Category badge */}
                                <div className="absolute left-5 top-5 z-20">
                                    <span className="rounded-full border border-black/5 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111] shadow-sm backdrop-blur">
                                        {product.category}
                                    </span>
                                </div>

                                {/* Main image */}
                                <div className="relative overflow-hidden h-105">

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={product.images[activeImage]}
                                            initial={{
                                                opacity: 0,
                                                scale: 1.04,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.98,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                            }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={product.images[activeImage]}
                                                alt={product.name}
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Arrows */}
                                    <button
                                        type="button"
                                        onClick={previousImage}
                                        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white/90 shadow-sm transition hover:bg-[#c99618] hover:text-white"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white/90 shadow-sm transition hover:bg-[#c99618] hover:text-white"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.07,
                                    },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            className="items-start h-full"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {/* Category */}
                            <motion.div variants={fadeUp}>
                                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                    {product.category} / {product.grade}
                                </p>
                            </motion.div>

                            {/* Product Name */}
                            <motion.h1
                                variants={fadeUp}
                                className="max-w-2xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#0d2461] sm:text-4xl lg:text-6xl"
                            >
                                <TypewriterText
                                    key={`title-${product.name}`}
                                    text={product.name}
                                    speed={100}
                                />
                                {/* {product.name} */}
                            </motion.h1>

                            <motion.div
                                variants={fadeUp}
                                className="my-4 h-px w-16 bg-[#c99618]"
                            />

                            {/* Short Description */}
                            {/* <motion.p
                                variants={fadeUp}
                                className="max-w-xl text-sm leading-6 text-gray-500 sm:text-base"
                            >
                                {product.shortDescription}
                            </motion.p> */}

                            {/* =================================================
        PRODUCT OVERVIEW
    ================================================== */}

                            <motion.div
                                variants={fadeUp}
                                className="mt-5 border-l-2 border-[#c99618] pl-4"
                            >
                                <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.25em] text-[#c99618]">
                                    Product Overview
                                </p>

                                <p className="max-w-xl text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                                    {product.overview}
                                </p>
                            </motion.div>

                            {/* =================================================
        QUICK DETAILS
    ================================================== */}

                            <motion.div
                                variants={fadeUp}
                                className="mt-5 grid grid-cols-3 gap-2"
                            >
                                {/* Category */}
                                <div className="rounded-xl border border-black/5 bg-[#f8f8f6] p-3 sm:p-3.5">
                                    <FlaskConical
                                        size={16}
                                        className="mb-2 text-[#c99618]"
                                    />

                                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                                        Category
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-[#111111]">
                                        {product.category}
                                    </p>
                                </div>

                                {/* Supply */}
                                <div className="rounded-xl border border-black/5 bg-[#f8f8f6] p-3 sm:p-3.5">
                                    <PackageCheck
                                        size={16}
                                        className="mb-2 text-[#c99618]"
                                    />

                                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                                        Supply
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-[#111111]">
                                        Bulk
                                    </p>
                                </div>

                                {/* Application */}
                                <div className="rounded-xl border border-black/5 bg-[#f8f8f6] p-3 sm:p-3.5">
                                    <Factory
                                        size={16}
                                        className="mb-2 text-[#c99618]"
                                    />

                                    <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                                        Application
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-[#111111]">
                                        Industrial
                                    </p>
                                </div>
                            </motion.div>

                            {/* =================================================
        ACTION BUTTONS
    ================================================== */}

                            <motion.div
                                variants={fadeUp}
                                className="mt-6 grid gap-2.5 sm:grid-cols-3"
                            >
                                {/* WhatsApp */}
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-white transition hover:-translate-y-1 hover:shadow-lg sm:text-sm"
                                >
                                    <MessageCircle size={16} />
                                    WhatsApp

                                    <ArrowUpRight
                                        size={14}
                                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>

                                {/* Call */}
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="group flex items-center justify-center gap-1.5 rounded-full bg-[#0d2461] px-4 py-3 text-xs font-bold text-white transition hover:-translate-y-1 hover:shadow-lg sm:text-sm"
                                >
                                    <Phone size={16} />
                                    Call Now

                                    <ArrowUpRight
                                        size={14}
                                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>

                                {/* Inquiry */}
                                <Link
                                    href="/contact"
                                    className="group flex items-center justify-center gap-1.5 rounded-full bg-[#c99618] px-4 py-3 text-xs font-bold text-white transition hover:-translate-y-1 hover:bg-[#b6860f] hover:shadow-lg sm:text-sm"
                                >
                                    <ClipboardList size={16} />
                                    Inquiry

                                    <ArrowUpRight
                                        size={14}
                                        className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </motion.div>

                            {/* Small helper text */}
                            <motion.p
                                variants={fadeUp}
                                className="mt-3 text-[10px] text-gray-400"
                            >
                                Share your required quantity, application and delivery location.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* <section className="bg-[#f7f7f5]">
                <div className="mx-auto max-w-[1450px] px-4 py-16 sm:px-8 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.65 }}
                        >
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618]">
                                PRODUCT OVERVIEW
                            </p>

                            <h2 className="max-w-md text-3xl font-extrabold leading-tight tracking-tight text-[#0d2461] sm:text-5xl">
                                Built for demanding industrial applications.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="text-base leading-8 text-gray-500 sm:text-lg">
                                {product.overview}
                            </p>

                            <div className="mt-8 h-px w-full bg-black/10" />

                            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#111111]">
                                <CheckCircle2
                                    size={19}
                                    className="text-[#c99618]"
                                />
                                Quality-focused industrial material sourcing
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            <section className="border-y border-black/5 bg-white">
                <div className="mx-auto max-w-[1450px] px-4 py-8 sm:px-8 lg:py-12">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618]">
                            KEY FEATURES
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-[#0d2461] sm:text-5xl">
                            Why this product?
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {product.features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: false,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    whileHover={{
                                        y: -7,
                                    }}
                                    className="group rounded-3xl border border-black/5 bg-[#f8f8f6] p-6 transition-shadow hover:shadow-xl hover:shadow-black/5"
                                >
                                    <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0d2461] text-white transition-colors group-hover:bg-[#c99618]">
                                        <Icon size={21} />
                                    </div>

                                    <h3 className="text-lg font-bold text-[#111111]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#f7f7f5]">
                <div className="mx-auto max-w-[1450px] px-4 py-8 sm:px-8 lg:py-10">

                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.65 }}
                        >
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618]">
                                TECHNICAL DATA
                            </p>

                            <h2 className="text-3xl font-extrabold leading-tight text-[#0d2461] sm:text-5xl">
                                Product Specifications
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
                                Specifications shown here are for demonstration
                                and can later be populated dynamically according
                                to the selected product and grade.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ duration: 0.7 }}
                            className="overflow-hidden rounded-3xl border border-black/5 bg-white"
                        >
                            {product.specifications.map(
                                ([label, value], index) => (
                                    <div
                                        key={label}
                                        className={`grid gap-2 px-5 py-5 sm:grid-cols-[0.7fr_1.3fr] sm:px-7 ${index !==
                                            product.specifications.length - 1
                                            ? "border-b border-black/5"
                                            : ""
                                            }`}
                                    >
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                            {label}
                                        </span>

                                        <span className="text-sm font-semibold text-[#111111]">
                                            {value}
                                        </span>
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0d2461] text-white">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(201,150,24,0.16),_transparent_60%)]" />

                <div className="relative mx-auto max-w-[1450px] px-4 py-8 sm:px-8 lg:py-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618]">
                            WHY RESOL INDUSTRIES
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                            A dependable partner for polymer requirements.
                        </h2>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                            Resol Industries Ltd. combines product knowledge,
                            diversified sourcing, quality-focused supply, and
                            long-term customer relationships to support
                            manufacturers across India.
                        </p>
                    </motion.div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Factory,
                                title: "Industry Experience",
                                text: "Established in 2005 with experience in polymer and chemical distribution.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Quality Focus",
                                text: "Focused on dependable products and consistent supply requirements.",
                            },
                            {
                                icon: Truck,
                                title: "Distribution",
                                text: "Supporting customers across India through an established supply network.",
                            },
                            {
                                icon: MessageCircle,
                                title: "Customer Support",
                                text: "Responsive assistance for product selection, requirements and enquiries.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: false,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                >
                                    <Icon
                                        size={22}
                                        className="mb-6 text-[#c99618]"
                                    />

                                    <h3 className="font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-white/50">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-[1450px] px-4 py-10 sm:px-8">

                    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#c99618]">
                                EXPLORE MORE
                            </p>

                            <h2 className="text-3xl font-extrabold text-[#0d2461] sm:text-5xl">
                                Related Products
                            </h2>
                        </div>

                        <Link
                            href="/products"
                            className="flex items-center gap-2 text-sm font-bold text-[#111111] transition hover:text-[#c99618]"
                        >
                            View All Products
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedProducts.map((item, index) => (
                            <motion.div
                                key={item.name}
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
                                    duration: 0.55,
                                    delay: index * 0.07,
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <Link
                                    href={item.href}
                                    className="group block overflow-hidden rounded-3xl border border-black/5 bg-[#f7f7f5]"
                                >
                                    <div className="relative h-70 w-full overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object- transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="border-t border-black/5 px-5 py-3">
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#c99618]">
                                            {item.category}
                                        </p>

                                        <div className="mt-2 flex items-center justify-between">
                                            <h3 className="font-bold text-[#111111]">
                                                {item.name}
                                            </h3>

                                            <ArrowUpRight
                                                size={18}
                                                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </>
    );
}