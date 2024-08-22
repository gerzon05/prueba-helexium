import Client from "../mocks/client.json"
import Invoices from "../mocks/invoices.json"
import Products from "../mocks/products.json"

export function getClient() {
    const mocksClient = Client.search
    return mocksClient.map((client) => ({
        id: client.client_id,
        name: client.name,
        email: client.email,
        phone: client.phone,
        address: client.address,
    }))
}
export function getinvoices() {
    const mocksinvoices = Invoices.search
    return mocksinvoices.map((invoices) => ({
        id: invoices.invoices_id,
        id_client: invoices.client_id,
        name: invoices.name_client,
        date: invoices.date,
        amount: invoices.amount,
        status: invoices.status,
        products: invoices.products,
    }))
}
export function getProducts() {
    const mocksProducts = Products.search
    return mocksProducts.map((Product) => ({
        id: Product.id,
        name: Product.name,
        price: Product.price,
        stock: Product.stock,
        image: Product.image,
        description: Product.description,
    }))
}