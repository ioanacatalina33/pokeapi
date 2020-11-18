interface Pokemon {
  id: string;
  name: string;
  sprites: {
    front_default: string;
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_shiny: string;
  };
  stats: [];
  types: [];
  description?: string;
}

export default Pokemon;
