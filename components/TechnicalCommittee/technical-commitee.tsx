import React from 'react'
import { BackgroundGradientDemo } from '../BackgroundGradient/background-gradient-demo'

const TechnicalCommittee = () => {
  return (
    <div className='mx-20 flex whitespace-nowrap gap-20 flex-wrap justify-center items-center'>
    <BackgroundGradientDemo name="Yuvraj Chauhan" post='Technical Committee' imageSrc='/images/Team/Yuvraj.jpg' instagramHandle='yuvi.not.nice' email='202211098' whatsapp='8511538354' linkedinHandle='yuvraj-chauhan-1a47b4272'/>
    <BackgroundGradientDemo name="Pragya Pranati" post='Technical Committee' imageSrc='/images/Team/Pragya.jpg' instagramHandle='pragyapranati' email='202211068' whatsapp='9334696517' linkedinHandle='pragya-pranati-85157a254'/>
    <BackgroundGradientDemo name="Urvish Joshi" post='Technical Committee' imageSrc='/images/Team/Urvish.jpg' instagramHandle='urvishjoshi_19' email='202211034' whatsapp='' linkedinHandle='urvishjoshi19'/>
    <BackgroundGradientDemo name="Fenil Jikadara" post='Technical Committee' imageSrc='/images/Team/Fenil.jpg' instagramHandle='imfeniljikadara' email='202211033' whatsapp='' linkedinHandle='imfeniljikadara'/>
    <BackgroundGradientDemo name="Varshini Varma" post='Technical Committee' imageSrc='/images/Team/Varshini.jpg' instagramHandle='pragyapranati' email='202211054' whatsapp='' linkedinHandle='varshini-varma-a3a398290'/>
    
  </div>
  )
}

export default TechnicalCommittee