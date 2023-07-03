import constants from "../constants";

export const invalidApiPathHandler = (req, res, next) => {
    let error = new Error("Invalid API path");
    error.statusCode = 404;
    next(error);
}
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: 'Not Found ',
                message: err.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : err.stack
            });
            break;
        case constants.PAGE_NOT_FOUND:
            res.json({
                title: 'Page Not Found ',
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });

            break;
        case constants.VALIDATION_ERROR:
            res.json({title: 'Validation Failed', message: err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: 'Server error',
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
            break;

        default:
            res.status(500).json({
                title: 'Internal Server Error',
                message: err.message,
                stackTrace: process.env.NODE_ENV === 'production' ? null : err.stack
            });
            break;
    }
    console.log(`Here's the status code: ${statusCode}`);
}
