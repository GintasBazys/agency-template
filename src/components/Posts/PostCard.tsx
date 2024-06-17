import { PostCardInterface } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: PostCardInterface }) => {
    const { data, slug } = post;

    return (
        <div className="px-4 py-6 shadow-2xl rounded-lg">
            <ul className="flex gap-4 flex-wrap mb-3 w-full justify-between items-center">
                <li className="font-bold">Author: {data.author}</li>
                <li className="px-4 py-1 bg-primary text-white rounded-full">
                    {data.category}
                </li>
            </ul>
            <Image
                src={data.image}
                alt={data.title}
                title={data.title}
                width={400}
                height={400}
                loading="lazy"
                className="rounded-lg mb-4 w-full object-cover"
            />
            <h4 className="text-primary text-2xl font-bold mb-4">
                {data.title}
            </h4>
            <p className="line-clamp-3 mb-4">{data.excerpt}</p>
            <Link
                href={"/blog/" + slug}
                className="text-white bg-primary hover:bg-transparent hover:text-primary focus:ring-4 border border-primary focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-block w-full sm:w-auto"
            >
                Read post
            </Link>
        </div>
    );
};
export default PostCard;
