import { Price } from "./price"

export interface Book {
    id:number,
	title: string,
	totalPages: number,
	author: string
	price: Price
}
