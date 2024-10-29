import React from "react";
import './Blog.css';

const BlogSection = () => {
  const blogs = [
    {
      image: "/images/bedtomat.jpg",
      day: "29",
      month: "October",
      year: "2024",
      title: "From Bed To Mat",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
        "Additional paragraph for scrolling effect. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat."
      ]
    },
    {
      image: "/images/innerpeace.jpg",
      day: "29",
      month: "October",
      year: "2024",
      title: "Inner Peace",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
        "Additional paragraph for scrolling effect. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat."
      ]
    },
    {
      image: "/images/yogaages.jpg",
      day: "29",
      month: "October",
      year: "2024",
      title: "Yoga Through Ages",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
        "Additional paragraph for scrolling effect. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat."
      ]
    }
  ];

  return (
    <div className="blog-section">
      <div className="header">
        <h2>Our Blogs</h2>
        <p>Recent Posts</p>
      </div>
      <div className="card-container">
        {blogs.map((blog, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={blog.image} alt="Blog" />
            </div>
            <div className="card-content">
              <div className="card-date">
                <span className="day">{blog.day}</span>
                <span className="month">{blog.month}</span>
                <span className="year">{blog.year}</span>
              </div>
              <h3>{blog.title}</h3>
              <div className="card-text">
                {blog.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
