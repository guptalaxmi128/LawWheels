import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/",
  baseURL:'https://law-wheels.onrender.com/',

});

api.interceptors.request.use(
  (req) => {
    const userProfile = JSON.parse(localStorage.getItem("profile"));

    if (userProfile) {
      const authToken = userProfile.data || userProfile.authToken;

      if (authToken) {
        req.headers.Authorization = `Bearer ${authToken}`;
      }
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const addHeDetails = (userInfo) => api.post(`api/user/createHeDetailsByWebSite`, userInfo);
export const addSheDetails = (userInfo) => api.post(`api/user/createSheDetailsByWebSite`, userInfo);
export const addRequiredDetails = ({id,...userInfo}) => {
    return api.post(`api/user/createRequiredDetailsByWebSite/${id}`,userInfo);
  };
export const getDivorceDetails= () => api.get(`api/user/mutualDivorceDetail`);
export const addContact = (contactInfo) => api.post(`api/user/contactUsForm`, contactInfo);
export const verifyOtp = (userInfo) => api.post(`api/user/leadOtpVerification`, userInfo);
export const resendOtp = ({id,...userInfo}) => api.post(`api/user/reSendLeadOtp/${id}`, userInfo);
export const addReachOut = (reachOutInfo) => api.post(`api/user/reachOut`, reachOutInfo);
export const getHeart= () => api.get(`api/user/heartAPI`);
export const getBlog= () => api.get(`api/user/blog`);
export const getBlogBySlug= (slug) => api.get(`api/user/blog/${slug}`);
export const addMDPForm = (userInfo) => api.post(`api/user/mDPForm`, userInfo);