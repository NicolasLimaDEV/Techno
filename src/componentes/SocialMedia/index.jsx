import styles from './Social.module.css'

import brand from '../../assets/icones/brand 1.png'
import facebook from '../../assets/icones/facebook 1.png'
import github from '../../assets/icones/github 1.png'
import google from '../../assets/icones/google 1.png'
import tikTok from '../../assets/icones/tik-tok 1.png'
import youtube from '../../assets/icones/youtube 1.png'

const SocialMedia = ()=>{
    return(
        <article className={styles.container}>
            <div className={styles.content}>
                <img src={brand} alt="Logo da Brand" />
                <img src={google} alt="Logo do Google" />
                <img src={tikTok} alt="Logo do Tik-Tok" />
                <img src={facebook} alt="Logo do Facebook" />
                <img src={youtube} alt="Logo do Youtube" />
                <img src={github} alt="Logo do Github" />
            </div>
        </article>
    )
}

export default SocialMedia