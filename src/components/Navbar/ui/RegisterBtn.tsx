import Link from 'next/link';
import React from 'react';

const RegisterBtn = () => {
    return (
      <div>
        <Link href={"/register"}>
          <button className="py-4 px-9 md:text-xs lg:text-[17px] font-semibold bg-orange-400 hover:bg-orange-300  rounded-full transition-colors duration-300">
            REGISTER NOW
          </button>
        </Link>
      </div>
    );
};

export default RegisterBtn;