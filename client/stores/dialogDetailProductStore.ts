import { create } from 'zustand'

export const useStoreDialogProduct = create((set) => ({
  isShow: false,
  isOpen: () => set((state:{isShow: boolean}) => ({ isShow: true })),
  isClose: () => set((state:{isShow: boolean}) => ({ isShow: false })),
}))