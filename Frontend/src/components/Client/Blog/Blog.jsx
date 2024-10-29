import React from 'react';
import './bootstrap.min.css';
import './font-awesome.min.css';
import  './Style.css';
import './Lightboxmin.css';
// import './Plugins.css';
import './Responsive.css';

const BlogSection = () => {
  return (
    <section id="blog" className="gray_bg section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section_heading text-center">
              <h2>My <span>Blog</span></h2>
              <div className="sm_border"></div>
            </div>
          </div>

          <div className="blog_slide_area">
            {/* Blog Post 1 */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="images/bedtomat.jpg" className="img-responsive" alt="Bed to Mat" /></a>
                  </div>
                  <div className="blog-info">
                    <small><i className="fa fa-clock-o"></i> June 30, 2021</small>
                    <span> | Branding</span>
                    <a href="#"><h4>From Bed to Mat</h4></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
                    <a href="#" className="btn blog_btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="images/innerpeace.jpg" className="img-responsive" alt="Inner Peace" /></a>
                  </div>
                  <div className="blog-info">
                    <small><i className="fa fa-clock-o"></i> June 30, 2021</small>
                    <span> | Branding</span>
                    <a href="#"><h4>Inner Peace</h4></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
                    <a href="#" className="btn blog_btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-image">
                    <a href="#"><img src="images/yogaages.jpg" className="img-responsive" alt="Yoga Through Ages" /></a>
                  </div>
                  <div className="blog-info">
                    <small><i className="fa fa-clock-o"></i> June 30, 2021</small>
                    <span> | Branding</span>
                    <a href="#"><h4>Yoga Through Ages</h4></a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p>
                    <a href="#" className="btn blog_btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
