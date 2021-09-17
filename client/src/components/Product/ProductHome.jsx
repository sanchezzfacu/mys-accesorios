import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../actions";

function ProductHome() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    })

    return (
        <div>
            {
                products.map(el => el.product)
            }
        </div>        
    )
}

export default ProductHome
