import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { ROURES } from 'src/common/routes'
import Link from 'next/link'

const TopMenu: FC = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-pc_gray">
      <div className="max-w-desktop flex gap-10 justify-between">
        <div className="logo" onClick={() => router.push('/')}>
          <Image
            src="/images/healthy_logo.svg"
            alt="logo"
            width={144}
            height={100}
          />
        </div>

        {/* right header*/}
        <div className="right flex gap-2">
          {/* menu */}
          <div className="flex gap-5 items-center">
            {ROURES.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className="flex gap-2 items-center h-14 cursor-pointer"
              >
                <div
                  className={
                    'pt-1 cursor-pointer ' + (item.bagde ? ' relative' : '')
                  }
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  {item.bagde && (
                    <div className="bg-pc_orange text-white  text-xs rounded-full w-4 h-4 flex items-center justify-center -top-1 -right-1 absolute ">
                      {item.bagde}
                    </div>
                  )}
                </div>

                <div className="text-white hover:text-pc_orange text-sm">
                  {item.title}
                </div>
              </Link>
            ))}

            {/* poper menu */}
            <div className="flex gap-2 items-center h-14">
              <div className="cursor-pointer relative">
                <Image
                  src="/images/bars.svg"
                  alt="menu"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
