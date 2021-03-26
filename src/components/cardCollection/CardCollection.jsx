import s from "./CardCollection.module.scss"

const CardCollection = (props) => {
    return (
        <div className={s.CardCollection}>
            <img className={s.img}
                src={props.img}
                alt={props.alt}
            />
            <h3 className={s.title}>
                {props.title}
            </h3>
            <span className={s.span}>
                Collection
            </span>
        </div>
    )
}

export default CardCollection