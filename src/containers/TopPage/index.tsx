/* eslint-disable @next/next/no-img-element */
import Chart from 'src/components/Chart'
import MealList from 'src/components/MealList'

const TopPage = () => {
  const arrItems = [
    { id: 1, title: 'Morning', image: '/images/icon_knife.svg' },
    { id: 2, title: 'Lunch', image: '/images/icon_knife.svg' },
    { id: 3, title: 'Dinner', image: '/images/icon_knife.svg' },
    { id: 4, title: 'Slact', image: '/images/icon_cup.svg' },
  ]
  return (
    <div>
      <div className="flex flex-grow">
        <div className="img">
          <img
            src="/images/main_photo.png"
            alt="Legacy"
            className="object-cover"
          />
        </div>
        <Chart />
      </div>

      <div className="max-w-desktop ">
        <div className="flex justify-around mt-10">
          {arrItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center  btn-polygon h-36 w-36 cursor-pointer"
              style={{
                clipPath:
                  'polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)',
              }}
            >
              <img src={item.image} alt="Legacy" />
              <p className="btn-label text-sm mt-2">{item.title}</p>
            </div>
          ))}
        </div>

        <MealList />
      </div>
    </div>
  )
}
export default TopPage
