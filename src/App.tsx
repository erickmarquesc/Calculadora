import { Calculator } from "./components/Calculator";
import { CalcContextProvider } from "./context/CalcContext";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <CalcContextProvider>
      <GlobalStyle />
      <Calculator />
    </CalcContextProvider>
  );
};