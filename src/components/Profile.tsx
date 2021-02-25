import styles from '../styles/Components/Profile.module.css';


export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Valdir2018.png" alt="Valdir"/>
           <div>
             <strong>Valdir Silva</strong>
             <p>
                <img src="icons/level.svg" alt="level"/>
                 Level 1
             </p>
           </div>
        </div>
    );
}