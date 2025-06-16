'use client';

import BannerCarousel from "@/Components/BannerCarousel";
import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";
import NewsletterSection from "@/Components/NewsletterSection";
import Image from "next/image";


export default function Home() {
  return (
    <main className="font-mono bg-white ">
      <BannerCarousel></BannerCarousel>
      <Header/>
      <BlogList />
      <NewsletterSection></NewsletterSection>
      {/* <Footer/> */}
    </main>
  );
}
