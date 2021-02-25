import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: string;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number; 
    challengeCompleted: number;
    experienceToNextLevel: number; 
    startNewChallange: () => void;
    activeChallenge: Challenge;
    levelUp: () => void;
    resetChallengeFail: ()  => void;

}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallengesContextData  = createContext({} );

export function ChallengesProvider({ children }: ChallengesProviderProps ) {
    const [level, setLevel] = useState(1);
    const [currentExperience,  setCurrentExperience] = useState(30);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel =  Math.pow((level + 1) * 4, 2);

    function levelUp() {
      setLevel(level + 1);
    }

    function startNewChallange() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function resetChallengeFail() {
        setActiveChallenge(null);
    }


    return (
      <ChallengesContext.Provider 
          value={{ 
             level, 
             currentExperience, 
             challengeCompleted, 
             startNewChallange, 
             levelUp,
             activeChallenge,
             resetChallengeFail,
             experienceToNextLevel
             }}>
         {children}
      </ChallengesContext.Provider>
    );
}