import { useState } from "react";
import CustomSelect from "./CustomSelect";

export type HistoryEntry = {
  amount: string;
  odds: string;
  gameType: string;
  win: string;
};

interface Props {
  playClick: () => void;
  addHistory: (entry: HistoryEntry) => void;
}

export default function CalculatorForm({ playClick, addHistory }: Props) {
  const [amount, setAmount] = useState("");
  const [odds, setOdds] = useState("");
  const [gameType, setGameType] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const [errors, setErrors] = useState({
    amount: "",
    odds: "",
    gameType: "",
  });

  const calculate = (amountValue: string, oddsValue: string) => {
    const a = parseFloat(amountValue);
    const o = parseFloat(oddsValue);

    if (Number.isNaN(a) || Number.isNaN(o) || a <= 0 || o <= 0) {
      setResult(null);
      return;
    }

    const win = (a * o).toFixed(2);
    setResult(`Можливий виграш: ${win} грн`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    let valid = true;
    const newErrors = { amount: "", odds: "", gameType: "" };

    if (Number.isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      newErrors.amount = "Введіть коректну суму!";
      valid = false;
    }

    if (Number.isNaN(parseFloat(odds)) || parseFloat(odds) <= 0) {
      newErrors.odds = "Введіть коректний коефіцієнт!";
      valid = false;
    }

    if (!gameType) {
      newErrors.gameType = "Зробіть вибір!";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    const win = (parseFloat(amount) * parseFloat(odds)).toFixed(2);

    const newEntry = {
      amount,
      odds,
      gameType,
      win,
    };
    addHistory(newEntry);
    setResult(`Можливий виграш: ${win} грн`);
  };

  return (
    <form id="betForm" onSubmit={handleSubmit}>
      <label>Сума ставки</label>
      <input
        type="number"
        placeholder="Наприклад: 100"
        value={amount}
        onChange={(e) => {
          const v = e.target.value;
          setAmount(v);
          setErrors((err) => ({ ...err, amount: "" }));
          calculate(v, odds);
        }}
      />
      <span className="error-message">{errors.amount}</span>

      <label>Коефіцієнт</label>
      <input
        type="number"
        placeholder="Наприклад: 2.5"
        value={odds}
        onChange={(e) => {
          const v = e.target.value;
          setOdds(v);
          setErrors((err) => ({ ...err, odds: "" }));
          calculate(amount, v);
        }}
      />
      <span className="error-message">{errors.odds}</span>

      <label>Тип гри</label>

      <CustomSelect
        value={gameType}
        onChange={(val) => {
          setGameType(val);
          setErrors((err) => ({ ...err, gameType: "" }));
        }}
        options={[
          "Слоти",
          "Покер",
          "Футбол",
          "Баскетбол",
          "Кіберспорт",
          "Інше",
        ]}
        error={errors.gameType}
      />

      {result && <div className="result">{result}</div>}

      <button type="submit" className="btn-calc">
        Розрахувати
      </button>
    </form>
  );
}
