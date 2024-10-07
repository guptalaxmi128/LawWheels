import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getBlog } from "../../actions/blog/blog";
import LayoutLoader from "../../components/layout/HeroLoader";

const Blog = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const mainArticle = records?.length ? records[0] : null; // Check if there are records
  const smallArticles = records?.length ? records.slice(1, 5) : [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await dispatch(getBlog());
        if (res.success) {
          setRecords(res.data || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(error?.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  // console.log(records)

  if (loading) {
    return <LayoutLoader />;
  }

  const cardsData = [
    {
      category: { name: "Industrial", color: "bg-yellow-500" },
      title: "Lenovo’s smarter devices stoke professional passions",
      author: "Foulcher Nathanil",
      date: "May 20, 2021",
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    },
    {
      category: { name: "Tools", color: "bg-pink-500" },
      title: "How AI and Teams are benefitting the littlest of...",
      author: "Falconar Agnes",
      date: "May 20, 2021",
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    },
    {
      category: { name: "Tools", color: "bg-purple-500" },
      title: "DIYer and TV host Trisha Hershberger’s journey...",
      author: "Falconar Agnes",
      date: "May 20, 2021",
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    },
    {
      category: { name: "Automotive", color: "bg-red-500" },
      title: "New tools for Black pregnant and postpartum...",
      author: "Tousy Vita",
      date: "May 20, 2021",
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="py-8 mx-8 rounded-lg bg-gray-100">
        <h2 className="text-3xl font-bold text-center font-space-grotesk">
          Articles
        </h2>
        <p className="text-center text-gray-500 mb-8 font-space-grotesk">
          Over 218 articles
        </p>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {records.slice(0, 4).map((card, index) => {
            const category =
              card?.blogCategory_juction?.length > 0
                ? card?.blogCategory_juction[0]?.categoryName
                : null; // Set to null if no category is present
            return <Card key={index} {...card} categoryName={category} />;
          })}
        </div>
      </div>
      <ArticleCard mainArticle={mainArticle} smallArticles={smallArticles} />
     <BlogList blogs={records} />
      <Footer />
    </div>
  );
};

const formatPublishDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

// const Card = ({ category, title, author, date, image, avatar }) => {
const Card = ({ title, images, publishDate, categoryName, slug }) => {
  const featuredImage = images?.find(
    (image) => image.fieldName === "FeaturedPic"
  );
  const image = featuredImage?.url;
  return (
    <div className="md:w-1/2 lg:w-1/4 mb-10 w-full">
      <Link
        to={`/blog/${slug}`}
        className="relative grid h-[20rem] max-w-lg flex-col items-end justify-center overflow-hidden rounded-lg bg-white shadow-lg"
      >
        {/* <!-- Background Image with Gradient Overlay --> */}
        {/* <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"> */}
        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent">
          {" "}
          <img src={image} alt={title} />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>

        {/* <!-- Card Content with White Background --> */}
        <div className="relative bg-white p-2 rounded-lg shadow-md mx-2 my-2 z-10">
          <div>
            {categoryName && (
              <span
                // className={`text-xs font-semibold font-space-grotesk py-1 px-2 rounded-full text-white ${category.color}`}
                className={`text-xs font-medium font-space-grotesk py-1 px-2 rounded-full  text-green-700 bg-green-200`}
              >
                {categoryName}
              </span>
            )}

            <h3 className="font-bold text-sm mt-2 font-space-grotesk">
              {title.length > 50 ? `${title.substring(0, 50)}...` : title}{" "}
            </h3>
            <div className="flex items-center mt-2">
              {/* <img src={avatar} alt={author} className="w-8 h-8 rounded-full" /> */}
              <p
                className="text-xs font-space-grotesk"
                style={{ lineHeight: "0.4rem" }}
              >
                {/* {author} */}
                Date :
              </p>
              <div className="ml-2">
                <p
                  className="text-xs text-gray-500 font-space-grotesk"
                  style={{ lineHeight: "0.4rem" }}
                >
                  {formatPublishDate(publishDate)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// const ArticleCard = () => {
//   return (
//     <div className="container mx-auto p-4 mb-8">
//       {/* Main Grid */}
//       <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-8">
//         {/* Left Side Large Card */}

//         <div className="overflow-hidden ">
//           <img
//             src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
//             alt="Main article"
//             className="w-full h-64 object-cover rounded-lg"
//           />
//           <div className="p-6">
//             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4 font-space-grotesk">
//               Electronics
//             </span>
//             <h2 className="text-sm font-semibold mb-4 font-space-grotesk">
//               Microsoft announces a five-year commitment to create bigger
//               opportunities for people with disabilities
//             </h2>
//             <p className="text-gray-600 mb-4 font-space-grotesk text-xs">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
//               beatae quasi et, reprehenderit alias veritatis nostrum iste sed
//               laboriosam eveniet possimus.
//             </p>
//             <div className="flex items-center">
//               <img
//                 className="w-10 h-10 rounded-full object-cover"
//                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
//                 alt="Author"
//               />
//               <div className="ml-3">
//                 <p
//                   className="text-gray-900 text-xs"
//                   style={{ lineHeight: "0.4rem" }}
//                 >
//                   Pillifant Vern
//                 </p>
//                 <p
//                   className="text-gray-500 text-xs"
//                   style={{ lineHeight: "0.4rem" }}
//                 >
//                   May 20, 2021
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-between mt-6">
//               <div className="flex items-center">
//                 <span className="mr-2 text-gray-600">
//                   <i className="fas fa-heart"></i> 34
//                 </span>
//                 <span className="text-gray-600">
//                   <i className="fas fa-comment"></i> 110
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Smaller Cards */}
//         <div className="space-y-8">
//           {/* Card 1 */}
//           <div className="max-w-4xl mx-auto">
//             {/* Card Container */}
//             <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
//               {/* Left Section: Text and Details */}
//               <div className="flex flex-col justify-between p-3 w-1/2">
//                 <div className="mb-2">
//                   <span className="inline-block bg-red-100 text-red-600 font-space-grotesk text-xs px-2 py-1 rounded-full mb-2">
//                     Electronics
//                   </span>
//                   <h3 className="text-xs font-semibold mb-2 font-space-grotesk">
//                     360-degree video: How Microsoft deployed a datacenter...
//                   </h3>
//                   <p className="text-gray-600 text-xs mb-4 font-space-grotesk">
//                     Pillfant Vern • May 20, 2021
//                   </p>
//                 </div>

//                 {/* Footer: Icons */}
//                 <div className="flex items-center">
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M20 6l-8.586 8.586a2 2 0 01-2.828 0L4 10"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">34</span>
//                   </div>
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8 10h8M8 14h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">110</span>
//                   </div>
//                   <div className="flex">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 5v14l7-7 7 7V5H5z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section: Image */}
//               <div className="w-1/2 p-3">
//                 <img
//                   className="h-full w-full object-cover rounded-lg"
//                   src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                   alt="Workout"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="max-w-4xl mx-auto">
//             {/* Card Container */}
//             <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
//               {/* Left Section: Text and Details */}
//               <div className="flex flex-col justify-between p-3 w-1/2">
//                 <div className="mb-2">
//                   <span className="inline-block bg-red-100 text-red-600 font-space-grotesk text-xs px-2 py-1 rounded-full mb-2">
//                     Electronics
//                   </span>
//                   <h3 className="text-xs font-semibold mb-2 font-space-grotesk">
//                     360-degree video: How Microsoft deployed a datacenter...
//                   </h3>
//                   <p className="text-gray-600 text-xs mb-4 font-space-grotesk">
//                     Pillfant Vern • May 20, 2021
//                   </p>
//                 </div>

//                 {/* Footer: Icons */}
//                 <div className="flex items-center">
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M20 6l-8.586 8.586a2 2 0 01-2.828 0L4 10"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">34</span>
//                   </div>
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8 10h8M8 14h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">110</span>
//                   </div>
//                   <div className="flex">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 5v14l7-7 7 7V5H5z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section: Image */}
//               <div className="w-1/2 p-3">
//                 <img
//                   className="h-full w-full object-cover rounded-lg"
//                   src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                   alt="Workout"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="max-w-4xl mx-auto">
//             {/* Card Container */}
//             <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
//               {/* Left Section: Text and Details */}
//               <div className="flex flex-col justify-between p-3 w-1/2">
//                 <div className="mb-2">
//                   <span className="inline-block bg-red-100 text-red-600 font-space-grotesk text-xs px-2 py-1 rounded-full mb-2">
//                     Electronics
//                   </span>
//                   <h3 className="text-xs font-semibold mb-2 font-space-grotesk">
//                     360-degree video: How Microsoft deployed a datacenter...
//                   </h3>
//                   <p className="text-gray-600 text-xs mb-4 font-space-grotesk">
//                     Pillfant Vern • May 20, 2021
//                   </p>
//                 </div>

//                 {/* Footer: Icons */}
//                 <div className="flex items-center">
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M20 6l-8.586 8.586a2 2 0 01-2.828 0L4 10"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">34</span>
//                   </div>
//                   <div className="flex mr-4">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8 10h8M8 14h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
//                       />
//                     </svg>
//                     <span className="ml-1 text-gray-600 text-sm">110</span>
//                   </div>
//                   <div className="flex">
//                     <svg
//                       className="h-5 w-5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 5v14l7-7 7 7V5H5z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section: Image */}
//               <div className="w-1/2 p-3">
//                 <img
//                   className="h-full w-full object-cover rounded-lg"
//                   src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                   alt="Workout"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const SmallCard = ({
  title,
  images,
  publishDate,
  blogCategory_juction,
}) => {
  const featuredImage = images.find(
    (image) => image.fieldName === "FeaturedPic"
  );
  const image = featuredImage?.url;
  const category =
    blogCategory_juction?.length > 0
      ? blogCategory_juction[0]?.categoryName
      : null; // Set to null if no category is present

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Text Section (Centered) */}
    <div className="flex flex-col xl:w-3/4 sm:w-1/2 p-3">
      <div>
        {category && (
          <span className="inline-block bg-red-100 text-red-600 font-space-grotesk text-xs px-2 py-1 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className="text-xs sm:text-xs xl:text-sm font-semibold mb-2 font-space-grotesk">
          {title}
        </h3>
        <p className="text-gray-600 text-xs font-space-grotesk">
          Date: {formatPublishDate(publishDate)}
        </p>
      </div>
    </div>
  
    {/* Image Section (Centered) */}
    <div className="flex justify-center items-center xl:w-1/4 sm:w-1/2 p-3 xl:p-3 sm:p-0">
      <img
        className="max-h-40 sm:max-h-48 w-full object-cover rounded-lg"
        src={image}
        alt={title}
      />
    </div>
  </div>
  
  );
};

const ArticleCard = ({ mainArticle, smallArticles }) => {
  const { images, title, content, publishDate, status, blogCategory_juction } =
    mainArticle || {};
  const featuredImage = images?.find(
    (image) => image.fieldName === "FeaturedPic"
  );
  const image = featuredImage?.url;
  const truncatedContent =
    content?.length > 215 ? `${content?.substring(0, 215)}...` : content;

  const category =
    blogCategory_juction?.length > 0
      ? blogCategory_juction[0]?.categoryName
      : null; // Set to null if no category is present
  return (
    <div className="container mx-auto p-4 mb-8">
      {/* Main Grid */}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Left Side Large Card */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt="Main article"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="p-6">
            {category && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4 font-space-grotesk">
                {category}
              </span>
            )}
            <h2 className="text-sm font-semibold mb-4 font-space-grotesk">
              {title}
            </h2>
            <p
              className="text-gray-600 mb-4 font-space-grotesk text-xs"
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            />
            <div className="flex items-center">
              {/* <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                alt="Author"
              /> */}
              <div className="ml-3">
                {/* <p
                  className="text-gray-900 text-xs"
                  style={{ lineHeight: "0.4rem" }}
                >
                  Pillifant Vern
                </p> */}
                <p
                  className="text-gray-500 text-xs font-space-grotesk"
                  style={{ lineHeight: "0.4rem" }}
                >
                 Date: {formatPublishDate(publishDate)}
                </p>
              </div>
            </div>
            {/* <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">
                  <i className="fas fa-heart"></i> 34
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-comment"></i> 110
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Side Smaller Cards */}
        <div className="space-y-8">
          {smallArticles?.map((article, index) => (
            <SmallCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ blogs }) => {
  return (
    <div className="container mx-auto p-4 mb-8">
    <div className="grid xl:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map((blog, index) => (
        <SmallCard
          key={index}
          title={blog.title}
          images={blog.images}
          status={blog.status}
          publishDate={blog.publishDate}
          blogCategory_juction={blog.blogCategory_juction}
        />
      ))}
    </div>
    </div>
  );
};

export default Blog;
