import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f4ec] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-[120px] md:text-[160px] font-bold text-[#b38600]">404</h1>
      <h2 className="text-[24px] md:text-[32px] font-semibold text-[#8c3e1a] mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-[14px] md:text-[16px] text-gray-700 mb-6 max-w-[400px]">
        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-[#b38600] text-white px-6 py-3 rounded-md uppercase tracking-widest hover:bg-[#8c3e1a] transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
