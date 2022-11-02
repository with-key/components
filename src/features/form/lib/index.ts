export const price = (rawPrice: string) => {
  if (rawPrice === "") {
    return rawPrice;
  }

  const onlnNumber = Number(
    rawPrice.replaceAll(",", "").replace(/[^0-9]/g, "")
  );

  return onlnNumber.toLocaleString("en");
};

export const clearPrice = (formatted: string) => {
  return formatted.replaceAll(",", "");
};
