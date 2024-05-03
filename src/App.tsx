import { CssBaseline } from "@mui/material";
import { ExampleComponent } from "./Components/ExampleComponent";

function App() {
  return (
    <>
      <CssBaseline />
      <ExampleComponent name="Robert is the best" value={100} />
      <ExampleComponent name="Robert is cool" style={{ background: 'blue' }} value={99} />
    </>
  );
}

export default App;
