import React from 'react'
import hours from '../data'
import Footer from './footer'

const ReportTable = (props) => {
    let hourly_sales = [
        48, 42, 30, 24,
        42, 24, 36, 42,
        42, 48, 36, 42,
        24, 36]
    let rowTotal = 0
    let counter = 0
    let footTotal = 0
    let colTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return (
        <>
            <table className='w-1/2 mx-auto my-4'>
                <thead>
                    <th className='bg-green-500 border border-emerald-500'>Location</th>
                    {
                        hours.map(e => {
                            return (
                                <th className='bg-green-500 border border-emerald-500'>{e}</th>
                            )
                        })
                    }
                    <th className='bg-green-500 border border-emerald-500'>Totals</th>
                </thead>
                <tbody>
                    {
                        props.location.map(i => {
                            {  rowTotal = 0  , counter=0}
                            return (
                                <tr>
                                    <td className='bg-green-500 border border-emerald-500'>{i}</td>
                                    {
                                        hourly_sales.map(hour => {
                                            rowTotal += hour
                                            colTotal[counter] += hour
                                            counter += 1
                                            return (
                                            <td className='bg-green-200 border border-emerald-500'>{hour}</td>
                                            )
                                        })
                                    }
                                    <td className='bg-green-500 border border-emerald-500'>{rowTotal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td className='bg-green-500 border border-emerald-500'>Totals</td>
                        {
                            footTotal = 0  ,
                            colTotal.map(i => {
                                footTotal += i

                                return (
                                    <td className='bg-green-500 border border-emerald-500'>{i}</td>
                                )
                            })
                        }
                        <td className='bg-green-500 border border-emerald-500'>{footTotal}</td>
                    </tr>
                </tfoot>
            </table>
        {/* {console.log(colTotal)} */}

        </> 

    )
}


export default ReportTable
