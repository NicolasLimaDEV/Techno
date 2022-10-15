import styles from './Banner.module.css'

const Banner = ()=> {
    return(
        <section className={styles.container}>
            <div className={styles.banner} >
                <p>Filling your future with security</p>
                    <h1>Be A part of The Next Big Thing</h1>
                        <button> Get Access</button>          
            </div>
        </section>
    )
}

export default Banner