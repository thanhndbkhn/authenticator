import { createContext } from "react"
import { MFA, mFA } from "./mobx-store/mfa"

export const MFAContext = createContext<MFA>(mFA)