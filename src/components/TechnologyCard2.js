import React from 'react'


const TechnologyCard2 = ({Icon1, Icon2, Icon3, Icon4, Icon5, Illustration,IconTitle1,IconTitle2,IconTitle3,IconTitle4,IconTitle5, Title, Description, Technology}) => {
  return (
    <>
        <div className='flex items-center justify-center flex-col'>
            <div className='max-w-7xl w-11/12 grid grid-cols-technology-card gap-12 lg:gap-28 place-items-center my-28 p-6 sm:p-0'>
                <div className='max-w-2xl'>
                    <img loading='lazy' className='w-full block object-cover' src={Illustration} alt="" />
                </div>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>{Title}</h2>
                    <p className='text-left text-xl capitalize'>{Description}</p>
                    <p className='text-left text-color-3 my-12' >{Technology}</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <div className='flex items-center flex-col'>
                            <Icon1 className='text-6xl lg:text-8xl font-bold'/>
                            <h3 className='text-base font-bold text-gray-400'>{IconTitle1}</h3>
                        </div>
                        <div className='flex items-center flex-col'>
                            <Icon2 className='text-6xl lg:text-8xl font-bold' />
                            <h3 className='text-base font-bold text-gray-400'>{IconTitle2}</h3>
                        </div>
                        <div className='flex items-center flex-col'>
                            <Icon3 className='text-6xl lg:text-8xl font-bold' />
                            <h3 className='text-base font-bold text-gray-400'>{IconTitle3}</h3>
                        </div>
                        <div className='flex items-center flex-col'>
                            <Icon4 className='text-6xl lg:text-8xl font-bold' />
                            <h3 className='text-base font-bold text-gray-400'>{IconTitle4}</h3>
                        </div>
                        <div className='flex items-center flex-col'>
                            <Icon5 className='text-6xl lg:text-8xl font-bold' />
                            <h3 className='text-base font-bold text-gray-400'>{IconTitle5}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TechnologyCard2