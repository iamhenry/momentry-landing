import { create } from "zustand"

interface WaitlistStore {
  subscribers: number
  addSubscriber: () => void
}

export const useWaitlistStore = create<WaitlistStore>((set) => ({
  subscribers: 1837,
  addSubscriber: () => set((state) => ({ subscribers: state.subscribers + 1 })),
}))

