"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";
import Image from "next/image";

const clients = [
    {
        name: "Astral",
        logo: "/4 (9).webp",
    },
    {
        name: "Cosmo Films",
        logo: "/2 (25).webp",
    },
    {
        name: "Prince Pipes & Fittings",
        logo: "/6 (6).webp",
    },
    {
        name: "Nilkamal",
        logo: "/1 (77).webp",
    },
    {
        name: "UFlex",
        logo: "/5 (9).webp",
    },
    {
        name: "Finolex Industries",
        logo: "/3 (23).webp",
    },
];

export default function Client() {
    return (
        <section className="overflow-hidden bg-[#f4f3ef] py-10 md:py-15">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-15">
                <div className="mx-auto mb-5 max-w-[760px] text-center md:mb-8">

                    <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
                        Our Clients
                    </span>

                    <h2 className="text-[40px] font-medium leading-[0.95] tracking-[-0.045em] text-[#0d2461] sm:text-5xl md:text-6xl lg:text-[68px]">
                        Trusted by
                        <span className="mt-1 block text-[#f5bd24]">
                            Leading Brands.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-neutral-600 md:text-[15px] md:leading-7">
                        From established enterprises to growing businesses, we serve
                        clients with dependable products, quality materials, and
                        solutions built to meet demanding requirements.
                    </p>

                </div>

                {/* ================= DESKTOP GRID ================= */}
                <div className="hidden gap-4 md:grid md:grid-cols-3 xl:grid-cols-6">
                    {clients.map((partner) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                        />
                    ))}
                </div>

                {/* ================= MOBILE SWIPER ================= */}
                <div className="md:hidden">
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={8}
                        slidesPerView={2}
                        freeMode={{
                            enabled: true,
                            sticky: false,
                        }}
                        autoplay={{
                            delay: 1800,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        speed={700}
                        loop={true}
                        grabCursor
                        className="!overflow-visible"
                    >
                        {clients.map((partner) => (
                            <SwiperSlide
                                key={partner.name}
                                className="!h-auto"
                            >
                                <PartnerCard partner={partner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

function PartnerCard({ partner }) {
    return (
        <div
            className="
                group relative
                flex h-[240px]
                lg:h-[300px]
                flex-col
                overflow-hidden
                border border-[#deddd7]
                bg-white
                p-2
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#20201e]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]

                md:h-[270px]
                md:p-4
            "
        >
            {/* Top */}
            <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    Client
                </span>

                <Link href={"/projects"}
                    className="
                        flex h-7 w-7
                        shrink-0
                        items-center justify-center
                        rounded-full
                        border border-neutral-200
                        text-xs text-neutral-400
                        transition-all
                        duration-500
                        group-hover:rotate-45
                        group-hover:border-neutral-800
                        group-hover:text-neutral-800
                    "
                >
                    ↗
                </Link>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center py-6">
                <Image
                    width={100}
                    height={100}
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="
                        block
                       h-full w-full
                        w-auto
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-105
                    "
                />
            </div>

            {/* Bottom */}
            <div className="border-t border-neutral-100 pt-4">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium tracking-tight text-[#181818] md:text-base">
                        {partner.name}
                    </h3>
                </div>
            </div>

            {/* Bottom Hover Line */}
            <span
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#181818]
                    transition-all
                    duration-500
                    group-hover:w-full
                "
            />
        </div>
    );
}