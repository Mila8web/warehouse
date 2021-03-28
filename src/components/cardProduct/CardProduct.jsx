import s from "./CardProduct.module.scss"

// 
import like from "./../../assets/images/like.png"

const CardProduct = (props) => {

    return (
        <div className={s.CardProduct}>

            <h3 className={s.name}>
                {props.name}
            </h3>
            <p className={s.price}>
                {props.price}
            </p>
            <div className={s.wrapper}>
                <img className={s.like}
                    src={like}
                    alt="like"
                />
                <span className={s.span}>
                    {props.span}
                </span>
            </div>
        </div>
    )
}

export default CardProduct