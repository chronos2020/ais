import React, { useEffect, useState } from 'react';
import request from 'request'

import Card from '../Card/Card';

const Tugas = ({filterMode, search}) => {
    let [assignment, setAssignment] = useState([])
    let [sortMode, setSortMode] = useState(0)
    let [saved, setSaved] = useState((localStorage.getItem('saveData') && JSON.parse(localStorage.getItem('saveData'))) || [])
    let [refresh, setRefresh] = useState(false)

    const isSaved = async (item) => {
        let tempSaved = await saved
        return tempSaved.some(i => item['no'] == i['no'])
    }

    const filterHandler = (filterMode, search) => {
        if (filterMode == 3) {
            return JSON.parse(localStorage.getItem('saveData'))
        }
        else {
            return assignment.filter(i => {
                const re = new RegExp(search, "i")
                if (Date.now() < Date.parse(i.tanggal_selesai)) {
                    if (filterMode == 0) {
                        return i['nama pr'].match(re)
                    }
                    else {
                        return i.jurusan == filterMode && i['nama pr'].match(re)
                    }
                }
            })
        }

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

    const dataHandler = () => {
        const reader = require("g-sheets-api");
        const readerOptions = {
            sheetId: process.env.REACT_APP_SHEET_ID,
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
        if (!tempSaved.some(i => i['no'] == item['no'])) {
            setRefresh(true)
            tempSaved.push(item)
            setSaved(tempSaved)
            localStorage.setItem('saveData', JSON.stringify(tempSaved))
            setTimeout(() => {
                setRefresh(false)
            }, 50)
            
        }
        else {
            setRefresh(true)
            tempSaved.splice(tempSaved.indexOf(item), 1)
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
        !refresh && <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 p-5">
            {sortHandler(sortMode, filterHandler(filterMode, search)).map((item) => {
                return <Card data={item} title={item['nama pr']} jurusan={item.jurusan} subtitle={item['nama matkul']} description={item.deskripsi} endDate={Date.parse(item.tanggal_selesai)} materi={item.materi} link_scele={item.link_scele} kelas={item.kelas} saveHandler={saveHandler} isSaved={isSaved} savedArray={saved} />
            })}
        </div>
    )
    
}

export default Tugas