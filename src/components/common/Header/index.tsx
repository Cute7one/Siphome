import Logo from '../../../logo'
import styles from './style.module.scss';

const Header = () => {
    return (
        <div>
            <div style={{ maxWidth: 50, maxHeight: 50 }}>
                <Logo />
            </div>
            
            <ul className={styles.header}>
                <li><a href="#">Home</a></li>
                <li>Features</li>
                <li>Services</li>
                <li>Contact</li>
                <li>FAQ</li>
            </ul>
        </div>
    )
}

export default Header;
