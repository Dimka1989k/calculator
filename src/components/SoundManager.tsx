import { useEffect } from "react";

interface Props {
  startMusic: () => void;
}

export default function SoundManager({ startMusic }: Props) {
  useEffect(() => {
    const handler = () => {
      startMusic();
      window.removeEventListener("click", handler);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [startMusic]);

  return null;
}
