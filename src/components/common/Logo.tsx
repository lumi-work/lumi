import React from "react";
import Image from "next/image";

import LumiLogo from "../../../public/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={LumiLogo} width={105} height={105} alt="lumilogo" priority />
      </Link>
    </div>
  );
}

export default Logo;
