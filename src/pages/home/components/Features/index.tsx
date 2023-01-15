import styles from './styles.module.scss';

const Features = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                    <div className={styles.headerBlock}>
                        <p className={styles.headerBlockText}>Every day your home faces countless potential threats. Every day you face countless potential <tr></tr>headaches. A small problem can become a major disaster. Early warning signs exist but often you <tr></tr> can't hear or see them.</p>
                    </div>

                    <div className={styles.title}>
                        <h2 className={styles.titleName}>FEATURES</h2>
                    </div>
                        <div className={styles.blocks}>
                            <div className={styles.blockLeft}>
                                block left
                            </div>

                            <div className={styles.blockRight}>
                                <h1 className={styles.blockTitle}>Meet Siphome</h1>

                                <p className={styles.blockText}>The most comprehensive smart solution to home maintenance. All it <tr></tr>takes is a simple and affordable sensor installation by one of our <tr></tr> Siphome certified technicians.</p>
                            <div className={styles.grid1}>
                                <div>
                                    <img src="#" alt="logo" />
                                    <h3>Automatic Threat Detection</h3>
                                    <p>Siphome reacts the moment your equipment fails, alerting you to the problem.</p>
                                </div>
                                <div>
                                <img src="#" alt="logo" />
                                <h3>Smart Diagnostics</h3>
                                <p>See exactly what is malfunctioning and compare your maintenance options on the same screen.</p>
                                </div>

                            </div>
                        <div className={styles.grid2}>
                        <div>
                            <img src="#" alt="logo" />
                            <h3>Disaster Prevention</h3>
                            <p>Predictive analytics lets you see what needs maintenance before it fails.</p>
                        </div>
                        <div>
                            <img src="#" alt="logo" />
                            <h3>24/7 Service​</h3>
                            <p>Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.</p>
                        </div>
                    </div>     
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features;