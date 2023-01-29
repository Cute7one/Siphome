import styles from './styles.module.scss';

import grid1 from 'assets/images/grid1.svg';
import grid2 from 'assets/images/grid2.svg';
import grid3 from 'assets/images/grid3.svg';
import grid4 from 'assets/images/grid4.svg';
import fon from 'assets/images/fon.png';
import men from 'assets/images/men.png'

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
                                <div className={styles.pictures}>
                                    <img src={fon} alt="fon" />
                                    <img src={men} alt="men" />
                                </div>
                            </div>
                            <div className={styles.blockRight}>
                                <h1 className={styles.blockTitle}>Meet Siphome</h1>

                                <p className={styles.blockText}>The most comprehensive smart solution to home maintenance. All it <tr></tr>takes is a simple and affordable sensor installation by one of our <tr></tr> Siphome certified technicians.</p>
                            <div className={styles.gridn1}>
                                <div>
                                    <img src={grid1} alt="grid1" />
                                    <h3>Automatic Threat Detection</h3>
                                    <p className={styles.gridText}>Siphome reacts the moment your <tr></tr> equipment fails, alerting you to the <tr></tr> problem.</p>
                                </div>
                                <div>
                                <img src={grid2} alt="grid2" />
                                <h3>Smart Diagnostics</h3>
                                <p className={styles.gridText}>See exactly what is malfunctioning <tr></tr> and compare your maintenance <tr></tr> options on the same screen.</p>
                                </div>

                            </div>
                        <div className={styles.gridn2}>
                        <div>
                            <img src={grid3} alt="grid3" />
                            <h3>Disaster Prevention</h3>
                            <p className={styles.gridText}>Predictive analytics lets you see <tr></tr> what needs maintenance before it <tr></tr> fails.</p>
                        </div>
                        <div>
                            <img src={grid4} alt="grid4" />
                            <h3>24/7 Service​</h3>
                            <p className={styles.gridText}>Siphome monitors your critical <tr></tr> systems 24/7 so you can enjoy <tr></tr> peace of mind.</p>
                        </div>
                    </div>     
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features;