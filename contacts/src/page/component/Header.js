import { useState } from "react"
import styles from '../../css/component/Header.module.css'
import { UserProperty } from "../../App";

const Header = () =>{
    const [NickName,setNickName] = useState('Guest');
    const property = UserProperty((state)=>state.money)
    return(
        <div className={styles.header}>
            <div className={styles.userInfo}>
                <p>{NickName}</p>
                <div className={styles.wallet}>
                    <p>{property}</p><button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Header;