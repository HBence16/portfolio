import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' hansaghybeni@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 " id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img src={`${import.meta.env.BASE_URL}assets/grid1.png`} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Üdvözlöm, Hansághy Bence vagyok!</p>
              <p className="grid-subtext">
                20 éves lelkes pályakezdő vagyok.
                Szoftverfejlesztés és tesztelés szakon van technikusi oklevelem
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img src={`${import.meta.env.BASE_URL}assets/grid2.png`} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tanult programozási nyelveim</p>
              <p className="grid-subtext">
                5 év HTML/CSS/JavaScript
                <br />
                3 év Java
                <br />
                1 év React
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 48, lng: 22, text: 'Nyiregyhaza', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Jelenleg Nyíregyházán élek</p>
              <p className="grid-subtext">Nyíregyháza és Debrecen között ingázok, később Szegeden szeretnék tovább tanulni egyetemen, programtervező szakon.</p>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-1">
          <div className="grid-container">
            <img src={`${import.meta.env.BASE_URL}assets/grid3.png`} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Szenvedélyem a kódolás</p>
              <p className="grid-subtext">
                Szeretem kihasználni a kreativitásom és probléma megoldó képességeim a kódolásban. Nem egy munkaként, hanem egy hivatásként tekintek a programozásra. Webfejlesztés és/vagy játék fejlesztéssel szeretnék foglalkozni.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid4.png`}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Elérhetőségeim</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? import.meta.env.BASE_URL+  'assets/tick.svg' : import.meta.env.BASE_URL+'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">hansaghybeni@gmail.com</p>
              </div>
              <div className='copy-container'>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">📞 06 70 2345652</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
