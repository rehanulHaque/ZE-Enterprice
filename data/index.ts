import {
  Gem,
  IndianRupee,
  Rss,
  UserRoundCog,
  Pin,
  User,
} from "lucide-react";

export const HomePageData = {
  mainLogo: { src: "/main_logo.jpg", alt: "Main Logo" },
  heroTitle:
    "Your Trusted Partner for Premium Bulk Products at Unbeatable Prices!",
  heroSubtitle:
    "Welcome to ZE Enterprise, your go-to source for premium bulk products and expert business services. We offer high-quality leather goods, mobile stands, jackets, cups, and more, along with digital marketing, event management, and consultancy services to help businesses grow. Whether you need bulk supplies or strategic solutions, we’ve got you covered!",
  whyChooseUs: [
    {
      id: 1,
      icon: Gem,
      title: "Premium Quality",
      desc: "All our products are crafted with care and top-quality materials.",
    },
    {
      id: 2,
      icon: IndianRupee,
      title: "Competitive Pricing",
      desc: "Get the best value with our bulk pricing.",
    },
    {
      id: 3,
      icon: Rss,
      title: "Wide Product & Service Range",
      desc: "From leather goods to marketing, events, and consultancy—we've got you covered!",
    },
    {
      id: 4,
      icon: UserRoundCog,
      title: "Business Growth Solutions",
      desc: "Our consultancy and marketing services drive business growth.",
    },
  ],
  details: [
    { id: 1, icon: User, text: "Md Khalid Hussain" },
    { id: 2, icon: Pin, text: "Sakri" },
    // { id: 3, icon: Phone, text: "+91 8603171076" },
    // { id: 4, icon: Wrench, text: "Chat on Whatsapp", wsLink: "/"},
  ],
  footerData: [
    {
      id: 1,
      title: "General Links",
      links: [
        { id: 1, title: "Home", href: "/" },
        { id: 2, title: "Products", href: "/products" },
        { id: 3, title: "Services", href: "/services" },
        { id: 4, title: "About Us", href: "/about" },
      ],
    },
    {
      id: 2,
      title: "Products",
      links: [
        { id: 1, title: "Bags", href: "/products" },
        { id: 2, title: "Cups", href: "/products" },
        { id: 4, title: "Calender", href: "/products" },
        { id: 5, title: "Pen Holder", href: "/products" },
      ],
    },
  ],
};
