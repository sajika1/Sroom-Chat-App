import React from 'react'

// import Loading Gif 
import loading from "../loading.gif"

import styles from "./loading.module.css";

function Loading() {
    return (
        <>
            <div className={styles.loadingScreen}>
                <div className={styles.wrapper}>
                    <img src={loading} alt="loading gif"/>
                    <p className={styles.loadingText}>wait a moment</p>
                    <p className={styles.describe}>Make sure the <span>vpn</span> is turned on</p>
                </div>
            </div>
        </>
    )
}

export default Loading;
