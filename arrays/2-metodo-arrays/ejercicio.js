
const array = ["roberto", "fideos", "salsa"]
function procesarPedido(pedidos) {
    
    const cliente = pedidos.shift()
    const bebida = "coca"
    pedidos.unshift(bebida)
    pedidos.push(cliente)
    return pedidos
  }

console.log(procesarPedido(array));