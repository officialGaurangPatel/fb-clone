import { useSession } from 'next-auth/react'

function InputBox() {

    const sendPost = (e) => {
        e.preventDefault();
    }
    const { data: session, loading } = useSession()
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <image classname='rounded-full bg-blue-50'
                    src={session.user.image}
                    width={40}
                    heigth={40}
                    layout="fixed"
                />

                <form className='flex flex-1'>
                    <input className="rounded-full bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`what's on your mind, ${session.user.name}?`} />

                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InputBox
