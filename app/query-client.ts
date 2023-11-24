import { QueryClient } from "react-query";

export const reactQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount) => failureCount < 3
        }
    }
})