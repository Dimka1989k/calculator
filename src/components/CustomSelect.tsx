import { useState } from "react";

interface Props {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  error?: string;
}

export default function CustomSelect({
  value,
  options,
  onChange,
  error,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`custom-select ${open ? "open" : ""} ${
          error ? "input-error" : ""
        }`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="custom-selected">{value || "Оберіть тип гри"}</div>

        <ul className="custom-options">
          {options.map((opt) => (
            <li
              key={opt}
              data-value={opt}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>

      <span className="error-message">{error}</span>
    </>
  );
}
