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
import { Test } from "./components/lotto/Test";

function App() {
	return (
		<ChakraProvider>
			<AlertProvider>
				<ScrollSpyProvider>
					<main>
						<Header />
						<Landing />
						<About/>
						<Projects />
						<Contact />
						{/* <LottoTable/> */}
						<Test/>
						<Footer />
						<Alert />
					</main>
				</ScrollSpyProvider>
			</AlertProvider>
		</ChakraProvider>
	);
}

export default App;
