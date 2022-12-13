import React from 'react'


const AboutCard = () => {
  return (
    <>
        <div className='flex items-center justify-center flex-col'>
            <div className='max-w-7xl w-11/12 lg:w-full grid grid-cols-technology-card gap-12 lg:gap-28 place-content-start my-40 p-6 sm:p-0'>
                <div className='grid grid-cols-about-exp gap-6 mt-8 w-full'>
                    <div className='exp_card'>
                        <h2 className='exp_title'>142+</h2>
                        <h3 className='exp_sub_title'>active users</h3>
                    </div>
                    <div className='exp_card text-teal-700'>
                        <h2 className='exp_title'>1+</h2>
                        <h3 className='exp_sub_title'>teame members</h3>
                    </div>
                    <div className='exp_card text-indigo-600'>
                        <h2 className='exp_title'>3 Years</h2>
                        <h3 className='exp_sub_title'>in working</h3>
                    </div>
                    <div className='exp_card'>
                        <h2 className='exp_title text-blue-700'>3+</h2>
                        <h3 className='exp_sub_title'>clients worldwide</h3>
                    </div>
                    <div className='exp_card text-cyan-500'>
                        <h2 className='exp_title'>45+</h2>
                        <h3 className='exp_sub_title'>active projects completed</h3>
                    </div>
                </div>
                <div className='max-w-2xl'>
                    <p className='text-left text-color-5 font-semibold my-12' >Our Story</p>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>A Great Story Starts with a Friendly Team</h2>
                    <p className='text-left text-xl capitalize'>Globally e-enable principle-centered e-business before dynamic quality vectors cross-media materials before proactive outsourcing leverage other's vertical technology leadership.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutCard;