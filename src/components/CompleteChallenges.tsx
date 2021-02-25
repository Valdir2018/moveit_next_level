import { useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengeContext';
import styles from '../styles/Components/CompleteChallenges.module.css';


export  function CompleteChallenges() {
    const { challengeCompleted } = useContext(ChallengesContext);

    return (
       <div className={styles.completedChallengesContainer}>
           <span>Desafios completos</span>
           <span>{challengeCompleted}</span>
       </div>
    );
}