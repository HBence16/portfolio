import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">
      <div className="flex gap-3 items-center flex-wrap">
        <div className="social-icon">
          <img
            src={`${import.meta.env.BASE_URL}assets/github.svg`}
            onClick={() => window.open('https://github.com/HBence16', '_blank')}
            alt="github"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        <div className="text-white text-sm">
          {t('footer.credit')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
