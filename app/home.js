"use client";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
// Core sections (above-the-fold)
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Slider from '@/components/Slider';
import VideoSection from '@/components/VideoSection';

// Lazy load heavier sections (below-the-fold)
const RegulatoryCompliance = dynamic(() => import('@/components/RegulatoryCompliance'));
const Security = dynamic(() => import('@/components/Security'));
const FxCalculator = dynamic(() => import('@/components/FXCalculator'));
const WorldClock = dynamic(() => import('@/components/WorldClock'));

const Testimonials = dynamic(() => import('@/components/Testimonials'));



const Home = () => (
  <>
   

    <main className='w-full'>
      {/* Above the fold */}
      <Hero /> 
      <Slider />
      <TrustBadges />
      <Services />
       <Suspense fallback={<div>Loading regulatory info...</div>}>
        <RegulatoryCompliance />
      </Suspense>
      <WhyChooseUs /> 

      {/* Below the fold (lazy-loaded sections) */}
     
      <Suspense fallback={<div>Loading security section...</div>}>
        <Security />
      </Suspense>
      <Suspense fallback={<div>Loading FX tools...</div>}>
        <FxCalculator />
      </Suspense>
      
        <WorldClock />

    </main>
  </>
);

export default Home;
