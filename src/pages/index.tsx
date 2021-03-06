import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar }  from '../components/ExperienceBar';
import Profile from '../components/Profile';
import styles from '../styles/pages/Home.module.css';


import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
         <title> Inicio | move.it </title>
      </Head>
         
       <ExperienceBar />

       <section>
         <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
         </div>
         <div>
            <ChallengeBox />
         </div>
       </section>
    </div>
  );
}
