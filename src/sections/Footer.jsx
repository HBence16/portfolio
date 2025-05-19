const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center  items-center flex-wrap gap-5">

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg"  onClick={() => window.open('https://github.com/HBence16', '_blank')}  alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="m-auto justify-end flex "><a href="https://www.youtube.com/watch?v=kt0FrkQgw8w&list=WL&index=5&t=2367s" className="text-white">Ez a weboldal egy  tutorial alapján készült, több kisebb módosítással </a></div>
      </div>
    </footer>
  );
};

export default Footer;
