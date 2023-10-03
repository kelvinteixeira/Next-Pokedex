import { useEffect, useReducer, useState } from "react";
import { POKEMON_API_URL } from "@/lib/axios";
import Image from "next/image";
import { PokeModal } from "./PokeModal";
import { AiOutlineClose } from "react-icons/ai";
import { PokeStatus } from "./PokeStatus";
import { capitalizeFirstLetter } from "@/utils/capitalize";
import { Spinner } from "./Spinner";
import "animate.css";

type PokemonApiResponse = {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  stats?: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
};

export const PokeCard = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonApiResponse>();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [pokemonsLoaded, setPokemonsLoaded] = useState(20);
  const [isLoadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonData = [];

      try {
        for (let i = 1; i <= pokemonsLoaded; i++) {
          const response = await POKEMON_API_URL.get(`/pokemon/${i}/`);
          const pokemon = response.data;
          pokemonData.push(pokemon);
        }

        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados dos Pokémon", error);
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [pokemonsLoaded]);

  async function loadingMorePokemons() {
    setLoadingMore(true);
    setPokemonsLoaded(pokemonsLoaded + 20);
    setTimeout(() => {
      setLoadingMore(false);
    }, 1500);
  }

  if (loading)
    return (
      <div className="flex flex-col justify-center">
        <Spinner />
      </div>
    );
  return (
    <>
      <div className=" mobile-pokecard-container animate__animated animate__rollIn flex flex-row flex-wrap justify-around mt-10 ml-10 p-8 m-10 rounded-2xl">
        {pokemons.map((pokemon: PokemonApiResponse) => (
          <div
            onClick={() => {
              setModalOpen(true);
              setSelectedPokemon(pokemon);
            }}
            key={pokemon.id}
            className="mobile-pokecard-content hover:animate-bounce rounded-md p-4 m-1 glass-effect w-52 flex flex-col cursor-pointer"
          >
            <h1 className="text-center font-extrabold  text-border text-purple-900">
              {capitalizeFirstLetter(pokemon.name)}
            </h1>
            <h1 className="text-center font-bold text-xs">nº {pokemon.id}</h1>
            <div className="flex justify-center">
              <Image
                priority
                className="p-2"
                width={120}
                height={120}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt="foto de pokemon"
              />
            </div>
            <div className="flex flex-row justify-evenly mb-3">
              {pokemon.types.map((items) => (
                <h1 key={items.slot} className="text-center font-bold text-xs">
                  {capitalizeFirstLetter(items.type.name)}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isLoadingMore ? (
        <Spinner />
      ) : (
        <div className="flex justify-center align-middle m-10 ">
          <button
            className="border w-32 h-10 rounded-lg text-purple-900 p-2  glass-effect hover:bg-purple-900 hover:text-white transition ease-in"
            onClick={loadingMorePokemons}
          >
            Carregar mais
          </button>
        </div>
      )}

      <PokeModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen((prevState) => !prevState)}
      >
        {selectedPokemon && (
          <div className="mobile-pokemodal-container">
            <div className="flex flex-row justify-end mobile-modal-close-icon-button ">
              <AiOutlineClose
                style={{ width: 30, height: 30 }}
                onClick={() => setModalOpen(false)}
                className="cursor-pointer mt-2"
              />
            </div>
            <h2 className="text-2xl text-purple-900 text-center text-border font-extrabold mb-4">
              {capitalizeFirstLetter(selectedPokemon.name)}
            </h2>
            <div className=" mobile-pokemodal-pokestatus flex flex-row justify-around m-4">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
                alt="Foto do pokemon"
                width={350}
                height={350}
              />

              <PokeStatus
                status={selectedPokemon.stats!.map(
                  (status) => status.base_stat
                )}
              />
            </div>
            <div className="flex justify-center ">
              <button
                onClick={() => setModalOpen(false)}
                className=" mb-2 bg-purple-900 text-white font-semibold py-2 px-4 rounded hover:bg-purple-900"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </PokeModal>
    </>
  );
};
