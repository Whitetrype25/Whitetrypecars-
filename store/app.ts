import { create } from 'zustand';
import type { Stage } from '../services/pricing';

type State = {
  stage: Stage | null;
  total: number;
  stage3Accepted: boolean;
};
type Actions = {
  setStage: (s: Stage | null) => void;
  setTotal: (n: number) => void;
  setStage3Accepted: (b: boolean) => void;
};

export const useStore = create<State & Actions>((set) => ({
  stage: null,
  total: 0,
  stage3Accepted: false,
  setStage: (stage) => set({ stage }),
  setTotal: (total) => set({ total }),
  setStage3Accepted: (stage3Accepted) => set({ stage3Accepted }),
}));
