
import './App.css';
// 
import CardCollection from './components/cardCollection/CardCollection';
import CardProduct from './components/cardProduct/CardProduct';
import CardAdvice from './components/cardAdvice/CardAdvice';
import Navigation from './components/navigation/Navigation';
// 
import headerFoto from "./assets/images/header/header-foto-layer6.png"
import pots from "./assets/images/pots/teaPots.png"
import shape from './assets/images/rooms/rooms-Shape9.png'
import shakers from "./assets/images/shakers/shaker.png"
import authentics from "./assets/images/authentics/authentics.png"
// 
import fotoNOOR from "./assets/images/pots/fotoNOOR.png"
import fotoAMISHA from "./assets/images/shakers/fotoAMISHA.png"
import fotoKARINA from "./assets/images/authentics/fotoKARINA.png"
// 
import icon1 from './assets/images/footer/footer-icon1-TeaPots.png'
import icon2 from './assets/images/footer/footer-icon2-Layer39.png'
import icon3 from './assets/images/footer/footer-icon3-Layer40.png'



function App() {
  // объекты для CardCollection
  const data0 = {
    img: pots,
    alt: 'pots',
    title: 'SEVEN POTS'
  }
  const data1 = {
    img: shakers,
    alt: 'shakers',
    title: 'SHAKERS'
  }
  const data2 = {
    img: authentics,
    alt: 'authentics',
    title: 'AUTHENTICS'
  }

  // объекты для CardProduct
  const fact0 = {
    name: 'Kettle Thermo Pot',
    price: '274.50 $',
    span: 'ADD TO FAVS'
  }

  const fact1 = {
    name: 'Salt & Pepper  Grinder',
    price: '75.50 $',
    span: 'FAVED'
  }

  const fact2 = {
    name: 'Generic Oak Bowl',
    price: '87.49 $',
    span: 'FAVED copy'
  }

  // объекты для CardAdvice
  const record0 = {
    foto: fotoNOOR,
    caption: 'BY NOOR JAHAAN',
    title: 'Tea  O’Clock'
  }

  const record1 = {
    foto: fotoAMISHA,
    caption: 'BY AMISHA PATEL',
    title: 'Ebony & Ivory'
  }

  const record2 = {
    foto: fotoKARINA,
    caption: 'BY KARINA KAPOOR',
    title: 'Back to Basics'
  }

  return (
    <div className="grid-app">
      <header className="header">
        <div className="header__leftPart">
          <div className="boxTopLeft"></div>
          <div className="boxTopRight"></div>
          <div className="boxBottomLeft"></div>
          <div className="boxBottomRight"></div>
          <h3 className="price">Cork Salt & Pepper 45.50  $</h3>
        </div>
        <div className="header__rightPart">
          <img className="headerFoto"
            src={headerFoto}
            alt="#"
          />
          <p className="headerCaption">BY MATERIA & NENDO</p>
          <h2 className="headerTitle">Good</h2>
          <h2 className="headerTitle">Things come in Paris</h2>
        </div>
      </header>

      <Navigation />

      <div className="potsCollection">
        <CardCollection
          img={data0.img}
          alt={data0.alt}
          title={data0.title}
        />
      </div>
      <div className="pot">
        <CardProduct
          name={fact0.name}
          price={fact0.price}
          span={fact0.span}
        />
      </div>

      <div className="potAdvice">
        <CardAdvice
          foto={record0.foto}
          caption={record0.caption}
          title={record0.title}
        />
      </div>

      <div className="rooms">
        <div className="circle">
          <img className="circleImg"
            src={shape}
            alt={'#'}
          />
          <h3 className="circleTitle">ROOMS</h3>
        </div>
      </div>

      <div className="shaker">
        <CardProduct
          name={fact1.name}
          price={fact1.price}
          span={fact1.span}
        />
      </div>

      <div className="shakerAdvice">
        <CardAdvice
          foto={record1.foto}
          caption={record1.caption}
          title={record1.title}
        />
      </div>

      <div className="shakersCollection">
        <CardCollection
          img={data1.img}
          alt={data1.alt}
          title={data1.title}
        />
      </div>

      <div className="authenticsCollection">
        <CardCollection
          img={data2.img}
          alt={data2.alt}
          title={data2.title}
        />
      </div>

      <div className="authentic">
        <CardProduct
          name={fact2.name}
          price={fact2.price}
          span={fact2.span}
        />
      </div>

      <div className="authenticAdvice">
        <CardAdvice
          foto={record2.foto}
          caption={record2.caption}
          title={record2.title}
        />
      </div>

      <footer className="footer">
        <div className="footer__leftPart">
          <div>
            <img className="icon" src={icon1} alt={'#'} />
            <img className="icon" src={icon2} alt={'#'} />
            <img className="icon" src={icon3} alt={'#'} />
          </div>
          <p className="leftCaption">2014 WARE HOUSE, USA based company. Image right belong to their respective owners.</p>
        </div>
        <div className="footer__rightPart">
          <div className="topLeft"></div>
          <div className="topRight"></div>
          <div className="bottomLeft"></div>
          <div className="bottomRight"></div>
          <div className="boxFoto"></div>
          <div className="rightCaption">warehouse</div>
        </div >
      </footer>

    </div>
  );
}

export default App;
