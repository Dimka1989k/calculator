type HistoryEntry = {
  amount: string;
  odds: string;
  gameType: string;
  win: string;
};

export default function History({ history }: { history: HistoryEntry[] }) {
  return (
    <div className="history">
      <h3>Останні 5 ставок:</h3>
      <div id="historyList">
        {history.length === 0 && <p>Історія порожня.</p>}

        {history.map((item, i) => (
          <div key={i} className="entry">
            {item.gameType}: ставка {item.amount} грн × коеф. {item.odds} →
            виграш {item.win} грн
          </div>
        ))}
      </div>
    </div>
  );
}
