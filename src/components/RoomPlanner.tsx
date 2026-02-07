'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gridToScreen, screenToGrid } from '@isocity/components/game/utils';
import { TILE_HEIGHT, TILE_WIDTH } from '@isocity/components/game/types';

type Tool = 'floor' | 'erase' | 'furniture';

type FurnitureType = 'sofa' | 'bed' | 'table' | 'chair' | 'plant';

type RoomType = 'bedroom' | 'living_room' | 'kitchen' | 'bathroom' | 'hallway' | 'office';

type Room = {
  type: RoomType;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

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

const ROOM_COLORS: Record<RoomType, { fill: string; label: string }> = {
  bedroom: { fill: 'rgba(86, 140, 214, 0.65)', label: 'rgba(86, 140, 214, 0.9)' },
  living_room: { fill: 'rgba(120, 201, 172, 0.6)', label: 'rgba(120, 201, 172, 0.9)' },
  kitchen: { fill: 'rgba(242, 192, 107, 0.7)', label: 'rgba(242, 192, 107, 0.95)' },
  bathroom: { fill: 'rgba(109, 178, 207, 0.65)', label: 'rgba(109, 178, 207, 0.95)' },
  hallway: { fill: 'rgba(195, 164, 122, 0.6)', label: 'rgba(195, 164, 122, 0.9)' },
  office: { fill: 'rgba(135, 206, 125, 0.6)', label: 'rgba(135, 206, 125, 0.9)' }
};

const MOCK_ROOMS: Room[] = [
  { type: 'living_room', label: 'Living Room', x: 0, y: 0, w: 5, h: 4 },
  { type: 'kitchen', label: 'Kitchen', x: 5, y: 0, w: 3, h: 3 },
  { type: 'hallway', label: 'Hallway', x: 8, y: 0, w: 4, h: 8 },
  { type: 'bedroom', label: 'Bedroom', x: 0, y: 4, w: 5, h: 4 },
  { type: 'bathroom', label: 'Bath', x: 5, y: 3, w: 3, h: 2 },
  { type: 'office', label: 'Office', x: 5, y: 5, w: 3, h: 3 }
];

function createFloor(width: number, height: number): boolean[][] {
  return Array.from({ length: height }, () => Array.from({ length: width }, () => true));
}

function findRoomAt(rooms: Room[], x: number, y: number): Room | null {
  for (const room of rooms) {
    if (x >= room.x && x < room.x + room.w && y >= room.y && y < room.y + room.h) {
      return room;
    }
  }
  return null;
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
  const isoCanvasRef = useRef<HTMLCanvasElement | null>(null);
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
  const [rooms] = useState<Room[]>(() => MOCK_ROOMS);

  const gridWidth = grid[0]?.length ?? 0;
  const gridHeight = grid.length;
  const roomCount = rooms.length;
  const handleDownload = useCallback(() => {
    const canvas = isoCanvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'iso-room.png';
    link.href = url;
    link.click();
  }, []);

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
      <section className="planner">
        <div className="canvas-layer">
          <IsoRoomCanvas
            grid={grid}
            items={items}
            rooms={rooms}
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
            canvasRef={isoCanvasRef}
          />
        </div>

        <div className="hud">
          <div className="hud-top">
            <button className="hud-button" type="button">Pause</button>
            <button className="hud-button secondary" type="button">Play</button>
          </div>

          <div className="hud-right">
            <div className="hud-panel">
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
                style={{ gridTemplateColumns: `repeat(${gridWidth}, 24px)` }}
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
            </div>

            <div className="hud-panel">
              <h2>Actions</h2>
              <div className="actions">
                <button className="action-button primary" onClick={resetScene} type="button">Reset Scene</button>
                <button className="action-button" onClick={clearFurniture} type="button">Clear Furniture</button>
                <button className="action-button primary" onClick={handleDownload} type="button">Download PNG</button>
              </div>
              <div className="status">{status} Rooms: {roomCount}</div>
              <p className="note">Tip: click any tile while in Place Furniture mode to drop items. Drag items around in the isometric view.</p>
            </div>
          </div>

          <div className="hud-bottom">
            <div className="hud-bar">
              <span className="hud-title">Iso Room Planner</span>
              <span>Rooms: {roomCount}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type IsoRoomCanvasProps = {
  grid: boolean[][];
  items: FurnitureItem[];
  rooms: Room[];
  onMoveItem: (id: string, x: number, y: number) => void;
  selectedItemId: string | null;
  onSelectItem: (id: string | null) => void;
  canvasRef?: React.RefObject<HTMLCanvasElement | null>;
};

function IsoRoomCanvas({ grid, items, rooms, onMoveItem, selectedItemId, onSelectItem, canvasRef }: IsoRoomCanvasProps) {
  const internalCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const resolvedCanvasRef = canvasRef ?? internalCanvasRef;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const panRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
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
    const canvas = resolvedCanvasRef.current;
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

    const offsetX = (canvasSize.width - roomWidth) / 2 - minX + panOffset.x;
    const offsetY = (canvasSize.height - roomHeight) / 2 - minY + 24 + panOffset.y;
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

    const drawLabelPill = (x: number, y: number, text: string, color: string) => {
      ctx.save();
      ctx.font = '600 12px "Space Grotesk", system-ui';
      const paddingX = 10;
      const paddingY = 6;
      const metrics = ctx.measureText(text);
      const width = metrics.width + paddingX * 2;
      const height = 20 + paddingY;
      const radius = 10;

      const left = x - width / 2;
      const top = y - height / 2;

      ctx.beginPath();
      ctx.moveTo(left + radius, top);
      ctx.lineTo(left + width - radius, top);
      ctx.quadraticCurveTo(left + width, top, left + width, top + radius);
      ctx.lineTo(left + width, top + height - radius);
      ctx.quadraticCurveTo(left + width, top + height, left + width - radius, top + height);
      ctx.lineTo(left + radius, top + height);
      ctx.quadraticCurveTo(left, top + height, left, top + height - radius);
      ctx.lineTo(left, top + radius);
      ctx.quadraticCurveTo(left, top, left + radius, top);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      ctx.fillStyle = '#0b0f14';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y + 1);
      ctx.restore();
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
        const room = findRoomAt(rooms, x, y);
        const { screenX, screenY } = gridToScreen(x, y, offsetX, offsetY);
        const fill = room ? ROOM_COLORS[room.type].fill : 'rgba(55, 77, 95, 0.75)';
        drawDiamond(screenX, screenY, fill, 'rgba(36, 55, 70, 0.8)');
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

    for (const room of rooms) {
      const centerX = room.x + room.w / 2;
      const centerY = room.y + room.h / 2;
      const { screenX, screenY } = gridToScreen(centerX, centerY, offsetX, offsetY);
      const labelX = screenX + TILE_WIDTH / 2;
      const labelY = screenY + TILE_HEIGHT / 2 - 18;
      drawLabelPill(labelX, labelY, room.label, ROOM_COLORS[room.type].label);
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
  }, [canvasSize, grid, gridHeight, gridWidth, items, rooms, selectedItemId, resolvedCanvasRef, panOffset]);

  useEffect(() => {
    drawScene();
  }, [drawScene]);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = resolvedCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { gridX, gridY } = screenToGrid(x, y, offsetRef.current.x, offsetRef.current.y);

    const item = findItemAt(items, gridX, gridY);
    if (item) {
      dragRef.current = { id: item.id, offsetX: gridX - item.x, offsetY: gridY - item.y };
      onSelectItem(item.id);
      panRef.current = null;
    } else {
      onSelectItem(null);
      panRef.current = { startX: event.clientX, startY: event.clientY, baseX: panOffset.x, baseY: panOffset.y };
    }
  }, [items, onSelectItem, panOffset, resolvedCanvasRef]);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    if (panRef.current) {
      const dx = event.clientX - panRef.current.startX;
      const dy = event.clientY - panRef.current.startY;
      setPanOffset({ x: panRef.current.baseX + dx, y: panRef.current.baseY + dy });
      return;
    }
    if (!dragRef.current) return;
    const canvas = resolvedCanvasRef.current;
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
  }, [grid, gridHeight, gridWidth, items, onMoveItem, resolvedCanvasRef]);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
    panRef.current = null;
  }, []);

  return (
    <div className="canvas-wrap" ref={containerRef}>
      <canvas
        ref={resolvedCanvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </div>
  );
}
