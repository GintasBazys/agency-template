import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "@/utils/types";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getLatestPosts() {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(
        filenames.slice(0, 3).map(async (filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            const postData: PostData = {
                title: data.title as string,
                author: data.author as string,
                category: data.category as string,
                image: data.image as string,
                date: data.date as string,
                excerpt: data.excerpt as string,
                metaTitle: data.metaTitle as string,
                metaDescription: data.metaDescription as string,
                metaKeywords: data.metaKeywords as string,
                robots: {
                    index: data.index as boolean,
                    follow: data.follow as boolean,
                },
            };

            return {
                data: postData,
                content,
                slug: filename.replace(/\.mdx$/, ""),
            };
        }),
    );

    return posts;
}

export async function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            const postData: PostData = {
                title: data.title as string,
                author: data.author as string,
                category: data.category as string,
                image: data.image as string,
                date: data.date as string,
                excerpt: data.excerpt as string,
                metaTitle: data.metaTitle as string,
                metaDescription: data.metaDescription as string,
                metaKeywords: data.metaKeywords as string,
                robots: {
                    index: data.index as boolean,
                    follow: data.follow as boolean,
                },
            };

            return {
                data: postData,
                content,
                slug: filename.replace(/\.mdx$/, ""),
            };
        }),
    );

    return posts;
}

export async function getPostBySlug(slug: string) {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const postData: PostData = {
        ...data,
        date: data.date.toString(),
    } as PostData;

    return {
        data: postData,
        content,
    };
}
