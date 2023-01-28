import { Link } from "react-router-dom";
import styles from './style.module.scss';
import logo from 'assets/images/logo.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.pictures} src={logo} alt="logo" />
                    <h2 className={styles.text}>Siphome</h2>
                </div>
                <div className={styles.pages}>
                    <Link className={styles.button} to="/">Home</Link>
                    <Link className={styles.button} to="/features">Features</Link>
                    <a className={styles.button} href="#">Services</a>
                    <a className={styles.button}href="#">Contact</a>
                        <a className={styles.button}href="#">FAQ</a>
                </div>
                <nav className={styles.nav}>
                    <a className={styles.navbutton} href="#">Sign In</a>
                    <a className={styles.navbutton} href="#">Get Started</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;
