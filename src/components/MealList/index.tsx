/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { IMeal } from './interface'

const meals: IMeal[] = [
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_01.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_02.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_03.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_04.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_05.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_06.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_07.png',
  },
  {
    name: '05.21.Morning',
    image: '/images/meals/meal_08.png',
  },
]

const MealList = () => {
  const [data, setData] = useState<IMeal[]>(meals)

  return (
    <>
      <div className="mt-10 grid grid-cols-4 gap-2">
        {data.map((meal, index) => (
          <div key={index} className=" w-full cursor-pointer">
            <img src={meal.image} alt="Legacy" className="w-full" />
          </div>
        ))}
      </div>

      <div
        className="flex justify-center my-10"
        onClick={() => {
          setData([...data, ...meals])
        }}
      >
        <div className="btn-load-more">記録をもっと見る</div>
      </div>
    </>
  )
}

export default MealList
