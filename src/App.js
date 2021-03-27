
import './App.css';
// 
import CardCollection from './components/cardCollection/CardCollection';
// 
import pots from "./assets/images/pots/pots-TeaPots.png"
import shakers from "./assets/images/shakers/shakers-img-Layer39.png"
import authentics from "./assets/images/authentics/authentics-IMG-Layer40.png"
import CardProduct from './components/cardProduct/CardProduct'
import icon1 from './assets/images/footer/footer-icon1-TeaPots.png'
import icon2 from './assets/images/footer/footer-icon2-Layer39.png'
import icon3 from './assets/images/footer/footer-icon3-Layer40.png'

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
      <footer className="footer">
        <div className="footer__rightBox">
          <div>
          <img className="icon" src={icon1} alt={'#'}/>
          <img className="icon" src={icon2} alt={'#'}/>
          <img className="icon" src={icon3} alt={'#'}/>
          </div>
          
          <p className="footer__caption">2014 WARE HOUSE, USA based company. Image right belong to their</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
