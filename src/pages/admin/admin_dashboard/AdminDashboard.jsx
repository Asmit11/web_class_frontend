import React, { useState } from 'react'

const AdminDashboard = () => {

    // State for input fields
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    // State for image
    const [productImage, setProductImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    // image upload handler
    const handleImage = (event) => {
        const file = event.target.files[0]
        setProductImage(file) // for backend
        setPreviewImage(URL.createObjectURL(file))
    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(
            productName,
            productPrice,
            productCategory,
            productDescription,
            productImage
        )
    }


    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label>Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type="text" className='form-control' placeholder='Enter product name' />
                                        <label className='mt-2'> Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control' placeholder='Enter product price' />
                                        <label className='mt-2'>Select the category</label>
                                        <select onChange={(e) => setProductCategory(e.target.value)} className='form-control'>
                                            <option value="plants">Plants</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="gadgets">Gadgets</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Utensils">Utensils</option>
                                        </select>

                                        <label className='mt-2'>Enter description</label>
                                        <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control'></textarea>

                                        <label className='mt-2'>Choose product image</label>
                                        <input onChange={handleImage} type="file" className='form-control'></input>

                                        {/* Preview Image */}
                                        {
                                            previewImage && <img src={previewImage} alt="preview image" className='img-fluid rounded mt-2'></img>
                                        }

                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img width={'40px'} height={'40px'} src
                                    ="https://www.bhmpics.com/downloads/rose-flowers-hd-Wallpapers/17.rose-red-blossom-bloom-53141.jpeg" alt=" " />
                            </td>
                            <td>
                                Flower
                            </td>
                            <td>
                                200
                            </td>
                            <td>
                                Indoor
                            </td>
                            <td>
                                Beautiful Flower
                            </td>
                            <td>
                                <button className='btn-btn primary'>Edit</button>
                                <button onClick={handleSubmit} className='btn-btn danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default AdminDashboard
