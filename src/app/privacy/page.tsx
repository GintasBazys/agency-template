import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NovaWave | Privacy Policy",
	description:
		"NovaWave Digital drives your brand forward with innovative SEO and social media solutions. Our team of experts is dedicated to enhancing your digital presence and achieving remarkable results.",
};

const Privacy = () => {
	return (
		<main className="flex flex-col items-center justify-between p-12 px-4 md:px-24">
			<section className="container max-w-7xl">
				<h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

				<p className="mb-4">
					Your privacy is important to us. It is NovaWave Digital's policy to respect your privacy regarding
					any information we may collect from you across our website,{" "}
					<a href="https://www.example.com">https://www.example.com</a>, and other sites we
					own and operate.
				</p>

				<h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

				<p className="mb-4">
					We only collect information about you if we have a reason to do so, such as to provide our services,
					to communicate with you, or to improve our services.
				</p>

				<h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>

				<p className="mb-4">We use the information we collect in various ways, including to:</p>
				<ul className="list-disc mb-4 ps-4">
					<li>Provide, operate, and maintain our website and services</li>
					<li>Improve, personalize, and expand our website and services</li>
					<li>Understand and analyze how you use our website and services</li>
					<li>
						Communicate with you, either directly or through one of our partners, including for customer
						service, to provide you with updates and other information relating to the website, and for
						marketing and promotional purposes
					</li>
				</ul>

				<h2 className="text-2xl font-bold mb-4">3. Security of Your Information</h2>

				<p className="mb-4">
					We secure your personal information from unauthorized access, use, or disclosure. We use SSL
					encryption to protect sensitive information transmitted online.
				</p>

				<h2 className="text-2xl font-bold mb-4">4. Changes to This Privacy Policy</h2>

				<p className="mb-4">
					We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
					new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
					changes. Changes to this Privacy Policy are effective when they are posted on this page.
				</p>

				<h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>

				<p className="mb-">If you have any questions about this Privacy Policy, please contact us:</p>
				<ul className="list-disc mb-4 ps-4">
					<li>By email: privacy@example.com</li>
					<li>
						By visiting this page on our website:{" "}
						<a href="https://www.privacy.com/contact">Contact Us</a>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default Privacy;
