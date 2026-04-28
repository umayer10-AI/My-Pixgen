"use client";
import Image from "next/image";
import Link from "next/link";
import img from '../assets/image.png'
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const p = usePathname()

  return (
    <div className="border-b">
      <div className="w-[90%] mx-auto">
        <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={img}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen</h3>
        </div>

        <ul className="flex items-center gap-5 font-semibold">
          <li>
            <Link href={"/"} className={p==='/' ? 'border-b border-b-green-600 text-green-600':""}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"} className={p==='/all-photos' ? 'border-b border-b-green-600 text-green-600':""}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"} className={p==='/pricing' ? 'border-b border-b-green-600 text-green-600':""}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"} className={p==='/profile' ? 'border-b border-b-green-600 text-green-600':""}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-2">
            <Button>
              <Link href={"/signup"}>SignUp</Link>
            </Button>
            <Button>
              <Link href={"/signin"}>SignIn</Link>
            </Button>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;