class Cliente {
    nombreCliente;
    dniCliente;
    RFC;
}

class CuentaCorriente {
    numero;
    saldo;
    agencia;
}


const cliente1 = new Cliente();
cliente1.nombreCliente = "José"
cliente1.dniCliente = "13232"

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero = "2323456"
cuentaCorriente1.saldo = "300"

console.log(cliente1);
console.log(cuentaCorriente1);