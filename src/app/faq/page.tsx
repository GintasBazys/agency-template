import FaqCardComponent from "@/components/FAQ/FaqCardComponent";
import { FAQS } from "@/constants/faqQuestions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaWave | FAQ",
    description:
        "NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence and achieving remarkable results.",
};

const FAQ = () => {
    const faqArray = Object.values(FAQS);

    return (
        <main className="flex flex-col items-center justify-between p-12 px-4 md:px-24">
            <section>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                    <h1 className="text-4xl text-center tracking-tight font-bold">
                        Frequently asked questions
                    </h1>
                </div>
            </section>
            <div className="container mx-auto max-w-7xl">
                <div className="mb-4">
                    <FaqCardComponent faqs={faqArray} />
                </div>
            </div>
        </main>
    );
};

export default FAQ;
