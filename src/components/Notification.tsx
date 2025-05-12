import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface INotification {
    message: string
    type: "error" | "success"
    visible: boolean
    closeFunc: () => void
}


const Notification = ({message, type, visible, closeFunc}: INotification) => {
    return (
        <div className={"notification-box " + type + " " + (visible ? "visible" : "")}>
            <div className="close-notification-btn" onClick={closeFunc}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
            <p className="notification-message">{message}</p>
        </div>
    )
}

export default Notification