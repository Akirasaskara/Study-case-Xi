interface order {
    id: number;
    customer: string;
    menu: string;
    qty: number;
    price: number;
}

const orders: order[] = [
    {id:1, customer:"Cecep", menu:"Nasi Goreng",qty:2,price:20000},
    {id:2, customer:"Budi", menu:"Mie Ayam Jumbo",qty:1,price:15000},
    {id:3, customer:"Citra", menu:"Es Teh Anget",qty:3,price:5000},
    {id:4, customer:"Andi", menu:"Es Jeruk Anget",qty:1,price:8000},

]

//no 1
const TotalHarga = orders.map(order => {
    return{
        ...order,
        totalharga: order.qty * order.price
    }
})

console.log ("1. Total pesanan anda:")
console.log (TotalHarga)


//no 2
const TotalPelanggan = TotalHarga.map(order => {
    return{
        customer: order.customer,
        TotalHarga:order.totalharga,
    }

})   

console.log ("\n2. Nama Pelanggan dan total harga")
console.log(TotalPelanggan)


//no 3
const pesananlebihdarisatu = orders.filter(order => order.qty > 1)
console.log ("\n3. Total pessanan dengan jumlah (qty) lebih dari 1:")
console.log (pesananlebihdarisatu);