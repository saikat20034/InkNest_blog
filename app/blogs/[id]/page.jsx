'use client';

import { useEffect, useState } from "react";
import { assets, blog_data } from "@/Assets/assets"; // Make sure this path is correct
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (data?<>
    <div className="px-5 py-5 font-mono bg-gray-200 ">
      <div className="flex items-center justify-between">
        <Link href={'/'} className="font-mono text-xl font-semibold text-black">InkNest</Link>
        <button className="flex items-center gap-2 px-3 py-1 font-medium text-black border border-black shadow-2xl">Get Started</button>
      </div>
      <div className="my-24 text-center text-black">
        <h2 className="text-4xl font-mono font-semibold max-w-[700px] mx-auto">{data.title}</h2>
        <Image src={data.author_img} alt="author Image" width={60} height={60} className="mx-auto mt-6 border border-white rounded-full " />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
      </div>
    </div>
    <div className="mx-auto mt-[-100px] mb-10 max-w-[800px]">
      <Image src={data.image} width={1280} height={720} alt="Blog Image" className="border-4 border-white" />
      <h2 className="my-8 text-2xl font-semibold">Introduction</h2>
      <p>{data.description}</p>
      {/* <p className="my-3">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, molestiae? sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae perferendis omnis id facere libero fugit nemo totam harum natus at laudantium possimus voluptate velit quae consectetur officiis ut, cum aperiam officia facilis? Asperiores, harum quasi? Pariatur, similique cum reiciendis, distinctio voluptas recusandae odio reprehenderit culpa assumenda neque ratione atque!</p> */}
    </div>
    <div className="my-24 text-center">
      <p className="my-4 ">Share this article on social media</p>
      <div className="flex justify-center gap-4 ">
        <Image src={assets.facebook_icon} width={50}></Image>
        <Image src={assets.twitter_icon} width={50}></Image>
        <Image src={assets.googleplus_icon } width={50}></Image>
      </div>
    </div>
  </>:<></>
  );
};

export default Page;
