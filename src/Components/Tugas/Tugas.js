import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Tugas = ({filterMode, search, saveTrigger}) => {
    let [assignment, setAssignment] = useState([])
    let [sortMode, setSortMode] = useState(0)
    let [saved, setSaved] = useState((localStorage.getItem('saveData') && JSON.parse(localStorage.getItem('saveData'))) || [])
    let [refresh, setRefresh] = useState(false)

    const isSaved = (item) => {
        return saved.some(i => item['no'] === i['no'])
    }

    const filterHandler = (filterMode, search) => {
        if (filterMode == 3) {
            return JSON.parse(localStorage.getItem('saveData'))
        }
        else if (filterMode == 4) {
            return assignment.filter( i => Date.parse(i.TANGGAL_SELESAI) < Date.now())
        }
        else {
            const re = new RegExp(search, "i")
            return assignment.filter(i => {
                console.log(i)
                if (Date.now() < Date.parse(i.TANGGAL_SELESAI)) {
                    if (filterMode == 0) {
                        return i['NAMA PR'] && i['NAMA MATKUL'] && (i['NAMA PR'].match(re) || i['NAMA MATKUL'].match(re))
                    }
                    else {
                        return (i['NAMA PR'] && i['NAMA MATKUL'] && i.JURUSAN == filterMode && (i['NAMA PR'].match(re) || i['NAMA MATKUL'].match(re))) || i.JURUSAN == 0
                    }
                }
            })
        }

    }

    const sortHandler = (sortMode, data) => {
        switch (sortMode) {
            case 0:
                return data.sort((a, b) => { 
                    if (Date.parse(a.TANGGAL_SELESAI) > Date.parse(b.TANGGAL_SELESAI)) { 
                        return 1
                    }
                    else if (Date.parse(a.TANGGAL_SELESAI) < Date.parse(b.TANGGAL_SELESAI)) {
                        return -1
                    }
                    return 0;
                })
            case 1:
                return data.sort((a, b) => { 
                    if (a['NAMA PR'] > b['NAMA PR']) { 
                        return 1
                    }
                    else if (a['NAMA PR'] < b['NAMA PR']) {
                        return -1
                    }
                    return 0;
                })

            default:
                return data.sort((a, b) => { 
                    if (Date.parse(a.TANGGAL_SELESAI) > Date.parse(b.TANGGAL_SELESAI)) { 
                        return 1
                    }
                    else if (Date.parse(a.TANGGAL_SELESAI) < Date.parse(b.TANGGAL_SELESAI)) {
                        return -1
                    }
                    return 0;
                })
        }
    }

    const dataHandler = () => {
        const reader = require("g-sheets-api");
        const readerOptions = {
            sheetId: process.env.REACT_APP_SHEET_ID,
            sheetNumber: 4,
            returnAllResults: false,
        };
        
        reader(readerOptions, (results) => {
            setAssignment(results)
            localStorage.setItem('results', JSON.stringify(results))
        })
        .catch(err => {
            let data = localStorage.getItem('results')
            setAssignment(JSON.parse(data))
        });
    }

    const saveHandler = (item) => {
        let tempSaved = saved
        if (!tempSaved.some(i => i['no'] === item['no'])) {
            saveTrigger(true)
            setRefresh(true)
            tempSaved.push(item)
            setSaved(tempSaved)
            localStorage.setItem('saveData', JSON.stringify(tempSaved))
            setTimeout(() => {
                setRefresh(false)
            }, 50)
            setTimeout(() => {
                saveTrigger(false)
            }, 2500)
        }
        else {
            setRefresh(true)
            tempSaved = tempSaved.filter(i => item.no !== i.no)
            setSaved(tempSaved)
            localStorage.setItem('saveData', JSON.stringify(tempSaved))
            setTimeout(() => {
                setRefresh(false)
            }, 50)
        }
    }


    useEffect(() => {
            dataHandler()
            const getData = setInterval(() => {
                dataHandler()
            }, 15000);
            return () => clearInterval(getData);
    }, [])
    


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6 p-3 lg:p-5">
            {sortHandler(sortMode, filterHandler(filterMode, search)).map((item) => {
                return <Card data={item} title={item['NAMA PR']} jurusan={item.JURUSAN} subtitle={item['NAMA MATKUL']} description={item.DESKRIPSI} endDate={Date.parse(item.TANGGAL_SELESAI)} materi={item.MATERI} link_scele={item.LINK_SCELE} kelas={item.KELAS} saveHandler={saveHandler} isSaved={isSaved} savedArray={saved} key={item.NO} />
            })}
        </div>
    )
    
}

export default Tugas