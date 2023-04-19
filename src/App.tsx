import { CalcContextProvider } from "./context/CalcContext";
import { Calculator } from "./components/Calculator";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <CalcContextProvider>
      <GlobalStyle />
      <Calculator />
    </CalcContextProvider>
  );
};