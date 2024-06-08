import { OrderRequest } from "./order-request.model";

export interface OrderResponse{
    summary:OrderRequest;
    amount: number;
}