import { BrowserRouter } from "react-router-dom";
import { HeaderWidg } from "../widgets/header";
import { MantineProvider } from "./providers/MantineProvider";
import { QueryProvider } from "./providers/QueryProvider";
import { AppRouter } from "./router";

function App() {
  return (
    <QueryProvider>
      <MantineProvider>
        <BrowserRouter>
          <HeaderWidg />
          <AppRouter />
        </BrowserRouter>
      </MantineProvider>
    </QueryProvider>
  );
}

export default App;
