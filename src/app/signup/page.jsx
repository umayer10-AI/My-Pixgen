"use client"
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    const handleClick = (v) => {
        console.log(v)

        

    }

    return (
        <div>
            <Card className="border mx-auto w-[95%] sm:w-110 md:w-125  py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form onSubmit={handleSubmit(handleClick)} className="flex w-96 mx-auto flex-col gap-4">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input {...register("name", { required: "Name filled reqired" })} placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input {...register("url", { required: "URL filled reqired" })} placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
        //   validate={(value) => {
        //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        //       return "Please enter a valid email address";
        //     }

        //     return null;
        //   }}
        >
          <Label>Email</Label>
          <Input {...register("email", { required: "Email filled reqired" })} placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
        //   validate={(value) => {
        //     if (value.length < 8) {
        //       return "Password must be at least 8 characters";
        //     }
        //     if (!/[A-Z]/.test(value)) {
        //       return "Password must contain at least one uppercase letter";
        //     }
        //     if (!/[0-9]/.test(value)) {
        //       return "Password must contain at least one number";
        //     }

        //     return null;
        //   }}
        >
          <Label>Password</Label>
          <Input {...register("password", { required: "Password filled reqired" })} placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
        </div>
    );
};

export default SignUpPage;