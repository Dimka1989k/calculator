import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Modal from "./components/Modal";
import SoundManager from "./components/SoundManager";
import Footer from "./components/Footer";
import sportImage from "./assets/image/sport.png";
import soundsClick from "./assets/sounds/click.mp3";
import casinoSounds from "./assets/sounds/casino-sounds.mp3";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickSoundRef.current = new Audio(soundsClick);
    musicRef.current = new Audio(casinoSounds);
    musicRef.current.loop = true;
    musicRef.current.volume = 0.05;
  }, []);

  const playClick = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  };

  const startMusic = () => {
    if (musicRef.current) {
      musicRef.current.play().catch(() => {});
    }
  };

  const openModal = () => {
    playClick();
    startMusic();
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <SoundManager startMusic={startMusic} />
      <Slider />
      <div className="container-btn">
        <button className="btn-sport" onClick={openModal}>
          <img src={sportImage} alt="iconSport" />
          <p className="text-btn">Betting calculator</p>
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          playClick();
          setModalOpen(false);
        }}
        playClick={playClick}
      />
      <Footer />
    </>
  );
}

export default App;
