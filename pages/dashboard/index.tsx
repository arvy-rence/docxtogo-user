import React from "react";
import { Card, Button }  from "flowbite-react";
import Link from "next/link";


const info = [
    ["1/3/2023", "Kek kek", "09090909090", "The", "12/12/2022", "for Release"],
    ["12/3/2023", "lal kelelek", "12312312", "The", "12/12/2022", "on Process"],
    ["1/13/2023", "sadddsa dasdsadsa", "456456456", "The", "12/12/2022", "for Signature"],
    ["1/23/2023", "Kek kasdasdsaek", "7686876876", "The", "12/12/2022", "for Release"],
];

const Dashboard = () => {
    return (
        <div>
            <img src="bg.jpg" alt="" className="w-full h-[16vh] object-fit" />
            <div className="p-[3%] flex flex-col gap-10">
                <div className="flex w-full overflow-x-auto">
                    
                    
                    {
                        info.map((item, index) => {
                        return <Card key={index} className="w-[30rem] bg-blue-400 mr-[1rem]" 
                        onClick={()=>{console.log("Ey")}}
                        >
                            <Link href="/requeststatus">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item[0]}
                                </h1>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item[1]}
                                </h2>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item[2]}
                                </h2>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item[3]}
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item[4]}
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
                                    {item[5]}
                                </h1>
                            </Link>
                        </Card>
                        })
                    }
                
                </div>
                <div>
                    
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-blue-900 text-4xl font-bold text-center pb-4">
                            Online Request for Documents
                        </h1>
                        <p className="text-blue-800 text-lg text-center w-1/2 pb-4 leading-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, obcaecati aliquam quos libero eveniet tempore qui et facilis autem veritatis cum dicta nihil explicabo, repellat, deleniti magnam quae? Consectetur, ratione!
                        </p>
                        <Button className="w-1/2">
                            <Link href="/request">
                                REQUEST FOR DOCUMENT
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard
