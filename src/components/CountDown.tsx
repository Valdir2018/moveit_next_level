import { useState, useEffect, Fragment, useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengeContext';
import styles from '../styles/Components/CountDown.module.css';


let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallange } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft , minutRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft , secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
       clearTimeout(countDownTimeout);
       setIsActive(false);
       setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if(isActive && time == 0) {
           setHasFinished(true);
           setIsActive(false);
           startNewChallange()
        } 

    }, [isActive, time]);

    return  (
        <div>
            <div className={styles.countDownContainer}>
             <div>
                <span>{minuteLeft}</span>
                <span>{minutRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
            { hasFinished ? (
                <button
                   type="button"
                   disabled
                   className={styles.countDownButton} 
                   onClick={resetCountDown} >
                   Ciclo encerrado
                </button>
            ): (
                <Fragment>
                     { isActive ? (
                        <button type="button" 
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            onClick={resetCountDown}
                        >
                        Abandonar clico
                    </button>

              ) : (
                <button type="button" 
                    className={styles.countDownButton}
                    onClick={startCountDown}
                >
                   Iniciar um ciclo
                </button>

              ) }
                </Fragment>
            )}
        </div>
    );
}