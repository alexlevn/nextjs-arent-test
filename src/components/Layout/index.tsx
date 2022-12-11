import Footer from './Footer'
import TopMenu from './TopMenu'

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="layout">
      <div className="flex flex-col">
        <TopMenu />
        <div className="w-full">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
