
import './App.css';
// 
import CardCollection from './components/cardCollection/CardCollection';
// 
import pots from "./assets/images/pots/pots-TeaPots.png"
import shakers from "./assets/images/shakers/shakers-img-Layer39.png"
import authentics from "./assets/images/authentics/authentics-IMG-Layer40.png"
import CardProduct from './components/cardProduct/CardProduct';

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
      <section className="pot" style={{padding: "0 130px 0 425px"}}>
          <CardProduct/>
      </section>
      <section className="rooms">
        <div className="circle">
          <img className="circleImg"/>
          <h3 className="circleTitle">ROOMS</h3>
        </div>
      </section>
      <section className="shaker" style={{padding: "0 465px 0 50px"}}>
          <CardProduct/>
      </section>
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
      <section className="authentic" style={{padding: "0 70px 0 425px"}}>
          <CardProduct/>
        </section>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
