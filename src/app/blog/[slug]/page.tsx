import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { components } from "@/utils/components";
import Image from "next/image";

import "./post.css";

interface PostPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post: { slug: string }) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps) {
    const { slug } = params;
    const { data } = await getPostBySlug(slug);
    return {
        title: data.metaTitle,
        description: data.metaDescription,
    };
}

const PostPage = async ({ params }: PostPageProps) => {
    const { slug } = params;
    const { data, content } = await getPostBySlug(slug);
    const options: MDXRemoteOptions = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: true,
    };

    return (
        <main className="flex flex-col items-center justify-between p-12 px-4 md:px-24">
            <section className="container max-w-7xl mx-auto lg:px-4 static-page">
                <h1 className="text-center !mb-1">{data.title}</h1>
                <p className="text-center">
                    By: {data.author} | {data.date}
                </p>
                <Image
                    className="mx-auto mb-8"
                    src={data.image}
                    alt={data.title}
                    title={data.title}
                    width={500}
                    height={500}
                />
                <hr/>
                <MDXRemote
                    source={content}
                    options={options}
                    components={components}
                />
            </section>
        </main>
    );
};

export default PostPage;
