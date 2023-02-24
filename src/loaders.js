const URL = "https://everbloombackend.onrender.com"

export const indexLoader = async () => {
    const response = await fetch(URL + "/everbloomcart/")
    const products = await response.json()
    return products
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/everbloomcart/${params.id}/`)
    const product = await response.json()
    return product
}