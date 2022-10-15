import styles from './Clientes.module.css'

import cliente1 from './cliente01.png'
import cliente2 from './cliente02.png'
import cliente3 from './cliente03.png'

const Clientes = ()=> {
    return(
        <section className={styles.sectionClientes}>
            <h1>What our Client has to Say About Us</h1>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img src={cliente1} alt="Cliente 1" />
                    <h3>Ena Larva</h3>
                    <p>
                        I real appreciate the efforts of the Techno Tean. It very amazing for the growing technology. I hope they will imporve and get success.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={cliente2} alt="Cliente 2" />
                    <h3>Ester Italia</h3>
                    <p>
                        I real appreciate the efforts of the Techno Tean. It very amazing for the growing technology. I hope they will imporve and get success.
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={cliente3} alt="Cliente 3" />
                    <h3>Neema Tamang   </h3>
                    <p>
                        I real appreciate the efforts of the Techno Tean. It very amazing for the growing technology. I hope they will imporve and get success.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Clientes