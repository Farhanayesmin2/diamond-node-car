import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router/Router";
function App() {
  return (
    <div className='max-w-screen-xl mx-auto bg-zinc-900'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
