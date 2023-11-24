import { SafeAreaView } from "react-native";
import { reactQueryClient } from "./app/query-client";
import { QueryClientProvider } from "react-query";
import Home from "./app/screens/home";

function App(): JSX.Element {
	return (
		<SafeAreaView>
			<QueryClientProvider client={reactQueryClient}>
				<Home />
			</QueryClientProvider>
		</SafeAreaView>
	);
}

export default App;
