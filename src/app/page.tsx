import LargeCardsComponent from "@/components/Cards/LargeCardsComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import PricingCardsComponent from "@/components/Pricing/PricingCardsComponent";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";
import AboutColumnsComponent from "@/components/About/AboutColumnsComponent";
import LatestPostsComponent from "@/components/Posts/LatestPostsComponent";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-12 px-4 md:px-24">
            <BannerComponent />
            <LargeCardsComponent />
            <AboutColumnsComponent title="About us" />
            <PricingCardsComponent />
            <LatestPostsComponent />
            <TestimonialsComponent />
        </main>
    );
}
