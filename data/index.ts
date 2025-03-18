import { Gem, IndianRupee, Rss, UserRoundCog, Phone, Pin, User,  } from "lucide-react";

export const HomePageData = {
  mainLogo: {src: "/main_logo.jpg", alt: "Main Logo"},
  heroTitle:
    "Your Trusted Partner for Premium Bulk Products at Unbeatable Prices!",
  heroSubtitle:
    "Welcome to ZE Enterprise – Your Go-To Source for Premium Bulk Products! We specialize in high-quality leather belts, mobile stands, jackets, cups, and more – perfect for retailers, wholesalers, and businesses.",
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
      title: "Wide Range of Products",
      desc: "From leather goods to essentials, we've got it all.",
    },
    {
      id: 4,
      icon: UserRoundCog,
      title: "Reliable Service",
      desc: "Fast shipping and reliable support",
    },
  ],
  details: [
    { id: 1, icon: User, text: "Md Khalid Hussain" },
    { id: 2, icon: Pin, text: "Sakri Address..." },
    { id: 3, icon: Phone, text: "+91 02315647895" },
    { id: 4, icon: Phone, text: "Chat on Whatsapp", wsLink: "/" },
  ],
  footerData: [
    {
      id: 1,
      title: "General Links",
      links: [
        { id: 1, title: "Home", href: "/" },
        { id: 2, title: "Products", href: "/products" },
        { id: 3, title: "Feature", href: "/features" },
        { id: 4, title: "About Us", href: "/about" },
        { id: 5, title: "Contact us", href: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Products",
      links: [
        { id: 1, title: "Bags", href: "/" },
        { id: 2, title: "Cups", href: "/" },
        { id: 3, title: "Belts", href: "/" },
        { id: 4, title: "Calender", href: "/" },
        { id: 5, title: "Pen Holder", href: "/" },
      ],
    },
  ],
};