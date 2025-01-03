import { i18n } from 'next-i18next';

export const getTranslationKeys = (namespace: string) => {
  const keys = i18n.getResourceBundle(i18n.language, namespace);
  return Object.keys(keys);
};
