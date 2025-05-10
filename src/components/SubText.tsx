interface ISubText {
    text: string
}

const SubText = ({ text }: ISubText) => {

    return (
        <div className="sub-title">
            <p>{text}</p>
        </div>
    )
}

export default SubText