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

export function addColorTransparency(hexColor: string, transparency: number) {
  return hexColor + transparency;
}

export const sizes = {
  fontSize: "1.2rem",
};

export function addTransform(property: string) {
  return `-webkit-transform: ${property}; -ms-transform: ${property}; transform: ${property};`;
}

export function addTransition(property: string) {
  return `-webkit-transition: ${property}; -ms-transition: ${property}; transition: ${property};`;
}

export function addDefaultTransition() {
  return `-webkit-transition: 0.3s ease-out; -ms-transition: 0.3s ease-out; transition: 0.3s ease-out;`;
}

export function addFlexbox() {
  return "display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;";
}

export function addFlexProperties(values: string) {
  return `-webkit-box-flex: ${values}; -moz-box-flex: ${values}; -webkit-flex: ${values}; -ms-flex: ${values}; flex: ${values};`;
}

export function addFlexWrap(property: string) {
  // No Webkit/FF Box fallback.
  const result = `-webkit-flex-wrap: ${property};`;
  if (property === "nowrap") {
    result.concat("-ms-flex-wrap: none;");
  } else {
    result.concat(`-ms-flex-wrap: ${property};`);
  }
  result.concat("flex-wrap: ${property};");
  return result;
}
