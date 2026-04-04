import React from "react";
import Button from "../atom/button";

function Header() {
  return (
    <header className="text-center flex flex-col gap-4 my-4">
      <div className="text-2xl text-green-950 font-bold">
        Publikasikan Grup Whatsappmu
      </div>
      <div className="text-base font-sans text-balance">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam ex
        suscipit deleniti laudantium quos consequatur explicabo veniam officiis
        obcaecati delectus ipsum omnis, inventore quibusdam dolorum
        necessitatibus adipisci possimus tenetur.
      </div>
    </header>
  );
}

export default Header;
