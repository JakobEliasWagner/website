import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/style.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Jakob Elias Wagner',
  description: 'Exploring the boundary between ML and Engineering',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div id="page-container">
          <Header/>
          <div className='content-wrap'>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}

