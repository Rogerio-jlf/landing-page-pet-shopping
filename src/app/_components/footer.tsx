import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Royal Canin", logo: "/royal.png" },
  { name: "Golden", logo: "/golden.png" },
  { name: "Primier", logo: "/primier.png" },
  { name: "Formula Natural", logo: "/natural.png" },
  { name: "Whiskas", logo: "/whiskas.png" },
];

export const Footer = () => {
  return (
    <>
      <section className="bg-[#E84c3d] py-16 text-white">
        <div className="conatiner mx-auto px-4">
          <div className="border-b border-white/20 pb-8">
            <h4 className="text-3xl font-semibold mb-8 text-center">
              Marcas que trabalhamos
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg flex items-center justify-center"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    quality={100}
                    width={100}
                    height={50}
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
              <p className="mb-4">
                {" "}
                Cuidando do seu melhor amigo, com amor e dedicação.
              </p>
              <Link
                href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações.`}
                target="_blank"
                className="bg-green-500 px-4 py-2 rounded-md"
              >
                Contato via WhatsApp
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Contato</h3>
              <p>Rua dos Pets, 123</p>
              <p>Cidade, Estado - CEP: xx.xxx - xx</p>
              <p>Tel: (xx) xxxx - xxxx</p>
              <p>Email: contato@email.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
              <div className="flex gap-4">
                <Link href="#" target="_blank">
                  <FaFacebook className="w-8 h-8" />
                </Link>

                <Link href="#" target="_blank">
                  <FaInstagram className="w-8 h-8" />
                </Link>

                <Link href="#" target="_blank">
                  <FaTiktok className="w-8 h-8" />
                </Link>

                <Link href="#" target="_blank">
                  <FaYoutube className="w-8 h-8" />
                </Link>

                <Link href="#" target="_blank">
                  <FaTwitter className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};
