import React from "react";
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Show Toastify success message
    toast.success('Your message has been sent successfully.', {
      position: "top-right", // Correct way to specify position
      autoClose: 4000,
    });

    // Reset the form after showing the toast
    document.getElementById('contactForm').reset();
  };

  return (
    <div>
      <section id="contact-content" className="py-12 brand-bg text-white">
        <div className="container mx-auto p-3">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </div>
                <div id="responseMessage" className="mt-4"></div>
              </form>
            </div>
            <div className="flex">
              <p className="text-lg max-w-2xl mx-auto">
                S.H GLOBAL LOGISTICS LLC
                <br />
                ADDRESS: 2020 Downyflake Lane, Ste 301F
                <br />
                Allentown, PA 18103
                <br />
                Phone: 737-910-4040
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
