"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Phone,
    X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        number: "01",
        title: "Polymers & Resins",
        description:
            "A comprehensive range of polymers and resins for plastic, packaging, manufacturing, and industrial applications.",
        image: "/pvc4.webp",
        details:
            "Resol Industries offers a wide range of polymer and resin products sourced for diverse industrial and manufacturing applications. Our portfolio includes PVC, PET Resin, EVA and other polymer materials suitable for different production requirements.",
        features: [
            "PVC Resin",
            "PET Resin",
            "EVA",
            "Industrial-grade polymers",
        ],
    },
    {
        number: "02",
        title: "Chemicals & Additives",
        description:
            "Essential industrial chemicals and additives designed to support diverse manufacturing and processing requirements.",
        image: "/cal.webp",
        details:
            "Our chemicals and additives portfolio includes Calcium Carbonate, Citric Acid, Plasticizers and other essential materials used across multiple manufacturing and industrial processes. We focus on consistent quality and reliable product supply.",
        features: [
            "Calcium Carbonate",
            "Citric Acid",
            "Plasticizers",
            "Industrial additives",
        ],
    },
    {
        number: "03",
        title: "Rubber, Fillers & Colourants",
        description:
            "Specialized rubber, filler and colourant materials developed for performance, processing, and formulation requirements.",
        image: "/images.jpg",
        details:
            "Our portfolio includes Natural & Synthetic Rubber, Fillers and Colourants for applications across rubber, plastics and other industrial manufacturing sectors. These materials are selected to support performance, consistency and efficient processing.",
        features: [
            "Natural & Synthetic Rubber",
            "Polybutadiene Rubber",
            "Precipitated Silica",
            "Fillers & Colourants",
        ],
    },
];

const ease = [0.22, 1, 0.36, 1];

/* =============================================================
   HEADING TEXT ANIMATION
   Word-by-word reveal
============================================================= */

function TextReveal({ text, className = "", delay = 0 }) {
    const words = text.split(" ");

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
                        staggerChildren: 0.055,
                        delayChildren: delay,
                    },
                },
            }}
            className={`inline-flex flex-wrap ${className}`}
        >
            {words.map((word, index) => (
                <motion.span
                    key={`${word}-${index}`}
                    className="mr-[0.25em] inline-block"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 28,
                            filter: "blur(5px)",
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                                duration: 0.55,
                                ease,
                            },
                        },
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

/* =============================================================
   PRODUCT REVEAL ANIMATION
============================================================= */

const imageReveal = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease,
        },
    },
};

const infoReveal = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease,
        },
    },
};

export default function OurProjectsSection() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openProduct = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = "hidden";
    };

    const closeProduct = () => {
        setSelectedProduct(null);
        document.body.style.overflow = "";
    };

    return (
        <>
            <section
                className="w-full overflow-hidden bg-white px-6 py-6 md:px-12 md:py-12 lg:px-16 xl:px-20"
                style={{
                    fontFamily:
                        "var(--font-jakarta), 'Helvetica Neue', sans-serif",
                }}
            >
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2 xl:gap-x-20">

                        {/* =====================================================
                            LEFT COLUMN
                        ===================================================== */}

                        <div className="flex flex-col justify-between gap-5">

                            {/* Heading */}
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
                                    amount: 0.4,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease,
                                }}
                                className="pt-2"
                            >
                                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#0d2461]">
                                    OUR PRODUCT CATEGORIES
                                </span>

                                <h2 className="mb-5 text-[2.6rem] leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl">

                                    <TextReveal
                                        text="Materials"
                                        className="font-light text-[#f5bd24]"
                                    />

                                    {" "}

                                    <TextReveal
                                        text="for"
                                        delay={0.08}
                                        className="font-extrabold text-[#0d2461]"
                                    />

                                    <br />

                                    <TextReveal
                                        text="Modern Industry."
                                        delay={0.14}
                                        className="font-extrabold text-[#0d2461]"
                                    />
                                </h2>

                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        // once: true,
                                        amount: 0.4,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.15,
                                        ease,
                                    }}
                                    className="max-w-xl text-[15px] font-normal leading-[1.75] text-neutral-500"
                                >
                                    Explore our portfolio of polymers, resins,
                                    industrial chemicals, additives, rubber,
                                    fillers, and colourants sourced for diverse
                                    manufacturing and industrial applications.
                                </motion.p>
                            </motion.div>

                            {/* Product 01 Image */}
                            <CategoryImage
                                product={products[0]}
                                onClick={() => openProduct(products[0])}
                            />

                            {/* Product 01 Info */}
                            <ProductInfo product={products[0]} />

                            {/* CTA */}
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
                                    amount: 0.25,
                                }}
                                transition={{
                                    duration: 0.55,
                                    ease,
                                }}
                                className="flex flex-col gap-6 rounded-3xl p-8"
                                style={{ backgroundColor: "#f0eeec" }}
                            >
                                <div>
                                    <h3 className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-[1.7rem]">
                                        Let&apos;s Build Your Next Space.
                                    </h3>

                                    <p className="text-[13px] font-normal leading-[1.75] text-neutral-400">
                                        From design and customization to
                                        manufacturing and installation,
                                        Resol Industries delivers complete
                                        solutions tailored to your requirements
                                        and applications.
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 border-t border-neutral-300/60 pt-5">
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-6 py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                                    >
                                        Connect with us
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                                            <Phone className="h-4 w-4" />
                                        </div>

                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-neutral-400">
                                                Talk to Our Experts
                                            </span>

                                            <a
                                                href="tel:+919810929486"
                                                className="text-sm font-bold text-neutral-900 transition-colors hover:text-neutral-600"
                                            >
                                                +91 9810929486
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* =====================================================
                            RIGHT COLUMN
                        ===================================================== */}

                        <div className="mt-10 flex flex-col gap-10 lg:mt-0">

                            {/* Product 02 Image */}
                            <CategoryImage
                                product={products[1]}
                                onClick={() => openProduct(products[1])}
                            />

                            {/* Product 02 Info */}
                            <ProductInfo product={products[1]} />

                            {/* Product 03 Image */}
                            <CategoryImage
                                product={products[2]}
                                onClick={() => openProduct(products[2])}
                            />

                            {/* Product 03 Info */}
                            <ProductInfo product={products[2]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PRODUCT POPUP
            ========================================================= */}

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0d2461]/70 p-4 backdrop-blur-md sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) {
                                closeProduct();
                            }
                        }}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 20,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="
                                relative
                                max-h-[90vh]
                                w-full
                                max-w-[1000px]
                                overflow-hidden
                                rounded-[24px]
                                bg-white
                                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
                            "
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={closeProduct}
                                aria-label="Close"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-20
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white/90
                                    text-neutral-900
                                    shadow-lg
                                    backdrop-blur
                                    transition-all
                                    hover:scale-105
                                    hover:bg-white
                                "
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-2">

                                {/* Image */}
                                <div className="relative min-h-[280px] overflow-hidden bg-neutral-100 lg:min-h-[600px]">
                                    <Image
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6">
                                        <span className="text-6xl font-light leading-none text-white/50">
                                            {selectedProduct.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0ad00]">
                                        Resol Industries
                                    </span>

                                    <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0d2461] sm:text-4xl">
                                        {selectedProduct.title}
                                    </h2>

                                    <div className="mt-6 h-px w-12 bg-[#f5bd24]" />

                                    <p className="mt-6 text-sm leading-7 text-neutral-500 sm:text-[15px]">
                                        {selectedProduct.details}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-7 space-y-3">
                                        {selectedProduct.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5bd24]/15 text-[#0d2461]">
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                </div>

                                                <span className="text-sm font-medium text-neutral-700">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                        <a
                                            href="tel:+919873735713"
                                            onClick={closeProduct}
                                            className="
                                                group
                                                inline-flex
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-full
                                                bg-[#0d2461]
                                                px-6
                                                py-3.5
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-widest
                                                text-white
                                                transition-all
                                                hover:-translate-y-0.5
                                                hover:bg-[#102d7a]
                                                hover:shadow-lg
                                            "
                                        >
                                            Get a Quote

                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </a>

                                        <button
                                            type="button"
                                            onClick={closeProduct}
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-neutral-200
                                                px-6
                                                py-3.5
                                                text-xs
                                                font-bold
                                                uppercase
                                                tracking-widest
                                                text-neutral-700
                                                transition-all
                                                hover:border-neutral-900
                                                hover:bg-neutral-50
                                            "
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

/* =============================================================
   PRODUCT IMAGE
============================================================= */

function CategoryImage({ product, onClick }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{
                // once: true,
                amount: 0.2,
            }}
            variants={imageReveal}
            className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 text-left"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">

                <motion.img
                    src={product.image}
                    alt={product.title}
                    variants={{
                        hidden: {
                            scale: 1.02,
                        },
                        visible: {
                            scale: 1,
                        },
                        hover: {
                            scale: 1.05,
                        },
                    }}
                    transition={{
                        duration: 0.7,
                        ease,
                    }}
                    className="h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 0,
                        },
                        hover: {
                            opacity: 1,
                        },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#0d2461]/35"
                />

                {/* Center View Button */}
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 0.9,
                        },
                        visible: {
                            opacity: 0,
                            scale: 0.9,
                        },
                        hover: {
                            opacity: 1,
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 0.25,
                        ease,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0d2461] shadow-xl">
                        View Details
                    </div>
                </motion.div>

                {/* Bottom Product Name */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                            Product {product.number}
                        </span>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            {product.title}
                        </h3>
                    </div>

                    <motion.div
                        whileHover={{
                            rotate: -8,
                            scale: 1.08,
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0d2461]"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </motion.div>
                </div>
            </div>
        </motion.button>
    );
}

/* =============================================================
   PRODUCT INFO
============================================================= */

function ProductInfo({ product }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                // once: true,
                amount: 0.3,
            }}
            variants={infoReveal}
            className="flex items-start gap-5"
        >
            <motion.span
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
                    duration: 0.5,
                    ease,
                }}
                className="shrink-0 select-none text-[3.5rem] font-light leading-none"
                style={{
                    color: "#e2e8f0",
                    letterSpacing: "-0.03em",
                }}
            >
                {product.number}
            </motion.span>

            <div>
                <h3 className="mb-1.5 text-[1.15rem] font-bold tracking-[-0.01em] text-neutral-900">
                    {product.title}
                </h3>

                <p className="max-w-xs text-[13px] leading-[1.7] text-neutral-500">
                    {product.description}
                </p>
            </div>
        </motion.div>
    );
}