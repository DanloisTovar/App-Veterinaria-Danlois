import React from 'react';

const ErrorFormulario = ({ children }) => {
    return (
        <div>
            <p className="bg-red-600 text-white p-3 font-bold rounded-md uppercase text-center mb-5">
                {children}
            </p>
        </div>
    );
};

export default ErrorFormulario;
