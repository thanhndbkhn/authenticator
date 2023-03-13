/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./component/common/header";
import * as router from "react-router";
import { MFA } from "./shared/mobx-store/mfa";
import MFAApp from "./component/mfa-app";
import { Footer } from "./component/common/footer";

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
