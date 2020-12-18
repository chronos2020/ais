import React, { useEffect, useState } from 'react'

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
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex flex-col sm:flex-row items-center justify-between min-h-8">
                    <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:items-stretch sm:justify-start py-3">
                        <p className="py-2 px-4 text-black dark:text-white transition">Filter Jurusan:</p>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-purple-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 0 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition`} role="menuitem" onClick={() => filterHandler(0)}>Semua Jurusan</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-pink-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 1 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition`} role="menuitem" onClick={() => filterHandler(1)}>Ilmu Komputer</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 2 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition`} role="menuitem" onClick={() => filterHandler(2)}>Sistem Informasi</a>
                        <a className={`cursor-pointer inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ${filterCurrent == 3 ? 'bg-gray-300 dark:bg-gray-700' : ''} transition`} role="menuitem" onClick={() => filterHandler(3)}>Saved</a>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:items-stretch sm:justify-end py-3">
                        <input type="search" className="bg-gray-300 dark:bg-gray-700 text-white shadow rounded p-2 transition" placeholder="search tugas" onChange={(e) => searchHandler(e)} />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Filterbar