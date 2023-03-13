/** @format */
import {
  makeAutoObservable,
  observable,
  action,
} from "mobx";
import { IMFA } from "../interface";
import { MFAsMockData } from "../mfa.mock";
import { getRandomCode } from "../helper";
import { TIME_DURATION } from "../constant";

export class MFA {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  listMFA: IMFA[] = MFAsMockData;

  @action
  addMFA = ({ name, token, logo }: any) => {
    this.listMFA.push({
      id: this.listMFA.length,
      logo: logo ?? "https://mobx.js.org/img/mobx.png",
      name: name,
      durationTimeLeft: TIME_DURATION,
      token: token ? token : getRandomCode(),
    });
  };

  @action
  countDown = () => {
    this.listMFA = this.listMFA.map((mfa) => {
      if (mfa.durationTimeLeft > 0) {
        return { ...mfa, durationTimeLeft: mfa.durationTimeLeft - 1 };
      } else {
        return { ...mfa, durationTimeLeft: TIME_DURATION, token : getRandomCode() };
      }
    });
  };
}

export const mFA = new MFA();

setInterval(() => {
  mFA.countDown();
}, 1000);
