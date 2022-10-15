import styles from './Pricing.module.css'

import mobileBank from './MobileBank.png'
import docs from './DOCS.png'

const Pricing = ()=>{
    return(
        <section className={styles.container}>
            <div className={styles.contentA}>
                <img className={styles.imagemBank} src={mobileBank} alt="Pagamento Mobile" />
                <div className={styles.contentATitle}>
                    <h1>Free Enroll For First 1000 Users</h1>
                    <p>Give the handy tasks to  our hand and with no worries. Serving millions around the world right at the moment.</p>

                    <button className={styles.botao}>View Pricing</button>

                </div>
            </div>

            <div className={styles.contentB}>
                <div className={styles.contentBTitle}>
                    <h1>Why choosing us is worth it?</h1>
                    <p>This is one of the biggest growing and proven platform to gave a try on technology so do miss it.</p>
                    <button className={styles.botao}>Read Docs</button>
                </div>

                <img src={docs} alt="Imagem de Documentos" />
            </div>
        </section>
    )
}

export default Pricing