interface ILargeButton {
    innerText: string
    loginEvent: Function
}

const LargeButton = ({ innerText, loginEvent }: ILargeButton) => {

    return (
        <button className="large-btn" onClick={() => {loginEvent()}}>
            <p className="large-btn-text">{innerText}</p>
        </button>
    )
}

export default LargeButton