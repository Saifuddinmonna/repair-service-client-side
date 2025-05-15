import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="mb-6">
                    <svg
                        className="mx-auto h-16 w-16 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {error.status === 404 ? 'Page Not Found' : 'Something went wrong'}
                </h1>
                <p className="text-gray-600 mb-8">
                    {error.status === 404
                        ? "The page you're looking for doesn't exist or has been moved."
                        : error.message || 'An unexpected error occurred. Please try again later.'}
                </p>
                <div className="space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Go Home
                    </button>
                </div>
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
                        <h3 className="text-sm font-medium text-gray-900 mb-2">Error Details:</h3>
                        <pre className="text-xs text-gray-600 overflow-auto">
                            {JSON.stringify(error, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorBoundary; 