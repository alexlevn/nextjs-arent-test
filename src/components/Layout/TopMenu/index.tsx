import Image from 'next/legacy/image'

const TopMenu = () => {
  const arrTopMenuItems = [
    {
      id: 1,
      name: 'Home',
      title: 'Home',
      icon: '/images/profile.svg',
      link: '/',
    },
    {
      id: 2,
      name: 'About',
      title: 'Home',
      link: '/about',
      icon: '/images/challenge.svg',
    },
    {
      id: 3,
      name: 'Contact',
      title: 'Home',
      link: '/contact',
      icon: '/images/news.svg',
    },
  ]
  return (
    <div className="w-full bg-pc_gray">
      <div className="max-w-desktop flex gap-10 my-3">
        {/* <img src = "/images/logo.png" alt = "logo" className = "w-20 h-20" /> */}
        {/* use Legacy Image in NextJs */}

        <div className="logo">
          <Image
            src="/images/healthy_logo.svg"
            alt="logo"
            width={150}
            height={100}
          />
        </div>

        <div className="flex gap-5 items-center"></div>
      </div>
    </div>
  )
}

export default TopMenu
