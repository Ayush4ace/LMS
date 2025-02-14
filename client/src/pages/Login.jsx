import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type)=>{
    const inputData = type === 'signup' ? signupInput : loginInput
    console.log(inputData);
    
  }
  return (
    <div className="flex items-center justify-center w-full">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input type="text" placeholder="zoro" 
                name="name" value={signupInput.name} required="true" onChange={(e) => changeInputHandler(e, "signup")} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  placeholder="zoro@gmail.com"
                  onChange={(e)=> changeInputHandler(e, "signup")}
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" 
                placeholder="password"
                name="password"
                value={signupInput.password} 
                required="true" 
                onChange={(e)=> changeInputHandler(e, "signup")}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("signup")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login with your username and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input id="current" type="email" 
                name="email" value={loginInput.email} required="true" onChange={(e)=> changeInputHandler(e, "login")}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input id="new" type="password"
                name="password" value={loginInput.password} required="true" 
                onChange={(e)=>changeInputHandler(e, "login")}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
