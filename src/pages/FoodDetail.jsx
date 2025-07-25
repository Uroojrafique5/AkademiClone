"use client"

import { Star, MoreHorizontal } from "lucide-react"

export default function FoodDetail() {
  const ingredients = [
    "2 tablespoons butter, softened, divided",
    "1 teaspoon minced fresh parsley",
    "1/2 teaspoon minced garlic",
    "1/4 teaspoon reduced-sodium soy sauce",
    "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
    "1/8 teaspoon salt",
    "1/8 teaspoon pepper",
  ]

  const nutrition = [
    { label: "Calories", value: "217." },
    { label: "Water", value: "61%" },
    { label: "Protein", value: "26.1 grams." },
    { label: "Carbs", value: "0 grams." },
    { label: "Sugar", value: "0 grams." },
    { label: "Fiber", value: "0 grams." },
    { label: "Fat", value: "11.8 grams." },
  ]

  const comments = [
    {
      id: 1,
      name: "Samantha W.",
      time: "5 days ago",
      text: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.",
    },
    {
      id: 2,
      name: "Karen Hope",
      time: "5 days ago",
      text: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.",
    },
    {
      id: 3,
      name: "Tony Soap",
      time: "5 days ago",
      text: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur.",
    },
  ]

  return (
    <div className="min-h-screen p-4 lg:p-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6 bg-white rounded-lg relative">
          <div className="flex justify-end absolute right-2 top-10">
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
          </div>
          <div className="rounded-2xl p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="w-full max-w-[361px] h-[240px] lg:h-[240px] bg-[#C1BBEB] rounded-2xl mx-auto lg:mx-0"></div>
              <div className="space-y-4">
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-[#303972] mb-3">Beef Steak with Fried Potato</h1>
                  <span className="bg-[#4D44B5] w-32 h-10 text-white px-4 py-2 rounded-full text-sm font-medium flex justify-center items-center">
                    Lunch
                  </span>
                </div>
                <p className="text-[#A098AE] text-sm lg:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-8 pt-6 w-full max-w-[800px] mx-auto">
              <div className="text-center lg:text-left space-y-1">
                <p className="text-[#A098AE] text-sm lg:text-lg font-normal">Rating</p>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  <span className="text-lg lg:text-2xl font-bold text-gray-900">4.9</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3 lg:-ml-14">
                  <img src="src/assets/chart.png" alt="Chart" className="w-[40px] h-[35px] lg:w-[60px] lg:h-14" />
                  <div className="flex flex-col">
                    <span className="text-lg lg:text-2xl font-bold text-gray-900">1,456</span>
                    <p className="text-[#A098AE] text-xs lg:text-lg font-normal w-full lg:w-[120px]">Total Orders</p>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
                  <img src="src/assets/arrow-side.png" alt="Interest" className="w-8 lg:w-12" />
                  <div className="flex flex-col">
                    <span className="text-lg lg:text-2xl font-bold text-gray-900">26%</span>
                    <p className="text-[#A098AE] text-xs lg:text-lg font-normal">Interest</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start items-center">
                <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                  <svg className="w-12 h-12 lg:w-16 lg:h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#8b5cf6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${50 * 1.75} ${100 * 1.75}`}
                      strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs lg:text-sm font-bold text-gray-900">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 w-full max-w-[500px]  lg:mx-0">
              <h2 className="font-bold text-[#303972] text-xl lg:text-2xl mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#A098AE] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#A098AE] font-normal text-sm lg:text-[18px] leading-6 lg:leading-8">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 w-full max-w-[500px] mx-auto lg:mx-0 ">
              <h2 className="font-bold text-[#303972] text-xl lg:text-2xl mb-4">Nutrition:</h2>
              <ul className="space-y-3">
                {nutrition.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#A098AE] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#A098AE] font-normal text-sm lg:text-[18px] leading-6 lg:leading-8">
                      <span className="font-medium">{item.label}:</span> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1">
          <div className="rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-[#303972]">Student Comments</h2>
            </div>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-5 p-4 lg:p-6 rounded-3xl min-h-[200px] lg:h-[270px] bg-white">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <img src="src/assets/Quote.png" alt="quote" className="h-5 w-5" />
                  </div>
                  <p className="text-[#303972] w-full max-w-[270px] text-sm leading-relaxed">{comment.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center"></div>
                    <div>
                      <p className="font-medium text-[#303972] text-sm">{comment.name}</p>
                      <p className="text-[#A098AE] text-xs">{comment.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
