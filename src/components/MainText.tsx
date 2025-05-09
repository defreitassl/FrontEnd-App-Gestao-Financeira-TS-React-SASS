interface IMainText {
    text: string
}

const MainText = ({ text }: IMainText) => {

    return (
        <div className="main-text">
            <p>{text}</p>
        </div>
    )
}

export default MainText