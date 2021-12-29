import React from 'react';

// Icons (Use ant design icons)
import {LogoutOutlined} from "@ant-design/icons";

// Styles
import styles from "./Navbar.module.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.header}>
            <p className={styles.title}>Sroom</p>
            <button 
            className={styles.button}
            onClick={logoutHandler}
            >
                <LogoutOutlined className={styles.LogOut_icon}/>
            </button>
        </div>
    );
};

export default Navbar;