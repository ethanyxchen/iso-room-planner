import { useState, useCallback } from 'react';
import type { Grid, Cell, FurnitureItem, PlacedFurniture } from '../types';

const GRID_SIZE = 16;

function createEmptyGrid(width: number, height: number): Grid {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, (): Cell => ({
      type: 'empty',
      furniture: null,
    }))
  );
}

export function useGrid(width = GRID_SIZE, height = GRID_SIZE) {
  const [grid, setGrid] = useState<Grid>(() => createEmptyGrid(width, height));

  const toggleTile = useCallback((x: number, y: number) => {
    setGrid(prev => {
      const next = prev.map(row => row.map(cell => ({ ...cell })));
      const cell = next[y][x];
      if (cell.type === 'empty') {
        cell.type = 'floor';
      } else if (cell.type === 'floor') {
        cell.type = 'wall';
        cell.furniture = null;
      } else {
        cell.type = 'empty';
        cell.furniture = null;
      }
      return next;
    });
  }, []);

  const placeFurniture = useCallback((x: number, y: number, item: FurnitureItem) => {
    setGrid(prev => {
      const cell = prev[y][x];
      if (cell.type !== 'floor') return prev;

      const next = prev.map(row => row.map(c => ({ ...c })));
      const placed: PlacedFurniture = { item, gridX: x, gridY: y };
      next[y][x] = { ...next[y][x], furniture: placed };
      return next;
    });
  }, []);

  const removeFurniture = useCallback((x: number, y: number) => {
    setGrid(prev => {
      if (!prev[y][x].furniture) return prev;
      const next = prev.map(row => row.map(c => ({ ...c })));
      next[y][x].furniture = null;
      return next;
    });
  }, []);

  const clearGrid = useCallback(() => {
    setGrid(createEmptyGrid(width, height));
  }, [width, height]);

  return { grid, toggleTile, placeFurniture, removeFurniture, clearGrid };
}
