import s from "./CardProduct.module.scss"

// 
import like from "./../../assets/images/like.png"
import product from "./../../assets/images/pots/pot-img-Layer27.png"
import foto from "./../../assets/images/pots/pot-foto-Layer11.png"


const CardProduct = (props) => {
   
    return (
        <div className={s.CardProduct}>

            <div>
                <h3 className={s.name}>
                Kettle Thermo Pot
                </h3>
                <p className={s.price}>
                274.50 $
                </p>
                <div className={s.wrapper}>
                    <img className={s.like}
                            src={like} 
                            alt="like" 
                    />
                    <span className={s.span}>
                    ADD TO FAVS
                    </span>
                </div>
            </div>

            <img className={s.img}
                src={product}
                alt={props.alt}
            />

            <div>
                <div className={s.inner}>
                <img className={s.foto}
                        src={foto} 
                        alt={props.foto}
                />
                </div>
                
                <p className={s.caption}>
                Kettle Thermo Pot
                </p>
                <h3 className={s.title}>
                Tea  O’Clock 
                </h3>
            </div>

        </div>
    )
}

export default CardProduct