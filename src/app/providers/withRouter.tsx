import { ComponentType } from "react";
import { BrowserRouter } from "react-router-dom";

export function withRouter(Component: ComponentType) {
  // eslint-disable-next-line react/display-name
  return function () {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  };
}
