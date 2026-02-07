import type { Point } from '../types';

export const TILE_WIDTH = 64;
export const TILE_HEIGHT = 32;

export function gridToIso(gridX: number, gridY: number): Point {
  return {
    x: (gridX - gridY) * (TILE_WIDTH / 2),
    y: (gridX + gridY) * (TILE_HEIGHT / 2),
  };
}

export function isoToGrid(isoX: number, isoY: number): Point {
  const gridX = (isoX / (TILE_WIDTH / 2) + isoY / (TILE_HEIGHT / 2)) / 2;
  const gridY = (isoY / (TILE_HEIGHT / 2) - isoX / (TILE_WIDTH / 2)) / 2;
  return { x: Math.floor(gridX), y: Math.floor(gridY) };
}

export function getCanvasOffset(
  gridWidth: number,
  gridHeight: number,
  canvasWidth: number,
  canvasHeight: number
): Point {
  return {
    x: canvasWidth / 2,
    y: TILE_HEIGHT * 2,
  };
}
