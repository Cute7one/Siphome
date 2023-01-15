import styles from './style.module.scss';

const FirstFloor = () => {
    return (
        <section className={styles.firstFloor}>
            <div className={styles.container}>
                <div className={styles.block1}>
                    <div className={styles.title}>
                        <h1 className={styles.titleText}>Imagine your <tr></tr>home smart enough <tr></tr><span className={styles.titleTextColor}>to take care</span> of itself.</h1>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.textText}>Turn your home into a smarthome today with a simple & affordable upgrade. Discover the upgrade that automates home maintenance.</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Get Started</button>
                        <button className={styles.buttonTwo}>Learn More</button>
                    </div>
                </div>
                <div className={styles.block2}>
                    <div className={styles.pictures}>
                        <img className={styles.picturesName} src="/src/components/img/pict1.png" alt="pictures1" />
                        <img className={styles.picturesName} src="/src/components/img/pict2.png" alt="pictures2" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FirstFloor