import { MOLES } from "./constants";
import { ENEMYHIDE } from "./constants";

export function Moles() {
    return {
          type: MOLES,
        }
  }
export function enemyHide() {
    return {
          type: ENEMYHIDE,
        };
  }