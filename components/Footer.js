import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../utils/client";

const Footer = () => {
  const [openings,setOpenings] = useState({});
  useEffect(() => {
    (async () => {
      const openings = await client.fetch(`
      *[_type == "siteSettings"]{
        _id,
        opening_w,
        opening_ms,
        opening_s,
      }[0]
      `)
      setOpenings({...openings})
    })()
  },[]);
  return (
    <footer>
      <div className="h-[20px] bg-black-coffee"></div>
      <div className="bg-[url('../public/bg-footer-desktop.svg')]">
        <div className="md:flex md:justify-between md:pt-[50px] md:px-8">
          <div>
            <div className="relative h-32 w-64 md:h-36 md:w-72 ">
              <Link href="/">
                <Image src="/logo-light.svg" alt="logo" fill />
              </Link>
            </div>
            <div className="flex justify-start md:m-0 pl-8 md:justify-center w-full mt-[39px]">
              <div className="flex justify-between w-[160px]">
                <div className="text-center">
                  <Image
                    src="/logo-insta.svg"
                    alt="instagram-logo"
                    height="40"
                    width="40"
                  />
                  <p className="text-[14px] text-whiteish">Instagram</p>
                </div>
                <div className="text-center">
                  <Image
                    src="/logo-fb.svg"
                    alt="instagram-logo"
                    height="40"
                    width="40"
                  />
                  <p className="text-[14px] text-whiteish">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 ml-8 md:ml-0 md:flex md:flex-row-reverse w-[50%] md:justify-between md:mb-[50px] lg:mr-[100px]">
            <div className="text-whiteish mt-12 mr-[20px] lg:hidden">
              <div>
                <p className="mr-[25px] w-20">Tis - Fre</p>
                <p className="font-bold">11:00-18:00{/*openings.opening_w*/}</p>
              </div>
              <div>
                <p className="mt-4 mr-[25px]">Lör</p>
                <p className="font-bold">11:00-15:00{/*openings.opening_s*/}</p>
              </div>
              <div>
                <p className="mt-4 mr-[25px]">Sön - Mån</p>
                <p className="font-bold">Stängt{/*openings.opening_ms*/}</p>
              </div>
                  <p>Avvikande öppettider kan förekomma röda dagar och sommartid!</p>
            </div>
            <div className="text-whiteish mt-[50px] mr-[20px] hidden lg:flex">
              <div className="text-right mr-[20px]">
                <p className="mb-4">Tis - Fre</p>
                <p className="mb-4">Lör</p>
                <p className="mb-4">Sön</p>
                <p className="mb-[50px]">Mån</p>
              </div>
              <div>
                <p className="font-bold mb-4">11:00-18:00{/*openings.opening_w*/}</p>
                <p className="font-bold mb-4">11:00-15:00{/*openings.opening_s*/}</p>
                <p className="font-bold mb-4">Stängt{/*openings.opening_ms*/}</p>
                <p className="font-bold mb-4">Stängt{/*openings.opening_ms*/}</p>
  <p>Avvikande öppettider kan förekomma röda dagar och sommartid!</p>
              </div>
            </div>
            <div className="text-whiteish mt-[50px] lg:ml-[50px]">
              <ul>
                <li className="mb-4">
                  <Link href="/">Hem</Link>
                </li>
                <li className="mb-4">
                  <Link href="/aktuellt">Aktuellt</Link>
                </li>
                <li className="mb-4">
                  <Link href="/om">Om oss</Link>
                </li>
                <li className="mb-[50px]">
                  <Link href="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
