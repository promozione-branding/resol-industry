import AboutUs from '@/component/About'
import Client from '@/component/Client'
import Footer from '@/component/Footer'
import HeroSection from '@/component/Hero'
import IndustriesSection from '@/component/Industry'
import Navbar from '@/component/Navbar'
import OurCategoriesSection from '@/component/OurCategoriesSection'
import Hero3 from '@/component/Product'
import Cta from '@/component/Video'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Client />
      <OurCategoriesSection />
      <AboutUs />
      <Hero3 />
      <Cta />
      <IndustriesSection />

      <Footer />
    </div>
  )
}
