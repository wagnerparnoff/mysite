import './Hello.css'
function Hello() {

  const ColoredText = ({ text, color }) => <p style={{ color }}>{text}</p>;
  
  const constText = "const";
  const linkText = "githubLink";
  const githubLink = "https://github.com/wagnerparnoff";

  return (
    <>
      <div>
        <p>Hi all. I am</p>
        <h1>Wagner Parnoff</h1>
        <p>Full-Stack developer</p>
      </div>
      <div>
        <p>{"// complete the game to continue"}</p>
        <p>{"// you can also see it on my Github page"}</p>
        <div className="githubLink">
          <ColoredText text={constText} color="#4D5BCE" /> {' '}
          <ColoredText text={linkText} color="#43d9ad" /> {" = "}
          <a href="githubLink">
            <ColoredText text={githubLink} color="#e89387" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hello;