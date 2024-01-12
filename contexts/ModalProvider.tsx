'use client'

import { useState, createContext, useContext } from 'react'

export interface IThemeProviderProps {
  children: React.ReactNode;
}

interface ModalContextData {
  showModal: boolean
  toggleModal: () => void
}

const ModalContext = createContext<ModalContextData>({
  showModal: false,
  toggleModal: () => {}
})

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider: React.FC<IThemeProviderProps> = ({ children } ) => {
  const [showModal, setShowModal] = useState(true)


  const toggleModal = () => {
    setShowModal((prevState) => (prevState === true ? false : true));
  };

  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      <div>{children}</div>
    </ModalContext.Provider>
    
  );
};