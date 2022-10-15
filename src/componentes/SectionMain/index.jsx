import styles from './Main.module.css'
import main from './Main.png'

const Main = ()=>{
    return(
        <main className={styles.container}>
            <div className={styles.titleMain}>
                <h1>Providing <span>Technology </span>
                on Hands
                </h1>

                <p>
                    Give the handy task to our hand and with no worries. Serving millions around the world right at the moment.
                </p>

                <div className={styles.buttons}>
                    <button className={styles.buttonA}> Enroll Now </button>
                    <button className={styles.buttonB}> Contact Now </button>
                </div>
            </div>

            <div className={styles.imagemMain}>
                <img src={main} alt="Imagem principal do site" />
            </div>
        </main>
    )
}

export default Main