import Image from 'next/image';
import Link from 'next/link';

import SocialNetwork from '@/data/SocialNetwork.json';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-light">
      <div className="relative min-h-min w-full py-20">
        <Image
          src="/images/background/footer.svg"
          className="object-cover"
          alt="Image for footer"
          fill
        />
        <div className="container m-auto">
          <div className="relative z-10 flex flex-wrap ">
            <div className="flex-1 justify-start">
              <div className="flex-1">
                <Image
                  src="/images/logos/logo_footer-dark.svg"
                  width={400}
                  height={200}
                  alt="Logo Creativos RD"
                />
              </div>
              <div className="mt-10 font-gotham font-light">
                <ul className="list-image-[url(/images/icons/location.png)]">
                  <li className="my-1">
                    2025 Guadalupe Street Suite 260 Austin Texas, 78705, USA
                  </li>
                  <li className="my-1">
                    Central Interlomas, Blvd. Palmas Hills 1, Piso 15, Oficina
                    109, Valle de las Palmas, 52764, Huixquilucan, CDMX.
                  </li>
                  <li className="my-1">
                    Torre Mil500 Av. de las Américas 1254, piso 19, Oficina 113
                    Country Club, 44610, Guadalajara, Jalisco, México
                  </li>
                </ul>
                <p className="mt-5">
                  Copyrigth © Social Media RD, LLC {new Date().getFullYear()}{' '}
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="flex-[2 2 0%]">
              <div className="flex flex-wrap justify-items-end">
                {SocialNetwork.map((social) => {
                  return (
                    <div key={social.name} className="ml-5 flex-1">
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={social.icon}
                          width={50}
                          height={50}
                          alt={`Logo ${social.name}`}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
