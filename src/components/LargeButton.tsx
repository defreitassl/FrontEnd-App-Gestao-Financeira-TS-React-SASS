interface ILargeButton {
    innerText: string
    event: Function
}

const LargeButton = ({ innerText, event }: ILargeButton) => {

    return (
        <button className="large-btn" onClick={() => {event()}}>
            <p className="large-btn-text">{innerText}</p>
        </button>
    )
}

export default LargeButton