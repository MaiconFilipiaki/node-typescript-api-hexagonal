import ApiError from "./ApiError"

export default (err, req, res, next) => {
    if (err instanceof ApiError) {
        const { message } = err;
        if (typeof message === 'string') {
            return res.status(err.code).json({ message })
        } 
        return res.status(err.code).json( message )
        
    }
    return res.status(500).json('Internal Server Error')
}