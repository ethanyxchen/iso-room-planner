'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gridToScreen, screenToGrid } from '@isocity/components/game/utils';
import { TILE_HEIGHT, TILE_WIDTH } from '@isocity/components/game/types';

type Tool = 'floor' | 'erase' | 'furniture';

type FurnitureType = 'sofa' | 'bed' | 'table' | 'chair' | 'plant';

type FurnitureItem = {
  id: string;
  type: FurnitureType;
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: 0 | 90;
};

type FurniturePaletteItem = {
  label: string;
  w: number;
  h: number;
  height: number;
  top: string;
  side: string;
  front: string;
  swatch: string;
};

const FURNITURE_CATALOG: Record<FurnitureType, FurniturePaletteItem> = {
  sofa: {
    label: 'Sofa',
    w: 2,
    h: 1,
    height: 18,
    top: '#e4b49f',
    side: '#c78672',
    front: '#b0705d',
    swatch: '#d59d88'
  },
  bed: {
    label: 'Bed',
    w: 2,
    h: 2,
    height: 22,
    top: '#eadfcd',
    side: '#cbbda6',
    front: '#b6a58c',
    swatch: '#d8cbb6'
  },
  table: {
    label: 'Table',
    w: 2,
    h: 1,
    height: 14,
    top: '#d6c08f',
    side: '#b59e6c',
    front: '#a38a5b',
    swatch: '#c9b27c'
  },
  chair: {
    label: 'Chair',
    w: 1,
    h: 1,
    height: 14,
    top: '#9bd3c8',
    side: '#6fb7aa',
    front: '#5fa296',
    swatch: '#87c5ba'
  },
  plant: {
    label: 'Plant',
    w: 1,
    h: 1,
    height: 20,
    top: '#9ccc75',
    side: '#7faa5b',
    front: '#6f914e',
    swatch: '#86b764'
  }
};

const DEFAULT_WIDTH = 12;
const DEFAULT_HEIGHT = 8;

function createFloor(width: number, height: number): boolean[][] {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => true));
}

function createId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildItem(type: FurnitureType, x: number, y: number, rotation: 0 | 90): FurnitureItem {
  const base = FURNITURE_CATALOG[type];
  const w = rotation === 90 ? base.h : base.w;
  const h = rotation === 90 ? base.w : base.h;
  return { id: createId(), type, x, y, w, h, rotation };
}

function itemCells(item: FurnitureItem): Array<{ x: number; y: number }> {
  const cells: Array<{ x: number; y: number }> = [];
  for (let dy = 0; dy < item.h; dy += 1) {
    for (let dx = 0; dx < item.w; dx += 1) {
      cells.push({ x: item.x + dx, y: item.y + dy });
    }
  }
  return cells;
}

function isFloorTile(grid: boolean[][], x: number, y: number): boolean {
  return grid[y]?.[x] ?? false;
}

function canPlaceItem(
  grid: boolean[][],
  items: FurnitureItem[],
  candidate: FurnitureItem,
  ignoreId?: string
): boolean {
  for (const cell of itemCells(candidate)) {
    if (!isFloorTile(grid, cell.x, cell.y)) return false;
    if (cell.x < 0 || cell.y < 0) return false;
  }
  for (const item of items) {
    if (ignoreId && item.id === ignoreId) continue;
    for (const cell of itemCells(item)) {
      if (
        cell.x >= candidate.x &&
        cell.x < candidate.x + candidate.w &&
        cell.y >= candidate.y &&
        cell.y < candidate.y + candidate.h
      ) {
        return false;
      }
    }
  }
  return true;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function findItemAt(items: FurnitureItem[], gridX: number, gridY: number): FurnitureItem | null {
  const sorted = [...items].sort((a, b) => (a.x + a.y) - (b.x + b.y));
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const item = sorted[i];
    if (gridX >= item.x && gridX < item.x + item.w && gridY >= item.y && gridY < item.y + item.h) {
      return item;
    }
  }
  return null;
}

function sanitizeItems(grid: boolean[][], items: FurnitureItem[]): FurnitureItem[] {
  return items.filter((item) => {
    for (const cell of itemCells(item)) {
      if (!isFloorTile(grid, cell.x, cell.y)) return false;
    }
    return true;
  });
}

export default function RoomPlanner() {
  const [grid, setGrid] = useState<boolean[][]>(() => createFloor(DEFAULT_WIDTH, DEFAULT_HEIGHT));
  const [items, setItems] = useState<FurnitureItem[]>(() => [
    buildItem('sofa', 2, 2, 0),
    buildItem('table', 5, 3, 0),
    buildItem('bed', 7, 2, 0),
    buildItem('plant', 1, 5, 0)
  ]);
  const [tool, setTool] = useState<Tool>('floor');
  const [activeFurniture, setActiveFurniture] = useState<FurnitureType>('sofa');
  const [rotation, setRotation] = useState<0 | 90>(0);
  const [status, setStatus] = useState<string>('Drag furniture in the isometric view to move it.');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const gridWidth = grid[0]?.length ?? 0;
  const gridHeight = grid.length;

  const occupancy = useMemo(() => {
    const map = new Map<string, FurnitureType>();
    for (const item of items) {
      for (const cell of itemCells(item)) {
        map.set(`${cell.x},${cell.y}`, item.type);
      }
    }
    return map;
  }, [items]);

  const handleCellClick = useCallback((x: number, y: number) => {
    if (tool === 'floor' || tool === 'erase') {
      setGrid((prev) => {
        const next = prev.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            if (rowIndex !== y || colIndex !== x) return cell;
            return tool === 'floor';
          })
        );
        setItems((current) => sanitizeItems(next, current));
        return next;
      });
      return;
    }

    if (tool === 'furniture') {
      const candidate = buildItem(activeFurniture, x, y, rotation);
      if (canPlaceItem(grid, items, candidate)) {
        setItems((prev) => [...prev, candidate]);
        setSelectedItemId(candidate.id);
        setStatus('Placed furniture. Drag to move.');
      } else {
        setStatus('Cannot place there. Try another tile.');
      }
    }
  }, [activeFurniture, grid, items, rotation, tool]);

  const resetScene = useCallback(() => {
    const nextGrid = createFloor(DEFAULT_WIDTH, DEFAULT_HEIGHT);
    setGrid(nextGrid);
    setItems([
      buildItem('sofa', 2, 2, 0),
      buildItem('table', 5, 3, 0),
      buildItem('bed', 7, 2, 0),
      buildItem('plant', 1, 5, 0)
    ]);
    setStatus('Reset to a clean, playable scene.');
  }, []);

  const clearFurniture = useCallback(() => {
    setItems([]);
    setSelectedItemId(null);
    setStatus('Cleared all furniture.');
  }, []);

  return (
    <>
      <header className="header">
        <h1>Iso Room Planner</h1>
        <p>Sketch a floor plan, then watch it snap into a cozy isometric room. Drop furniture on the plan or drag it around in the 3D view.</p>
      </header>

      <section className="main">
        <div className="panel">
          <h2>Floor Plan</h2>
          <div className="tool-row">
            <button
              className={`tool-button ${tool === 'floor' ? 'active' : ''}`}
              onClick={() => setTool('floor')}
              type="button"
            >
              Add Floor
            </button>
            <button
              className={`tool-button ${tool === 'erase' ? 'active' : ''}`}
              onClick={() => setTool('erase')}
              type="button"
            >
              Erase
            </button>
            <button
              className={`tool-button ${tool === 'furniture' ? 'active' : ''}`}
              onClick={() => setTool('furniture')}
              type="button"
            >
              Place Furniture
            </button>
          </div>

          <div className="furniture-list">
            {Object.entries(FURNITURE_CATALOG).map(([key, data]) => (
              <button
                key={key}
                type="button"
                className={`furniture-card ${activeFurniture === key ? 'active' : ''}`}
                onClick={() => {
                  setActiveFurniture(key as FurnitureType);
                  setTool('furniture');
                }}
              >
                <div className="furniture-swatch" style={{ background: data.swatch }} />
                <strong>{data.label}</strong>
                <div className="note">{data.w}x{data.h} tiles</div>
              </button>
            ))}
          </div>

          <div className="tool-row">
            <button
              className="tool-button"
              onClick={() => setRotation((prev) => (prev === 0 ? 90 : 0))}
              type="button"
            >
              Rotate {rotation === 0 ? '0°' : '90°'}
            </button>
          </div>

          <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${gridWidth}, 28px)` }}
          >
            {grid.map((row, y) =>
              row.map((cell, x) => {
                const key = `${x},${y}`;
                const itemType = occupancy.get(key);
                return (
                  <button
                    key={key}
                    type="button"
                    className={`grid-cell ${cell ? 'floor' : 'blocked'}`}
                    onClick={() => handleCellClick(x, y)}
                    title={cell ? 'Floor' : 'Empty'}
                    style={
                      itemType
                        ? { background: FURNITURE_CATALOG[itemType].swatch, color: '#0b0f14' }
                        : undefined
                    }
                  >
                    {itemType ? itemType[0].toUpperCase() : ''}
                  </button>
                );
              })
            )}
          </div>

          <div className="legend">
            <span><i style={{ background: 'rgba(108, 212, 197, 0.6)' }} /> Floor</span>
            <span><i style={{ background: 'rgba(224, 122, 95, 0.5)' }} /> Empty</span>
            <span><i style={{ background: 'var(--accent)' }} /> Furniture</span>
          </div>

          <div className="actions">
            <button className="action-button primary" onClick={resetScene} type="button">Reset Scene</button>
            <button className="action-button" onClick={clearFurniture} type="button">Clear Furniture</button>
          </div>
          <p className="note">Tip: click any tile while in Place Furniture mode to drop items. Drag items around in the isometric view.</p>
        </div>

        <div className="panel">
          <h2>Isometric Room</h2>
          <IsoRoomCanvas
            grid={grid}
            items={items}
            onMoveItem={(id, nextX, nextY) => {
              setItems((prev) =>
                prev.map((item) =>
                  item.id === id
                    ? { ...item, x: nextX, y: nextY }
                    : item
                )
              );
            }}
            selectedItemId={selectedItemId}
            onSelectItem={setSelectedItemId}
          />
          <div className="status">{status}</div>
        </div>
      </section>
    </>
  );
}

type IsoRoomCanvasProps = {
  grid: boolean[][];
  items: FurnitureItem[];
  onMoveItem: (id: string, x: number, y: number) => void;
  selectedItemId: string | null;
  onSelectItem: (id: string | null) => void;
};

function IsoRoomCanvas({ grid, items, onMoveItem, selectedItemId, onSelectItem }: IsoRoomCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 520 });

  const gridWidth = grid[0]?.length ?? 0;
  const gridHeight = grid.length;

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setCanvasSize({ width, height });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasSize.width * dpr;
    canvas.height = canvasSize.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    const wallHeight = 42;
    const corners = [
      gridToScreen(0, 0, 0, 0),
      gridToScreen(gridWidth - 1, 0, 0, 0),
      gridToScreen(0, gridHeight - 1, 0, 0),
      gridToScreen(gridWidth - 1, gridHeight - 1, 0, 0)
    ];

    const minX = Math.min(...corners.map((c) => c.screenX));
    const maxX = Math.max(...corners.map((c) => c.screenX + TILE_WIDTH));
    const minY = Math.min(...corners.map((c) => c.screenY));
    const maxY = Math.max(...corners.map((c) => c.screenY + TILE_HEIGHT + wallHeight));

    const roomWidth = maxX - minX;
    const roomHeight = maxY - minY;

    const offsetX = (canvasSize.width - roomWidth) / 2 - minX;
    const offsetY = (canvasSize.height - roomHeight) / 2 - minY + 24;
    offsetRef.current = { x: offsetX, y: offsetY };

    const drawDiamond = (x: number, y: number, fill: string, stroke?: string) => {
      ctx.beginPath();
      ctx.moveTo(x + TILE_WIDTH / 2, y);
      ctx.lineTo(x + TILE_WIDTH, y + TILE_HEIGHT / 2);
      ctx.lineTo(x + TILE_WIDTH / 2, y + TILE_HEIGHT);
      ctx.lineTo(x, y + TILE_HEIGHT / 2);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const drawNorthWall = (x: number, y: number) => {
      const baseLeft = { x: x + TILE_WIDTH / 2, y };
      const baseRight = { x: x + TILE_WIDTH, y: y + TILE_HEIGHT / 2 };
      ctx.beginPath();
      ctx.moveTo(baseLeft.x, baseLeft.y);
      ctx.lineTo(baseRight.x, baseRight.y);
      ctx.lineTo(baseRight.x, baseRight.y - wallHeight);
      ctx.lineTo(baseLeft.x, baseLeft.y - wallHeight);
      ctx.closePath();
      ctx.fillStyle = 'rgba(222, 205, 178, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(108, 95, 80, 0.5)';
      ctx.stroke();
    };

    const drawWestWall = (x: number, y: number) => {
      const baseLeft = { x, y: y + TILE_HEIGHT / 2 };
      const baseRight = { x: x + TILE_WIDTH / 2, y };
      ctx.beginPath();
      ctx.moveTo(baseLeft.x, baseLeft.y);
      ctx.lineTo(baseRight.x, baseRight.y);
      ctx.lineTo(baseRight.x, baseRight.y - wallHeight);
      ctx.lineTo(baseLeft.x, baseLeft.y - wallHeight);
      ctx.closePath();
      ctx.fillStyle = 'rgba(198, 180, 152, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(96, 84, 70, 0.5)';
      ctx.stroke();
    };

    for (let y = 0; y < gridHeight; y += 1) {
      for (let x = 0; x < gridWidth; x += 1) {
        if (!isFloorTile(grid, x, y)) continue;
        const { screenX, screenY } = gridToScreen(x, y, offsetX, offsetY);
        drawDiamond(screenX, screenY, 'rgba(55, 77, 95, 0.75)', 'rgba(36, 55, 70, 0.8)');
      }
    }

    for (let y = 0; y < gridHeight; y += 1) {
      for (let x = 0; x < gridWidth; x += 1) {
        if (!isFloorTile(grid, x, y)) continue;
        const { screenX, screenY } = gridToScreen(x, y, offsetX, offsetY);
        if (!isFloorTile(grid, x, y - 1)) {
          drawNorthWall(screenX, screenY);
        }
        if (!isFloorTile(grid, x - 1, y)) {
          drawWestWall(screenX, screenY);
        }
      }
    }

    const sortedItems = [...items].sort((a, b) => (a.x + a.y) - (b.x + b.y));
    for (const item of sortedItems) {
      const palette = FURNITURE_CATALOG[item.type];
      const height = palette.height;

      const top = gridToScreen(item.x, item.y, offsetX, offsetY);
      const right = gridToScreen(item.x + item.w, item.y, offsetX, offsetY);
      const bottom = gridToScreen(item.x + item.w, item.y + item.h, offsetX, offsetY);
      const left = gridToScreen(item.x, item.y + item.h, offsetX, offsetY);

      const topPoint = { x: top.screenX + TILE_WIDTH / 2, y: top.screenY - height };
      const rightPoint = { x: right.screenX + TILE_WIDTH / 2, y: right.screenY - height };
      const bottomPoint = { x: bottom.screenX + TILE_WIDTH / 2, y: bottom.screenY - height };
      const leftPoint = { x: left.screenX + TILE_WIDTH / 2, y: left.screenY - height };

      ctx.beginPath();
      ctx.moveTo(topPoint.x, topPoint.y);
      ctx.lineTo(rightPoint.x, rightPoint.y);
      ctx.lineTo(bottomPoint.x, bottomPoint.y);
      ctx.lineTo(leftPoint.x, leftPoint.y);
      ctx.closePath();
      ctx.fillStyle = palette.top;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(leftPoint.x, leftPoint.y);
      ctx.lineTo(bottomPoint.x, bottomPoint.y);
      ctx.lineTo(bottomPoint.x, bottomPoint.y + height);
      ctx.lineTo(leftPoint.x, leftPoint.y + height);
      ctx.closePath();
      ctx.fillStyle = palette.front;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(rightPoint.x, rightPoint.y);
      ctx.lineTo(bottomPoint.x, bottomPoint.y);
      ctx.lineTo(bottomPoint.x, bottomPoint.y + height);
      ctx.lineTo(rightPoint.x, rightPoint.y + height);
      ctx.closePath();
      ctx.fillStyle = palette.side;
      ctx.fill();

      if (item.id === selectedItemId) {
        ctx.beginPath();
        ctx.moveTo(topPoint.x, topPoint.y);
        ctx.lineTo(rightPoint.x, rightPoint.y);
        ctx.lineTo(bottomPoint.x, bottomPoint.y);
        ctx.lineTo(leftPoint.x, leftPoint.y);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(242, 161, 84, 0.95)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  }, [canvasSize, grid, gridHeight, gridWidth, items, selectedItemId]);

  useEffect(() => {
    drawScene();
  }, [drawScene]);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { gridX, gridY } = screenToGrid(x, y, offsetRef.current.x, offsetRef.current.y);

    const item = findItemAt(items, gridX, gridY);
    if (item) {
      dragRef.current = { id: item.id, offsetX: gridX - item.x, offsetY: gridY - item.y };
      onSelectItem(item.id);
    } else {
      onSelectItem(null);
    }
  }, [items, onSelectItem]);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { gridX, gridY } = screenToGrid(x, y, offsetRef.current.x, offsetRef.current.y);
    const active = items.find((item) => item.id === dragRef.current?.id);
    if (!active) return;

    const nextX = clamp(gridX - dragRef.current.offsetX, 0, gridWidth - active.w);
    const nextY = clamp(gridY - dragRef.current.offsetY, 0, gridHeight - active.h);
    const candidate = { ...active, x: nextX, y: nextY };
    if (canPlaceItem(grid, items, candidate, active.id)) {
      onMoveItem(active.id, nextX, nextY);
    }
  }, [grid, gridHeight, gridWidth, items, onMoveItem]);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  return (
    <div className="canvas-wrap" ref={containerRef}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </div>
  );
}
