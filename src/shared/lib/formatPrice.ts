export const formatPrice = (price: number, locale: string = 'ru-RU'): string => {
  return price.toLocaleString(locale);
};
