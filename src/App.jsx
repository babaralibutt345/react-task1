import Hero from './components/Hero';
import SpeakingMedia from './components/SpeakingMedia';
import Partners from './components/Partners';
import LeadershipTraining from './components/LeadershipTraining';
import './App.css';
import KeyNotes from './components/KeyNotes';
import JillVideos from './components/JillVideos';
import UkraineWarriors from './components/UkraineWarriors';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestimonialCard from './components/TestimonialCard';
import PillarsSection from './components/PillarsSection';
import FollowJill from './components/FollowJill';
import FooterSection from './components/FooterSection';
import "@fortawesome/fontawesome-free/css/all.min.css"; // 👈 Font Awesome CSS

function App() {
  return (
    <div className="App ">
      <Hero />
      <SpeakingMedia />
      <Partners />
      <LeadershipTraining />
      <KeyNotes />
      <JillVideos />
      <UkraineWarriors />
      <TestimonialCard/>
      <PillarsSection/>
      <FollowJill></FollowJill>
      <FooterSection></FooterSection>

    </div>
  );
}

export default App;

