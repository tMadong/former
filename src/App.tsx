import { useRoutes } from "react-router-dom";

import { APP_ROUTES } from "./configs/routerConfig/router";

function App() {
  const routes = useRoutes(APP_ROUTES);

  return routes;
}

export default App;
