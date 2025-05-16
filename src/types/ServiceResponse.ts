interface ServiceResponse<T> {
    message: string
    data?: T
    error?: string
    user?: Object
    token?: string
}

export default ServiceResponse