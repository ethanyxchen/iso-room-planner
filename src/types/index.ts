export type TileType = 'empty' | 'floor' | 'wall';

export interface FurnitureItem {
  id: string;
  name: string;
  width: number;  // grid cells
  height: number; // grid cells
  color: string;
  sprite?: string; // optional sprite URL for later
}

export interface PlacedFurniture {
  item: FurnitureItem;
  gridX: number;
  gridY: number;
}

export interface Cell {
  type: TileType;
  furniture: PlacedFurniture | null;
}

export type Grid = Cell[][];

export interface GridState {
  grid: Grid;
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}
