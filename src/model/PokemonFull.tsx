import PokemonSprites from "./PokemonSprites";

interface PokemonFull {
  id: string;
  name: string;
  sprites: PokemonSprites;
  stats: string[];
  types: string[];
  description?: string;
}

export default PokemonFull;
