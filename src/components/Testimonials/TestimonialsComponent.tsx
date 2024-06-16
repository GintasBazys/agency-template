import Image from "next/image";
import { REVIEWS } from "@/constants/reviews";
import Script from "next/script";

const TestimonialsComponent = () => {
	return (
		<section className="my-12">
			<div className="carousel w-full mx-auto flex gap-6 overflow-x-scroll md:pb-4 max-w-[100vw]">
				{REVIEWS?.map((review, index) => (
					<div
						key={index}
						className="slide w-[80vw] shrink-0 rounded-lg border border-secondary p-8 text-white sm:p-10 md:w-[43vw] xl:w-[30rem] select-none">
						<div className="flex flex-col justify-center items-center mb-2">
							<Image
								className="me-4 mb-3 object-contain rounded-full"
								src={review.image}
								width={60}
								height={60}
								loading="lazy"
								alt={review.name}
							/>
							<div className="font-medium">
								<p className="text-center text-secondary">
									{review.name}
									<time dateTime={review.date} className="block text-sm text-secondary">
										{new Date(review.date).toLocaleDateString()}
									</time>
									<span className="font-bold text-secondary">{review.company}</span>
								</p>
							</div>
						</div>
						<div className="flex justify-center items-center mb-3 space-x-1 rtl:space-x-reverse">
							{[...Array(review.rating)].map((_, starIndex) => (
								<svg
									key={starIndex}
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24">
									<path
										fill="#040046"
										d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
									/>
								</svg>
							))}
						</div>
						<blockquote className="mb-2 max-w-screen-md text-secondary text-center mx-auto">
							{review.review}
						</blockquote>
						<Script
							strategy="afterInteractive"
							type="application/ld+json"
							id={"json_" + index}
							dangerouslySetInnerHTML={{
								__html: `
										    [{
											    "@context":"https://schema.org/",
												"@type": "Review",
												"author": {
												    "@type": "Person",
												    "name": "${review.name}",
												    "worksFor": "${review.company}"
												},
												"reviewBody": "${review.review}",
												"itemReviewed": {"@type": "Organization","name": "NovaWave"},"reviewRating": {"@type": "Rating", "ratingValue": ${review.rating},"worstRating": 1, "bestRating": 5,"reviewAspect": "Services"}
                                            }]
										`,
							}}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialsComponent;
