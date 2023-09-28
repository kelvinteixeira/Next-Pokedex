import Image from "next/image";
import Logo from "../assets/pokemon-logo.png";

export const PokemonLogo = () => {
  return (
    <div className="flex justify-center m-10 animate-pulse">
      <Image width={500} height={500} alt="Logo escrito pokemon" src={Logo} />
    </div>
  );
};
