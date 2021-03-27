
import './App.css';
// 
import CardCollection from './components/cardCollection/CardCollection';
// 
import pots from "./assets/images/pots/pots-TeaPots.png"
import shakers from "./assets/images/shakers/shakers-img-Layer39.png"
import authentics from "./assets/images/authentics/authentics-IMG-Layer40.png"

function App() {
  return (
    <div className="grid-app">
      <header className="header">header</header>
      <nav className="navigation">navigation</nav>
      <section className="potsCollection">
        <CardCollection 
        img={pots}
        title={'SEVEN POTS'}
        />
      </section>
      <section className="pot">pot</section>
      <section className="rooms"></section>
      <section className="shaker">shaker</section>
      <section className="shakersCollection">
      <CardCollection 
        img={shakers}
        title={'SHAKERS'}
        />
      </section>
      <section className="authenticsCollection">
      <CardCollection 
        img={authentics}
        title={'AUTHENTICS'}
        />
      </section>
      <section className="authentic">authentic</section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
