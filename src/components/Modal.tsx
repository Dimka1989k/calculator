import { useState, useEffect } from "react";
import CalculatorForm from "./CalculatorForm";
import History from "./History";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  playClick: () => void;
}

export type HistoryEntry = {
  amount: string;
  odds: string;
  gameType: string;
  win: string;
};

export default function Modal({ isOpen, onClose, playClick }: Props) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    queueMicrotask(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("betsHistory") || "[]");
        setHistory(saved);
      } catch {
        setHistory([]);
      }
    });
  }, [isOpen]);

  const addHistory = (entry: HistoryEntry) => {
    setHistory((prev) => {
      const updated = [entry, ...prev].slice(0, 5);
      localStorage.setItem("betsHistory", JSON.stringify(updated));
      return updated;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="container">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Betting Calculator</h2>
          <CalculatorForm playClick={playClick} addHistory={addHistory} />
          <History history={history} />
        </div>
      </div>
    </div>
  );
}
