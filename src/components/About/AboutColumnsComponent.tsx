const AboutColumnsComponent = () => {
	return (
		<section>
			<div className="py-12 mx-auto max-w-7xl lg:py-16 px-0">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h3 className="mb-4 text-4xl tracking-tight font-bold text-secondary">About us</h3>
					<p className="mb-5 sm:text-xl">
						NovaWave Digital is dedicated to empowering businesses with cutting-edge digital marketing
						strategies that drive growth and elevate online presence.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div className="lg:border-r border-secondary">
						<div>
							<h3 className="text-lg font-bold mb-2">Overview</h3>
							<p className="text-gray-700">
								Since 2010, <b>NovaWave Digital</b> has been providing innovative digital marketing
								solutions to a wide range of industries. Our commitment to excellence and customer
								satisfaction has established us as a trusted partner for businesses looking to enhance
								their online presence and drive growth.
							</p>
						</div>
						<ul className="mt-4 space-y-4">
							{[
								"Digital Strategy",
								"Content Creation",
								"Social Media Management",
								"SEO Optimization",
								"Email Marketing",
								"Pay-Per-Click Advertising",
								"Web Development",
								"Analytics and Reporting",
							].map((item, index) => (
								<li key={index} className="flex items-center space-x-2">
									<svg
										className="h-6 w-6 text-secondary"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-gray-700">{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-bold mb-2">Background</h3>
							<p className="text-gray-700">
								By 2023, <b>NovaWave Digital</b> had expanded its client base to include over 200
								businesses worldwide. Despite this growth, the company realized it needed a more
								cohesive digital strategy to maintain its competitive edge. The challenge was to
								integrate advanced digital marketing techniques while staying true to its core values of
								innovation and customer satisfaction.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-bold mb-2">The challenge</h3>
							<p className="text-gray-700">
								<b>NovaWave Digital&apos;s</b> new digital strategy had to be implemented swiftly to
								keep pace with industry changes. The main challenge was to align the company&apos;s expanding
								service offerings with the evolving needs of its diverse client base, ensuring seamless
								integration and superior user experiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutColumnsComponent;
