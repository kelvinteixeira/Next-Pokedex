const generations = [
  "1ª Geração",
  "2ª Geração",
  "3ª Geração",
  "4ª Geração",
  "5ª Geração",
  "6ª Geração",
  "7ª Geração",
  "8ª Geração",
  "9ª Geração",
];

export const Appbar = () => {
  return (
    <div className="flex mt-10  justify-evenly">
      {generations.map((generation) => (
        <button
          key={generation}
          className="border w-28 h-8 rounded-lg text-white text-sm bg-purple-950 hover:bg-purple-900 transition ease-in"
        >
          {generation}
        </button>
      ))}
    </div>
  );
};
