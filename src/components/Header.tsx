// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
// import { useRouter } from "next/router";
// import { useCallback } from "react";

// import cookie from "@/utils/cookie";

import style from "@/styles/components/Header.module.scss";

import { Button } from "./ui/Button";

const Header = () => {
  // const { push: navigate } = useRouter();

  // const handleLogout = useCallback(() => {
  //   cookie.del('utoken');
  //   setTimeout(() => {
  //     navigate('/login');
  //   }, 300);
  // }, []);

  return (
    <div className={`w-full flex justify-between items-center ${style['header']}`}>
      <Button className="bg-transparent" size="icon"><img src="/icons/menu.webp" className="w-[14px] m-auto" /></Button>

      <img src="/images/text-logo.webp" alt="simply-music-logo" className="w-[72px] m-auto" />

      <Button className="bg-transparent" size="icon"><img src="/icons/search.webp" className="w-[14px] m-auto" /></Button>
    </div>
  )
}

export default Header;
