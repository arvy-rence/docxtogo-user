import React from "react";
import {Progress} from "flowbite-react";

const Status = () => {
    return(
        <div className="bg-white h-screen">
            <img src="bg.jpg" alt="" className="w-full h-[16vh] object-fit" />
            <div className="bg-blue-700 h-[20rem] p-10">
                <h1 className="text-white text-4xl font-bold text-center pb-10">
                    Requested Document
                </h1>
                <div className="flex justify-center">
                    <div className="w-4/5">
                        <Progress 
                            // progress={21}
                            progress={46}
                            // progress={73}
                            // progress={100} 
                            color="red"
                            size="lg" 
                            className="mb-2"
                        />
                        <div className="grid grid-cols-4 gap-10 text-end text-white font-bold">
                            <p>on Process</p>
                            <p>for Signature</p>
                            <p>for Release</p>
                            <p>to Recieve</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Status;