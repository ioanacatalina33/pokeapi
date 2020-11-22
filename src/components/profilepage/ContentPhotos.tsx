import React from "react";
import {PokemonSprites} from "../../store/pokemondata/types";
import CategoryTitle from "../common/CategoryTitle";

const ContentPhotos = ({photos}: {photos: PokemonSprites}) => {
  let photoType: keyof typeof photos;
  let imgElements = [];
  for (photoType in photos) {
    if (photos[photoType])
      imgElements.push(
        <img
          src={photos[photoType]}
          alt={photoType}
          key={photoType}
          style={{width: "110px"}}
        />
      );
  }

  return (
    <div style={{textAlign: "center"}}>
      <CategoryTitle titleText="More photos:" />
      {imgElements}
    </div>
  );
};

export default React.memo(ContentPhotos);
