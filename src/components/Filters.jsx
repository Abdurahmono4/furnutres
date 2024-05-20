import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'

function Filters() {
  const {meta} = useLoaderData()
  return (
   <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
    <FormInput type="search" label="search product" name="search" size="input-sm"/>
    {/* CATEGORIES */}
    <FormSelect label="select category" name="category" list={meta.categories} size="select-sm"/>
     {/* COMPANIES */}
     <FormSelect label="select company" name="company" list={meta.companies} size="select-sm"/>
      {/* CATEGORIES */}
    <FormSelect label="sort by" name="order" list={['a-z' , 'z-a' , 'high' , 'low']} size="select-sm"/>
      {/* SHIPPING */}
    <FormRange name="price" size="range-sm" label="select price"/>
    <FormCheckBox label="free shipping" name="shipping" defaultValue={false} size="checkbox-sm"/>
    <button className='btn btn-primary btn-sm'>Search</button>
    <Link to="/products" className='btn btn-accent btn-sm'>Reset</Link>
   </Form>
  )
}

export default Filters