// GLOBAL
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// LOCAL
import { AuthProvider } from "./context/authContext";
import App from "./App";
import { QueryProvider } from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
