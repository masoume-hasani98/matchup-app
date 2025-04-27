import { mockMatchupData } from '@/mocks/matchupData';

export const getMatchupData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockMatchupData;
};
