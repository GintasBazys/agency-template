import MapFormComponent from "@/components/Contact/MapFormComponent";
import BannerComponent from "@/components/Services/BannerComponent";

const Contact = () => {
    return (
        <main className="flex  flex-col items-center justify-between pb-12">
            <BannerComponent title="Contact Us" />
            <MapFormComponent />
        </main>
    );
};

export default Contact;
