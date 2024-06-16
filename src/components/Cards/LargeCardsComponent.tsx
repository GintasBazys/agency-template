import LargeCardComponent from "./LargeCardComponent";

const LargeCardsComponent = () => {
	return (
		<section>
			<div className="container mt-8 lg:mt-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                <LargeCardComponent title="Digital Marketing Experts" description="Partner with our experts to enhance your digital footprint. From SEO to social media, we've got you covered. Experience the power of professional digital marketing." image="/images/website.png" link="/services" linkText="Digital marketing" />
                <LargeCardComponent title="Innovative SEO Solutions" description="NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence." image="/images/solutions.png" link="/services" linkText="SEO Solutions" />
                <LargeCardComponent title="Achieve Remarkable Results" description=" Connect with us today to start your journey to online excellence! Achieve remarkable results with NovaWave Digital's expert team." image="/images/results.png" link="/services" linkText="Remarkable Results" />
			</div>
		</section>
	);
};

export default LargeCardsComponent;
