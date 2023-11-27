export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

export interface ProductListingResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export interface CartItem {
	product: Product;
	count: number;
}

export interface CartContextType {
	productList: ProductListingResponse | undefined;
	isProductListLoading: boolean;
	cartItems: CartItem[];
	setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
	onAddToCart: (product: Product) => void;
	onRemoveFromCart: (productId: number) => void;
}
