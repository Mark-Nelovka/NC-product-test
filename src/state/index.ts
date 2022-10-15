import { createGlobalState } from "react-hooks-global-state";
import IState from "../Interfaces/State.interface";

export const initialState: IState = {
  id: false,
  itemForBasket: null,
  items: null
};

const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { setGlobalState, useGlobalState };