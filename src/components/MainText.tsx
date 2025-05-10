interface IMainText {
    text: string
    alignLeft?: boolean
}

const MainText = ({ text, alignLeft=false }: IMainText) => {

    return (
        <div className={alignLeft ? "main-text align-left" : "main-text"}>
            <p>{text}</p>
        </div>
    )
}

export default MainText