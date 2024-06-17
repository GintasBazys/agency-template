export interface PostCardInterface {
    data: {
        excerpt: string;
        author: string;
        category: string;
        image: string;
        title: string;
    };
    content: string;
    slug: string;
}

export interface PostData {
    title: string;
    author: string;
    category: string;
    date: string;
    excerpt: string;
    image: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    robots: {
        index: boolean;
        follow: boolean;
    };
}

export interface Post {
    data: PostData;
    content: string;
    slug: string;
}

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
