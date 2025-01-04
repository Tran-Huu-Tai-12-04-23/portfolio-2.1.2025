// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

function TestScreen() {
  const { t } = useTranslation('home');
  return <div>{t('work')}</div>;
}

export default TestScreen;
