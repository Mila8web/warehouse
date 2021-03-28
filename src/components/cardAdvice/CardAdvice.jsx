import s from "./CardAdvice.module.scss"

const CardAdvice = (props) => {

    return (
        <div className={s.CardAdvice}>
            <img className={s.foto}
                src={props.foto}
                alt={'#'}
            />

            <p className={s.caption}>
                {props.caption}
            </p>

            <h3 className={s.title}>
                {props.title}
            </h3>
        </div>
    )
}

export default CardAdvice




