import { useQuery } from "react-query";
import { fetchProductList } from "../../api";

export const useHomepage = () => {
	const { data: productList, isLoading: isProductListLoading } = useQuery(
		["fetching-product-list"],
		() => fetchProductList(),
		{
			onSuccess: (data) => console.log("RESPONSE", data),
			onError: (err) => console.error(err),
			staleTime: 5 * 60 * 60 * 1000,
		}
	);

	return {
		productList,
		isProductListLoading,
	};
};
