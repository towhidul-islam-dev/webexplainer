import React from 'react'
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer_container'>
        <div className='align_card stack_card'>
            <div>
                <h2 className='text-left capitalize text-5xl font-extrabold'>have an idea?</h2>
                <p className='text-light capitalize mt-4 text-left'>let's make someting together. drop a line to....</p>
            </div>
            <div>
                <button className='stack_button'>let's talk</button>
            </div>
        </div>
        <div className='footer_card_container'>
            <div className='footer_card'>
                <div className='w-20 flex items-start mb-12'>
                    <img src={Logo} alt="" className='text-3xl' /> 
                </div>
                <p className='text-left'>Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate purposes of worldwide businesses.</p>
            </div>
            <div className='footer_card'>
                <h2 className='footer_title'>social links</h2>
                <div className='footer_links' >
                    <li>
                        <Link>facebook</Link>
                    </li>
                    <li>
                        <Link>twitter</Link>
                    </li>
                    <li>
                        <Link>linkedin</Link>
                    </li>
                    <li>
                        <Link>behance</Link>
                    </li>
                </div>
            </div>
            <div className='footer_card'>
                <h2 className='footer_title'>what we do</h2>
                <div className='footer_links'>
                    <li>
                        <Link>web development</Link>
                    </li>
                    <li>
                        <Link>app development</Link>
                    </li>
                    <li>
                        <Link>UI/UX design</Link>
                    </li>
                    <li>
                        <Link>backend development</Link>
                    </li>
                </div>
            </div>
            <div className='footer_card'>
                <h2 className='footer_title'>helpful links</h2>
                <div className='footer_links'>
                    <li>
                        <Link>about</Link>
                    </li>
                    <li>
                        <Link>contact us</Link>
                    </li>
                    <li>
                        <Link>privacy policy</Link>
                    </li>
                    <li>
                        <Link>terms & condition</Link>
                    </li>
                </div>
            </div>
        </div>
        <div className='footer_copyright_container'>
            <p className='text-white font-bold'>Copyright © 2022 Web Explainer</p>
        </div>
    </div>
    </>
  )
}

export default Footer
/* 
#14342B
#60935D
#BAB700
#BBDFC5
#FF579F
*/