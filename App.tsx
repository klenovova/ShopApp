import { QueryClientProvider } from "react-query";
import ShoppersStop from "./src";
import { reactQueryClient } from "./src/query-client";

function App(): JSX.Element {
	return (
		<QueryClientProvider client={reactQueryClient}>
			<ShoppersStop />
		</QueryClientProvider>
	);
}

export default App;
