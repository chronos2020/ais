import Countdown from './Components/Countdown'
import React, {useState, useEffect} from 'react'

const majors = ['All Jurusan', 'Ilmu Komputer', 'Sistem Informasi']
const returnColor = (jurusan) => {
    switch(jurusan) {
        case '0':
            return 'text-purple-500'
        case '1':
            return 'text-pink-500'
        case '2':
            return 'text-blue-500'
    }
}


const Card = ({data, title, subtitle, description, endDate, jurusan, materi, link_scele, kelas, saveHandler, isSaved, }) => {
    let [saved, setSaved] = useState(false)
    let [date, setDate] = useState(new Date(endDate).toLocaleString('en-GB'))

    useEffect(async() => {
        setSaved(await isSaved(data))
    }, [isSaved])

    return (
            <div className="flex flex-col row-span-2 rounded-lg bg-gray-200 dark:bg-gray-900 shadow-lg transition-background select-none" data-aos="fade-up">
                <div className="w-min-full rounded-lg rounded-b-none bg-gray-200 dark:bg-gray-900 p-5 select-none transition" id="card-head">
                <p className={`${returnColor(jurusan)} font-sans font-medium text-md transition`} id="card-subsubtitle">{majors[jurusan]}</p>
                    <p className="dark:text-white font-sans font-bold text-xl transition" id="card-title">{title}</p>
                    <p className="dark:text-white font-sans font-medium text-md transition" id="card-subtitle">{subtitle} - {kelas}</p>
                    <p className="dark:text-white font-sans font-medium text-sm transition" id="card-subtitle">{materi}</p>
                    <p className="text-red-600 dark:text-red-500 font-sans font-medium text-sm transition" id="card-subtitle">Deadline: {date}</p>
                </div>

                <div className="p-5 pb-5 bg-gray-200 dark:bg-gray-900 rounded-md rounded-t-none rounded-b-none flex-grow transition select-none">
                    <p className="dark:text-white font-sans font-light text-sm text-justify transition">{description}</p>
                </div>

                <Countdown endTime={endDate} />
                <a href={link_scele ? link_scele : '#'} target={link_scele ? "__blank" : ""} className={`${link_scele ? '' : 'cursor-not-allowed pointer-events-none'} rounded-b-none`}>
                    <div className={`px-5 select-none py-3 bg-gray-200 dark:bg-gray-900 ${link_scele ? 'dark:hover:bg-gray-800 hover:bg-gray-300' : ''} rounded-none text-center flex justify-center transition`}>
                        <p className={`${link_scele ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'} transition font-sans font-medium text-sm text-justify`}>Link Tugas</p>   
                    </div>
                </a>
                <div className="px-5 py-3 select-none cursor-pointer bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md rounded-t-none text-center flex justify-center transition"  onClick={() => saveHandler(data)}>
                    { saved ? <p className="text-red-600 dark:text-red-500 transition font-sans font-medium text-sm text-justify">Remove From Saved</p> : <p className="text-blue-600 dark:text-blue-400 transition font-sans font-medium text-sm text-justify">Save</p>}
                </div>
            </div>
        
    )
}

export default Card