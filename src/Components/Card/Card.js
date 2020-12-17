import Countdown from './Components/Countdown'
import React, {useState} from 'react'

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


const Card = ({title, subtitle, description, endDate, jurusan, materi}) => {
    return (
            <div className="flex flex-col row-span-2 rounded-lg bg-gray-900 hover:shadow-lg">
                <div className="w-min-full rounded-lg rounded-b-none bg-gray-900 p-5 select-none" id="card-head">
                <p className={`${returnColor(jurusan)} font-sans font-medium text-md`} id="card-subsubtitle">{majors[jurusan]}</p>
                    <p className="text-white font-sans font-bold text-xl" id="card-title">{title}</p>
                    <p className="text-white font-sans font-medium text-md" id="card-subtitle">{subtitle}</p>
                    <p className="text-white font-sans font-medium text-sm" id="card-subtitle">{materi}</p>
                </div>

                <div className="p-5 pb-5 bg-gray-800 rounded-md rounded-t-none rounded-b-none flex-grow">
                    <p className="text-white font-sans font-light text-sm text-justify">{description}</p>
                </div>

                <Countdown endTime={endDate} />
            </div>
        
    )
}

export default Card