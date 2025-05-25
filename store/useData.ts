import { create } from 'zustand';
import keyMetrics from '@/data/keyMetrics.json';
import visualizationData from '@/data/visualizationData.json';
import tableData from '@/data/tableData.json';

type DashboardState = {
    keyMetrics: typeof keyMetrics;
    visualizationData: typeof visualizationData;
    recentStreams: typeof tableData.recentStreams;
  };
const useData = create<DashboardState>((set) => ({
    keyMetrics,
    visualizationData,
    recentStreams: tableData.recentStreams,
}));

export default useData;