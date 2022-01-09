import React from 'react'

function Post({ name, postImage, message, timestamp, image }) {
    console.log('name: ', name);
    return (
        <div>
            <h1 className='text-black'>APOST</h1>
        </div>
    )
}

export default Post
