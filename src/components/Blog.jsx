import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setBlogData(data.blog));
  }, []);

  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;