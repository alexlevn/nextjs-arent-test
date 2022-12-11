/* eslint-disable @next/next/no-img-element */
const TopPage = () => {
  return (
    <div>
      <div className="flex ">
        <div className="w-1/3">
          <img
            src="/images/main_photo.png"
            alt="Legacy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-pc_dark_gray w-2/3 flex items-center justify-center">
          <img src="/images/main_graph.png" alt="Legacy" className="" />
        </div>
      </div>
    </div>
  )
}
export default TopPage
