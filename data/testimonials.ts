export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "A melhor experiência gastronômica que já tive no interior do Rio. Cada prato conta uma história da floresta.",
    name: "Fulano Tal",
    role: "Crítica gastronômica, Paladar",
  },
  {
    id: "t2",
    quote:
      "Serviço impecável, ambiente sereno e uma cozinha que respeita o ingrediente acima de tudo.",
    name: "Fulano Tal",
    role: "Sommelier",
  },
  {
    id: "t3",
    quote:
      "Um restaurante que entende que luxo é tempo, técnica e origem — não excesso.",
    name: "Fulano Tal",
    role: "Guia Quatro Rodas",
  },
];
