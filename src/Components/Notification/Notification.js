import {BookmarkOutline} from '@graywolfai/react-heroicons'
import React, {useEffect, useState} from 'react'


const Notification = ({notificationShown}) => {
    let [shown, setShown] = useState(false)
    let [timer, setTimer] = useState()

    useEffect(() => {
        if (notificationShown === true) {
            setShown(true)
            setTimer(
                setTimeout(() => {
                    setShown(false)
                }, 2000)
            )
            clearTimeout(timer);        
        }
    }, [notificationShown])

    return (
        <div className="fixed right-0 my-auto top-1/4 z-50 overflow-hidden">
            <div className={`flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 transition-all ease-in-out duration-500 transform ${shown ? 'translate-x-0' : 'translate-x-full' }`}>
                <div class="text-green-500 mr-3">
                    <BookmarkOutline className={`h-8 w-8 text-black dark:text-white mx-2 my-2 cursor-pointer block transition    `} />
                </div>
                <div class="text-white max-w-xs ">
                    Tugas Berhasil Disimpan
                </div>
            </div>
        </div>        
    )
}

export default Notification