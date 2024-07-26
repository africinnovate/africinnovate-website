'use client'

import { useState, createContext, useContext } from 'react'

export interface IThemeProviderProps {
  children: React.ReactNode
}

interface ModalContextData {
  showModal: boolean
  course: string | undefined
  toggleModal: () => void
  setCourseHandler: (value: string | undefined) => void
}

const ModalContext = createContext<ModalContextData>({
  showModal: false,
  course: undefined,
  toggleModal: () => {},
  setCourseHandler: () => {}
})

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [course, setCourse] = useState<string | undefined>(undefined)

  const toggleModal = () => {
    setShowModal((prevState) => (prevState === true ? false : true))
  }

  const setCourseHandler = (value: string | undefined) => {
    setCourse(value)
  }

  return (
    <ModalContext.Provider value={{ showModal, course, toggleModal, setCourseHandler }}>
      <div>{children}</div>
    </ModalContext.Provider>
  )
}
