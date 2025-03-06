import { CheckIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <section className="bg-[#FDF6ec] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                data-aos="fade-up-right"
                data-aos-delay="200"
                className="relative w-full h-[400px] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/about-1.png"
                  alt="Foto cachorro e gato"
                  fill
                  quality={100}
                  priority
                  className="object-cover hover:scale-110 duration-300"
                />
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-delay="200"
                className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-lg overflow-hidden"
              >
                <Image
                  src="/about-2.png"
                  alt="Foto gato"
                  fill
                  quality={100}
                  priority
                />
              </div>
            </div>

            <div
              data-aos="fade-up-left"
              data-aos-delay="200"
              className="space-y-6 mt-10"
            >
              <h2 className="text-4xl font-bold">SOBRE</h2>
              <p>
                Até que alguém tenha amado um animal, uma parte da alma
                permanece adormecida. Acreditamos nisso e acreditamos no fácil
                acesso a coisas que são boas para nossa mente, corpo e espírito.
                Com uma oferta inteligente, suporte excelente e um checkout
                seguro, você está em boas mãos.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-6 h-6 text-red-500" />
                  Aberto desde 2006.
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-6 h-6 text-red-500" />
                  Equipe com mais de 10 veterinários.
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-6 h-6 text-red-500" />
                  Qualidade é a nossa prioridade.
                </li>
              </ul>
              <div className="flex gap-2">
                <Link
                  href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações.`}
                  target="_blank"
                  className="bg-[#E84C3D] text-white flex items-center justify-center px-4 py-2 rounded-md w-fit gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Contato via WhatsApp
                </Link>

                <Link
                  href="#"
                  className="text-black flex items-center justify-center px-4 py-2 rounded-md w-fit gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Endereço da loja
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
