import s from "./Card.module.scss"

const Card = (props) => {
    return (
        <div className={s.Card}>
            <div className={s.img}>
            <img 
                src={props.img}
                alt={props.alt}
            />
            </div>
            
            <h3 className={s.title}>
                {props.title}
            </h3>
        </div>
    )
}

export default Card