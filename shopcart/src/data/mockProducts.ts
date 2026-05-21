export interface Product {
  id: string;
  name: string;
  series: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  scale: string;
  material: string;
  size: string;
  description: string;
  inStock: boolean;
  category: string;
  colors?: string[]; // for variants like the airpods
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Monkey D. Luffy - Gear 5",
    series: "One Piece",
    price: 2899,
    oldPrice: 3599,
    image: "/images/luffy_gear5_1779161050741.png",
    badge: "-20%",
    scale: "1/8 Scale",
    material: "PVC",
    size: "20cm",
    description: "Experience the peak of Luffy's power with this highly detailed Gear 5 figure.",
    inStock: true,
    category: "Action Figures",
  },
  {
    id: "2",
    name: "Naruto Uzumaki - Sage Mode",
    series: "Naruto",
    price: 4199,
    image: "/images/naruto_sage_1779161069637.png",
    badge: "NEW",
    scale: "1/7 Scale",
    material: "PVC",
    size: "24cm",
    description: "Naruto in his iconic Sage Mode outfit, complete with scroll.",
    inStock: true,
    category: "Statues/PVC",
  },
  {
    id: "3",
    name: "Nezuko Kamado - Demon Form",
    series: "Demon Slayer",
    price: 3499,
    image: "/images/nezuko_demon_1779161090026.png",
    badge: "HOT",
    scale: "1/8 Scale",
    material: "PVC",
    size: "18cm",
    description: "Nezuko unleashing her full demon potential.",
    inStock: true,
    category: "Statues/PVC",
  },
  {
    id: "4",
    name: "Goku - Ultra Instinct",
    series: "Dragon Ball Z",
    price: 8999,
    image: "/images/goku_ui_1779161109260.png",
    scale: "1/4 Scale",
    material: "PVC",
    size: "32cm",
    description: "A massive 1/4 scale figure of Goku mastering Ultra Instinct.",
    inStock: true,
    category: "Statues/PVC",
  },
  {
    id: "5",
    name: "Gojo Satoru - Blindfolded",
    series: "Jujutsu Kaisen",
    price: 4749,
    oldPrice: 5599,
    image: "/images/gojo_satoru_1779161136685.png",
    badge: "-15%",
    scale: "1/7 Scale",
    material: "PVC",
    size: "22cm",
    description: "The strongest jujutsu sorcerer with his signature blindfold.",
    inStock: true,
    category: "Action Figures",
  },
  {
    id: "6",
    name: "Eren Yeager - Founding Titan",
    series: "Attack on Titan",
    price: 5299,
    image: "/images/eren_yeager_1779161155761.png",
    badge: "NEW",
    scale: "1/8 Scale",
    material: "PVC",
    size: "26cm",
    description: "Eren ready for battle with his ODM gear.",
    inStock: true,
    category: "Action Figures",
  },
  {
    id: "7",
    name: "Izuku Midoriya - Full Cowl",
    series: "My Hero Academia",
    price: 3199,
    image: "/images/izuku_midoriya_1779161169887.png",
    scale: "1/8 Scale",
    material: "PVC",
    size: "20cm",
    description: "Deku using One For All: Full Cowl.",
    inStock: true,
    category: "Statues/PVC",
  },
  {
    id: "8",
    name: "Roronoa Zoro - Wado Ichimonji",
    series: "One Piece",
    price: 1499,
    oldPrice: 1999,
    image: "/images/zoro_wado_1779161184154.png",
    badge: "-25%",
    scale: "Chibi/SD",
    material: "PVC",
    size: "10cm",
    description: "An adorable chibi version of Zoro with his swords.",
    inStock: true,
    category: "Nendoroids",
  },
  {
    id: "9",
    name: "Rengoku Kyojuro - Flame Hashira",
    series: "Demon Slayer",
    price: 4899,
    image: "/images/rengoku_flame_1779161199200.png",
    badge: "PRE-ORDER",
    scale: "1/7 Scale",
    material: "PVC",
    size: "25cm",
    description: "Set your heart ablaze with this dynamic Rengoku figure.",
    inStock: false,
    category: "Statues/PVC",
  }
];

export const getFeaturedProduct = () => mockProducts.find(p => p.id === "1"); 

export const getProductById = (id: string) => mockProducts.find(p => p.id === id);
