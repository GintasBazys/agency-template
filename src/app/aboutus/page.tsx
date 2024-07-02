import AboutColumnsComponent from "@/components/About/AboutColumnsComponent";
import TimelineComponent from "@/components/About/TimelineComponent";
import LatestPostsComponent from "@/components/Posts/LatestPostsComponent";
import PricingCardsComponent from "@/components/Pricing/PricingCardsComponent";
import BannerComponent from "@/components/Services/BannerComponent";
import { Metadata } from "next";

import "./about.css";

export const metadata: Metadata = {
    title: "NovaWave | About",
    description:
        "NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence and achieving remarkable results.",
};


const Aboutus = () => {
    return (
        <main className="flex flex-col items-center justify-between pb-12">
            <BannerComponent title="About us" />
            <section className="px-4">
                <AboutColumnsComponent />
                <TimelineComponent />
                <PricingCardsComponent />
                <LatestPostsComponent />
            </section>
        </main>
    );
};

export default Aboutus;
