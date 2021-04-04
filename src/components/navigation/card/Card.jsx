import s from "./Card.module.scss"

const Card = (props) => {
    return (
        <figure className={s.Card}>

            <img className={s.img}
                src={props.img}
                alt={props.alt}
            />

            <figcaption className={s.title}>
                {props.title}
            </figcaption>

        </figure>
    )
}

export default Card