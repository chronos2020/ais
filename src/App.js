
import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Footer'
import Filterbar from './Components/Navbar/Filterbar'
import Tugas from './Components/Tugas/Tugas'

function App() {
  let [filterCurrent, setFilter] = useState(0)
  let [search, setSearch] = useState('')
  let [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (!localStorage.getItem('darkMode') || localStorage.getItem('darkMode') == 'true') {
      setDarkMode(true)
    }
    else {
      setDarkMode(false)
    }

    
  }, [darkMode])

  useEffect(() => {
    if (!localStorage.getItem('saveData')) {
      localStorage.setItem('saveData', '[]')
    }
  })

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="App light:bg-white dark:bg-gray-700 min-h-screen transition">
        <Navbar darkHandler={[setDarkMode, darkMode]} />
        <Filterbar onFilterHandler={setFilter} onSearchHandler={setSearch} filterNow={filterCurrent} />
        <div className="container items-center justify-center py-2">
          <Tugas filterMode={filterCurrent} search={search} />
        </div>
      </div>
      <footer class="footer relative pt-1 mb-0 text-center dark:bg-gray-700">
            <p class="text-xs text-gray-800 font-medium pb-2">
                developed by Adrian Ardizza / <a href="#" class="text-blue-500">Source Code</a>
            </p>
      </footer>
    </div>
  );
}

export default App;
