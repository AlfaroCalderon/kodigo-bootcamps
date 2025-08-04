'use client'
import React from 'react'
import { MdLogin } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { signup } from '../actions'

type Inputs = {
  email: string;
  password: string;
}

export const SignUpForm = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    signup(formData);
  }

  return (
    <>
        <div className="w-full h-screen bg-[url('https://res.cloudinary.com/dcostp8ak/image/upload/v1754238679/pexels-padrinan-19670_zdlpr6.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center">
          <form className='p-8 rounded shadow-md w-96 bg-white' onSubmit={handleSubmit(onSubmit)}>
            <FaUserCircle size={50} className='block mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input type='text' id='text' {
                ...register('email', { required: 'Email is required', maxLength: { value: 100, message: 'Email is required and must be 100 characters or less' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email format' } })
              } className='mt-1 block w-full border border-gray-300 rounded-md p-2' />
              {errors.email && (
                <p className='text-red-500 font-bold ' >{errors.email.message}</p>
              )}
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
              <input type='password' id='password' {
                ...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long'}, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, message: 'Password must contain at least one letter, one number, and one special character' } })
              } className='mt-1 block w-full border border-gray-300 rounded-md p-2' />
              {errors.password && (
                <p className='text-red-500 font-bold'>{errors.password.message}</p>
              )}
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
              <MdLogin size={24} className='inline-block mr-2' />
              Sign Up
            </button>
          </form>
        </div>
    </>
  )
}
