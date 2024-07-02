import LatestPostsComponent from "@/components/Posts/LatestPostsComponent";
import BannerComponent from "@/components/Services/BannerComponent";
import TabsComponent from "@/components/Services/TabsComponent";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaWave | Services",
    description:
        "NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence and achieving remarkable results.",
};


const Services = () => {
    return (
        <main className="flex  flex-col items-center justify-between pb-12">
            <BannerComponent title="Services" />
            <TabsComponent />
            <LatestPostsComponent />
            <TestimonialsComponent />
        </main>
    );
};

export default Services;
