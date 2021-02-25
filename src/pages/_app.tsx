import '../styles/global.css';

import { ChallengesContext, ChallengesProvider } from '../contents/ChallengeContext';

function MyApp({ Component, pageProps }) {

  return  (
     <ChallengesProvider>
         <Component {...pageProps} />
     </ChallengesProvider>
       
  );
}

export default MyApp
