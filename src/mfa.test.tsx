/** @format */

import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./component/common/header";
import * as router from "react-router";
import { MFA } from "./shared/mobx-store/mfa";
import MFAApp from "./component/mfa-app";
import { Footer } from "./component/common/footer";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { MFAAdd } from "./component/mfa-add";

const mockedUsedNavigate = jest.fn();

beforeEach(() => {
  jest
    .spyOn(router, "useNavigate")
    .mockImplementation(() => mockedUsedNavigate);
});

test("renders header", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Tokens/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Settings/i);
  expect(linkElement).toBeInTheDocument();
});

test("create store", () => {
  const mfA = new MFA();
  expect(mfA.listMFA[0].id).toBe(1);
});

test("render list MFA", () => {
  const mfA = new MFA();
  expect(mfA.listMFA[0].id).toBe(1);

  render(<MFAApp />);
  const screenText = screen.getByText(/Token 1/i);
  expect(screenText).toBeInTheDocument();
});

test("redirect to add MFA screen", async () => {
  const mfA = new MFA();
  expect(mfA.listMFA[0].id).toBe(1);

  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MFAApp />} />
        <Route path="add" element={<MFAAdd />} />
      </Routes>
    </BrowserRouter>
  );
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    const buttonAdd = screen.getByTestId("add");
    fireEvent.click(buttonAdd);
  });
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/add");
});

test("add mfa token", async () => {
  const route = "/add";
  render(
    <MemoryRouter initialEntries={[route]}>
      <MFAAdd />
    </MemoryRouter>
  );

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    const inputName = screen.getByTestId("name");
    fireEvent.change(inputName, { target: { value: "New token" } });
    await screen.findByDisplayValue(/New token/);

    const inputToken = screen.getByTestId("token");
    fireEvent.change(inputToken, { target: { value: "111111" } });
    await screen.findByDisplayValue(/111111/);


     const buttonAdd = screen.getByTestId("submit");
     fireEvent.click(buttonAdd);
  });

   expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
