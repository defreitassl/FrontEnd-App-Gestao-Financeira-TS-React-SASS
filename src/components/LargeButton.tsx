interface ILargeButton {
    innerText: string
}

const LargeButton = ({ innerText }: ILargeButton) => {

    return (
        <button className="large-btn">
            <p className="large-btn-text">{innerText}</p>
        </button>
    )
}

export default LargeButton