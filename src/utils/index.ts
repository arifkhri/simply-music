export const currency = (symbol: string, number: string, lang?: string) => {
  const parsedNumber = parseInt(number, 10);
  const negativeNumber = parsedNumber < 0;

  return `${negativeNumber ? '- ' : ''}${symbol ? `${symbol}` : ''}${String(
    Math.abs(parsedNumber) || 0
  ).replace(/(\d)(?=(\d{3})+(?!\d))/g, symbol === 'USD' || lang === 'en' ? '$1,' : '$1.')}`;
};

export const updateQueryStringParameter = (uri, key, value) => {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}