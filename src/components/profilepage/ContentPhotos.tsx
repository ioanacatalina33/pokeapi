import React, {FunctionComponent} from "react";
import {PokemonSprites} from "../../store/pokemondata/types";
import CategoryTitle from "../common/CategoryTitle";
import FadeInImage from "../common/FadeInImage";

const ContentPhotos: FunctionComponent<{
  photos: PokemonSprites;
}> = ({photos}: {photos: PokemonSprites}) => {
  let photoType: keyof typeof photos;
  const imgElements = [];
  for (photoType in photos) {
    if (photos[photoType])
      imgElements.push(
        <FadeInImage
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
