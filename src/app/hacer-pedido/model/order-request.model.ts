export interface OrderRequest{
    shipping_address: string;
    pickup_address: string;
    express_shipping: boolean;
    tipo_encomienda: string;
}