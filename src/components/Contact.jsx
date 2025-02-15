import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle form submission
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Fetch the backend URL from environment variables
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      // Make the POST request to the backend API
      const response = await fetch(`${backendUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // If the response is successful
      if (response.ok) {
        const responseData = await response.json();
        setIsSubmitted(true); // Mark the form as successfully submitted
        console.log('Form submitted successfully', responseData);
      } else {
        console.error('Failed to submit form', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.div
      className="h-full mb-4 mx-2 md:ml-[5%] md:mr-[5%] md:mx-auto max-w-[1366px] flex flex-col-reverse md:flex-row items-center gap-[50px] mt-10 bg-gray-200"
      style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.005 }}
    >
      <div className="flex-1 bg-gray-100 md:w-[90%] md:p-[10px]" style={{ borderRadius: '8px', padding: '30px' }}>
        {!isSubmitted ? (
          <form
            className="flex flex-col gap-[30px] w-full mx-2 md:w-[90%] md:mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
              type="tel"
              placeholder="Mobile Number"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black"
              {...register('mobileNumber', { required: 'Mobile number is required' })}
            />
            {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber.message}</p>}

            <input
              type="text"
              placeholder="Business Type"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black"
              {...register('businessType', { required: 'Business type is required' })}
            />
            {errors.businessType && <p className="text-red-500">{errors.businessType.message}</p>}

            <input
              type="text"
              placeholder="Business Location"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black"
              {...register('businessLocation', { required: 'Business location is required' })}
            />
            {errors.businessLocation && <p className="text-red-500">{errors.businessLocation.message}</p>}

            <textarea
              placeholder="Message"
              className="p-[10px] border border-gray-400 bg-white rounded-md text-black h-[100px]"
              {...register('message')}
            />

            <button
              type="submit"
              className="p-[15px_30px] bg-[#880e4f] text-white rounded-md cursor-pointer hover:bg-[#4e6185]"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4e6185' }}>
              Thank you for submitting the form!
            </h2>
            <p className="text-lg text-gray-600">
              Your form has been successfully submitted. Our team will get in touch with you as soon as possible.
            </p>
          </div>
        )}
      </div>

      <motion.div className="flex-1 flex flex-col gap-[20px] w-full mx-2 md:order-1" variants={variants}>
        <motion.h1
          className="text-[30px] text-primary leading-[40px] text-left md:text-[60px] md:leading-[70px]"
          style={{ color: '#4e6185' }}
          variants={variants}
        >
          Let's build a great website together
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
