import s from "./Navigation.module.scss"
// 
import navIcon0 from './../../assets/images/navigation/navIcon0.png'
import navIcon1 from './../../assets/images/navigation/navIcon1.png'
import navIcon2 from './../../assets/images/navigation/navIcon2.png'
import navIcon3 from './../../assets/images/navigation/navIcon3.png'
import navIcon4 from './../../assets/images/navigation/navIcon4.png'
import navIcon5 from './../../assets/images/navigation/navIcon5.png'
import navIcon6 from './../../assets/images/navigation/navIcon6.png'
// 
import Card from "./card/Card"

const Navigation = (props) => {

    const data0 = {
        img: navIcon0,
        alt: 'BOWLS  &  PANS',
        title: 'BOWLS  &  PANS'
    }
    const data1 = {
        img: navIcon1,
        alt: 'CUPS',
        title: 'CUPS'
    }
    const data2 = {
        img: navIcon2,
        alt: 'DISPENSERS',
        title: 'DISPENSERS'
    }
    const data3 = {
        img: navIcon3,
        alt: 'FURNITURE',
        title: 'FURNITURE'
    }
    const data4 = {
        img: navIcon4,
        alt: 'TABLEWARE',
        title: 'TABLEWARE'
    }
    const data5 = {
        img: navIcon5,
        alt: 'CUTLERY',
        title: 'CUTLERY'
    }
    const data6 = {
        img: navIcon6,
        alt: 'PLANTS & DECO',
        title: 'PLANTS & DECO'
    }

    return (
        <div className={s.navigation}>
            <div className={s.nav1}>WAREHOUSE</div>
            <div className={s.nav2}></div>
            <div className={s.nav3}>
                <Card
                    img={data0.img}
                    alt={data0.alt}
                    title={data0.title}
                />
            </div>
            <div className={s.nav4}>
                <Card
                    img={data1.img}
                    alt={data1.alt}
                    title={data1.title}
                />
            </div>
            <div className={s.nav5}></div>
            <div className={s.nav6}>
                <Card
                    img={data2.img}
                    alt={data2.alt}
                    title={data2.title}
                />
            </div>
            <div className={s.nav7}>
                <Card
                    img={data3.img}
                    alt={data3.alt}
                    title={data3.title}
                />
            </div>
            <div className={s.nav8}></div>
            <div className={s.nav9}>
                <Card
                    img={data4.img}
                    alt={data4.alt}
                    title={data4.title}
                />
            </div>
            <div className={s.nav10}>
                <Card
                    img={data5.img}
                    alt={data5.alt}
                    title={data5.title}
                />
            </div>
            <div className={s.nav11}></div>
            <div className={s.nav12}>
                <Card
                    img={data6.img}
                    alt={data6.alt}
                    title={data6.title}
                />
            </div>
            <div className={s.nav13}></div>
        </div >
    )
}

export default Navigation




