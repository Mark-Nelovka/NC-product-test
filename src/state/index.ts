import { createGlobalState } from "react-hooks-global-state";
import IState from "../Interfaces/State.interface";

export const initialState: IState = {
  itemForBasket: null,
  items: null,
  item: null
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };