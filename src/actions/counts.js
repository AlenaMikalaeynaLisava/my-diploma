import {REFRESH} from "../constants/counts"

export const refreshNumber = (number) => ({
  type: REFRESH,
  payload: number,
});