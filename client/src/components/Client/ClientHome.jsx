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
            <select>
                <option>Deudores</option>
                <option>Maximas ventas</option>
            </select>
            <SearchBarClient/>
            <div>
                {
                    clients.map(el => {
                        return (
                            <div key={el.id}>
                                <a href={'/detail/' + el.id}>
                                    <ClientCard 
                                        name={el.name.toUpperCase()} 
                                        phone={el.phone} 
                                        buyDay={el.buyDay} 
                                        totalSpent={el.totalSpent}
                                        products={el.products.map(el => el.product.toString())}
                                    />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ClientHome
