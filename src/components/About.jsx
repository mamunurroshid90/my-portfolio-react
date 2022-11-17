import React from 'react'

export const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400' >About</p>
                </div>
                <div>
                    <p className='text-xl mt-20' >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam facere molestias dignissimos nihil adipisci, quia quo. Nemo voluptas aperiam ex necessitatibus maxime, quis, exercitationem accusamus blanditiis unde odit eligendi ad ut, voluptate quisquam fugit tenetur cumque error harum enim. Quod esse error qui similique veniam excepturi eaque mollitia impedit sed!
                    </p>

                    <br />

                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus non distinctio at similique maiores tempora inventore eveniet repudiandae aspernatur, sunt alias, exercitationem placeat qui quod dolorum! Quae ipsum quos nobis doloremque porro autem officia cupiditate ipsam cumque blanditiis repudiandae accusantium facere, quibusdam aliquid reiciendis! Dolore quos laudantium quia itaque?</p>
                </div>
            </div>
        </div>
    )
}
