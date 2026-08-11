export interface GalleryItem {
  id: string;
  label: string;
  caption: string;
  tone: string;
  span: string; // classes de grid
  src?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g2",
    label: "Cozinha",
    caption: "A brasa como técnica central, não como efeito.",
    tone: "from-[#3a2015] via-[#9c5330] to-[#1f120b]",
    span: "md:col-span-1 md:row-span-2",
    src: "/images/cozinha.jpg",
  },
  {
    id: "g3",
    label: "Prato",
    caption: "Palmito, castanha, louro-do-mato.",
    tone: "from-[#39362f] via-[#6b665c] to-[#1c1a16]",
    span: "md:col-span-1 md:row-span-1",
    src: "/images/prato-palmito.jpg",
  },
  {
    id: "g4",
    label: "Adega",
    caption: "Curadoria de vinhos naturais brasileiros.",
    tone: "from-[#241d14] via-[#9c5330] to-[#14100b]",
    span: "md:col-span-1 md:row-span-2",
    src: "/images/adega.jpg",
  },
  {
    id: "g5",
    label: "Jardim",
    caption: "Horta própria, colhida na manhã do serviço.",
    tone: "from-[#22301f] via-[#445a43] to-[#111811]",
    span: "md:col-span-2 md:row-span-1",
    src: "/images/jardim.jpg",
  },
];
