import './App.css';
import { Player } from './components/Player';
import { TimerChallenge } from './components/TimerChallenge';

export const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Moderate" targetTime={8} />
        <TimerChallenge title="Level Up" targetTime={12} />
        <TimerChallenge title="Pro" targetTime={15} />
      </div>
    </>
  );
}
export default App;
