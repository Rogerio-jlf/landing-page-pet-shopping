"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
    author: "Mariana Souza",
    role: "Tutora da Luna (Golden Retriever)",
    image: "/tutor2.png",
  },
  {
    content:
      "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
    author: "Rafael",
    role: "Tutor do Thor (Bulldog Francês)",
    image: "/tutor1.png",
  },
  {
    content:
      "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
    author: "Camila fernandes",
    role: "Tutora da Mel e do Max",
    image: "/tutor2.png",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <>
      <section className="bg-[#FFD449] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center font-bold mb-12">
            Depoimentos dos nossos clientes
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            quality={100}
                            sizes="96px"
                            className="object-cover rounded-full"
                          />
                        </div>
                        <p className="text-gray-200">{testimonial.content}</p>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="bg-white flex items-center justify-center rounded-full shadow-lg absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 w-10 h-10 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 cursor-pointer" />
            </button>

            <button
              onClick={scrollNext}
              className="bg-white flex items-center justify-center rounded-full shadow-lg absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 w-10 h-10 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 cursor-pointer" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
