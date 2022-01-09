import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stroies from './Stroies'

function Feed() {
    return (
        <div className="flex flex-grow h-screen pb-44 pt-6 mt-4 xl:mr-40 overflow-y-auto">
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stroies />
                <InputBox />
                <Posts />
            </div>
        </div>
    )
}

export default Feed

