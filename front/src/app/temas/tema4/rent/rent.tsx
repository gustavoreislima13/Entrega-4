import React from 'react';

const CarRentalForm: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Billing Info</h2>
            <p className="text-sm text-gray-500 mb-6">Please enter your billing info</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Name" />
              <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Phone Number" />
              <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Address" />
              <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Town / City" />
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
            <p className="text-sm text-gray-500 mb-6">Please select your rental date</p>
            <div>
              <div className="flex items-center mb-4">
                <input type="radio" id="pick-up" name="rental-type" className="mr-2" />
                <label htmlFor="pick-up" className="text-gray-700">Pick - Up</label>
              </div>
              <div className="flex items-center mb-4">
                <input type="radio" id="drop-off" name="rental-type" className="mr-2" />
                <label htmlFor="drop-off" className="text-gray-700">Drop - Off</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <select className="border border-gray-300 p-3 rounded-lg">
                  <option>Select your city</option>
                </select>
                <select className="border border-gray-300 p-3 rounded-lg">
                  <option>Select your date</option>
                </select>
                <select className="border border-gray-300 p-3 rounded-lg">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <p className="text-sm text-gray-500 mb-6">Please enter your payment method</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="radio" id="credit-card" name="payment-method" className="mr-2" />
                <label htmlFor="credit-card" className="font-semibold text-gray-700">Credit Card</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Card Number" />
                <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Expiration Date" />
                <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="Card Holder" />
                <input className="border border-gray-300 p-3 rounded-lg" type="text" placeholder="CVC" />
              </div>
              <div className="flex items-center">
                <input type="radio" id="paypal" name="payment-method" className="mr-2" />
                <label htmlFor="paypal" className="font-semibold text-gray-700">PayPal</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="bitcoin" name="payment-method" className="mr-2" />
                <label htmlFor="bitcoin" className="font-semibold text-gray-700">Bitcoin</label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
            <p className="text-sm text-gray-500 mb-6">We are getting to the end. Just a few clicks and your rental is ready!</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" />
                <label htmlFor="marketing" className="text-gray-700">I agree with sending marketing and newsletter emails. No spam, promised!</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-700">I agree with our terms and conditions and privacy policy.</label>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 w-full">Rent Now</button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
          <p className="text-sm text-gray-500 mb-6">Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className="flex items-center mb-6">
            <img src="/path/to/car-image.jpg" alt="Nissan GT - R" className="w-24 h-16 mr-4 rounded-md" />
            <div>
              <h3 className="font-semibold text-lg">Nissan GT - R</h3>
              <p className="text-yellow-500">★★★★☆ 440+ Reviews</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-700">$80.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-700">Tax</span>
            <span className="text-gray-700">$0</span>
          </div>
          <div className="mb-6">
            <input className="border border-gray-300 p-3 rounded-lg w-full" type="text" placeholder="Apply promo code" />
            <button className="bg-gray-200 text-black px-4 py-2 rounded-lg mt-2 w-full">Apply now</button>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <span>Total Rental Price</span>
            <span>$80.00</span>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-12">All your data are safe. We are using the most advanced security to provide you the best experience ever.</p>
    </div>
  );
};

export default CarRentalForm;