import React from 'react'
import MainCrosel from '../../component/HomeCrosel/MainCrosel'
import HomeSectionCarosel from '../../component/HomeSectionCard/HomeSectionCarosel/HomeSectionCarosel'

const Homepage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default Homepage