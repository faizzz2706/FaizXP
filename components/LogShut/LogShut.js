"use client";
import styles from "./LogShut.module.css"

export default function LogShut({text, icon1, text1, icon2, text2, closeLogShut, onPrimary, onSecondary}){

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <span>{text} FaizAli XP</span>
                <img src="/favicon.png" alt = 'windows'></img>
            </div>
            <div className={styles.hero}>
                <div className={styles.hero_buttons} onClick={onPrimary}>
                    <div className={styles.item}>
                        <img src={icon1}></img>
                        <p>{text1}</p>
                    </div>
                    <div className={styles.item} onClick={onSecondary}>
                        <img src={icon2}></img>
                        <p>{text2}</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <button onClick={closeLogShut}>Cancel</button>
            </div>
        </div>
    )
}