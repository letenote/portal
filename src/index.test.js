import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import AppContext from "context/AppContext";
const { AppProvider } = AppContext;

jest.mock("react-dom", () => ({ render: jest.fn() }));
describe("@APPLICATION_ROOT", () => {
  it("use jsdom in this test file", () => {
    const element = document.createElement("div");
    expect(element).not.toBeNull();
  });

  it("should render without crashing from DOM", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    // require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <AppProvider>
        <App/>
        </AppProvider>, 
      <div id="root" />
    );
  });
});