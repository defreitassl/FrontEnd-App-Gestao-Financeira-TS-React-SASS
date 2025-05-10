interface IMainText {
    text: string
    alignLeft?: boolean
}

const MainText = ({ text, alignLeft=false }: IMainText) => {

    return (
        <div className={alignLeft ? "main-title align-left" : "main-title"}>
            <p>{text}</p>
        </div>
    )
}

export default MainText