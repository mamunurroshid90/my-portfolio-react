import React from 'react';

export const Experience = () => {

    const techs = [
        {
            id: 1,
            src: '/assets/html.png',
            title: 'HTML',
            Style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: '/assets/css.png',
            title: 'Css',
            Style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: '/assets/javascript.png',
            title: 'JavaScript',
            Style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: '/assets/react.png',
            title: 'react',
            Style: 'shadow-sky-600'
        },
        {
            id: 5,
            src: '/assets/tailwind.png',
            title: 'Tailwind',
            Style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: '/assets/Bootstrap.png',
            title: 'Bootstrap',
            Style: 'shadow-blue-400'
        },
        {
            id: 7,
            src: '/assets/netlify.png',
            title: 'netlify',
            Style: 'shadow-sky-400'
        },
        {
            id: 8,
            src: '/assets/github.png',
            title: 'GitHub',
            Style: 'shadow-gray-500'
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full       h-screen   py-32'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className=''>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologist I have worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  px-12 sm:px-0'>

                    {
                        techs.map(({ id, src, title, Style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${Style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
