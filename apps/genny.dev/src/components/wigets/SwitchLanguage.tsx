// eslint-disable-next-line simple-import-sort/imports
import useGlobal from '@/hooks/useGlobal';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Button from '../Button';

function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation('common');
  const { setQuickAccessOpen } = useGlobal();
  console.log(i18n);
  const changeLanguage = (lng: string) => {
    // i18n?.changeLanguage(lng, () => {
    //   console.log('changed', locale);
    // });
    router.push(router.pathname, router.asPath, { locale: lng });
    setQuickAccessOpen(false);
  };

  return (
    <div className={clsx('flex flex-col gap-4 bg-black/10 p-4')}>
      <Button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
        English
      </Button>
      <Button onClick={() => changeLanguage('vi')} disabled={locale === 'vi'}>
        Vietnamese
      </Button>
    </div>
  );
}

export default LanguageSwitcher;
