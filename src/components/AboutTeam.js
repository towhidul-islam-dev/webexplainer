import React from 'react'
import PopUps from './PopUps'

const AboutTeam = () => {
  return (
    <>
        <div>
            <div className='flex items-center justify-center flex-col'>
                <p className='capitalize text-color-5 font-bold text-2xl'>our team</p>
                <h1 className='capitalize text-3xl font-bold py-6'>The People Behind Quiety</h1>
                <p className='text-gray-400 text-center max-w-2xl leading-6 text-xl'>Intrinsicly strategizes cutting-edge before interoperable applications incubate extensive
                    expertise through integrated intellectual capital.</p>
            </div>

            <div>
                <div className='w-40 h-40 rounded-full overflow-hidden member relative'>
                    <img className='w-full h-full block object-cover' src="https://unsplash.it/500/500?image=453" alt="" />

                    <PopUps />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutTeam