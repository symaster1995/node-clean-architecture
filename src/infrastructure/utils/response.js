class Response {
    setSuccess(res, status, message, data) {
        const result = {
            status,
            message,
            data
        }

        return res.status(status).json(result)
    }

    setError(res, status, message) {
        const result = {
            status,
            message
        }

        return res.status(status).json(result)
    }
}

export default Response