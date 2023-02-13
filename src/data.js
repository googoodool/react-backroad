import tour1 from "../src/images/tour-1.jpeg";
import tour2 from "../src/images/tour-2.jpeg";
import tour3 from "../src/images/tour-3.jpeg";
import tour4 from "../src/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", name: "home" },
  { id: 2, href: "#about", name: "about" },
  { id: 3, href: "#services", name: "services" },
  { id: 4, href: "#tours", name: "tours" },
];

export const socialLink = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tourCard = [
  {
    id: 1,
    date: "august 26th, 2020",
    img: tour1,
    title: "Tibet Adventure",
    lor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    dateData: "6",
    price: "2100",
  },
  {
    id: 2,
    date: "october 15th, 2021",
    img: tour2,
    title: "best of Java",
    lor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    dateData: "11",
    price: "1400",
  },
  {
    id: 3,
    date: "January 11th, 2022",
    img: tour3,
    title: "best of Python",
    lor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    dateData: "22",
    price: "1850",
  },
  {
    id: 4,
    date: "January 11th, 2022",
    img: tour4,
    title: "best of Python",
    lor: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    dateData: "22",
    price: "1850",
  },
];
