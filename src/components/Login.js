import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from "../firebase";


// Icons (Use ant design icons)
import {GoogleOutlined} from "@ant-design/icons";

// Styles
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.login_container}>
            {/* header of Login Page */}
            <div className={styles.login_title}>
                <h1>Welcome to <span>Sroom</span></h1>
            </div>
            {/* Google Login Button */}
            <div className={styles.login_contents}>
                    <button 
                        className={styles.login_btn}
                        onClick={ ()=>{ auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider()) } }
                        >
                    <div className={styles.btn_content}>
                        <GoogleOutlined className={styles.btn_icon}/>
                        <span className={styles.btn_text}>Sign in with Google</span>
                    </div>
                    </button>
            </div>
        </div>
        </div>        
    );
};

export default Login;