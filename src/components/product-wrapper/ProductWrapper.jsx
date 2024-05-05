import React, { useState } from 'react'
import { useCreateProductMutation, useGetProductQuery } from '../../context/productApi'
import { useGetCategoryQuery } from '../../context/categoryApi'

let unitsData = ['kg', 'litr', 'dona', 'metr']

const ProductWrapper = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [units, setUnits] = useState('')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])

  let {data: categories} = useGetCategoryQuery()
  let [createProduct] = useCreateProductMutation()

  let categoryItem = categories?.data?.map(el => (
    <option key={el.id} value={el.title}>{el.title}</option>
  ))

  let unitsItem = unitsData?.map(el => (
    <option key={el} value={el}>{el}</option>
  ))

  let {data} = useGetProductQuery({limit: 10, count: 2})

  let products = data?.data?.map((el, inx) => (
    <div key={el.id}>
      <span>{el.title}</span>
      <h3>{el.price}</h3>
      <button>delete</button>
      <hr />
    </div>
  ))

  const handleCreateProduct =e => {
    e.preventDefault()
    let productForm = new FormData()
    productForm.append('title', title)
    productForm.append('price', price)
    productForm.append('category', category)
    productForm.append('units', units)
    productForm.append('oldPrice', 150)
    productForm.append('description', description)
    productForm.append('info', {})
    Array.from(files).forEach(el => {
      productForm.append('files', el, el.name)
    })

    createProduct(productForm)
  }

  return (
    <div>
        <h2>ProductWrapper</h2>
        <form action="" onSubmit={handleCreateProduct}>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
          <input value={price} onChange={e => setPrice(e.target.value)} type="number" />
          <select value={category} onChange={e => setCategory(e.target.value)} name="" id="">
            <option value="">Tanlang</option>
            {categoryItem}
          </select>
          <select value={units} onChange={e => setUnits(e.target.value)} name="" id="">
            <option value="">Tanlang</option>
            {unitsItem}
          </select>
          <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
          <input onChange={(e)=> setFiles(e.target.files)} type="file" multiple accept='.png, .jpg, .jpeg, .heic' />
          <button>create</button>
            </form>
          <div>
            {
              Array.from(files)?.map(el => URL.createObjectURL(el))?.map(el => (
                <img key={el} src={el} alt="" width={200}/>
              ))
            }
          </div>
        {products}

    </div>
  )
}

export default ProductWrapper