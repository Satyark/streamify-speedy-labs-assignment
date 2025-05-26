import {
    formatNumber,
    formatCurrency,
    formatPercentage,
    formatDate,
    formatDuration,
    calculateGrowth,
    filterData
  } from './utils';
  import { StreamData } from './types';
  
  describe('Utility Functions', () => {
    test('formatNumber', () => {
      expect(formatNumber(500)).toBe('500');
      expect(formatNumber(1500)).toBe('1.5K');
      expect(formatNumber(2000000)).toBe('2.0M');
    });
  
    test('formatCurrency', () => {
      expect(formatCurrency(1500)).toBe('$1,500');
      expect(formatCurrency(999999)).toBe('$999,999');
    });
  
    test('formatPercentage', () => {
      expect(formatPercentage(12.345)).toBe('12.3%');
      expect(formatPercentage(0)).toBe('0.0%');
    });
  
    test('formatDate', () => {
      const date = '2023-12-25T15:30:00Z';
      expect(formatDate(date)).toMatch(/Dec 25, 2023/);
    });
  
    test('formatDuration', () => {
      expect(formatDuration(65)).toBe('1:05');
      expect(formatDuration(3601)).toBe('60:01');
    });
  
    test('calculateGrowth', () => {
      expect(calculateGrowth(200, 100)).toBe(100);
      expect(calculateGrowth(50, 100)).toBe(-50);
    });
  
    test('filterData', () => {
      const mockData: StreamData[] = [
        { id: 1, location: 'US', streamCount: 1000 },
        { id: 2, location: 'IN', streamCount: 2000 },
        { id: 3, location: 'UK', streamCount: 3000 },
      ];
  
      expect(filterData(mockData, ['US', 'UK'])).toEqual([
        { id: 1, location: 'US', streamCount: 1000 },
        { id: 3, location: 'UK', streamCount: 3000 }
      ]);
    });
  });
  