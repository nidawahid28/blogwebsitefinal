import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
  const posts = [
      {
        id: '1',
        title: 'HTML Basics: The Foundation of Every Website',
        description: 'Discover the power of HTML: where every great website begins.',
        date: '2024-11-28',
        imageUrl: "/images/slide1.png",
      },
      {
        id: '2',
        title: 'CSS Mastery: Styling the Web Beautifully',
        description: 'Bring your webpages to life with stunning styles using CSS.',
        date: '2024-11-29',
        imageUrl: '/images/slide2.png',
      },
      {
        id: '3',
        title: 'JavaScript Essentials: Adding Life to Webpages',
        description: 'Unlock interactivity and dynamic content with JavaScript.',
        date: '2024-11-30',
        imageUrl: '/images/slide3.png',
      },
      {
        id: '4',
        title: 'Responsive Design: Perfect Across All Devices',
        description: 'Master responsive design to make your websites look great on any device.',
        date: '2024-12-01',
        imageUrl: '/images/slide4.png',
      },
      {
        id: '5',
        title: 'React.js: Building Modern Web Applications',
        description: 'Build dynamic, component-based UIs with the power of React.js.',
        date: '2024-12-02',
        imageUrl: '/images/slide5.png',
      },
      {
        id: '6',
        title: 'Tailwind CSS: Rapid and Utility-First Styling',
        description: 'Style efficiently with Tailwind CSS: a utility-first CSS framework.',
        date: '2024-12-03',
        imageUrl: '/images/slide6.png',
      },
      {
        id: '7',
        title: 'Next.js: Enhancing Web Development with Performance',
        description: 'Explore server-side rendering and optimized performance with Next.js.',
        date: '2024-12-04',
        imageUrl: '/images/slide7.png',
      },
      {
        id: '8',
        title: 'TypeScript: Adding Type Safety to JavaScript',
        description: 'Add type safety and scalability to your JavaScript with TypeScript.',
        date: '2024-12-05',
        imageUrl: '/images/slide8.png',
      },
      {
        id: '9',
        title: 'Node.js: Revolutionizing Server-Side Development',
        description: 'Discover the power of server-side JavaScript with Node.js.',
        date: '2024-12-07',
        imageUrl: '/images/slide9.png',
      },
      {
        id: '10',
        title: 'Artificial Intelligence: Transforming the Future',
        description: 'AI: Revolutionizing industries and powering intelligent solutions.',
        date: '2024-12-08',
        imageUrl: '/images/slide10.png',
      },
      {
        id: '11',
        title: 'Machine Learning: The Science Behind Predictions',
        description: 'Discover how machines learn and make predictions with ML algorithms.',
        date: '2024-12-09',
        imageUrl: '/images/slide11.png',
      },
      {
        id: '12',
        title: 'Deep Learning: Unlocking Neural Networks',
        description: 'Uncover the potential of neural networks with deep learning techniques.',
        date: '2024-12-10',
        imageUrl: '/images/slide12.png',
      },
      {
        id: '13',
        title: 'Chatbots: Redefining User Interactions',
        description: 'Explore how AI-powered chatbots enhance customer experiences.',
        date: '2024-12-11',
        imageUrl: '/images/slide13.png',
      },
      {
        id: '14',
        title: 'Natural Language Processing: Understanding Human Language',
        description: 'Learn how AI processes and understands human language.',
        date: '2024-12-13',
        imageUrl: '/images/slide14.png',
      },
      {
        id: '15',
        title: 'Computer Vision: Teaching Machines to See',
        description: 'Explore how AI analyzes and interprets visual data.',
        date: '2024-12-14',
        imageUrl: '/images/slide15.png',
      },
    ];
  
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animation-color-change">Exploring the Future of Web Development and Artificial Intelligence</h1>
      <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground = {index % 2 === 0} /> 

            </div>
          </div>
        ))}

      </div> 

    </div>
  )
}
