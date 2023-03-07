import React from 'react'
import {
  FaFolder,
  FaFileSignature,
  FaCheckSquare,
  FaCalendarDay,
  FaDatabase,
  FaTimesCircle,
  FaPrint,
} from 'react-icons/fa'

const StatusIndicator = ({ status }) => {
  return status === 1 ? (
    <div className='text-blue-700 text-xl font-bold flex items-center'>
      <FaFolder className='inline-block mr-2' />
      On Process
    </div>
  ) : status === 2 ? (
    <div className='text-amber-700 text-xl font-bold flex items-center'>
      <FaFileSignature className='inline-block mr-2' />
      For Signature
    </div>
  ) : status === 3 ? (
    <div className='text-cyan-700 text-xl font-bold flex items-center'>
      <FaPrint className='inline-block mr-2' />
      For Release
    </div>
  ) : status === 4 ? (
    <div className='text-indigo-700 text-xl font-bold flex items-center'>
      <FaCalendarDay className='inline-block mr-2' />
      To Receive
    </div>
  ) : status === 5 ? (
    <div className='text-green-700 text-xl font-bold flex items-center'>
      <FaCheckSquare className='inline-block mr-2' />
      Claimed
    </div>
  ) : status === 6 ? (
    <div className='text-red-700 text-xl font-bold flex items-center'>
      <FaTimesCircle className='inline-block mr-2' />
      Unclaimed
    </div>
  ) : (
    <div className='text-emerald-700 text-xl font-bold flex items-center'>
      <FaDatabase className='inline-block mr-2' />
      Admin
    </div>
  )
}

export default StatusIndicator
