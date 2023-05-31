import React from "react"

import { BallCanvas } from "./canvas"
import { technologies } from "@/utils/constants"
import { SectionWrapper } from "@/hoc"
const returnStyle = (total, index: number): any => {
  const isTrue = index % 2
  const style: {
    left: string
    bottom?: number
    top?: number
  } = {
    left: `${index * 25}%`,
  }
  if (isTrue) style.bottom = 0
  if (!isTrue) style.top = 0
  return style
}
//

const Tech = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between relative self-center hidden xl:block">
        <div className="relative h-[150px] w-[400px] flex flex-row flex-wrap justify-center gap-10 mr-auto mt-auto mb-auto">
          {/* {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon.src} />
        </div>
      ))} */}
          {technologies.map((technology, index) => (
            <div
              key={technology.name}
              className={`bg-tertiary rounded-[12px] py-5 px-8 h-[120px] w-[120px] -m-[35px] rotate-45 absolute flex justify-evenly items-center flex-col`}
              style={returnStyle(technologies.length, index)}
            >
              <img
                src={technology.icon.src}
                className="w-[100px] h-[100px] object-contain -rotate-45"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between relative self-center  xl:hidden">
        <div className=" flex flex-row flex-wrap justify-center gap-16 mr-auto mt-auto mb-auto">
          {technologies.map((technology, index) => {
            return (
              <div
                key={technology.name}
                className={`bg-tertiary rounded-[12px] py-5 px-8 h-[120px] w-[120px] rotate-45  -m-[10px] -mb[36px] justify-evenly items-center flex-col`}
                style={returnStyle(technologies.length, index)}
              >
                <img
                  src={technology.icon.src}
                  className="w-[100px] h-[100px] object-contain -rotate-45  "
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")
