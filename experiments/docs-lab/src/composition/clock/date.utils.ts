const padTwoDigits = (n: number): string => `${n}`.padStart(2, '0');

const TIME_FORMATTERS: { [placeholder: string]: (t: Date) => string } = {
  'YYYY': t => `${t.getFullYear()}`,
  'mm': t => padTwoDigits(t.getMonth() + 1),
  'dd': t => padTwoDigits(t.getDate()),
  'hh': t => padTwoDigits(t.getHours()),
  'ii': t => padTwoDigits(t.getMinutes()),
  'ss': t => padTwoDigits(t.getSeconds()),
  // Add time formatters here
};

export const formatDate = (timestamp: number, format: string): string => {
  const d = new Date(timestamp);
  let result = format;

  for (const placeholder in TIME_FORMATTERS) {
    const formatter = TIME_FORMATTERS[placeholder];
    result = result.replace(placeholder, formatter(d));
  }

  return result;
};
