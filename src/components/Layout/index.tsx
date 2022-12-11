import Footer from './Footer'
import TopMenu from './TopMenu'

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="layout">
      <TopMenu />
      <div className="w-full mt-20">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
