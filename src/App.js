
import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Filterbar from './Components/Navbar/Filterbar'
import Tugas from './Components/Tugas/Tugas'
import Notification from './Components/Notification/Notification'

function App() {
  let [filterCurrent, setFilter] = useState(0)
  let [search, setSearch] = useState('')
  let [darkMode, setDarkMode] = useState(true)
  let [notificationShown, setNotificationShown] = useState(false)

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
      {notificationShown ? <Notification notificationShown={notificationShown}></Notification> : ''}
      <div className="App light:bg-white dark:bg-gray-700 min-h-screen transition">
        <Navbar darkHandler={[setDarkMode, darkMode]} />
        <Filterbar onFilterHandler={setFilter} onSearchHandler={setSearch} filterNow={filterCurrent} />
        <div className="container items-center justify-center py-2">
          <Tugas filterMode={filterCurrent} search={search} saveTrigger={setNotificationShown} />
        </div>
      </div>
      <footer class="footer relative pt-1 mb-0 text-center transition dark:bg-gray-700">
            <p class="text-xs text-black dark:text-white font-medium pb-2">
                developed by Adrian Ardizza / <a href="https://github.com/chronos2020/ais" target="__blank" class="text-blue-500">source code</a>
            </p>
      </footer>
    </div>
  );
}

export default App;
