import React, {useState} from "react";
import { TextInput }  from "flowbite-react";
import RequestCard from "../../components/dashboard/RequestCard";
import AddRequestModal from "../../components/dashboard/AddRequestModal";
import {FaSearch} from "react-icons/fa";
import axios from "../../server/index";


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

const Dashboard = ({lrn, data}) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <img src="banner.png" alt="" className="w-full h-[20vh]" />
      <div>
        <div className="flex flex-col items-center gap-2 font-work">
          <h1 className="text-primary text-4xl font-bold text-center mt-5">
            Online Request for Documents
          </h1>
          <p className="text-lg text-center w-1/2">
            Click the button below to add a new request for documents. You can also
            search for any requests that you may have created previously.
          </p>
        </div>
      </div>
      <div className="mx-[5%] mt-5 flex flex-col">
        <div className="flex justify-between">
          <h1 className="font-work text-primary text-3xl font-bold">All Requests</h1>
          <div className="flex gap-4">
            <AddRequestModal lrnProps={lrn}/>
            <TextInput
              id="search"
              type="text"
              icon={FaSearch}
              placeholder="Search for requests"
              onChange={(e) => setSearch(e.target.value)}
              className="font-work w-[20rem] h-[2.5rem] text-sm"
            />
          </div>
        </div>
        <div className="flex gap-10 my-5 flex-wrap justify-center">
          {
            (data.map((item, index) => (
              <RequestCard data={item} key={index} />
            )))
          }
        </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const lrn = "136814060704"

  const {data} = await axios.get(`/request/${lrn}`)
  console.log(data)

  return {
    props: {
      lrn: lrn,
      data: data.requests || []
    }
  }
}

export default Dashboard
