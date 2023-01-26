import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type User = {
  name: string;
  iino: string;
  totalWage: string;
  gender: "male" | "female" | "none";
};

type UserSlice = {
  store: {
    user: Partial<User>;
  };
  actions: {
    setUser: (payload: Partial<User>) => void;
  };
};

const initUser: User = {
  name: "",
  iino: "",
  totalWage: "",
  gender: "none",
};

const userSlice = create<UserSlice>()(
  immer((set, get) => ({
    store: {
      user: initUser,
    },

    actions: {
      setUser: (payload) =>
        set((state) => {
          state.store.user = payload;
        }),
    },
  }))
);

export const userStore = () => userSlice((state) => state.store);
export const userActions = () => userSlice((state) => state.actions);
