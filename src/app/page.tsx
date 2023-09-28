"use client";
import { PokemonLogo } from "@/components/PokemonLogo";
import { Appbar } from "@/components/Appbar";
import { PokeCard } from "@/components/PokeCard/PokeCard";

export default function Home() {
  return (
    <>
      <PokemonLogo  />
      <Appbar />
      <PokeCard />
    </>
  );
}
