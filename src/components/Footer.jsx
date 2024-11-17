import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-10'>
            <div className='basis-1/2'>
               <h1 className='text-[12rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["Instagram","twiter (x?)", "LinkedIn"].map((item,index) => <a className='block mt-3 capitalize text-zinc-500'>{item}</a> )}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                    {["Instagram","twiter (x?)", "LinkedIn"].map((item,index) => <a className='block mt-3 capitalize text-zinc-500'>{item}</a> )}
                </div>
                <div className='basis-1/2'>
                    <p>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img src="" className='w-32' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer