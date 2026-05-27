export function formatPrice(price) {
  return "৳ " + price.toLocaleString("en-BD");
}

export const featured = (animals) =>
  animals.filter((a) => a.featured).slice(0, 4);
