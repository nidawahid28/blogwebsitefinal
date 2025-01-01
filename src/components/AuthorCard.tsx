import Image from "next/image";
import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation- fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          width={600}
          height={600}
          src="/images/author.jpg"
          alt="Author Image"
        />
        <div>
          <h3 className="text-xl font-bold">Nida Wahid Baig</h3>
          <p className="text-slate-500">Front-End Developer</p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Creative front-end developer with expertise in crafting responsive,
        user-friendly interfaces using HTML, CSS, JavaScript, and modern
        frameworks like React and Next.js.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transation duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transation duration-300"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transation duration-300"
        >
          Github
        </a>
        
      </div>
    </div>
  );
}
