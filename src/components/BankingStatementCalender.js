import React, { useEffect, useState } from 'react'

function BankingStatementCalender() {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [presentDay, setPresentDay] = useState(new Date())
    const [msg, setMsg] = useState('')
    const [fromShowMsg, setFromShowMsg] = useState(false)
    const [toShowMsg, setToShowMsg] = useState(false)
    const presentDayDate = presentDay.getDate()
    const presentDayMonth = presentDay.getMonth()
    const presentDayYear = presentDay.getFullYear()


    useEffect(() => {

        const fromDateDate = fromDate.getDate()
        const fromMonth = fromDate.getMonth()
        const fromYear = fromDate.getFullYear()
        const toDateDate = toDate.getDate()
        const toMonth = toDate.getMonth()
        const toYear = toDate.getFullYear()

        if (presentDayDate - fromDateDate < 0 && presentDayMonth - fromMonth <= 0 && presentDayYear - fromYear <= 0) {
            setMsg('From Date cannot be a future date')
        } else {
            if (toDateDate - fromDateDate >= 0 && toMonth - fromMonth >= 0 && toYear - fromYear >= 0) {
                setMsg('showing data of required days...')
            } else {
                if ( toYear - fromYear > 0) {
                    setMsg('showing data of required days...')
                } else {
                    setMsg('from date cannot be greater than to date')
                }
            }
        }


    }, [toDate, fromDate])

    const fromDateUpdate = (event) => {
        setFromDate(new Date(event.target.value))
        setFromShowMsg(true)
    }
    const toDateUpdate = (event) => {
        setToDate(new Date(event.target.value))
        setToShowMsg(true)
    }
    return (
        <div>
            <div className='row mt-5'>


                <div className='col-md-3'>
                    <label>From Date</label>
                    <input type='date' onChange={(event) => fromDateUpdate(event)} />
                </div>
                <div className='col-md-3'>
                    <label>To date</label>
                    <input type='date' onChange={(event) => toDateUpdate(event)} />
                </div>
                <h3>{(fromShowMsg && toShowMsg) ? msg : ''}</h3>
            </div>
        </div>
    )
}

export default BankingStatementCalender
