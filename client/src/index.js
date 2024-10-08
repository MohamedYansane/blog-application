import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <Router>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </Router>
);
