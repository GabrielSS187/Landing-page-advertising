import { RoutesComponent } from "./routes";

import { GlobalStyles } from "./shared/styles/GlobalStyles";

import { Footer } from "./shared/components/footer";

function App() {
  return (
    <main>
      <RoutesComponent />
      <Footer />
      <GlobalStyles />
    </main>
  )
}

export default App
