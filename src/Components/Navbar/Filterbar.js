import React, { useEffect, useState } from 'react'
import { BookmarkOutline } from "@graywolfai/react-heroicons";

const Filterbar = (props) => {
    let [filterOpened, setFilterOpened] = useState(false)
    let [filterCurrent, setFilterCurrent] = useState(props.filterNow)

    const filterOpenHandler = () => {
        setFilterOpened(!filterOpened)
    }

    const filterHandler = (filterMode) => {
        props.onFilterHandler(filterMode);
        setFilterCurrent(filterMode);
    }

    const searchHandler = (e) => {
        props.onSearchHandler(e.target.value)
    }

    return (
        <nav className="bg-gray-100 dark:bg-gray-800 transition">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between min-h-8 px-2">
                    
                    <div className="flex-1 flex flex-row items-center justify-center md:items-stretch md:justify-end py-3">
                        <input type="search" className="bg-gray-300 dark:bg-gray-700 text-white shadow rounded p-2 transition h-8 md:h-10 my-auto" placeholder="search tugas/matkul" onChange={(e) => searchHandler(e)} />
                        <BookmarkOutline className={`h-8 w-8 text-black dark:text-white mx-2 my-2 hover:fill-current cursor-pointer hidden md:block transition ${filterCurrent == 3 ? 'fill-current' : ''}`} onClick={() => filterHandler(3)}></BookmarkOutline>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-start pb-3 md:py-3 hidden md:block">
                        <a className={`block md:hidden cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 3 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0`} role="menuitem" onClick={() => filterHandler(3)}>Saved</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 0 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0`} role="menuitem" onClick={() => filterHandler(0)}>Semua Jurusan</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-pink-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 1 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0`} role="menuitem" onClick={() => filterHandler(1)}>Ilmu Komputer</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 2 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0`} role="menuitem" onClick={() => filterHandler(2)}>Sistem Informasi</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 4 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0`} role="menuitem" onClick={() => filterHandler(4)}>Finished</a>
                    </div>
                    <div className="flex-1 flex flex-row md:hidden items-center justify-center pb-1">
                        <a className={`block md:hidden cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-2 py-2 text-sm font-bold dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 3 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0 h-full`} role="menuitem" onClick={() => filterHandler(3)}>Saved</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 p-1 text-sm font-bold text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 0 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0 h-full`} role="menuitem" onClick={() => filterHandler(0)}>All</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 p-1 text-sm font-bold text-pink-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 1 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0 h-full`} role="menuitem" onClick={() => filterHandler(1)}>IK</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 p-1 text-sm font-bold text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 2 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition my-1 md:my-0 h-full`} role="menuitem" onClick={() => filterHandler(2)}>SI</a>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Filterbar