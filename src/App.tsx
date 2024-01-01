import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import CartModal from "./components/CartModal";
import CurrencyModal from "./components/CurrencyModal";
import { useAppSelector } from "./app/hooks";
import Checkout from "./pages/Checkout";

function App() {
	const modal = useAppSelector((state) => state.conditional.modal);
	const currencyModal = useAppSelector(
		(state) => state.conditional.currencyModal
	);
	const [category, setCategory] = useState("women");

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar category={category} setCategory={setCategory} />
				{modal && <CartModal />}
				{currencyModal && <CurrencyModal />}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/men" element={<Men />} />
					<Route path="/kids" element={<Kids />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="product/:id" element={<ProductPage />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
