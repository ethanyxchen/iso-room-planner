module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/RoomPlanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPlanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@isocity/components/game/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@isocity/components/game/types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
const FURNITURE_CATALOG = {
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
function createFloor(width, height) {
    return Array.from({
        length: height
    }, ()=>Array.from({
            length: width
        }, ()=>true));
}
function createId() {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        return crypto.randomUUID();
    }
    return `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function buildItem(type, x, y, rotation) {
    const base = FURNITURE_CATALOG[type];
    const w = rotation === 90 ? base.h : base.w;
    const h = rotation === 90 ? base.w : base.h;
    return {
        id: createId(),
        type,
        x,
        y,
        w,
        h,
        rotation
    };
}
function itemCells(item) {
    const cells = [];
    for(let dy = 0; dy < item.h; dy += 1){
        for(let dx = 0; dx < item.w; dx += 1){
            cells.push({
                x: item.x + dx,
                y: item.y + dy
            });
        }
    }
    return cells;
}
function isFloorTile(grid, x, y) {
    return grid[y]?.[x] ?? false;
}
function canPlaceItem(grid, items, candidate, ignoreId) {
    for (const cell of itemCells(candidate)){
        if (!isFloorTile(grid, cell.x, cell.y)) return false;
        if (cell.x < 0 || cell.y < 0) return false;
    }
    for (const item of items){
        if (ignoreId && item.id === ignoreId) continue;
        for (const cell of itemCells(item)){
            if (cell.x >= candidate.x && cell.x < candidate.x + candidate.w && cell.y >= candidate.y && cell.y < candidate.y + candidate.h) {
                return false;
            }
        }
    }
    return true;
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function findItemAt(items, gridX, gridY) {
    const sorted = [
        ...items
    ].sort((a, b)=>a.x + a.y - (b.x + b.y));
    for(let i = sorted.length - 1; i >= 0; i -= 1){
        const item = sorted[i];
        if (gridX >= item.x && gridX < item.x + item.w && gridY >= item.y && gridY < item.y + item.h) {
            return item;
        }
    }
    return null;
}
function sanitizeItems(grid, items) {
    return items.filter((item)=>{
        for (const cell of itemCells(item)){
            if (!isFloorTile(grid, cell.x, cell.y)) return false;
        }
        return true;
    });
}
function RoomPlanner() {
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>createFloor(DEFAULT_WIDTH, DEFAULT_HEIGHT));
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>[
            buildItem('sofa', 2, 2, 0),
            buildItem('table', 5, 3, 0),
            buildItem('bed', 7, 2, 0),
            buildItem('plant', 1, 5, 0)
        ]);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('floor');
    const [activeFurniture, setActiveFurniture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('sofa');
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Drag furniture in the isometric view to move it.');
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const gridWidth = grid[0]?.length ?? 0;
    const gridHeight = grid.length;
    const occupancy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const item of items){
            for (const cell of itemCells(item)){
                map.set(`${cell.x},${cell.y}`, item.type);
            }
        }
        return map;
    }, [
        items
    ]);
    const handleCellClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((x, y)=>{
        if (tool === 'floor' || tool === 'erase') {
            setGrid((prev)=>{
                const next = prev.map((row, rowIndex)=>row.map((cell, colIndex)=>{
                        if (rowIndex !== y || colIndex !== x) return cell;
                        return tool === 'floor';
                    }));
                setItems((current)=>sanitizeItems(next, current));
                return next;
            });
            return;
        }
        if (tool === 'furniture') {
            const candidate = buildItem(activeFurniture, x, y, rotation);
            if (canPlaceItem(grid, items, candidate)) {
                setItems((prev)=>[
                        ...prev,
                        candidate
                    ]);
                setSelectedItemId(candidate.id);
                setStatus('Placed furniture. Drag to move.');
            } else {
                setStatus('Cannot place there. Try another tile.');
            }
        }
    }, [
        activeFurniture,
        grid,
        items,
        rotation,
        tool
    ]);
    const resetScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    const clearFurniture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setItems([]);
        setSelectedItemId(null);
        setStatus('Cleared all furniture.');
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Iso Room Planner"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoomPlanner.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Sketch a floor plan, then watch it snap into a cozy isometric room. Drop furniture on the plan or drag it around in the 3D view."
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoomPlanner.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoomPlanner.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Floor Plan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tool-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `tool-button ${tool === 'floor' ? 'active' : ''}`,
                                        onClick: ()=>setTool('floor'),
                                        type: "button",
                                        children: "Add Floor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `tool-button ${tool === 'erase' ? 'active' : ''}`,
                                        onClick: ()=>setTool('erase'),
                                        type: "button",
                                        children: "Erase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `tool-button ${tool === 'furniture' ? 'active' : ''}`,
                                        onClick: ()=>setTool('furniture'),
                                        type: "button",
                                        children: "Place Furniture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "furniture-list",
                                children: Object.entries(FURNITURE_CATALOG).map(([key, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: `furniture-card ${activeFurniture === key ? 'active' : ''}`,
                                        onClick: ()=>{
                                            setActiveFurniture(key);
                                            setTool('furniture');
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "furniture-swatch",
                                                style: {
                                                    background: data.swatch
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: data.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "note",
                                                children: [
                                                    data.w,
                                                    "x",
                                                    data.h,
                                                    " tiles"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tool-row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "tool-button",
                                    onClick: ()=>setRotation((prev)=>prev === 0 ? 90 : 0),
                                    type: "button",
                                    children: [
                                        "Rotate ",
                                        rotation === 0 ? '0°' : '90°'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid",
                                style: {
                                    gridTemplateColumns: `repeat(${gridWidth}, 28px)`
                                },
                                children: grid.map((row, y)=>row.map((cell, x)=>{
                                        const key = `${x},${y}`;
                                        const itemType = occupancy.get(key);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `grid-cell ${cell ? 'floor' : 'blocked'}`,
                                            onClick: ()=>handleCellClick(x, y),
                                            title: cell ? 'Floor' : 'Empty',
                                            style: itemType ? {
                                                background: FURNITURE_CATALOG[itemType].swatch,
                                                color: '#0b0f14'
                                            } : undefined,
                                            children: itemType ? itemType[0].toUpperCase() : ''
                                        }, key, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this);
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "legend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                style: {
                                                    background: 'rgba(108, 212, 197, 0.6)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this),
                                            " Floor"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                style: {
                                                    background: 'rgba(224, 122, 95, 0.5)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            " Empty"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                style: {
                                                    background: 'var(--accent)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            " Furniture"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "action-button primary",
                                        onClick: resetScene,
                                        type: "button",
                                        children: "Reset Scene"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "action-button",
                                        onClick: clearFurniture,
                                        type: "button",
                                        children: "Clear Furniture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "note",
                                children: "Tip: click any tile while in Place Furniture mode to drop items. Drag items around in the isometric view."
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoomPlanner.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Isometric Room"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IsoRoomCanvas, {
                                grid: grid,
                                items: items,
                                onMoveItem: (id, nextX, nextY)=>{
                                    setItems((prev)=>prev.map((item)=>item.id === id ? {
                                                ...item,
                                                x: nextX,
                                                y: nextY
                                            } : item));
                                },
                                selectedItemId: selectedItemId,
                                onSelectItem: setSelectedItemId
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "status",
                                children: status
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoomPlanner.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoomPlanner.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function IsoRoomCanvas({ grid, items, onMoveItem, selectedItemId, onSelectItem }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 600,
        height: 520
    });
    const gridWidth = grid[0]?.length ?? 0;
    const gridHeight = grid.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries)=>{
            for (const entry of entries){
                const { width, height } = entry.contentRect;
                setCanvasSize({
                    width,
                    height
                });
            }
        });
        observer.observe(containerRef.current);
        return ()=>observer.disconnect();
    }, []);
    const drawScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
        const minX = Math.min(...corners.map((c)=>c.screenX));
        const maxX = Math.max(...corners.map((c)=>c.screenX + TILE_WIDTH));
        const minY = Math.min(...corners.map((c)=>c.screenY));
        const maxY = Math.max(...corners.map((c)=>c.screenY + TILE_HEIGHT + wallHeight));
        const roomWidth = maxX - minX;
        const roomHeight = maxY - minY;
        const offsetX = (canvasSize.width - roomWidth) / 2 - minX;
        const offsetY = (canvasSize.height - roomHeight) / 2 - minY + 24;
        offsetRef.current = {
            x: offsetX,
            y: offsetY
        };
        const drawDiamond = (x, y, fill, stroke)=>{
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
        const drawNorthWall = (x, y)=>{
            const baseLeft = {
                x: x + TILE_WIDTH / 2,
                y
            };
            const baseRight = {
                x: x + TILE_WIDTH,
                y: y + TILE_HEIGHT / 2
            };
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
        const drawWestWall = (x, y)=>{
            const baseLeft = {
                x,
                y: y + TILE_HEIGHT / 2
            };
            const baseRight = {
                x: x + TILE_WIDTH / 2,
                y
            };
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
        for(let y = 0; y < gridHeight; y += 1){
            for(let x = 0; x < gridWidth; x += 1){
                if (!isFloorTile(grid, x, y)) continue;
                const { screenX, screenY } = gridToScreen(x, y, offsetX, offsetY);
                drawDiamond(screenX, screenY, 'rgba(55, 77, 95, 0.75)', 'rgba(36, 55, 70, 0.8)');
            }
        }
        for(let y = 0; y < gridHeight; y += 1){
            for(let x = 0; x < gridWidth; x += 1){
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
        const sortedItems = [
            ...items
        ].sort((a, b)=>a.x + a.y - (b.x + b.y));
        for (const item of sortedItems){
            const palette = FURNITURE_CATALOG[item.type];
            const height = palette.height;
            const top = gridToScreen(item.x, item.y, offsetX, offsetY);
            const right = gridToScreen(item.x + item.w, item.y, offsetX, offsetY);
            const bottom = gridToScreen(item.x + item.w, item.y + item.h, offsetX, offsetY);
            const left = gridToScreen(item.x, item.y + item.h, offsetX, offsetY);
            const topPoint = {
                x: top.screenX + TILE_WIDTH / 2,
                y: top.screenY - height
            };
            const rightPoint = {
                x: right.screenX + TILE_WIDTH / 2,
                y: right.screenY - height
            };
            const bottomPoint = {
                x: bottom.screenX + TILE_WIDTH / 2,
                y: bottom.screenY - height
            };
            const leftPoint = {
                x: left.screenX + TILE_WIDTH / 2,
                y: left.screenY - height
            };
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
    }, [
        canvasSize,
        grid,
        gridHeight,
        gridWidth,
        items,
        selectedItemId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        drawScene();
    }, [
        drawScene
    ]);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const { gridX, gridY } = screenToGrid(x, y, offsetRef.current.x, offsetRef.current.y);
        const item = findItemAt(items, gridX, gridY);
        if (item) {
            dragRef.current = {
                id: item.id,
                offsetX: gridX - item.x,
                offsetY: gridY - item.y
            };
            onSelectItem(item.id);
        } else {
            onSelectItem(null);
        }
    }, [
        items,
        onSelectItem
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!dragRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const { gridX, gridY } = screenToGrid(x, y, offsetRef.current.x, offsetRef.current.y);
        const active = items.find((item)=>item.id === dragRef.current?.id);
        if (!active) return;
        const nextX = clamp(gridX - dragRef.current.offsetX, 0, gridWidth - active.w);
        const nextY = clamp(gridY - dragRef.current.offsetY, 0, gridHeight - active.h);
        const candidate = {
            ...active,
            x: nextX,
            y: nextY
        };
        if (canPlaceItem(grid, items, candidate, active.id)) {
            onMoveItem(active.id, nextX, nextY);
        }
    }, [
        grid,
        gridHeight,
        gridWidth,
        items,
        onMoveItem
    ]);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dragRef.current = null;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "canvas-wrap",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerLeave: handlePointerUp
        }, void 0, false, {
            fileName: "[project]/src/components/RoomPlanner.tsx",
            lineNumber: 600,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RoomPlanner.tsx",
        lineNumber: 599,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoomPlanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoomPlanner.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoomPlanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c64ad89._.js.map