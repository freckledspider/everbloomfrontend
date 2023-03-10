import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import { createAction, updateAction, deleteAction } from "./actions";
import InventoryShow from "./pages/InventoryShow"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>}/>
            <Route path="product/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        <Route path="/cart" element={<Cart/>} loader={indexLoader}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/inventory/:id" element={<InventoryShow />}/>
        </Route>
    </>
))

export default router