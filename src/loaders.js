// YOUR DEPLOYED API BASE URL
const URL = "https://everbloombackend.onrender.com"

//indexLoader => get all todos for index route
export const indexLoader = async () => {
    const response = await fetch(URL + "/everbloomcart/")
    const products = await response.json()
    return products
}

//showLoader => get a single todo for Show route
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/everbloomcart/${params.id}/`)
    const product = await response.json()
    return product
}