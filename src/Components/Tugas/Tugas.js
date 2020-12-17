import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

const Tugas = ({filterMode}) => {
    let [assignment, setAssignment] = useState([])
    let [sortMode, setSortMode] = useState(0)

    const filterHandler = (filterMode) => {
        return assignment.filter(i => {
            if (filterMode == 0) {
                return true
            }
            else {
                return i.jurusan == filterMode
            }
        })
    }

    const sortHandler = (sortMode, data) => {
        switch (sortMode) {
            case 0:
                return data.sort((a, b) => { 
                    if (Date.parse(a.tanggal_selesai) > Date.parse(b.tanggal_selesai)) { 
                        return 1
                    }
                    else if (Date.parse(a.tanggal_selesai) < Date.parse(b.tanggal_selesai)) {
                        return -1
                    }
                    return 0;
                })
            case 1:
                return data.sort((a, b) => { 
                    if (a['nama pr'] > b['nama pr']) { 
                        return 1
                    }
                    else if (a['nama pr'] < b['nama pr']) {
                        return -1
                    }
                    return 0;
                })
            default:
                return data.sort((a, b) => { 
                    if (Date.parse(a.tanggal_selesai) > Date.parse(b.tanggal_selesai)) { 
                        return 1
                    }
                    else if (Date.parse(a.tanggal_selesai) < Date.parse(b.tanggal_selesai)) {
                        return -1
                    }
                    return 0;
                })
        }
    }

    useEffect(() => {
        const reader = require("g-sheets-api");
        const readerOptions = {
            sheetId: "1vlV5IF5kaN2FjgwWvFAWXmmKmyaTr_EudyNjQQbEFgA",
            returnAllResults: false,
        };
        
        reader(readerOptions, (results) => {
            setAssignment(results)
            localStorage.setItem('results', JSON.stringify(results))
            console.log(results)
        })
        .catch(err => {
            let data = localStorage.getItem('results')
            setAssignment(JSON.parse(data))
        });
        
    }, [])



    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 p-5">
            {sortHandler(sortMode, filterHandler(filterMode)).map((item) => {
                return <Card title={item['nama pr']} jurusan={item.jurusan} subtitle={item['nama matkul']} description={item.deskripsi} endDate={Date.parse(item.tanggal_selesai)} materi={item.materi}/>
            })}
        </div>
    )
    
}

export default Tugas