"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        id: 1,
        title: "Polystyrene (PS)",
        category: "POLYMERS & RESINS",
        image: "/ChatGPT Image Sep 19, 2026, 02_55_55 PM.png",
        href: "/products/",
        description:
            "High-quality PVC resin for pipes, fittings, flooring, profiles, cables, and a wide range of industrial applications.",
    },
    {
        id: 2,
        title: "Polypropylene (PP)",
        category: "POLYMERS & RESINS",
        image: "/ChatGPT Image Sep 19, 2026, 02_59_32 PM.png",
        href: "/products/",
        description:
            "Reliable PET resin solutions for packaging, bottles, containers, and other demanding manufacturing applications.",
    },
    {
        id: 3,
        title: "EVA Resin",
        category: "INDUSTRIAL CHEMICALS",
        image: "/ChatGPT Image Sep 19, 2026, 03_01_04 PM.png",
        href: "/products/",
        description:
            "Industrial-grade calcium carbonate used as a versatile filler and functional material across plastics, coatings, and manufacturing.",
    },
    {
        id: 4,
        title: "Polyethylene (PE)",
        category: "POLYMERS & RESINS",
        image: "/9a23a57c-dc59-4cd1-9e47-0917b53b8b48.png",
        href: "/products/",
        description:
            "Versatile EVA materials suitable for footwear, adhesives, packaging, flexible products, and various industrial applications.",
    },
];

export default function Hero3() {
    const containerRef = useRef(null);
    const [open, setOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // =========================================================
    // DESKTOP ANIMATION
    // =========================================================

    const card1Left = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["55%", "0%"]
    );

    const card1Y = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["16vh", "96vh"]
    );

    const card1Rotate = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [-5, 0]
    );

    const card1Scale = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [0.88, 1]
    );

    const card2Left = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["60%", "52%"]
    );

    const card2Y = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["12vh", "96vh"]
    );

    const card2Rotate = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [7, 0]
    );

    const card2Scale = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [0.82, 1]
    );

    const card3Left = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["52%", "0%"]
    );

    const card3Y = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["22vh", "146vh"]
    );

    const card3Rotate = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [-10, 0]
    );

    const card3Scale = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [0.78, 1]
    );

    const card4Left = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["57%", "52%"]
    );

    const card4Y = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        ["26vh", "146vh"]
    );

    const card4Rotate = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [5, 0]
    );

    const card4Scale = useTransform(
        scrollYProgress,
        [0.08, 0.65],
        [0.72, 1]
    );

    const cardMotionTransforms = [
        {
            left: card1Left,
            y: card1Y,
            rotate: card1Rotate,
            scale: card1Scale,
            zIndex: 4,
        },
        {
            left: card2Left,
            y: card2Y,
            rotate: card2Rotate,
            scale: card2Scale,
            zIndex: 3,
        },
        {
            left: card3Left,
            y: card3Y,
            rotate: card3Rotate,
            scale: card3Scale,
            zIndex: 2,
        },
        {
            left: card4Left,
            y: card4Y,
            rotate: card4Rotate,
            scale: card4Scale,
            zIndex: 1,
        },
    ];

    return (
        <div
            ref={containerRef}
            className="
        relative
        min-h-[195vh]
        bg-[#f8fafc]
        pb-16
        text-[#0f172a]

        max-lg:min-h-0
        max-lg:pb-10
      "
        >
            <div
                className="
          relative
          mx-auto
          max-w-7xl
          px-6
          md:px-14

          max-lg:px-5
        "
            >
                {/* =====================================================
            HERO SECTION
        ===================================================== */}

                <div
                    className="
            flex
            min-h-[70vh]
            flex-col
            justify-center
            pb-8
            pt-10

            max-lg:min-h-0
            max-lg:justify-start
            max-lg:pb-16
            max-lg:pt-12
          "
                >
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

                        {/* LEFT HERO TEXT */}

                        <div
                            className="
                z-10
                max-w-lg
                lg:col-span-6

                max-lg:max-w-none
              "
                        >
                            {/* Label */}

                            <div
                                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-200/80
                  bg-blue-50/80
                  px-3.5
                  py-1.5
                  text-xs
                  font-medium
                  text-[#1e3a8a]
                  shadow-sm
                "
                            >
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                                Polymers & Chemicals
                            </div>

                            {/* Heading */}

                            <h1
                                className="
                  mb-6
                  text-5xl
                  font-extrabold
                  leading-[1.06]
                  tracking-tight
                  text-[#0d2461]
                  md:text-[55px]

                  max-lg:mb-5
                  max-lg:text-[clamp(2.75rem,11vw,4.5rem)]
                  max-lg:leading-[1.05]
                "
                            >
                                Materials for the
                                <br />

                                <span className="">
                                    industries that matter.
                                </span>
                            </h1>

                            {/* Description */}

                            <p
                                className="
                  mb-8
                  text-lg
                  font-normal
                  leading-relaxed
                  text-slate-600

                  max-lg:mb-7
                  max-lg:text-base
                  max-lg:leading-7
                "
                            >
                                From PVC resin and PET resin to EVA, chemicals,
                                plasticizers, rubber, fillers, and colourants,
                                Resol Industries supplies quality materials for
                                diverse industrial applications.
                            </p>

                            {/* CTA */}

                            <button
                                onClick={() => setOpen(true)}
                                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0f172a]
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-md
                  transition-all
                  hover:bg-[#1e293b]

                  max-lg:w-full
                  max-lg:justify-center
                "
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                                    →
                                </span>

                                Discuss Your Requirement
                            </button>
                        </div>

                        {/* RIGHT SPACER */}

                        <div
                            className="
                min-h-[55vh]
                lg:col-span-6

                max-lg:hidden
              "
                        />
                    </div>
                </div>

                {/* =====================================================
            PRODUCTS HEADER
        ===================================================== */}

                <div
                    className="
            relative
            z-10
            pt-2
          "
                >

                    <h2
                        className="
              text-4xl
              font-extrabold
              tracking-tight
              text-[#f5bd24]
              md:text-6xl

              max-lg:text-[clamp(2.25rem,10vw,3.5rem)]
              max-lg:leading-tight
            "
                    >
                        Our Products
                    </h2>
                </div>

                {/* =====================================================
            DESKTOP SPACER
        ===================================================== */}

                <div className="min-h-[100vh] w-full max-lg:hidden" />

                {/* =====================================================
            DESKTOP ANIMATED CARDS
        ===================================================== */}

                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            px-6
            md:px-14

            max-lg:hidden
          "
                >
                    <div className="relative mx-auto h-full max-w-7xl">
                        {products.map((product, index) => {
                            const transform = cardMotionTransforms[index];

                            return (
                                <motion.div
                                    key={product.id}
                                    style={{
                                        left: transform.left,
                                        y: transform.y,
                                        rotate: transform.rotate,
                                        scale: transform.scale,
                                        zIndex: transform.zIndex,
                                        willChange: "left, transform",
                                    }}
                                    className="
                    group
                    absolute
                    -top-15
                    flex
                    w-[47%]
                    max-w-[600px]
                    cursor-pointer
                    flex-col
                    pointer-events-auto
                    transform-gpu
                  "
                                >
                                    <div
                                        className="
                      relative
                      aspect-[16/10]
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/90
                      bg-white
                      shadow-xl
                      shadow-slate-200/80
                    "
                                    >
                                        {/* Image */}

                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width: 1280px) 47vw, 600px"
                                            className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                                            priority={index < 2}
                                        />

                                        {/* Dark Gradient */}

                                        <div
                                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                                        />

                                        {/* Product Info */}

                                        <div
                                            className="
                        absolute
                        inset-x-0
                        bottom-0
                        z-10
                        flex
                        items-end
                        justify-between
                        gap-5
                        p-6

                        translate-y-5
                        opacity-0

                        transition-all
                        duration-500
                        ease-out

                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                                        >
                                            <div className="min-w-0">
                                                <p
                                                    className="
                            mb-1.5
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-white/70
                          "
                                                >
                                                    {product.category}
                                                </p>

                                                <h3
                                                    className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-white
                          "
                                                >
                                                    {product.title}
                                                </h3>

                                                <p className="mt-2 max-w-sm text-xs leading-5 text-white/75">
                                                    {product.description}
                                                </p>
                                            </div>

                                            {/* View Product */}

                                            <Link
                                                href={product.href}
                                                onClick={(e) => e.stopPropagation()}
                                                className="
                          group/button
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-full
                          bg-white
                          text-slate-900
                          shadow-lg

                          transition-all
                          duration-500
                          ease-out

                          group-hover:w-44
                          hover:bg-slate-900
                          hover:text-white
                        "
                                            >
                                                <span
                                                    className="
                            whitespace-nowrap
                            text-sm
                            font-semibold

                            -translate-x-3
                            opacity-0

                            transition-all
                            duration-300
                            ease-out

                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                                                >
                                                    View Product
                                                </span>

                                                <span
                                                    className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            text-xl
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                                                >
                                                    →
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
            MOBILE / TABLET PRODUCTS
        ===================================================== */}

                <div
                    className="
            hidden
            flex-col
            gap-8
            pb-10

            max-lg:flex
          "
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="
                group
                relative
                aspect-[16/10]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/90
                bg-white
                shadow-xl
                shadow-slate-200/80
              "
                        >
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="100vw"
                                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
                            />

                            {/* Overlay */}

                            <div
                                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                            />

                            {/* Product Information */}

                            <div
                                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  flex
                  items-end
                  justify-between
                  gap-5
                  p-6

                  translate-y-5
                  opacity-0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
                            >
                                <div className="min-w-0">
                                    <p
                                        className="
                      mb-1.5
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/70
                    "
                                    >
                                        {product.category}
                                    </p>

                                    <h3 className="text-2xl font-bold tracking-tight text-white">
                                        {product.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-white/75">
                                        {product.description}
                                    </p>
                                </div>

                                <Link
                                    href={product.href}
                                    onClick={(e) => e.stopPropagation()}
                                    className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-slate-900
                    shadow-lg

                    transition-all
                    duration-500

                    hover:w-36
                    hover:bg-slate-900
                    hover:text-white
                  "
                                >
                                    <span className="mr-1 text-sm font-semibold">
                                        View
                                    </span>

                                    <span className="text-xl">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* =====================================================
            POPUP
        ===================================================== */}


            </div>
        </div>
    );
}