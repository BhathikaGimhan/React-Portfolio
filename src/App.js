
import MainRouter from "./Routers/MainRouter"
import React, { useEffect, useRef, useState } from 'react'
import gsap, { Sine } from 'gsap';

const App = () => {
  const [loadingComplete,setLoadingComplete] = useState(false);
  // let loading_screen = useRef(null);
  let logo_1 = useRef(null);
  let logo_2 = useRef(null);
  let logo_3 = useRef(null);
  let logo_4 = useRef(null);
  let logo_5 = useRef(null);
  let logo_6 = useRef(null);
  const timeline = gsap.timeline();
  useEffect(()=> {
      timeline.from(logo_1, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          x: -200,
          ease: Sine.easeInOut,
      });
      timeline.from(logo_2, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          y: 200,
          ease: Sine.easeInOut,
      },
      "-=0.2");
      timeline.from(logo_3, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          x: 200,
          ease: Sine.easeInOut,
      },
      "-=0.2");
      timeline.from(logo_4, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          y: -200,
          ease: Sine.easeInOut,
      },
      "-=0.2");
      timeline.from(logo_5, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          x: -200,
          ease: Sine.easeInOut,
      },
      "-=0.2");
      timeline.from(logo_6, {
          opacity: 0,
          duration: 0.5,
          skew: 10,
          y: 200,
          ease: Sine.easeInOut,
      },
      "-=0.2");
      timeline.to(logo_2, {
          opacity: 0,
          duration: 0.5,
          ease: Sine.easeInOut,
          x: -200,
      });
      timeline.to(logo_5, {
          opacity: 0,
          duration: 0.5,
          ease: Sine.easeInOut,
          x: 300,
      }, "-=.2");
      timeline.to(logo_3, {
          opacity: 0,
          duration: 0.5,
          ease: Sine.easeInOut,
          x: -300,
      }, "-=.2");
      timeline.to(logo_6, {
          opacity: 0,
          duration: 0.5,
          ease: Sine.easeInOut,
          x: 300,
      }, "-=.2");

      timeline.to(logo_4, {
          opacity: 0,
          duration: 0.5,
          ease: Sine.easeInOut,
          x: -300,
      }, "-=.2");
      timeline.to(logo_1, {
          fontSize: "0",
          ease: Sine.easeInOut,
      });
      timeline.eventCallback('onComplete', () => {
          setLoadingComplete(true);
        })

  })
  return (
    <>
    {loadingComplete ? (
      <MainRouter />
    ) : (
      <div className='text-[#e7e7e7] uppercase'>
        <div className='fixed top-0 left-0 h-screen w-full z-50 bg-[#101010]'>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_1 = el)} className='font-semibold text-center text-[#e7e7e7] text-[6vmax] md:text-[10.1vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_2 = el)} className='font-semibold text-center text-[#ff3838] text-[6.1vmax] md:text-[10.2vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_3 = el)} className='font-semibold text-center text-[#4dff2a] text-[6.2vmax] md:text-[10.3vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_4 = el)} className='font-semibold text-center text-[#1727ff] text-[6.3vmax] md:text-[10.4vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_5 = el)} className='font-semibold text-center text-[#ff2bca] text-[6.4vmax] md:text-[10.5vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
            <div className='flex absolute justify-center items-center w-full h-screen'>
                <div ref={(el) => (logo_6 = el)} className='font-semibold text-center text-[#9e36ff] text-[6.5vmax] md:text-[10.6vmax] mix-blend-difference laeding-none'>
                    Hello World
                </div>
            </div>
        </div>
    </div>
    )}

    </>
    
  )
}

export default App