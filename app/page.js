'use client';

import BannerCarousel from "@/Components/BannerCarousel";
import BlogList from "@/Components/BlogList";
import BlogStats from "@/Components/BlogStats";
import ChatSection from "@/Components/Chat";
import Faq from "@/Components/Faqs";
import Header from "@/Components/Header";
import NewsletterSection from "@/Components/NewsletterSection";
import NewsTicker from "@/Components/NewsTicker";
import TodayInHistory from "@/Components/TodayInHistory";
import Image from "next/image";


export default function Home() {
  return (
    <main className="font-mono bg-white ">
      <BannerCarousel></BannerCarousel>
      <NewsTicker></NewsTicker>
      <Header/>
      <BlogList />
      <BlogStats></BlogStats>
      <NewsletterSection></NewsletterSection>
      <ChatSection></ChatSection>
      <TodayInHistory></TodayInHistory>
      <Faq></Faq>
      {/* <Footer/> */}
    </main>
  );
}
