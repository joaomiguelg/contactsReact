import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store";
import { Container, GlobalStyle } from "./styles";

import { Provider } from 'react-redux';
import Home from "./pages/Home";
import Register from "./pages/Register";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Register/>
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
      <RouterProvider router={routes} />
      </Container>
    </Provider>
  );
}

export default App;
