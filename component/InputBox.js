import { useSession } from 'next-auth/react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { db } from '../firebase'
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function InputBox() {
    const { data: session, loading } = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)
    const storage = getStorage();

    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            image: session.user.image,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const storageRef = ref(storage, `posts/${doc.id}`)
                const uploadTask = uploadBytes(storageRef, imageToPost).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then(function (downloadURL) {
                        db.collection('posts').doc(doc.id).set({
                            postImage: downloadURL
                        }, { merge: true })
                    })
                }).catch((error) => {
                    console.error('Upload failed', error);
                });

                removeImage();
            }
        })

        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <img className='rounded-full bg-blue-50'
                    src={session.user.image}
                    width={40}
                    heigth={40}
                    layout="fixed"
                />

                <form className='flex flex-1'>
                    <input ref={inputRef} className="rounded-full bg-gray-100 flex-grow px-5 focus:outline-none p-4" type="text" placeholder={`what's on your mind, ${session.user.name}?`} />

                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className='flex flex-col cursor-pointer filter hover:brightness-110 transition duration-150 transform hover:scale-105'>
                        <img src={imageToPost} alt="" className='h-10 object-contain' />
                        <p className='text-xl text-red-500 text-center'>Remove</p>
                    </div>
                )}
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>

                <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filePickerRef} hidden type="file" onChange={addImageToPost} />
                </div>

                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xl:text-base'>Felling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
