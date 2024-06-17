import { getAllPosts } from "@/lib/mdx";
import PostCard from "./PostCard";
import { Post } from "@/utils/types";

const LatestPostsComponent = async () => {
    const posts: Post[] = await getAllPosts();
    return (
        <section className="w-full pb-8">
            <div className="pt-12 mx-auto max-w-7xl px-0">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h3 className="mb-4 text-4xl tracking-tight font-bold text-primary">
                        Latest News & Articles
                    </h3>
                    <p className="mb-5 sm:text-xl">
                        Our campaigns get your business in front of the right
                        people at the right time to increase organic traffic and
                        boost engagement.
                    </p>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto">
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:space-y-0">
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestPostsComponent;
