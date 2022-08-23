import type { ComplexAttributeConverter } from 'lit';

export const dateConverter = (locale: string): ComplexAttributeConverter<Date> => {
  return {
    toAttribute: (date: Date) => date.toLocaleDateString(locale),
    fromAttribute: (value: string) => new Date(value),
  }
};
