import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mx-1 ">
      <div className="mx-auto">
        <div className="relative flex flex-col bg-white rounded-xl shadow-lg w-full max-w-sm">
          
          <div className="p-4 bg-purple-500 rounded-t-md text-center">
            <p className="text-white font-bold text-lg uppercase">
              Pro Pack - ₹349.00
            </p>
          </div>

         
          <div className="p-4 text-center mt-4">
            <p className="text-gray-700 font-medium">
              Join the Pro Pack and get access to all exclusive content!
            </p>
          </div>

          <div className="p-2 text-center mt-4">
            <p className="text-gray-700 font-bold text-xl">
            ₹349 Only
            </p>
          </div>
          
          <div className="py-6 mx-4 my-4">
            <button className="font-semibold bg-purple-500 w-full py-2 rounded-md shadow-md text-white hover:bg-purple-600 transition-colors">
              Buy Now
            </button>
          </div>

          {/* Footer Section */}
          <div className="p-3 text-white bg-gray-500 rounded-b-md">
            <p className="font-semibold">100% Refund at Cancellation</p>
            <span className="text-[9px]">*Terms & Conditions Apply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
