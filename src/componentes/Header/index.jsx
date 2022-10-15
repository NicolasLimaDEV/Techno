import logo from './logo.png'
import styles from './Header.module.css'

const Header = ()=> {

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo Techno" />

            <button className={styles.btnMobile}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <ul className={styles.menu}>
                <li>Home</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Order</li>
            </ul>
        </header>
    )
}

export default Header