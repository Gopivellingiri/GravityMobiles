import AllPage from "./pages/AllPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AllPage />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
