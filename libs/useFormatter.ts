export const useFormatter = () => ({
  formatPrice: (price: number) => {
    return price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },

  formatQuantity: (qtde: number, minDigits: number) => {
    if (qtde.toString().length >= minDigits) return qtde.toString();
    const remain = minDigits - qtde.toString().length;
    return `${"0".repeat(remain)}${qtde}`;
  },
});
