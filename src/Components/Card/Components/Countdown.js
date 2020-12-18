import React, { useEffect, useState } from 'react'
import Digits from './Digits'

const Countdown = ({endTime}) => {
    let [timeLeft, setTimeLeft] = useState({})

    let calculateTime = (date) => {
        let difference = +new Date(date) - +new Date(Date.now());
        if (difference > 0) {
            let time = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
            setTimeLeft(time)
        }

        else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            calculateTime(endTime)
        }, 100);
        return () => clearInterval(timerId);
    }, [timeLeft, endTime])

    return (
        <div className="countdown p-3 flex justify-center items-center rounded-t-none">
            <Digits digitType={'Hari'} digitValue={timeLeft['days']} />
            <Digits digitType={'Jam'} digitValue={timeLeft['hours']} />
            <Digits digitType={'Menit'} digitValue={timeLeft['minutes']} />
            <Digits digitType={'Detik'} digitValue={timeLeft['seconds']} />            
        </div>
    )
}

export default Countdown