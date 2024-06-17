import Image from "next/image";
import Link from "next/link";

const BannerComponent = () => {
	return (
		<section className="bg-primary py-8 px-6 lg:px-28 lg:py-14 w-full rounded-2xl max-w-7xl">
			<div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div>
					<h1 className="my-6 font-bold text-gradient text-4xl">
						Boost Your Online Presence
						<br />
						Partner with our experts!
					</h1>
					<p className="text-white font-medium mb-5">
						Partner with our experts to enhance your digital footprint.
						<br /> From SEO to social media, we&apos;ve got you covered.
					</p>
					<Link className=" text-white rounded-lg py-4 px-8 font-semibold inline-block mt-2 transition-all duration-500 hover:text-gradient border-white border-2" href="/services">
						<span>Our services</span>
					</Link>
				</div>
				<div className="relative">
                <Image
						className="topBottom object-cover"
						src="/images/phone-mockup.png"
                        priority
						alt="Phone"
						width={500}
						height={400}
						sizes="(max-width: 768px) 40vw,
                           (max-width: 1200px) 50vw,
                           33vw"
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
			</div>
		</section>
	);
};

export default BannerComponent;
