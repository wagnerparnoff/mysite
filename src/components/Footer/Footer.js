import "./Footer.css";
import github from "../../assets/github.svg";
import lkdin from "../../assets/in.svg";

function Footer() {
  return (
    <footer className="footer">
      <span className="findeme">find me in:</span>
      <img src={lkdin} alt="linkedIn icon" />

      <a href="https://github.com/wagnerparnoff">
        @wagnerparnoff
        <img src={github} alt="github icon" />
      </a>
    </footer>
  );
}

export default Footer;
