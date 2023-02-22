import { redirect } from "react-router-dom"

const URL = "https://everbloombackend.onrender.com"

export const createAction = async ({ request }) => {

    const formData = await request.formData()
  
    const newProduct = {
        product: formData.get("product"),
        image: formData.get("image"),
        price: formData.get("price"),
        description: formData.get("description"),
        card: formData.get("card"),
    }
  
    await fetch(URL + "/everbloomcart/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
  
    return redirect("/")
  }
  
  export const updateAction = async ({request, params}) => {
  
      const formData = await request.formData()
  
      const updatedProduct = {
        product: formData.get("product"),
        image: formData.get("image"),
        price: formData.get("price"),
        description: formData.get("description"),
        card: formData.get("card"),
      }
  
      await fetch(URL + "/everbloomcart/" + params.id, {
          method: "put",
          headers: {
              "Content-Type":"application/json"
          },
          body: JSON.stringify(updatedProduct)
      })
  
      return redirect("/")
  }
  
  export const deleteAction = async ({params}) => {
  
      await fetch(URL + "/everbloomcart/" + params.id, {
          method: "delete"
      })
  
      return redirect("/")
  }