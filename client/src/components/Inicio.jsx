import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getClients } from '../actions'

function Home() {

    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients)

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch])

    return (
        <div>
            <div>
            <a href="/home/clients"><button>Clients</button></a>
            <a href="/home/products"><button>Products</button></a>
            </div>
            <div>
                {
                    clients.map(el => {
                        let total = 0;
                        total = total + el.totalSpent
                        return (
                            <div>
                                {total}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
