"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    const router = useRouter()
    const [s, setS] = useState(false)

    const handleClick = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log({data,error})

        if(data){
            alert("Login Successfully")
            router.push('/')
        }
        if(error){
            alert(error.message)
        }

    }

    return (
        <div>
            <Card className="border mx-auto w-[95%] sm:w-110 md:w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form onSubmit={handleSubmit(handleClick)} className="flex w-96 mx-auto flex-col gap-4">
        

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input {...register("email", { required: "Email filled reqired" })} placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type={s ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input {...register("password", { required: "Password filled reqired" })} placeholder="Enter your password" />
          <span onClick={() => setS(!s)}>{s ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button className={'w-full bg-linear-to-r from-pink-500 via-purple-500 bg-red-500'} type="submit">
            Login
          </Button>
        </div>
        <div>
            <p className='text-center pb-2'>or</p>
            <Button variant='outline' className={'w-full'}><FcGoogle/> Sign In With Google</Button>
        </div>
      </Form>
    </Card>
        </div>
    );
};

export default SignInPage;