import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import About from "./components/about/About";
import { ScrollSpyProvider } from "./context/scrollSpyContext";
import Projects from "./components/projects/Projects";
import Landing from "./components/landing/Landing";
import Contact from "./components/contact/Contact";
import LottoTable from "./components/lotto/LottoTable";
import LuckySpin from "./components/spin/LuckySpin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home () {
	return (
		<>
		<Header />
		<Landing />
		<About/>
		<Projects />
		<Contact />
		<Footer />
		<Alert />
		</>
	)
}

function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<AlertProvider>
					<ScrollSpyProvider>
						<main>
							<Routes>
								<Route path="/" element={<Home/>}/>
								<Route path="/lotto" element={<LottoTable/>}/>
								<Route path="/luckyspin" element={<LuckySpin/>}/>
							</Routes>
						</main>
					</ScrollSpyProvider>
				</AlertProvider>
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;
