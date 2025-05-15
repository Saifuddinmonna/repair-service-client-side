export class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'AppError';
    }
}

export const handleApiError = (error) => {
    if (error instanceof AppError) {
        return {
            message: error.message,
            statusCode: error.statusCode
        };
    }

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            message: error.response.data?.message || 'An error occurred while processing your request',
            statusCode: error.response.status
        };
    }

    if (error.request) {
        // The request was made but no response was received
        return {
            message: 'No response received from server. Please check your internet connection.',
            statusCode: 503
        };
    }

    // Something happened in setting up the request that triggered an Error
    return {
        message: error.message || 'An unexpected error occurred',
        statusCode: 500
    };
};

export const isNetworkError = (error) => {
    return error.message === 'Network Error' || !error.response;
};

export const isAuthError = (error) => {
    return error.response?.status === 401 || error.response?.status === 403;
};

export const isNotFoundError = (error) => {
    return error.response?.status === 404;
};

export const isServerError = (error) => {
    return error.response?.status >= 500;
}; 