import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import "./faq.css";

interface FaqProps {
	id: string;
	question: string;
	answer: string;
}

interface FaqCardComponentProps {
	faqs: FaqProps[];
}

const FaqCardComponent: React.FC<FaqCardComponentProps> = ({ faqs }) => {
	return (
		<Accordion id="faqAccordion">
			{faqs.map(({ id, question, answer }) => (
				<AccordionPanel key={id}>
					<AccordionTitle className="px-0 gap-4 text-bold text-primary border-b border-primary">{question}</AccordionTitle>
					<AccordionContent className="pt-0 px-0 !border-t-0">
						<p className="mb-2">{answer}</p>
					</AccordionContent>
				</AccordionPanel>
			))}
		</Accordion>
	);
};

export default FaqCardComponent;
