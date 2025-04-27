import { create } from 'zustand';
import { MatchupData } from '@/types/matchup';

interface MatchupState {
  data: MatchupData | null;
  setData: (data: MatchupData) => void;
}

export const useMatchupStore = create<MatchupState>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
