import React, {
    useEffect,
    useState,
  } from "react";
  import Link from "next/link";
  import {Label, TextInput, Button} from "flowbite-react";
  import {BiUserCircle} from "react-icons/bi";
  import {RiLockPasswordFill} from "react-icons/ri";
  
  const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    useEffect(() => {
      console.log(username)
      console.log(password)
    }, [username, password])
  
    return (
      <div className="h-screen flex items-center justify-center text-white">
        <div className="mx-[15%] px-[5%] bg-primary font-work pb-[6rem] pt-[5rem] rounded-3xl">
          <h1 className="text-center mb-5 font-bold text-2xl">LOG IN TO STUDENT<br/> DASHBOARD</h1>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  value="Username"
                  class="text-white font-work"
                />
              </div>
              <TextInput
                id="username"
                type="text"
                icon={BiUserCircle}
                placeholder="Username"
                required={true}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Password"
                  class="text-white font-work"
                />
              </div>
              <TextInput
                id="password1"
                type="password"
                icon={RiLockPasswordFill}
                placeholder="**********"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link href="/dashboard">
              <Button className="text-white font-work font-bold w-full">
                LOG IN
              </Button>
            </Link>
            {/*TODO change to Button after adding backend logic*/}
            {/*<Button type="submit" color="light">*/}
            {/*  LOG IN*/}
            {/*</Button>*/}
          </form>
        </div>
      </div>
    );
  }
  
  export default Login
  