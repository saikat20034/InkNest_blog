import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogItem = ({title,description,category,image,id}) => {
  return (
    <div className="max-w-[330px] bg-white border border-gray-600 text-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg rounded-md">
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt="Blog Image" width={400} height={400} className="border-b border-gray-600" />
      </Link>
      <p className="inline-block px-1 mt-5 ml-5 text-white bg-black">{category}</p>
      <div className="p-5">
        <h4 className="mb-2 text-lg tracking-tight text-gray-800">{title}</h4>
        <p className="mb-3 tracking-tight text-gray-600 text-md">{description}</p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center gap-4 py-2 font-semibold hover:text-orange-500">Read More <FaArrowRight/> </Link>
      </div>
    </div>
  );
};

export default BlogItem;