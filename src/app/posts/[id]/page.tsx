"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";
import Image from "next/image";


const posts = [
  {
    id: "1",
    title: "HTML Basics: The Foundation of Every Website",
    description:
      "Discover the power of HTML: where every great website begins. As the foundation of web development, HTML structures your content, turning ideas into interactive and functional webpages. It's the first step to creating responsive designs, embedding multimedia, and building user-friendly experiences on the web. Whether you're crafting a simple blog or a complex web application, HTML provides the backbone for everything you see online, paving the way for creativity and innovation",
    image: "/images/slide1.png",
  },
  {
    id: "2",
    title: "CSS Mastery: Styling the Web Beautifully",
    description:
     "Bring your webpages to life with stunning styles using CSS. CSS transforms plain HTML structures into visually captivating designs with colors, fonts, layouts, and animations. It enables you to create responsive, mobile-friendly websites that adapt seamlessly to any screen size. Whether you're styling buttons, building grid layouts, or crafting interactive hover effects, CSS is the key to making your websites stand out and deliver exceptional user experiences",
    image: "/images/slide2.png",
  },
  {
    id: "3",
    title: "JavaScript Essentials: Adding Life to Webpages",
    description:
    "Unlock interactivity and dynamic content with JavaScript. This powerful programming language brings your websites to life by enabling real-time updates, animations, and user interactions. From form validation and dropdown menus to dynamic galleries and interactive maps, JavaScript empowers you to create feature-rich, engaging web applications. It’s the backbone of modern web development, seamlessly integrating with HTML and CSS to deliver responsive, dynamic, and user-centric experiences.",
    image: "/images/slide3.png",
  },
  {
    id: "4",
    title: "Responsive Design: Perfect Across All Devices",
    description:
    "Master responsive design to make your websites look great on any device. With responsive design, you can ensure your content adapts seamlessly to different screen sizes, from smartphones to large desktop monitors. By utilizing flexible layouts, media queries, and scalable assets, you create user-friendly experiences that maintain functionality and aesthetics across all platforms. Responsive design is essential for engaging users in today’s mobile-first world.",
      
    image: "/images/slide4.png",
  },
  {
    id: "5",
    title: "React.js: Building Modern Web Applications",
    description:
      "Build dynamic, component-based UIs with the power of React.js. This popular JavaScript library simplifies the development of interactive and efficient user interfaces. With reusable components, state management, and a virtual DOM, React.js makes it easy to create fast, scalable, and maintainable web applications. Whether you're building single-page apps or complex platforms, React.js empowers developers to craft seamless and engaging user experiences.",
    image: "/images/slide5.png",
  },
  {
    id: "6",
    title: "Tailwind CSS: Rapid and Utility-First Styling",
    description:
      "Style efficiently with Tailwind CSS: a utility-first CSS framework that provides a highly customizable and low-level approach to building responsive designs. Instead of writing custom CSS, Tailwind offers a wide range of pre-defined utility classes to handle layout, spacing, colors, typography, and more. This allows for faster development, cleaner code, and a more streamlined workflow, making it perfect for both small projects and large-scale applications.",
    image: "/images/slide6.png",
  },
  {
    id: "7",
    title: "Next.js: Enhancing Web Development with Performance",
    description:
      "Explore server-side rendering and optimized performance with Next.js, a powerful React framework that enhances user experience and SEO. By enabling automatic server-side rendering (SSR) and static site generation (SSG), Next.js ensures that pages load faster and are more accessible to search engines. It also provides built-in routing, API routes, and a robust system for handling images and fonts, ensuring a seamless development process. With features like automatic code splitting and incremental static regeneration, Next.js optimizes performance for both developers and users alike.",
    image: "/images/slide7.png",
  },
  {
    id: "8",
    title: "TypeScript: Adding Type Safety to JavaScript",
    description:
      "Add type safety and scalability to your JavaScript with TypeScript, a superset of JavaScript that introduces static typing and powerful features for large-scale applications. TypeScript helps catch errors early in the development process through its strict type-checking system, making your code more reliable and easier to maintain. With features like interfaces, generics, and type inference, TypeScript enhances code clarity, reduces bugs, and improves collaboration among developers. It's the ideal choice for building scalable, maintainable projects, from small applications to enterprise-level systems.",
    image: "/images/slide8.png",
  },
  {
    id: "9",
    title: "Node.js: Revolutionizing Server-Side Development",
    description: 
    "Discover the power of server-side JavaScript with Node.js, a runtime environment that allows you to run JavaScript outside the browser. Built on the V8 engine, Node.js offers fast, scalable, and event-driven architecture, making it ideal for building high-performance applications. It enables developers to use the same language for both client-side and server-side development, streamlining the development process. With a rich ecosystem of libraries and frameworks available through npm, Node.js supports everything from web servers and APIs to real-time applications, providing flexibility and efficiency for modern web development.",
    image: "/images/slide9.png",
  },
  {
    id: "10",
    title: "Artificial Intelligence: Transforming the Future",
    description:
      "AI: Revolutionizing industries and powering intelligent solutions, AI is transforming how businesses operate, innovate, and deliver services. From automating repetitive tasks to analyzing vast amounts of data for insights, AI is driving efficiency and decision-making across various sectors, including healthcare, finance, retail, and manufacturing. Machine learning, natural language processing, and computer vision are just a few AI technologies that enable smart applications like chatbots, predictive analytics, and autonomous systems. As AI continues to evolve, it holds the potential to create new opportunities, improve user experiences, and shape the future of industries worldwide.",
    image: "/images/slide10.png",
  },
  {
    id: "11",
    title: "Machine Learning: The Science Behind Predictions",
    description:
      "Discover how machines learn and make predictions with ML algorithms, a core component of artificial intelligence. Machine Learning (ML) algorithms enable computers to analyze data, recognize patterns, and make decisions without explicit programming. Through techniques like supervised learning, unsupervised learning, and reinforcement learning, ML models can classify data, predict outcomes, and continuously improve their performance over time. Whether it's recommending products, detecting fraud, or driving autonomous vehicles, ML algorithms are at the heart of innovative solutions that transform industries by turning raw data into actionable insights.",
    image: "/images/slide11.png",
  },
  {
    id: "12",
    title: "Deep Learning: Unlocking Neural Networks",
    description:
      "Uncover the potential of neural networks with deep learning techniques, a subset of machine learning inspired by the human brain's structure. Deep learning models use multi-layered neural networks to process complex data, enabling machines to recognize patterns, make decisions, and perform tasks that were once thought to be exclusive to humans. With deep learning, applications like image recognition, natural language processing, and speech synthesis have seen remarkable advancements. These models improve as they are exposed to more data, leading to better accuracy and performance, unlocking new possibilities in fields like healthcare, finance, and entertainment.",
    image: "/images/slide12.png",
  },
  {
    id: "13",
    title: "Chatbots: Redefining User Interactions",
    description:
      "Explore how AI-powered chatbots enhance customer experiences by providing instant, personalized, and efficient support. Leveraging natural language processing (NLP), these chatbots understand and respond to customer queries in real-time, making interactions feel more human-like. Whether it's answering frequently asked questions, processing orders, or offering personalized recommendations, AI chatbots streamline customer service and reduce wait times. By handling routine inquiries, they allow human agents to focus on more complex tasks, improving overall efficiency. As chatbots continue to evolve, they can anticipate customer needs, creating seamless and satisfying interactions that drive loyalty and satisfaction.",
    image: "/images/slide13.png",
  },
  {
    id: "14",
    title: "Natural Language Processing: Understanding Human Language",
    description: 
    "Learn how AI processes and understands human language through Natural Language Processing (NLP), a field that enables machines to interpret, analyze, and generate human language. NLP combines linguistics and machine learning to help AI understand context, sentiment, and meaning in text or speech. With techniques like tokenization, part-of-speech tagging, and named entity recognition, AI can break down and understand complex sentences. NLP powers applications like chatbots, translation tools, sentiment analysis, and voice assistants, allowing machines to communicate effectively with humans, bridging the gap between human language and technology.",
    image: "/images/slide14.png",
  },
  {
    id: "15",
    title: "Computer Vision: Teaching Machines to See",
    description:
     "Explore how AI analyzes and interprets visual data through computer vision, a field of artificial intelligence that enables machines to understand and process images and videos. By using deep learning algorithms and neural networks, AI can detect objects, recognize faces, and even interpret scenes in real time. Techniques like image classification, object detection, and facial recognition allow AI to extract valuable information from visual data. This technology is widely used in applications such as autonomous vehicles, medical imaging, surveillance systems, and augmented reality, revolutionizing industries by enabling machines to 'see' and make decisions based on visual input.",
    image: "/images/slide15.png",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center ml-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-blue-600 text-center">

        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={800}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
      <Footer />
    </div>
  );
}
