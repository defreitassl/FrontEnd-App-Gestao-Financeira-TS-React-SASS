import { createContext, useRef, useState } from "react"
import Notification from "../components/Notification"


interface NotificationContextType {
  showNotification: (
    message: string, 
    error?: string | undefined
  ) => void
}


export const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {}
})


export const NotificationProvider = ({ children }: any) => {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [type, setType] = useState<"success" | "error">("success")
  const timeoutRef = useRef<number | null>(0)

  const showNotification = (message: string, error?: string | undefined) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setMessage(message)
    setVisible(true)

    if(error) {
        setType("error")
    } else {
        setType("success")
    }

    timeoutRef.current = setTimeout(() => {
      setVisible(false)
      timeoutRef.current = null
    }, 3000)
  }

  const closeNotification = () => {
    setVisible(false)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification message={message} type={type} visible={visible} closeFunc={closeNotification}/>
    </NotificationContext.Provider>
  )
}
