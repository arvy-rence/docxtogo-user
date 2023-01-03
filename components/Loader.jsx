import React from "react";
import {Spinner} from "flowbite-react";

export const Loader = ({data, children}) => {
  return (
    <>
      {
        (data) ? (children) : (
          <div className="mx-[5%] my-[2rem] flex items-center">
            <div className="inline-flex items-center">
              <span className="mr-4 font-bold font-work text-3xl text-primary">Data is Loading</span>
              <Spinner aria-label="Data is Loading" size="lg"/>
            </div>
          </div>
        )
      }
    </>
  )
}