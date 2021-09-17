import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClients } from '../../actions'
import ClientCard from './ClientCard'
import SearchBarClient from './SearchBarClient'

function ClientHome() {
    const dispatch = useDispatch()
    const clients = useSelector((state) => state.clients)

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])
    
    return (
        <div>
            <SearchBarClient/>
            <div>
                {
                    clients.map(el => {
                        return (
                            <div>
                                <ClientCard 
                                    name={el.name.toUpperCase()} 
                                    phone={el.phone} 
                                    buyDay={el.buyDay} 
                                    totalSpent={el.totalSpent}
                                    products={el.products.map(el => el.product.toString())}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ClientHome
