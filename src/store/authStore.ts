import { create } from "zustand";

interface TAuth {
  auth: { loggedIn: boolean };
  setAuth: (loggedIn: boolean) => void;
}

const useAuthStore = create<TAuth>()((set) => ({
  auth: { loggedIn: false },
  setAuth: (loggedIn: boolean) => set((state) => ({ auth: { loggedIn } })),
}));

export default useAuthStore;
