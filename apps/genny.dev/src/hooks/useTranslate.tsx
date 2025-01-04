import { useRouter } from 'next/router';

import homeEn from '../../public/locales/en/home.json';
import homeVi from '../../public/locales/vi/home.json';

const getNestedTranslation = (obj: any, key: string) =>
  key.split('.').reduce((acc, part) => acc && acc[part], obj);

export const useTranslate = () => {
  const { locale } = useRouter();
  const t = (key: string) => {
    if (locale === 'vi') {
      return getNestedTranslation(homeVi, key) || key;
    }
    return getNestedTranslation(homeEn, key) || key;
  };

  return { t };
};
