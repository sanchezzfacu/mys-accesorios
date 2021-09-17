function ClientCard({img, name,phone,buyDay,totalSpent, products}) {
    return (
        <div>
            <h3>Nombre: {name}</h3>
            <h3>Celular: {phone}</h3>
            <h3>Fecha de compra: {buyDay}</h3>
            <h4>Productos comprados: {products}</h4>
            <h3>Total gastado: {totalSpent}</h3>
        </div>        
    )
}

export default ClientCard
