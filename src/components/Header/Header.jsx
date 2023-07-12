import logo from "../../assets/Ignite-simbol.svg";
import styles from "./Header.module.css"


export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Ignite" />
      <h2>Ignite Feed</h2>
    </header>
  );
}
