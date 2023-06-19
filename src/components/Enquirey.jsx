import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Enquirey() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        message: ''
    });


    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        let hasErrors = false;

        // Check for empty fields
        for (const key in formData) {
            if (!formData[key]) {
                errors[key] = 'This field is required';
                hasErrors = true;
            }
        }

        setFormErrors(errors);

        if (!hasErrors) {
            // Form submission logic goes here

            navigate("/thankyou");
        }
    };


    return (


        <div className="w-full flex items-center justify-center m-4  ">
            <div className="absolute top-36  shadow-2xl rounded-2xl py-2 lg:px-20 px-2 ">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                <div className="md:flex items-center mt-6 ">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800" htmlFor="name">Name:</label>
                        <input arial-label="Please input name" type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                   {formErrors.name && <span className="error text-red-600 text-xs"> *{formErrors.name}</span>}  </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800" htmlFor="name">Email:</label>
                        <input  arial-label="Please input email address" type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                   {formErrors.email && <span className="error text-red-600 text-xs">*{formErrors.email}</span>} </div>
                </div>
                <div className="md:flex items-center mt-8 ">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800" htmlFor="company">Company name:</label>
                        <input tabIndex={0} role="input" arial-label="Please input company name" type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        {formErrors.company && (
                            <span className="error text-red-600 text-xs">*{formErrors.company}</span>
                        )}  </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4 ">
                        <label className="text-base font-semibold leading-none text-gray-800" htmlFor="country">Country</label>
                        <input arial-label="Please input country name" type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        {formErrors.country && (
                            <span className="error text-red-600 text-xs">*{formErrors.country}</span>
                        )} </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800" htmlFor="message">Message</label>
                        <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange} className="h-20 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                </div>
                <p className="text-xs leading-3 text-gray-900 font-semobold mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                <div className="flex items-center justify-center w-full">
                    <button onClick={handleSubmit} className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#1265a8] rounded-2xl border-black hover:bg-[#197ac9]  focus:ring-2 focus:ring-offset-2 focus:ring-black focus:outline-none">SUBMIT</button>
                </div>
            </div>
        </div>

    );
}

export default Enquirey;
