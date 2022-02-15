import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";

const client = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={client}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</QueryClientProvider>,
	document.getElementById("root")
);
