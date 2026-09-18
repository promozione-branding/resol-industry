'use client';

import React, {
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, X } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Autoplay,
    Navigation,
} from 'swiper/modules';

import 'swiper/css';


/* ============================================================
HERO DATA
============================================================ */

const HERO_SLIDES = [
    {
        id: 1,
        title: "CALCIUM CARBONATE IMPORTER",
        image: "/calcium.webp",
        description:
            "High-quality Calcium Carbonate designed for consistent performance across a wide range of industrial applications.",
    },
    {
        id: 2,
        title: "POLYSTYRENE IMPORTER",
        image: "/banner28.webp",
        description:
            "Reliable Polystyrene material offering consistent processing and dependable performance for modern industrial requirements.",
    },
    {
        id: 3,
        title: "PVC RESIN IMPORTER",
        image: "/pvc4.webp",
        description:
            "Premium PVC Resin engineered for reliable processing, consistent quality and diverse industrial applications.",
    },
];

/* ============================================================
PROJECT DATA
============================================================ */

const projects = [
    {
        id: 2,
        image: '/hero2/foxconn.webp',
        logo: '/assets/clients/Apple (2).webp',
        title: 'Manufacturing Facility',
        stats: 'Premium Restroom Solutions',
        description:
            '500+ toilet cubicles installed at the Foxconn facility for Apple',
        button: 'View Project',
    },

    {
        id: 1,
        image: '/hero2/marutiDoor.webp',
        logo: '/assets/clients/maruti.webp',
        title: 'Kharkhoda Plant',
        stats: '2,000+ Toilet Cubicles Installed',
        description:
            'Built around performance. Delivered for Maruti Suzuki.',
        button: 'View Project',
    },

    {
        id: 3,
        image: '/hero2/mcd.webp',
        logo: '/assets/clients/mag.webp',
        title: 'Multiple Locations',
        stats: 'Hygienic. Stylish. Durable.',
        description:
            'Restroom cubicle solutions across multiple outlets pan India.',
        button: 'View Project',
    },

    {
        id: 4,
        image: '/hero2/oppo.webp',
        logo: '/hero2/oppoLogo.webp',
        title: 'Corporate Office',
        stats: '500+ Cubicles Installed',
        description:
            'Premium restroom partitions designed for modern corporate spaces.',
        button: 'View Project',
    },
];

const allProducts = [
    {
        categoryName: "Polymers",
        image: "/pvc4.webp",
        slug: "/products/",
        tag: "PVC",
    },
    {
        categoryName: "Pet Resin",
        image: "/Polymers.webp",
        slug: "/products/",
        tag: "Grade",
    },
    {
        categoryName: "Calcium Carbonate",
        image: "/cal.webp",
        slug: "/products/",
        tag: "Grade",
    },
    {
        categoryName: "Zikai",
        image: "/zikai.webp",
        slug: "/products/",
        tag: "EVA",
    },
    {
        categoryName: "Citric Acid",
        image: "/images (1).jpg",
        slug: "/products/",
        tag: "PE",
    },
    {
        categoryName: "Plasticizers",
        image: "/images (2).jpg",
        slug: "/products/",
        tag: "PP",
    },
    {
        categoryName: "Natural & Synthetic Rubber",
        image: "/Polybutadiene Rubber.webp",
        slug: "/products/",
        tag: "PS",
    },
    {
        categoryName: "Fillers & Colourants",
        image: "/precipitated-silica.webp",
        slug: "/products/",
        tag: "POE",
    },
]

/* ============================================================
TYPEWRITER TEXT
============================================================ */

const TypewriterText = memo(function TypewriterText({
    text,
    speed = 35,
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

/* ============================================================
PROJECT CARD
============================================================ */

const ProductCard = memo(function ProductCard({ product }) {
    return (
        <article
            className="
                group relative h-[250px] md:h-[230px]
                overflow-hidden rounded-[12px]
                border border-[#e5e5e5]
                bg-white
                shadow-[0_3px_15px_rgba(0,0,0,0.04)]
                transition-transform duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]
            "
        >
            <div className="flex h-full">

                {/* IMAGE */}
                <div className="relative h-full w-[43%] shrink-0 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.categoryName}
                        fill
                        sizes="(max-width: 767px) 43vw, 220px"
                        loading="lazy"
                        className="
                            object-cover
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-[1.05]
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-transparent
                            via-transparent
                            to-black/[0.04]
                        "
                    />
                </div>

                {/* CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-4">

                    <div>

                        {/* TAG */}
                        <div className="mb-3 flex h-[40px] items-center">
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-[#e2e2e2]
                                    bg-[#fafafa]
                                    px-2.5
                                    py-1
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#777]
                                "
                            >
                                {product.tag}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h3
                            className="
                                text-[17px]
                                font-semibold
                                leading-tight
                                text-[#202020]
                            "
                        >
                            {product.categoryName}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                            className="
                                mt-2
                                line-clamp-3
                                text-[9.5px]
                                leading-[1.5]
                                text-[#777]
                            "
                        >
                            High-quality {product.categoryName} material
                            designed for reliable industrial applications
                            and consistent performance.
                        </p>

                    </div>

                    {/* CTA */}
                    <Link
                        href={product.slug}
                        className="
                            mt-2
                            inline-flex
                            w-fit
                            items-center
                            gap-1.5
                            rounded-[5px]
                            border
                            border-[#d8d8d8]
                            bg-white
                            px-3
                            py-1.5
                            text-[13px]
                            font-medium
                            text-[#222]
                            transition-colors
                            duration-200
                            hover:border-[#222]
                            hover:bg-[#222]
                            hover:text-white
                        "
                    >
                        View Product

                        <ArrowUpRight
                            size={11}
                            strokeWidth={1.8}
                            className="
                                transition-transform
                                duration-200
                                group-hover:-translate-y-[1px]
                                group-hover:translate-x-[1px]
                            "
                        />
                    </Link>

                </div>
            </div>
        </article>
    );
});

/* ============================================================
HERO SECTION
============================================================ */

export default function HeroSection() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const heroSwiperRef = useRef(null);
    const swiperRef = useRef(null);
    const slideTimerRef = useRef(null);

    const currentSlide =
        HERO_SLIDES[activeSlideIndex] ?? HERO_SLIDES[0];

    /* ==========================================================
    TYPEWRITER COMPLETE
    ========================================================== */

    const handleTypewriterComplete = useCallback(() => {


        if (slideTimerRef.current) {
            clearTimeout(slideTimerRef.current);
        }

        slideTimerRef.current = setTimeout(() => {
            swiperRef.current?.slideNext();
        }, 1800);


    }, []);

    /* ==========================================================
    CLEANUP
    ========================================================== */

    useEffect(() => {


        return () => {

            if (slideTimerRef.current) {
                clearTimeout(slideTimerRef.current);
            }

        };


    }, []);

    /* ==========================================================
    CONSULTATION
    ========================================================== */

    const handleConsultation = useCallback(() => {
        setOpen(true);
    }, []);

    /* ==========================================================
    VIDEO MODAL CLOSE
    ========================================================== */

    const handleCloseVideo = useCallback(() => {
        setIsVideoOpen(false);
    }, []);

    return (
        <>
            <section className="w-full bg-white font-sans antialiased pt-2 sm:pt-3 lg:pt-4 pb-4 sm:pb-5 lg:pb-3">
                <div className="mx-auto max-w-[2000px] px-4 lg:px-10">
                    <h2
                        className="
          max-w-7xl
          text-3xl
          font-semibold
          leading-[1.02]
          tracking-[-0.04em]
          text-black
          sm:text-6xl
          lg:text-[68px]
          xl:text-[76px]
        "
                    >
                        <TypewriterText
                            key={`title-${activeSlideIndex}`}
                            text={currentSlide.title}
                            speed={45}
                        />
                    </h2>

                    <div
                        className="
          mt-4
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
          sm:gap-8
          lg:gap-10
        "
                    >

                        <button
                            type="button"
                            onClick={handleConsultation}
                            className="
            inline-flex
            w-fit
            shrink-0
            cursor-pointer
            items-center
            justify-center
            gap-2.5
            border
            border-black
            bg-transparent
            px-6
            py-2.5
            text-xs
            font-medium
            text-black
            transition-colors
            duration-200
            hover:bg-black
            hover:text-white
            sm:text-sm
          "
                        >
                            <span>
                                Get Instant Quote
                            </span>

                            <span className="text-sm leading-none">
                                →
                            </span>

                        </button>


                        <p
                            className="
            min-h-[48px]
            max-w-3xl
            text-xs
            leading-relaxed
            text-gray-800
            sm:text-[17px]
          "
                        >
                            <TypewriterText
                                key={`description-${activeSlideIndex}`}
                                text={currentSlide.description}
                                speed={12}
                                onComplete={handleTypewriterComplete}
                            />
                        </p>

                    </div>

                    <div
                        className="
          mt-5
          grid
          grid-cols-1
          items-stretch
          gap-4
          md:gap-6
          lg:grid-cols-[20%_80%]
          sm:mt-8
        "
                    >


                        {/* =================================================
            LEFT VIDEO
        ================================================= */}

                        {/* =================================================
    LEFT HERO IMAGE SLIDER
================================================= */}

                        <div
                            className="
        relative
        hidden
        min-h-[320px]
        overflow-hidden
        rounded-[22px]
        border
        border-black/5
        bg-[#f3f3f0]
        shadow-sm
        lg:flex
    "
                        >
                            <Swiper
                                modules={[Autoplay]}
                                onSwiper={(swiper) => {
                                    heroSwiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => {
                                    setActiveSlideIndex(swiper.realIndex);
                                }}
                                slidesPerView={1}
                                loop
                                speed={900}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                }}
                                className="h-full w-full"
                            >
                                {HERO_SLIDES.map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <div className="relative h-full min-h-[320px] w-full overflow-hidden">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                priority={slide.id === 1}
                                                sizes="(min-width: 1024px) 20vw, 100vw"
                                                className="
                            object-contain
                            transition-transform
                            duration-[4000ms]
                            ease-out
                        "
                                            />

                                            {/* IMAGE OVERLAY */}
                                            <div
                                                className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/45
                            via-black/5
                            to-transparent
                        "
                                            />

                                            {/* SLIDE INFO */}
                                            <div
                                                className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                            z-10
                            text-white
                        "
                                            >
                                                <span
                                                    className="
                                mb-1
                                block
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-white/70
                            "
                                                >
                                                    Industrial Material
                                                </span>

                                                <h3
                                                    className="
                                text-[18px]
                                font-semibold
                                leading-tight
                                tracking-[-0.02em]
                                sm:text-[21px]
                            "
                                                >
                                                    {slide.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* SLIDE INDICATORS */}
                            <div
                                className="
            absolute
            bottom-4
            right-4
            z-20
            flex
            items-center
            gap-1.5
        "
                            >
                                {HERO_SLIDES.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        type="button"
                                        aria-label={`Go to ${slide.title}`}
                                        onClick={() => {
                                            heroSwiperRef.current?.slideToLoop(index);
                                        }}
                                        className={`
                    h-[3px]
                    rounded-full
                    transition-all
                    duration-300
                    ${activeSlideIndex === index
                                                ? "w-7 bg-white"
                                                : "w-3 bg-white/40"
                                            }
                `}
                                    />
                                ))}
                            </div>
                        </div>


                        {/* =================================================
            MOBILE LEFT VIDEO
        ================================================= */}

                        <div
                            className="
            relative
            flex
            overflow-hidden
            rounded-[22px]
            border
            border-black/5
            bg-[#f4f3ef]
            shadow-sm
            lg:hidden
          "
                        >

                            <video
                                src="/assets/video/CLIP 4 COMPRESSED.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="
              h-full
              w-full
              object-cover
            "
                                aria-hidden="true"
                            />

                        </div>


                        {/* =================================================
            RIGHT VIDEO
            REPLACED RIGHT-SIDE SLIDER
        ================================================= */}

                        <div
                            className="
            relative
            min-h-[320px]
            w-full
            overflow-hidden
            rounded-[22px]
            shadow-sm
            sm:min-h-[380px]
            lg:min-h-[440px]
            xl:min-h-[480px]
            bg-black
          "
                        >

                            <video
                                src="/13753874_1280_720_25fps.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
                            />

                            {/* VIDEO OVERLAY */}

                            <div
                                className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
            "
                            />

                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-6 md:py-5">

                <div className="mx-auto max-w-[1750px] px-5 md:px-8">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        speed={700}
                        loop
                        spaceBetween={18}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".product-prev",
                            nextEl: ".product-next",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 14,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },

                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 18,
                            },
                        }}
                        className="w-full !overflow-hidden"
                    >

                        {allProducts.map((product) => (
                            <SwiperSlide key={product.id}>

                                <ProductCard
                                    product={product}
                                />

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </section>
        </>
    );
}
