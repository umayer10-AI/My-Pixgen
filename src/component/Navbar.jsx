"use client";
import Image from "next/image";
import Link from "next/link";
import img from '../assets/image.png'
import { Avatar, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const p = usePathname()
    const { data: session } = authClient.useSession()
    const user = session?.user

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
            <Link href={"/"}>{p==='/' ? <Button className='bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'>Home</Button>: <button className="cursor-pointer">Home</button>}</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>{p==='/all-photos' ? <Button className='bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'>All Photos</Button>: <button className="cursor-pointer">All Photos</button>}</Link>
          </li>
          <li>
            <Link href={"/pricing"}>{p==='/pricing' ? <Button className='bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'>Pricing</Button>: <button className="cursor-pointer">Pricing</button>}</Link>
          </li>
          <li>
            <Link href={"/profile"}>{p==='/profile' ? <Button className='bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'>Profile</Button>: <button className="cursor-pointer">Profile</button>}</Link>
          </li>
        </ul>

        <div className="flex gap-4">
            
          {
                user? 
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                  <Button size="sm" onClick={async () => await authClient.signOut()} variant="danger">Sign Out</Button>
                </div> 
                : 
                <ul className="flex items-center gap-2">
                <Button size="sm">
                <Link href={"/signup"}>SignUp</Link>
                </Button>
                <Button size="sm">
                <Link href={"/signin"}>SignIn</Link>
                </Button>
          </ul>
          }
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;