import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'flowbite-react'
import RequestCard from '../../components/dashboard/RequestCard'
import AddRequestModal from '../../components/dashboard/AddRequestModal'
import { FaSearch } from 'react-icons/fa'
import axios from '../../server/index'
import { HiRefresh } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { MdAccountCircle } from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast'
import { delay } from '../../hooks/delay'
import { toastOptions } from '../../styles/modalOptions'
import Footer from '../../components/Footer'

// const info = [
//   ["1/3/2023", "Kek kek", "09090909090", "The", "12/12/2022", "for Release"],
//   ["12/3/2023", "lal kelelek", "12312312", "The", "12/12/2022", "on Process"],
//   ["1/13/2023", "sadddsa dasdsadsa", "456456456", "The", "12/12/2022", "for Signature"],
//   ["1/23/2023", "Kek kasdasdsaek", "7686876876", "The", "12/12/2022", "for Release"],
//   ["1/3/2023", "Kek kek", "09090909090", "The", "12/12/2022", "for Release"],
//   ["12/3/2023", "lal kelelek", "12312312", "The", "12/12/2022", "on Process"],
//   ["1/13/2023", "sadddsa dasdsadsa", "456456456", "The", "12/12/2022", "for Signature"],
//   ["1/23/2023", "Kek kasdasdsaek", "7686876876", "The", "12/12/2022", "for Release"],
// ];

const Dashboard = ({ lrn, data }) => {
  const [search, setSearch] = useState('')
  const [filteredRequests, setFilteredRequests] = useState(data)
  const router = useRouter()

  useEffect(() => {
    const documentMatches = data.filter(request =>
      request.document.toLowerCase().includes(search.toLowerCase())
    )
    const purposeMatches = data.filter(request =>
      request.purpose.toLowerCase().includes(search.toLowerCase())
    )
    const matches = [...documentMatches, ...purposeMatches]
    const uniqueMatches = [...new Set(matches)]

    setFilteredRequests(uniqueMatches)
  }, [search])

  async function refreshHandler() {
    toast('Checking for new data!', {
      ...toastOptions,
      duration: 2000,
      icon: '🔄',
    })
    await delay(2000)
    router.reload()
  }

  return (
    <div>
      <Toaster />
      <img src='https://i.ibb.co/W26yBX7/banner.png' alt='' className='w-full h-[20vh]' />
      <Button
        className='absolute top-[55px] right-20 w-[10rem] h-[3rem] font-work font-bold'
        href='/'
      >
        LOGOUT
      </Button>
      <div>
        <div className='flex flex-col items-center gap-2 font-work'>
          <h1 className='text-primary text-4xl font-bold text-center mt-5'>
            Online Request for Documents
          </h1>
          <p className='text-lg text-center w-1/2'>
            Click the button below to add a new request for documents. You can also search for any
            requests that you may have created previously.
          </p>
        </div>
      </div>
      <div className='mx-[5%] mt-5 flex flex-col'>
        <div className='flex justify-between mb-5'>
          <Button
            color={'dark'}
            href={'/dashboard/account'}
            className='font-work uppercase font-bold'
          >
            <MdAccountCircle className='mr-2' />
            Check Account
          </Button>
          <div className='flex gap-4'>
            <AddRequestModal lrnProps={lrn} />
            <Button
              color='success'
              onClick={() => refreshHandler()}
              className='font-work uppercase font-bold'
            >
              <HiRefresh className='mr-2' />
              Refresh
            </Button>
            <TextInput
              id='search'
              type='text'
              icon={FaSearch}
              placeholder='Search for requests'
              onChange={e => setSearch(e.target.value)}
              className='font-work w-[20rem] h-[2.5rem] text-sm'
            />
          </div>
        </div>
        <h1 className='font-work text-primary text-3xl font-bold'>All Requests</h1>
        <div className='flex gap-10 my-5 flex-wrap justify-center overflow-y-auto'>
          {filteredRequests.map((item, index) => (
            <RequestCard data={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // change this to a registered LRN to test operations for that specific student
  const lrn = '152365252715'

  const { data } = await axios.get(`/request/${lrn}`)
  console.log(data)

  return {
    props: {
      lrn: lrn,
      data: data.requests || [],
    },
    revalidate: 5,
  }
}

export default Dashboard
