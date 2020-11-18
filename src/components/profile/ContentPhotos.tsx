import React from "react";
import styled from "styled-components";
import PokemonSprites from "../../model/PokemonSprites";
import {
  addDefaultTransition,
  addFlexProperties,
  addTransform,
  colors,
  device,
} from "../../utils/CssUtils";
import CategoryTitle from "../common/CategoryTitle";

const ContentPhotos = ({photos}: {photos: PokemonSprites}) => {
  let photoType: keyof typeof photos;
  let imgElements = [];
  for (photoType in photos) {
    if (photos[photoType] && photoType !== "front_default")
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

export default ContentPhotos;
