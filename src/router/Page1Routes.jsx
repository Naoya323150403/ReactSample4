import { Page1 } from "../Page1";
import { Page1DetaiA } from "../Page1DetailA";
import { Page1DetaiB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetaiA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetaiB />
  }
];
