import { useState } from "react"
import styles from '../../css/component/Header.module.css'
import { Login, UserProperty } from "../../App";

const Header = () =>{
    const [NickName,setNickName] = useState('Guest');
    const property = UserProperty((state)=>state.money)
    const {user,login,logout} = Login((state)=>state);

    return(
        <div className={styles.header}>
            <div>
                {user ? 
                <div className={styles.userInfo}>
                    <p>{NickName}</p>
                    <div className={styles.wallet}>
                        <p>{property}</p><button>+</button><button onClick={()=>logout()}>로그아웃</button>
                    </div>
                </div>:
                <div className={styles.userInfo}>
                    <button onClick={()=>login()}>
                        로그인
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default Header;