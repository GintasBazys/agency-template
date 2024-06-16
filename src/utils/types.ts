export interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
}

export interface FaqProps {
    id: string;
    question: string;
    answer: string;
}

export interface Faqs {
    [key: string]: FaqProps;
}