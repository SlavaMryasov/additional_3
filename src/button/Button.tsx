type ButtonTypeProps = {
    name: string
    onClick: ()=> void
}

export const Button: React.FC<ButtonTypeProps> = (props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}