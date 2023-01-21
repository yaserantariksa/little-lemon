import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TableReservation from "./pages/TableReservation";
import Layout from "./layouts/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route
                            path="table-reservation"
                            element={<TableReservation />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
