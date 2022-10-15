import styles from './Footer.module.css'

import logo from '../../componentes/Header/logo.png'

const Footer = ()=> {
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.col__logo}>
                <img src={logo} alt="Logo da Techno" />
            </div>

            <div className={styles.col__news}>
                <h1>News</h1>
                <ul>
                    <li>Techno meet up</li>
                    <li>Strating int techno</li>
                    <li>Current plans</li>
                    <li>Start up</li>
                    <li>New ideas</li>
                </ul>
            </div>

            <div className={styles.col__market}>
                <h1>Market</h1>
                <ul>
                    <li>Techno meet up</li>
                    <li>Strating int techno</li>
                    <li>Current plans</li>
                    <li>Start up</li>
                    <li>New ideas</li>
                </ul>
            </div>

            <div className={styles.col__contact}>
                <h1>Contact</h1>
                <ul>
                    <li>Email</li>
                    <li>Facebook</li>
                    <li>Linked</li>
                    <li>Github</li>
                    <li>Tweeter</li>
                </ul>
            </div>

            <div className={styles.col__newLetter}>
                <input type="email" placeholder='Email Address' />
                <button>SUBMIT</button>
            </div>
        </footer>

            <div className={styles.copy}>
                <p>Copyright 2022</p>
                <p>All rights reserved by <span>CodeMode356</span></p>
                <span>NicolasLimaDEV</span>
            </div>
        </>
    )
}

export default Footer