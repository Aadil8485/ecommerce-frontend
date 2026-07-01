import {
  Smartphone,
  Laptop,
  Shirt,
  Watch,
  Sofa,
  BookOpen,
  Headphones,
  Gamepad2,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    name: "Mobiles",
    slug: "mobiles",
    icon: <Smartphone size={34} />,
    productCount: 120,
  },
  {
    id: 2,
    name: "Laptops",
    slug: "laptops",
    icon: <Laptop size={34} />,
    productCount: 85,
  },
  {
    id: 3,
    name: "Fashion",
    slug: "fashion",
    icon: <Shirt size={34} />,
    productCount: 300,
  },
  {
    id: 4,
    name: "Watches",
    slug: "watches",
    icon: <Watch size={34} />,
    productCount: 65,
  },
  {
    id: 5,
    name: "Furniture",
    slug: "furniture",
    icon: <Sofa size={34} />,
    productCount: 42,
  },
  {
    id: 6,
    name: "Books",
    slug: "books",
    icon: <BookOpen size={34} />,
    productCount: 210,
  },
  {
    id: 7,
    name: "Audio",
    slug: "audio",
    icon: <Headphones size={34} />,
    productCount: 140,
  },
  {
    id: 8,
    name: "Gaming",
    slug: "gaming",
    icon: <Gamepad2 size={34} />,
    productCount: 95,
  },
];