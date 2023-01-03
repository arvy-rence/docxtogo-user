import React from "react";
import {Card} from "flowbite-react";
import {formatDate} from "../../hooks/date";
import {HiDocument} from "react-icons/hi";
import StatusIndicator from "./StatusIndicator";

const RequestCard = ({data}) => {
  return (
    <Card className="max-w-[25rem] min-w-[25rem] max-h-[15rem] min-h-[15rem] font-work">
      <div>
        <h5 className="text-xl font-bold tracking-tight text-primary flex items-center">
          <HiDocument className="mr-2"/>
          {data.document}
        </h5>
        <div className="font-normal flex flex-col">
          <span>Requested on: {formatDate(data.dateRequested)}</span>
          <span>Last updated at: {formatDate(data.timeLog)}</span>
          <span>{data.contact}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="text-xl font-bold tracking-tight text-primary">
          Purpose
        </h5>
        <p className="font-normal flex flex-col">
          {data.purpose}
        </p>
      </div>
      <div>
        <StatusIndicator status={data.status}/>
      </div>
    </Card>
  )
}

export default RequestCard;