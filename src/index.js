import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"; //Remove before sending + line 14!
import "./index.css";
import App from "./App";

const client = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={client}>
		<React.StrictMode>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</React.StrictMode>
	</QueryClientProvider>,
	document.getElementById("root")
);
