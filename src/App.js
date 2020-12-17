
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Filterbar from './Components/Navbar/Filterbar'
import Tugas from './Components/Tugas/Tugas'

function App() {
  let [filterCurrent, setFilter] = useState(0)

  return (
    <div className="App bg-gray-700 min-h-screen">
      <Navbar />
      <Filterbar onFilterHandler={setFilter} filterNow={filterCurrent} />
      <div className="container items-center justify-center py-2">
        <Tugas filterMode={filterCurrent} />
      </div>
    </div>
  );
}

export default App;
