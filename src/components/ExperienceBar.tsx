import { useContext } from 'react';
import { ChallengesContext } from '../contents/ChallengeContext';
import styles from '../styles/Components/ExperienceBar.module.css';


export  function ExperienceBar() {

    const { currentExperience, experienceToNextLevel } =  useContext(ChallengesContext);

    const pecentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel); 

    return (
        <header className={styles.experienceBar}>
           <span>0 xp</span>
            <div>
                 <div style={{ width: `${pecentToNextLevel}%` }} />

                 <span className={styles.currentExperience} style={{ left: `${pecentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
           <span>{experienceToNextLevel} xp</span>
        </header>
    );
}