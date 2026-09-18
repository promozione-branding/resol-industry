"use client";

import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaEnvelope,
    FaLocationDot,
    FaPhone,
    FaWhatsapp,
    FaCheck,
} from "react-icons/fa6";

const offices = [
    {
        id: "01",
        title: "New Delhi",
        type: "Registered Office",
        address:
            "Office No. DSM-321, DLF Tower, Shivaji Marg, New Delhi 110015",
        map: "https://www.google.com/maps/search/?api=1&query=DLF+Tower+Shivaji+Marg+New+Delhi+110015",
    },
    {
        id: "02",
        title: "Maharashtra",
        type: "Regional Office",
        address:
            "Ground Floor, House No. 1859 Gala 39 Building No. A14, Prerna Complex, Anjurphata Road, Val Village, Bhiwandi, Thane, Maharashtra, 421302",
        map: "https://www.google.com/maps/search/?api=1&query=Prerna+Complex+Anjurphata+Road+Bhiwandi+Thane+Maharashtra+421302",
    },
    {
        id: "03",
        title: "Gujarat",
        type: "Regional Office",
        address:
            "Phase 5 R.S. No. 258/3, Plot No. 2, Ambaji Warehouse Park, Pragpar Mundra, Port Highway, Jarpra, Kachchh, Gujarat, 370405",
        map: "https://www.google.com/maps/search/?api=1&query=Ambaji+Warehouse+Park+Mundra+Gujarat+370405",
    },
    {
        id: "04",
        title: "Chennai",
        type: "Regional Office",
        address:
            "Office No. 124, DLF Cybercity, Block 10, Mount Poonamallee High Road, Manapakkam, Chennai, Tamil Nadu, 600089",
        map: "https://www.google.com/maps/search/?api=1&query=DLF+Cybercity+Manapakkam+Chennai+600089",
    },
];

const contactDetails = {
    phones: ["+91-11-41417725", "+91-11-41417825"],
    mobiles: ["+91-9999995255", "+91-9999997765", "+91-9810929486"],
    email: "info@resolvinyls.com",
    whatsapp: "919810929486",
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        place: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Contact enquiry:", formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            contact: "",
            place: "",
            message: "",
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 4000);
    };

    return (
        <>
            <Navbar />

            <main className="bg-[#f7f7f5] text-[#111111]">

                {/* ======================================================
                    HERO
                ====================================================== */}

                <section className="relative overflow-hidden border-b border-[#0d2461]/10">

                    {/* Decorative background */}

                    <div className="pointer-events-none absolute inset-0">

                        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#c99618]/[0.07] blur-[130px]" />

                        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0d2461]/[0.035] blur-[150px]" />

                        <div className="absolute bottom-[-70px] right-[5%] select-none text-[18vw] font-black leading-none tracking-[-0.08em] text-[#0d2461]/[0.035]">
                            CONTACT
                        </div>

                    </div>


                    <div className="relative mx-auto max-w-[1500px] px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pb-10 lg:pt-16 xl:px-16">

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="max-w-4xl"
                        >

                            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                Get In Touch
                            </p>

                            <h1 className="font-(--font-outfit) text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#0d2461] sm:text-6xl lg:text-8xl">

                                Let's discuss

                                <br />

                                <span className="text-[#0d2461]/35">
                                    your requirement.
                                </span>

                            </h1>

                            <p className="mt-7 max-w-2xl font-(--font-lexend) text-sm leading-7 text-black/50 sm:text-base">
                                Whether you are looking for polymers, resins,
                                plasticizers, chemicals, fillers, or other
                                industrial raw materials, our team is ready
                                to understand your requirement and assist
                                with the right supply.
                            </p>

                        </motion.div>

                    </div>

                </section>


                {/* ======================================================
                    CONTACT + FORM
                ====================================================== */}

                <section className="relative">

                    <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">


                            {/* ==================================================
                                CONTACT INFORMATION
                            ================================================== */}

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                variants={fadeUp}
                                className="lg:sticky lg:top-24 lg:self-start"
                            >

                                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                    Contact Information
                                </p>

                                <h2 className="font-(--font-outfit) text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#0d2461] sm:text-5xl">

                                    We are here

                                    <br />

                                    <span className="text-[#0d2461]/35">
                                        to help.
                                    </span>

                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                                    Connect with our team for product enquiries,
                                    bulk requirements, pricing, availability and
                                    supply-related discussions.
                                </p>


                                {/* CONTACT DETAILS */}

                                <div className="mt-10 border-t border-black/10">

                                    <ContactItem
                                        icon={<FaPhone size={13} />}
                                        title="Phone"
                                    >
                                        {contactDetails.phones.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone.replaceAll("-", "")}`}
                                                className="block transition-colors hover:text-[#c99618]"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </ContactItem>


                                    <ContactItem
                                        icon={<FaPhone size={13} />}
                                        title="Mobile"
                                    >
                                        {contactDetails.mobiles.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone.replaceAll("-", "")}`}
                                                className="block transition-colors hover:text-[#c99618]"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </ContactItem>


                                    <ContactItem
                                        icon={<FaEnvelope size={13} />}
                                        title="Email"
                                    >
                                        <a
                                            href={`mailto:${contactDetails.email}`}
                                            className="transition-colors hover:text-[#c99618]"
                                        >
                                            {contactDetails.email}
                                        </a>
                                    </ContactItem>


                                    {/* WHATSAPP */}

                                    <a
                                        href={`https://wa.me/${contactDetails.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group mt-2 flex items-center justify-between border border-[#c99618]/25 bg-[#c99618]/[0.06] p-4 transition-all duration-300 hover:border-[#c99618]/70 hover:bg-[#c99618]/[0.12]"
                                    >

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 items-center justify-center bg-[#c99618] text-white">
                                                <FaWhatsapp size={19} />
                                            </div>

                                            <div>

                                                <p className="text-[8px] font-bold uppercase tracking-[1.5px] text-black/35">
                                                    Quick Inquiry
                                                </p>

                                                <p className="mt-1 text-xs font-semibold text-[#0d2461]">
                                                    Chat on WhatsApp
                                                </p>

                                            </div>

                                        </div>

                                        <FaArrowRight
                                            size={13}
                                            className="text-[#c99618] transition-transform duration-300 group-hover:translate-x-1"
                                        />

                                    </a>

                                </div>

                            </motion.div>


                            {/* ==================================================
                                FORM
                            ================================================== */}

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                variants={fadeUp}
                            >

                                <div className="border border-black/[0.09] bg-white p-6 shadow-[0_20px_70px_rgba(13,36,97,0.05)] sm:p-8 lg:p-10">

                                    <div className="mb-8">

                                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                            Send An Enquiry
                                        </p>

                                        <h3 className="font-(--font-outfit) text-3xl font-semibold tracking-[-0.03em] text-[#0d2461]">
                                            Tell us what you need.
                                        </h3>

                                        <p className="mt-2 text-sm text-black/40">
                                            Fill in your details and our team
                                            will get back to you.
                                        </p>

                                    </div>


                                    {/* SUCCESS */}

                                    {submitted && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -10,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="mb-6 flex items-center gap-3 border border-green-500/20 bg-green-50 p-4 text-sm text-green-700"
                                        >
                                            <FaCheck size={14} />

                                            Your enquiry has been submitted
                                            successfully.
                                        </motion.div>
                                    )}


                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >

                                        {/* NAME + EMAIL */}

                                        <div className="grid gap-6 sm:grid-cols-2">

                                            <FormField
                                                label="Name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                            <FormField
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        {/* CONTACT + PLACE */}

                                        <div className="grid gap-6 sm:grid-cols-2">

                                            <FormField
                                                label="Contact"
                                                name="contact"
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                required
                                            />

                                            <FormField
                                                label="Place"
                                                name="place"
                                                placeholder="City / State"
                                                value={formData.place}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        {/* MESSAGE */}

                                        <div>

                                            <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                                                Message
                                            </label>

                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={7}
                                                placeholder="Tell us about your product requirement, quantity, grade, application or any other enquiry..."
                                                className="w-full resize-none border border-black/[0.10] bg-[#f7f7f5] px-4 py-4 text-sm text-[#111] outline-none transition-all placeholder:text-black/25 focus:border-[#c99618]/70 focus:bg-white"
                                            />

                                        </div>


                                        {/* SUBMIT */}

                                        <button
                                            type="submit"
                                            className="group flex w-full items-center justify-between bg-[#0d2461] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c99618]"
                                        >

                                            <span>
                                                Send Enquiry
                                            </span>

                                            <FaArrowRight
                                                size={13}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />

                                        </button>

                                    </form>

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </section>


                {/* ======================================================
                    OFFICE LOCATIONS
                ====================================================== */}

                <section className="border-t border-black/[0.08] bg-white">

                    <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            variants={fadeUp}
                            className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
                        >

                            <div>

                                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                    Our Presence
                                </p>

                                <h2 className="font-(--font-outfit) text-4xl font-semibold tracking-[-0.04em] text-[#0d2461] sm:text-5xl">

                                    Our Office

                                    <span className="text-[#0d2461]/30">
                                        {" "}Locations
                                    </span>

                                </h2>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-black/45">
                                With offices across key locations in India,
                                Resol Industries supports customers through
                                an established sourcing and distribution
                                network.
                            </p>

                        </motion.div>


                        {/* OFFICE GRID */}

                        <div className="grid gap-px overflow-hidden border border-black/[0.08] bg-black/[0.08] md:grid-cols-2">

                            {offices.map((office, index) => (

                                <motion.div
                                    key={office.id}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group relative bg-white p-7 transition-colors duration-300 hover:bg-[#f7f7f5] lg:p-9"
                                >

                                    {/* GOLD SIDE LINE */}

                                    <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#c99618] transition-transform duration-500 group-hover:scale-y-100" />


                                    <div className="mb-8 flex items-start justify-between">

                                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#c99618]">
                                            {office.id}
                                        </span>

                                        <FaLocationDot
                                            size={17}
                                            className="text-[#c99618]/70"
                                        />

                                    </div>


                                    <h3 className="font-(--font-outfit) text-2xl font-semibold text-[#0d2461]">
                                        {office.title}
                                    </h3>

                                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[1.7px] text-black/35">
                                        {office.type}
                                    </p>


                                    <p className="mt-6 max-w-lg text-sm leading-7 text-black/50">
                                        {office.address}
                                    </p>


                                    <a
                                        href={office.map}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#c99618] transition-colors hover:text-[#0d2461]"
                                    >

                                        View On Google Maps

                                        <FaArrowRight
                                            size={10}
                                            className="transition-transform group-hover:translate-x-1"
                                        />

                                    </a>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ======================================================
                    MAP
                ====================================================== */}

                <section className="relative border-t border-black/[0.08] bg-[#f7f7f5]">

                    <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-16">

                        <div className="mb-8">

                            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#c99618]">
                                Find Us
                            </p>

                            <h2 className="font-(--font-outfit) text-4xl font-semibold tracking-[-0.04em] text-[#0d2461] sm:text-5xl">

                                Our locations

                                <span className="text-[#0d2461]/30">
                                    {" "}across India.
                                </span>

                            </h2>

                        </div>


                        {/* MAP */}

                        <div className="relative h-[450px] overflow-hidden border border-black/[0.10] bg-white shadow-[0_20px_60px_rgba(13,36,97,0.06)] lg:h-[600px]">

                            <iframe
                                title="Resol Industries Locations"
                                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                                className="h-full w-full grayscale-[0.2] opacity-90 transition-all duration-500 hover:grayscale-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* MAP LABEL */}

                            <div className="pointer-events-none absolute bottom-5 left-5 border border-black/10 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-md">

                                <div className="flex items-center gap-3">

                                    <FaLocationDot
                                        className="text-[#c99618]"
                                        size={15}
                                    />

                                    <div>

                                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/40">
                                            Registered Office
                                        </p>

                                        <p className="mt-1 text-xs font-semibold text-[#0d2461]">
                                            New Delhi
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <p className="mt-4 text-[11px] text-black/35">
                            Use the office links above to open the exact
                            location in Google Maps.
                        </p>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}


/* ============================================================
   FORM FIELD
============================================================ */

function FormField({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
}) {
    return (
        <div>

            <label
                htmlFor={name}
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="h-12 w-full border border-black/[0.10] bg-[#f7f7f5] px-4 text-sm text-[#111] outline-none transition-all placeholder:text-black/25 focus:border-[#c99618]/70 focus:bg-white"
            />

        </div>
    );
}


/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
    icon,
    title,
    children,
}) {
    return (
        <div className="flex gap-4 border-b border-black/[0.08] py-6">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c99618]/30 text-[#c99618]">
                {icon}
            </div>

            <div>

                <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[1.8px] text-black/35">
                    {title}
                </p>

                <div className="space-y-0.5 text-[12px] leading-6 text-black/60">
                    {children}
                </div>

            </div>

        </div>
    );
}