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

    const filterColor = (filterMode) => {
        switch (filterMode) {
            case 0:
                return 'text-purple-500'
            case 1:
                return 'text-pink-500'
            case 2:
                return 'text-blue-500'
        }
    }

    const filterName = (filterMode) => {
        switch (filterMode) {
            case 0:
                return 'Semua Jurusan'
            case 1:
                return 'Ilmu Komputer'
            case 2:
                return 'Sistem Informasi'
        }
    }

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex flex-col sm:flex-row items-center justify-between min-h-8">
                    <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:items-stretch sm:justify-start py-3">
                        <p className="text-white py-2 px-4">Filter Jurusan:</p>
                        <a href="#" className={`inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-purple-500 hover:bg-gray-700 ${filterCurrent == 0 ? 'bg-gray-700' : ''}`} role="menuitem" onClick={() => filterHandler(0)}>Semua Jurusan</a>
                        <a href="#" className={`inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-pink-500 hover:bg-gray-700 ${filterCurrent == 1 ? 'bg-gray-700' : ''}`} role="menuitem" onClick={() => filterHandler(1)}>Ilmu Komputer</a>
                        <a href="#" className={`inline-flex items-center justify-center rounded-lg mx-2 px-4 py-2 text-sm font-bold text-blue-500 hover:bg-gray-700 ${filterCurrent == 2 ? 'bg-gray-700' : ''}`} role="menuitem" onClick={() => filterHandler(2)}>Sistem Informasi</a>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:items-stretch sm:justify-end py-3">
                        <input type="search" class="bg-gray-700 text-white shadow rounded p-2" placeholder="search pr" />
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Filterbar