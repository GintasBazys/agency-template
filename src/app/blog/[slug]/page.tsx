import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import remarkGfm from "remark-gfm";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { components } from "@/utils/components";

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
    const { content } = await getPostBySlug(slug);
    const options: MDXRemoteOptions = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: true,
    };

    return (
        <main className="flex flex-col items-center justify-between p-12 px-4 md:px-24">
            <section className="container max-w-7xl mx-auto px-4 static-page">
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
