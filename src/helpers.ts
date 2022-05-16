export const getColor = (value: string | number, minValue?: number) => {
  let RGvalue = 0;
  if (minValue !== undefined) {
    const r = (255 - 0) / (1 - minValue);
    RGvalue = Math.round(0 + r * (Number(value) - minValue));
  } else {
    RGvalue = Math.round(Number(value) * 255);
  }

  return `rgb(${255 - RGvalue}, ${RGvalue}, 0)`;
};
