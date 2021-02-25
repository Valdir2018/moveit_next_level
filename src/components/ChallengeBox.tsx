import { useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengeContext';
import styles from '../styles/Components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallengeFail } = useContext(ChallengesContext);

    const hasActiveChallenge = true;


    return (
        <div className={styles.challengeBoxContainer}>
             { activeChallenge ? (
              <div className={styles.challengeActive}>
                 <header>Ganhe {activeChallenge.amount} xp</header>

                 <main>
                     <img src={`icons/${activeChallenge.type}`} alt="" />
                     <strong>Novo desafio</strong>
                     <p>{activeChallenge.description}</p>
                 </main>

                 <footer>
                     <button 
                       type="button"
                       className={styles.challengeFalledButton}
                       onClick={resetChallengeFail}
                     >Falhei
                     </button>
                     <button 
                       type="button"
                       className={styles.challengeSuccessButton}
                     >Completei</button>
                 </footer>
              </div>

             ): ( 
              <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avançe de level completando os desafios
                </p>
            </div>
             )}
        </div>
    )
}