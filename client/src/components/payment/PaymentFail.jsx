import React from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center space-y-6">
        <div className="h-36 w-36 bg-red-500 flex justify-center items-center rounded-full shadow-lg animate-pulse">
          <MdClose className="text-6xl font-bold text-white" />
        </div>
        <p className="text-3xl font-bold text-center">Payment Failed!</p>
        <p className="text-center text-gray-500">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <Link to='/subscribe' className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 py-2 px-6 rounded-md shadow-md">
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default PaymentFail;
