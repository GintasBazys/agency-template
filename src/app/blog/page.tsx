import AllPostsComponent from "@/components/Posts/AllPostsComponent";
import TestimonialsComponent from "@/components/Testimonials/TestimonialsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaWave | Blog",
    description:
        "NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence and achieving remarkable results.",
};

const Blog = () => {
    return (
        <main className="flex  flex-col items-center justify-between p-12 px-4 md:px-24">
            <AllPostsComponent />
            <TestimonialsComponent />
        </main>
    );
};

export default Blog;
