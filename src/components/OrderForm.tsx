'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    address: '',
    quantity: 1,
    price: 160,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);  // Track form submission status

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'quantity') {
      let price = 160;
      if (value === '2') price = 250;
      if (value === '3') price = 350;
      setFormData((prev) => ({
        ...prev,
        price,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct template parameters
    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      city: formData.city,
      address: formData.address,
      quantity: formData.quantity,
      price: formData.price,
    };

    // Send the email using EmailJS
    emailjs.send('service_ou6w3s6', 'template_tjowngl', templateParams, '18Og-v0vETJHiLyiI')
      .then(
        (response) => {
            console.log("order submitted",response)
          alert('Order received! A confirmation email has been sent.');
          setFormSubmitted(true);  // Set form submission to true
          
          // Reset form after successful submission
          setFormData({
            name: '',
            contact: '',
            city: '',
            address: '',
            quantity: 1,
            price: 160,
          });
        },
        (error) => {
            console.log("fail to submitted",error)
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="w-full sm:w-3/4 md:w-2/3 p-2  lg:w-1/2 mx-auto mt-6 space-y-4">
      {formSubmitted && <div className="text-green-700 mb-4">Thank you for placing an order.Our team will contact you for order confirmed</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col text-gray-500">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Name'
            className="border-4 h-16 text-2xl w-full  border-teal-500 px-4"
          />
        </div>
        
        <div className="flex flex-col text-gray-500">
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder='Contact'
            className="border-4 text-2xl w-full h-16 border-teal-500 px-4"
          />
        </div>

        <div className="flex flex-col text-gray-500">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder='City'
            className="border-4 text-2xl w-full h-16 border-teal-500 px-4"
          />
        </div>

        <div className="flex flex-col text-gray-500">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder=' Address'
            className="border-4 text-2xl w-full h-16 border-teal-500 px-4"
          />
        </div>

        <div className="flex flex-col text-gray-500">
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="border-4 text-sm font-semibold w-full h-16 border-teal-500 px-4"
          >
            <option value="1" >BUY 1 = 160 SAR + Free 1 Mini Serum</option>
            <option value="2">BUY 2 = 250 SAR + Free 1 Mini Serum</option>
            <option value="3">BUY 3 = 350 SAR + Free 1 Mini Serum</option>
          </select>
        </div>

        <div className="flex flex-col text-gray-500">
         {/* <label htmlFor="price" className="font-semibold border-4 w-full h-16 text-2xl border-teal-500 px-4">Price</label>*/}
          <input
            type="text"
            id="price"
            name="price"
            value={`${formData.price} SAR`}
            readOnly
            placeholder='Price'
            className="border-4 w-full h-16 text-2xl border-teal-500 px-4  "
          />
        </div>

        <div>
          <button type="submit" className="bg-red-600 h-18 text-center p-4 pb-3 w-full mt-6 text-white font-mon text-5xl rounded-lg cursor-pointer">Order Now</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
