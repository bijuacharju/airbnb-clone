import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <>
                                <Header />
                                <SearchPage />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
