import React from "react";
import Link from "next/link";

interface PricingPlan {
	title: string;
	description: string;
	price: string;
	period: string;
	features: string[];
	bestChoice: boolean;
}

interface PricingCardProps {
	plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => (
	<div className="relative flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-secondary rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
		{plan.bestChoice && (
			<div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-extrabold px-4 py-1 rounded-bl-lg">
				BEST CHOICE
			</div>
		)}
		<strong className={`mb-4 ${plan.bestChoice ? "mt-3 lg:mt-0" : ""} text-2xl text-gradient font-bold`}>{plan.title}</strong>
		<p className="text-white sm:text-lg">{plan.description}</p>
		<div className="flex justify-center items-baseline my-8">
			<span className="mr-2 text-5xl text-white font-bold">{plan.price}</span>
			<span className="text-white font-light">{`/${plan.period}`}</span>
		</div>
		<ul role="list" className="mb-8 space-y-4 text-left">
			{plan.features.map((feature) => (
				<li key={feature} className="flex items-center space-x-3 text-white">
					<svg
						className="flex-shrink-0 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						/>
					</svg>
					<span>{feature}</span>
				</li>
			))}
		</ul>
		<Link
			href="/contact"
			className="text-white border bg-transparent hover:text-gradient rounded-lg text-sm px-5 py-2.5 text-center">
			Get started
		</Link>
	</div>
);

export default PricingCard;
