import { Href } from "expo-router";

interface MainSliceState {
  user: null | User;
  authInitialRoute: Href;
  isLoggedIn: boolean;
  preferredLanguage: Language;
  myFarms: Farm[];
}

interface User {
  name?: string ;
  phone?: string;
  email?: string;
  photo?: string | null;
  token?: string ;
  type?: UserType;
}

interface Language {
  label: string;
  code: string;
}

interface AddMyFarmAction {
  payload: Farm;
}

interface SetUserAction {
  payload: User;
}

interface SetPreferredLanguageAction {
  payload: Language;
}

declare type UserType = 'farmer' | 'agriInvestor' | 'businessOwner';
