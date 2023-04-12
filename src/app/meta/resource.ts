import Cube from '../../models/cube';
import { ICubesStats } from '../../types';

export const cubesStats = async (): Promise<ICubesStats | undefined> => {
  const [stats] = await Cube.getStats();
  return stats;
};
