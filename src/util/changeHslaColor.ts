import hslaRegex from "hsla-regex";

const changeHslaColorLightness = (
  hslaColor: string,
  lightnessChange: number
): string => {
  const isColorInHslaFormat = hslaRegex({ exact: true }).test(hslaColor);

  if (!isColorInHslaFormat) {
    throw new Error("Color is not in HSLA Format!");
  }

  const color = hslaColor.split(",");
  const LIGHTNESS_HSLA_INDEX = 2;
  const lightness: string = color[LIGHTNESS_HSLA_INDEX];
  const lightnessNumeric: number = parseInt(lightness);
  color[LIGHTNESS_HSLA_INDEX] = `${lightnessNumeric + lightnessChange}%`;
  const changedColor = color.join(",");
  return changedColor;
};

export default changeHslaColorLightness;
