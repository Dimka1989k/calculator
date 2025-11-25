import instaIcon from "../assets/image/instagram.jpg";
import telegramIcon from "../assets/image/teltgram.jpg";
import youTubeIcon from "../assets/image/youtube.jpg"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-section">
            <h3>Casino Calculator</h3>
            <p>Твій персональний помічник для розрахунку ставок.</p>
          </div>
          <div className="footer-section">
            <h4>Навігація</h4>
            <ul>
              <li>
                <a href="#">
                  Головна
                </a>
              </li>
              <li>
                <a href="#">Калькулятор</a>
              </li>
              <li>
                <a href="#">Контакти</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Ми в соцмережах</h4>
            <nav className="socials">
              <a href="#">
                <img src={instaIcon} alt="logoInstagram" />
              </a>
              <a href="#">
                <img src={telegramIcon} alt="logoYoutube" />
              </a>
              <a href="#">
                <img src={youTubeIcon} alt="logotelegram" />
              </a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Casino Calculator. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
