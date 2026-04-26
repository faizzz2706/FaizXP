import styles from "./Openlink.module.css"

export default function Openlink({icon, appName, linkCancel, linkVisit}){


    return(
        <div className={styles.open_container}>
            <div className={styles.nevbar}>
                <div style={{display: 'flex', alignItems: 'center'}}><img src={icon} style={{width: '16px', height:'16px'}}></img>
                <span>Open Link</span></div>
                <img onClick={linkCancel}  src="/exit.png" loading="lazy"></img>
            </div>
            <div className={styles.main_content}>
                <div className={styles.popup_content}>
                    <img src={icon}></img>
                    <span>Open Link</span>
                    <span className={styles.popup_text}>Are you sure you want to open "{appName}"</span>
                </div>
                <div className={styles.popup_buttons}>
                    <button onClick={linkCancel}>Cancel</button>
                    <button onClick={linkVisit}>Visit {appName}</button>
                </div>
            </div>
        </div>
    )
}