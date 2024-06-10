import { Dispatch, SetStateAction, createContext, ReactNode, useState } from "react"

interface AttendContextType {
  state: {
    type: string
    attend: string
    name: string
    eat: string
  }
  actions: {
    setType: Dispatch<SetStateAction<string>>
    setAttend: Dispatch<SetStateAction<string>>
    setName: Dispatch<SetStateAction<string>>
    setEat: Dispatch<SetStateAction<string>>
  }
}

const AttendContext = createContext<AttendContextType>({
  state: {
    type: 'groom',
    attend: 'ok',
    name: '',
    eat: 'yes',
  },
  actions: {
    setType: () => {},
    setAttend: () => {},
    setName: () => {},
    setEat: () => {},
  }
})

const AttendProvider = ({ children }: { children: ReactNode}) => {
  const [type, setType] = useState('groom')
  const [attend, setAttend] = useState('ok')
  const [name, setName] = useState('')
  const [eat, setEat] = useState('yes')

  const value = {
    state: { type, attend, name, eat },
    actions: { setType, setAttend, setName, setEat }
  }

  return (
    <AttendContext.Provider value={value}>{children}</AttendContext.Provider>
  )
}

export { AttendProvider }
export default AttendContext