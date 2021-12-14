import img1 from "../../images/1.svg";
import img2 from "../../images/3.svg";
import img3 from "../../images/6.svg";
export const homeObjOne = {
  id: "about",
  to: "/SignIn",
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: "World Wide camping",
  headline: "A social network for nature lovers",
  description:
    "We’re on a mission to make finding the perfect campground easy! You can share your experience with us or review some others.",
  buttonLabel: "Get started",
  imgStart: false,
  img: img1,
  alt: "tent",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  to: "/SignIn",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Connect with our Community",
  headline: "Login to your account at any time",
  description:
    "Campo allows you to find the most beautiful places to enjoy nature. Share your experience with others so they can find their place to rest in nature, too.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: img2,
  alt: "Piggybanck",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  to: "/SignIn",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Share your experience",
  headline: "Creating an account is extremely easy",
  description:
    "Get access to our exclusive app that allows you to find inspiration for great nature holiday in Europe, in the mountains or in a seaside. Discover the most beautiful places for nature lovers",
  buttonLabel: "Start Now",
  imgStart: true,
  img: img3,
  alt: "car",
  dark: false,
  primary: false,
  darkText: true,
};
