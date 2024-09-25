import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getBlogBySlug } from '../../actions/blog/blog';
import Loader from '../../shared/Loader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ParticularBlog = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await dispatch(getBlogBySlug(slug));
          if (res.success) {
            setBlog(res.data);
            setImageUrl(res.images?.find(
                (img) => img.fieldName === "FeaturedPic"
            )?.url);
          }
        } catch (error) {
          toast.error(error?.response?.data?.message || "Something went wrong!");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [dispatch, slug]);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      );
    }

    if (!blog) {
      return <p>Blog not found</p>;
    }

    return (
      <div>
        <Navbar />
        <Helmet>
          <title>{blog.title || "LawWheels Blog"}</title>
          {/* <meta name="description" content={blog.excerpt || "Blog description"} /> */}

          {/* Open Graph meta tags for social media previews */}
          <meta property="og:title" content={blog.title || "LawWheels Blog"} />
          {/* <meta property="og:description" content={blog.excerpt || "Blog description"} /> */}
          <meta property="og:image" content={imageUrl || "https://lawwheels.com/default-image.jpg"} />
          <meta property="og:url" content={`https://lawwheels.com/blog/${slug}`} />
          {/* <meta property="og:type" content="article" /> */}

          {/* Twitter meta tags */}
          <meta name="twitter:title" content={blog.title || "LawWheels Blog"} />
          {/* <meta name="twitter:description" content={blog.excerpt || "Blog description"} /> */}
          <meta name="twitter:image" content={imageUrl || "https://lawwheels.com/default-image.jpg"} />
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
        </Helmet>

        <h1>{blog.title}</h1>
        {imageUrl && <img src={imageUrl} alt={blog.title} />}
       
        <div
          className="border border-gray-300 p-4 rounded-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
     
        <Footer />
      </div>
    );
};

export default ParticularBlog;
