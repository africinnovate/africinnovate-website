import { AppProps } from 'next/app'
import AppHeader from '@/components/ui/AppHeader'
import AppFooter from '@/components/ui/AppFooter'
import MyApp from '@/app/_app'
import { ModalProvider } from '@/contexts/ModalProvider'
import '../app/globals.css'
import FormModal from '@/components/FormModal'
import { Toaster } from 'react-hot-toast'

const PageApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="overflow-x-hidden text-app-text-color">
      <ModalProvider>
        <AppHeader />
        <Component {...pageProps} />
        <AppFooter />
        <FormModal />
        <MyApp />
        <Toaster />
      </ModalProvider>
    </main>
  )
}

export default PageApp
