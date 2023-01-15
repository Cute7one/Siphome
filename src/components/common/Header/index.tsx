import Logo from '../../../logo'
import styles from './style.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.pictures} src="/src/components/img/logo.svg" alt="logo" />
                    <h2 className={styles.text}>Siphome</h2>
                </div>
                <div className={styles.pages}>
                    <a className={styles.button} href="http://#">Home</a>
                    <a className={styles.button} href="http://#">Features</a>
                    <a className={styles.button} href="http://#">Services</a>
                    <a className={styles.button}href="http://#">Contact</a>
                    <a className={styles.button}href="http://#">FAQ</a>
                </div>
                <nav className={styles.nav}>
                    <a className={styles.navbutton} href="http://#">Sign In</a>
                    <a className={styles.navbutton} href="http://#">Get Started</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;
