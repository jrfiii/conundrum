import { CssBaseline } from "@mui/material";
import { ExampleComponent } from "./Components/ExampleComponent";

function App() {
  return (
    <>
      <CssBaseline />
      <ExampleComponent name="Robert is the best" value={100}></ExampleComponent>
    </>
  );
}

export default App;
