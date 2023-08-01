import { useContext } from "preact/hooks";
import { ConfigContext } from "../ConfigProvider";

export default function Attribution() {
  const { link, secondaryTitle } = useContext(ConfigContext);
  return (
    <footer>
      <div className="attribution">
        <div style={{ color: secondaryTitle }}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            style={{ color: link }}
            target="_blank"
          >
            Frontend Mentor
          </a>
        </div>
        <span style={{ color: secondaryTitle }}> - </span>
        <div style={{ color: secondaryTitle }}>
          Coded by{" "}
          <a href="https://mtorto.com" style={{ color: link }} target="_blank">
            Marco Tortolani
          </a>
        </div>
      </div>
    </footer>
  );
}
