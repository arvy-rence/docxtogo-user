import React from 'react'
import axios from '../../../server/index'
import { Card, Badge, Button, Label, FileInput, ListGroup } from 'flowbite-react'
import { BsGenderMale, BsGenderFemale, BsFillFileEarmarkTextFill } from 'react-icons/bs'

export default function AccountDetails({ studentInfo }) {
  const [uploadedFiles, setUploadedFiles] = React.useState([])

  function handleFileSelect(e) {
    const files = Array.prototype.slice.call(e.target.files)
    setUploadedFiles(files)
  }
  return (
    <>
      <div className='flex items-center justify-center w-full h-screen font-work my-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl font-bold mb-6'>STUDENT INFORMATION</h2>
          <Card imgSrc='https://i.ibb.co/Scj76jm/ph.jpg' className=''>
            <div className='flex-col'>
              <h5 className='text-3xl font-bold tracking-tight uppercase text-primary text-center'>
                {studentInfo.name}
              </h5>
              <h6 className='text-lg font-bold tracking-tight uppercase text-gray-900 text-center'>
                LRN: {studentInfo.lrn}
              </h6>
              {/* <div id='fileUpload' className='mt-3'>
                <FileInput id='file' onChange={handleFileSelect} helperText='Select new picture' />
              </div> */}
            </div>
            <div className='flex gap-4'>
              <Badge color='info' size='lg'>
                {studentInfo.strand}
              </Badge>
              <Badge color='info' size='lg'>
                {studentInfo.section}
              </Badge>
              {studentInfo.gender === 'M' ? (
                <Badge color='info' size='lg'>
                  Male
                </Badge>
              ) : (
                <Badge color='failure' size='lg'>
                  Female
                </Badge>
              )}
            </div>
            <Button className='bg-primary text-white uppercase text-xl mt-8' href='/dashboard'>
              Go back
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let lrn = context.params.lrn
  const { data } = await axios.get(`/student/${lrn}`)
  return {
    props: {
      studentInfo: data,
    },
  }
}
