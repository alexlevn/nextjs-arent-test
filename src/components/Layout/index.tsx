import Footer from './Footer'
import TopMenu from './TopMenu'

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="layout">
      <TopMenu />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
