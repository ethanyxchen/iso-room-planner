import { useCallback } from 'react';
import { isoToGrid, getCanvasOffset } from '../utils/isometric';

export function useIsometric(
  gridWidth: number,
  gridHeight: number,
  canvasWidth: number,
  canvasHeight: number
) {
  const offset = getCanvasOffset(gridWidth, gridHeight, canvasWidth, canvasHeight);

  const screenToGrid = useCallback(
    (screenX: number, screenY: number) => {
      // Remove canvas offset to get isometric coordinates
      const isoX = screenX - offset.x;
      const isoY = screenY - offset.y;
      const grid = isoToGrid(isoX, isoY);

      // Bounds check
      if (grid.x < 0 || grid.x >= gridWidth || grid.y < 0 || grid.y >= gridHeight) {
        return null;
      }
      return { x: grid.x, y: grid.y };
    },
    [offset.x, offset.y, gridWidth, gridHeight]
  );

  return { offset, screenToGrid };
}
