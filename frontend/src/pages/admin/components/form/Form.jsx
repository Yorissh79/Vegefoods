import React from 'react'
import style from './Form.module.scss'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {postProductThunk} from "../../../../redux/reducers/productSlice.js";
import * as Yup from 'yup'

const Form = () => {

    const dispatch = useDispatch();

    const validationScheme = Yup.object({
        name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
        description: Yup.string().required("Description is required").min(2, "Description must be at least 2 characters"),
        price: Yup.string().required("Price is required").min(1, "Price must be at least 2 characters"),
        image: Yup.string().required("Image is required").min(2, "Image must be at least 2 characters"),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            image: ""
        },
        validationSchema: validationScheme,
        onSubmit: values => {
            dispatch(postProductThunk(values))
        }
    })

    return (
       <div className={style.main}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                />
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    {...formik.getFieldProps('price')}
                />
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    {...formik.getFieldProps('description')}
                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    {...formik.getFieldProps('image')}
                />

                <button type="submit">Submit</button>
            </form>
       </div>
    )
}

export default Form