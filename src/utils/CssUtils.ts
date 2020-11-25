export const size = {
  sm: "576px",
  md: "768px",
  lg: "1200px",
};

export const device = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
};

export const colors = {
  colorText: "#001c55",
  primary: "#fcdd20",
  secondary: "#2d4a96",
  background: "rgba(255,255,255,0.8)",
};

export function addColorTransparency(hexColor: string, transparency: number): string {
  return hexColor + transparency;
}

export const sizes = {
  fontSize: "1.2rem",
};

/*
    ..........Browsers support...........
*/
export function addTransform(property: string): string {
  return `-webkit-transform: ${property}; -ms-transform: ${property}; transform: ${property};`;
}

export function addTransition(property: string): string {
  return `-webkit-transition: ${property}; -ms-transition: ${property}; transition: ${property};`;
}

export function addDefaultTransition(): string {
  return `-webkit-transition: 0.3s ease-out; -ms-transition: 0.3s ease-out; transition: 0.3s ease-out;`;
}

export function addFlexbox(): string {
  return "display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;";
}

export function addFlexProperties(values: string): string {
  return `-webkit-box-flex: ${values}; -moz-box-flex: ${values}; -webkit-flex: ${values}; -ms-flex: ${values}; flex: ${values};`;
}

export function addFlexWrap(property: string): string {
  const result = `-webkit-flex-wrap: ${property};`;
  switch (property) {
    case "nowrap": {
      result.concat(`-ms-flex-wrap: none;`);
      break;
    }
    default:
      result.concat(`-ms-flex-wrap: ${property};`);
  }
  result.concat(`flex-wrap: ${property};`);
  return result;
}

export function justifyContent(value: string): string {
  let result = "";
  switch (value) {
    case "flex-start": {
      result = result.concat(`-webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-flex-pack: start;`);
      break;
    }
    case "flex-end": {
      result = result.concat(
        "-webkit-box-pack: end; -moz-box-pack: end; -ms-flex-pack: end;"
      );
      break;
    }
    case "space-between": {
      result = result.concat(
        "-webkit-box-pack: justify;-moz-box-pack: justify;-ms-flex-pack: justify;"
      );
      break;
    }
    case "space-around": {
      result = result.concat("-ms-flex-pack: distribute");
      break;
    }
    default:
      result.concat(
        `-webkit-box-pack: ${value}; -moz-box-pack: ${value};-ms-flex-pack: ${value};`
      );
  }
  return result.concat(`-webkit-justify-content: ${value}; justify-content: ${value};`);
}

export function alignItems(value: string): string {
  let result = "";
  switch (value) {
    case "flex-start": {
      result = result.concat(
        "-webkit-box-align: start; -moz-box-align: start; -ms-flex-align: start;"
      );
      break;
    }
    case "flex-end": {
      result = result.concat(
        "-webkit-box-align: end; -moz-box-align: end;-ms-flex-align: end;"
      );
      break;
    }
    default:
      result = result.concat(
        `-webkit-box-align: ${value}; -moz-box-align:${value};-ms-flex-align: ${value};`
      );
  }

  return result.concat(`-webkit-align-items: ${value}; align-items: ${value}`);
}
