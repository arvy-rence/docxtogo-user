import React from "react";
import {Label, TextInput, Dropdown, Textarea, Button} from "flowbite-react";

const Request = () => {
  
    return (
        <div>
            <img src="bg.jpg" alt="" className="w-full h-[16vh] object-fit" />
            <div className="bg-blue-700 p-10 h-[84vh]">
                <div className="bg-white rounded-lg h-full py-[3%] px-[2%] flex flex-col gap-4">
                    <div className="w-1/4">
                        <TextInput
                        id="nameofrequestor"
                        type="text"
                        placeholder="Name of Requestor"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 px-[3%]">
                        <div>
                            <TextInput
                            id="nameofstudent"
                            type="text"
                            placeholder="Name of Student"
                            className="w-2/3"
                            />
                        </div>

                        <div>
                            <TextInput
                            id="strandsection"
                            type="text"
                            placeholder="Grade - Strand & Section"
                            className="w-2/3"
                            />
                        </div>

                        <div>
                            <TextInput
                            id="contactno"
                            type="text"
                            placeholder="Contact Number"
                            className="w-2/3"
                            />
                        </div>

                        <div>
                            <TextInput
                            id="date"
                            type="text"
                            placeholder="Date"
                            className="w-2/3"
                            />
                        </div>
                    </div>

                    <Dropdown
                    label="Document Type"
                    inline={true}
                    >
                        <Dropdown.Item>
                            Form 138
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Good Moral
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Certificate of Enrollment
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Batchwide Certificate of Ranking
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Certified True Copy of Form 137
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Strandwide Certificate of Ranking
                        </Dropdown.Item>
                    </Dropdown>

                    <div className="bg-gray-500 h-[20rem] bg-opacity-20 rounded-lg">

                    </div>

                    <Textarea
                    id="purpose"
                    placeholder="Purpose"
                    />

                    <div className="flex justify-center">
                        <Button className="w-1/6">
                            Submit
                        </Button>
                    </div>
                    

                </div>
            </div>
        </div>
        
    );
  }
  
  export default Request
  