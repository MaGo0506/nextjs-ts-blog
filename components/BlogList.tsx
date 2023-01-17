import {Post} from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import category from "../schemas/category";

type Props = {
    posts: Post[];
}
const BlogList = ({posts}: Props) => {
    console.log(posts.length)
    return (
        <div>
            <hr className="border-[#484fd9] mb-10"/>

            <div>
                {posts.map(post => (
                    <div key={post._id} className="flex flex-col group cursor-pointer">
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105
                        transition-transform duration-200 ease-out">
                            <Image
                                className="object-cover object-left
                                lg:object-center"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
                            <div>
                                <div className="absolute bottom-0 w-full bg-opacity-20
                                bg-black backdrop-blur-lg rounded drop-shadow-lg text-white
                                p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>

                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString
                                            ("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })}
                                        </p>
                                    </div>

                                    <div className="flex flex-col md: flex-row gap-2">
                                        {post.categories.map(category => (
                                            <div
                                                className="bg-[#484fd9] text-center text-white
                                            px-3 py-1 rounded-full text-sm font-semibold"
                                                key={category._id}
                                            >
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex-1">
                            <p className="underline text-lg font-bold">{post.title}</p>
                            <p className="line-clamp-2 text-gray-500">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList