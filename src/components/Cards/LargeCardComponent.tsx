import Image from "next/image";
import Link from "next/link";

import { CardProps } from "@/utils/types";

const LargeCardComponent = ({ title, description, image, link, linkText }: CardProps) => {
	return (
		<div className="rounded-lg overflow-hidden relative">
			<Image
				width={410}
				height={302}
				className="w-full object-cover rounded-t-lg border border-primary"
				src={image}
				alt={title}
				title={title}
			/>
			<div className="p-6 bg-secondary h-full">
				<div>
					<h2 className="text-xl text-gradient font-bold mb-2">{title}</h2>
					<p className="text-white mb-4">{description}</p>
				</div>
				<Link
					href={link}
					className="inline-block bg-treansparent border text-white px-4 py-2 rounded hover:text-gradient">
					{linkText}
				</Link>
			</div>
		</div>
	);
};

export default LargeCardComponent;
