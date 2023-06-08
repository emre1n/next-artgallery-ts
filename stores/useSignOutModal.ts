import { create } from 'zustand';

type TSignOutModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useSignOutModal = create<TSignOutModalStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignOutModal;
