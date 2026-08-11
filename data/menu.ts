export interface MenuItem {
  course: string;
  name: string;
  description: string;
  price: string;
  ingredients: string[];
  tone: "moss" | "ember" | "stone";
  src?: string;
}

export const menuItems: MenuItem[] = [
  {
    course: "01",
    name: "Palmito pupunha, leite de castanha",
    description:
      "Palmito pupunha grelhado em brasa, creme de castanha-do-pará e óleo de folha de louro-do-mato.",
    price: "R$ 68",
    ingredients: ["pupunha", "castanha-do-pará", "louro-do-mato"],
    tone: "moss",
    src: "/images/prato-menu-01.jpg",
  },
  {
    course: "02",
    name: "Tucupi defumado, camarão da baía",
    description:
      "Caldo de tucupi defumado lentamente, camarão selado, jambu e farofa de banana verde.",
    price: "R$ 92",
    ingredients: ["tucupi", "camarão", "jambu", "banana verde"],
    tone: "ember",
    src: "/images/camarao.png",
  },
  {
    course: "03",
    name: "Cordeiro na folha de bananeira",
    description:
      "Paleta de cordeiro cozida por 14h em folha de bananeira, purê de mandioquinha e jus de café.",
    price: "R$ 138",
    ingredients: ["cordeiro", "mandioquinha", "café"],
    tone: "stone",
    src: "/images/tucupi.jpg",
  },
  {
    course: "04",
    name: "Priprioca, cacau e flor de sal",
    description:
      "Sobremesa de cacau 70% da região, espuma de priprioca e crocante de castanha caramelizada.",
    price: "R$ 54",
    ingredients: ["cacau", "priprioca", "castanha"],
    tone: "ember",
    src: "/images/sobremesa.jpg",
  },
];
