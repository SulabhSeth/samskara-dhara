import type { ImageKey } from "./images";

export const site = {
  name: "Samskara Dhara",
  devanagari: "संस्कार धारा",
  tagline: "Sacred Traditions. Krishna Conscious Living. Spiritual Growth.",
  whatsapp: "+91 9818565310",
  whatsappLink: "https://wa.me/919818565310",
  email: "sukavakadas@gmail.com",
  location: "Delhi NCR (In-person by arrangement)",
  global: "Online sessions available worldwide",
  social: {
    // youtube: "#",
    instagram: "https://instagram.com/sukavakadas?psln=MnFzdzFob3ZtZGZy",
    // facebook: "#",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/seminars", label: "Seminars" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type IconName = "lotus" | "home" | "book" | "person";

export const offerings: { title: string; icon: IconName; href: string }[] = [
  { title: "Samskaras & Sacred Ceremonies", icon: "lotus", href: "/services/samskaras" },
  { title: "Home Deity Worship", icon: "home", href: "/services/home-deity-worship" },
  { title: "Family Life as an Ashram", icon: "home", href: "/services/family-life-ashram" },
  { title: "Spiritual Education & Courses", icon: "book", href: "/seminars" },
  { title: "Counselling & Guidance", icon: "person", href: "/services/counselling" },
];

export const services: {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: ImageKey;
}[] = [
  {
    id: "samskaras",
    title: "Samskaras & Sacred Ceremonies",
    description:
      "Guidance and performance of traditional samskaras — Garbhadhana, Simantonnayana, post-birth samskaras, Vivaha, Griha Pravesh, Bhumi Pujan and more.",
    cta: "Explore Services",
    href: "/services/samskaras",
    image: "service-samskaras",
  },
    {
    id: "home-deity-worship",
    title: "Home Deity Worship",
    description:
      "Workshops and guidance on establishing and performing deity worship at home — daily routines, offerings and etiquette, in both basic and elaborate forms.",
    cta: "Explore Workshops",
    href: "/services/home-deity-worship",
    image: "service-home-deity-worship",
  },
  {
    id: "family-life-ashram",
    title: "Family Life as an Ashram",
    description:
      "Guidance on grhastha culture and on harmonising family life with spiritual practice, so the home becomes a place of remembrance and service.",
    cta: "Explore Workshops",
    href: "/services/family-life-ashram",
    image: "service-family-life-ashram",
  },
  {
    id: "education",
    title: "Spiritual Education",
    description:
      "Seminars and courses on Bhagavad Gita and other Vaishnava literature.",
    cta: "Explore Courses",
    href: "/services/education",
    image: "service-education",
  },
  {
    id: "counselling",
    title: "Counselling & Guidance",
    description:
      "Personal guidance for your spiritual journey, family and life decisions.",
    cta: "Get In Touch",
    href: "/services/counselling",
    image: "service-counselling",
  },
];

export const samskaras = [
  "Vivaha (Wedding)",
  "Garbhadhana Samskar",
  "Pumsavana Samskar",
  "Simantonnayana (Baby Shower)",
  "Shoshayanti Homa(For safe delivery)",
  "Jatakarma (Birth Ceremony)",
  "Nishkramanam(Taking the child outside for the first time)",
  "Namakarana (Naming Ceremony)",
  "Annaprashana (First Solid Food)",
  "Karnavedha (Piercing the ears)",
  "Chudakarana (First Haircut)",
  "Vidyarambha (Beginning of Education) ",
  "Upanayana (Sacred Thread Ceremony)",
  "Griha Pravesh (House Warming)",
  "Bhumi Pujan (Land Blessing)",
  "Narsingh Yagya"
];

export const courses = [
  "Vaishnav Samskaras",
  "Deity Worship at Home (Basic & Elaborate)",
  "Entering the Grihastha Ashram",
  "Grhastha Ashram – Culture & Harmonising It",
  "Bhagavad Gita (Overview / Detailed Study)",
  "Srila Prabhupada Books (Selected Texts)",
];

export const upcomingSeminars = [
  {
    title: "Creating a Krishna-Conscious Home",
    date: "COMING SOON",
    mode: "Online",
    duration: "1.5 hours",
  },
];

export const posts = [
  {
    slug: "meaning-of-grihastha-ashram",
    title: "The Meaning of a Grihastha Ashram in Today's World",
    date: "",
    image: "blog-grihastha" as ImageKey,
    excerpt:
      "",
  },
  {
    slug: "why-home-deity-worship-matters",
    title: "Why Home Deity Worship Matters",
    date: "",
    image: "blog-deity-worship" as ImageKey,
    excerpt:
      "",
  },
  {
    slug: "key-teachings-bhagavad-gita",
    title: "Key Teachings from Bhagavad Gita for Daily Life",
    date: "",
    image: "blog-gita" as ImageKey,
    excerpt:
      "",
  },
  {
    slug: "understanding-the-samskaras",
    title: "Understanding the Samskaras",
    date: "",
    image: "blog-samskaras" as ImageKey,
    excerpt:
      "",
  },
];

export const donationMethods = [
  "UPI / Bank Transfer",
  "International Transfer",
  "Contact for Other Options",
];
