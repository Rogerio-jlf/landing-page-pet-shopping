import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <section className="bg-[#E84C3D] text-white relative overflow-hidden">
        <div>
          <Image
            src="/hero-dog.webp"
            alt="Hero Dog"
            fill
            sizes="100vw"
            quality={100}
            priority
            className="object-cover opacity-60 lg:hidden"
          />
          <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
        </div>
        <div className="container mx-auto px-4 pt-16 pb-16 md:pb-0 relative">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1
                data-aos="fade-down"
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              >
                Seu pet merece cuidado, carinho e atenção especial.
              </h1>

              <p data-aos="fade-right">
                Oferecemos os melhores serviços para garantir o bem-estar e a
                felicidade do seu amigo de quatro patas.
              </p>

              <div>
                <Link
                  href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações.`}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Contato via WhatsApp
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-sm mb-4">
                  <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                  de desconto na primeira compra.
                </p>

                <div className="flex mt-4">
                  <div className="w-32 hidden lg:block">
                    <Image
                      src="/cat-hero.png"
                      alt="Cat Hero"
                      quality={100}
                      width={200}
                      height={200}
                      className="object-fill"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block h-full relative">
              <Image
                src="/hero-dog.webp"
                alt="Hero Dog"
                fill
                sizes="(max-width: 768px) 0vw, 50vw"
                quality={100}
                priority
                className="object-contain"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
