(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/isometric-city/src/components/game/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Game-specific types for rendering and animation
__turbopack_context__.s([
    "HEIGHT_RATIO",
    ()=>HEIGHT_RATIO,
    "KEY_PAN_SPEED",
    ()=>KEY_PAN_SPEED,
    "TILE_HEIGHT",
    ()=>TILE_HEIGHT,
    "TILE_WIDTH",
    ()=>TILE_WIDTH
]);
const TILE_WIDTH = 64;
const HEIGHT_RATIO = 0.60;
const TILE_HEIGHT = TILE_WIDTH * HEIGHT_RATIO;
const KEY_PAN_SPEED = 520;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/isometric-city/src/components/game/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIRPLANE_COLORS",
    ()=>AIRPLANE_COLORS,
    "AIRPLANE_MIN_POPULATION",
    ()=>AIRPLANE_MIN_POPULATION,
    "AIRPLANE_MIN_ZOOM_FAR",
    ()=>AIRPLANE_MIN_ZOOM_FAR,
    "AIRPLANE_SPRITE_COLS",
    ()=>AIRPLANE_SPRITE_COLS,
    "AIRPLANE_SPRITE_ROWS",
    ()=>AIRPLANE_SPRITE_ROWS,
    "AIRPLANE_SPRITE_SRC",
    ()=>AIRPLANE_SPRITE_SRC,
    "BARGE_CARGO_VALUE_MAX",
    ()=>BARGE_CARGO_VALUE_MAX,
    "BARGE_CARGO_VALUE_MIN",
    ()=>BARGE_CARGO_VALUE_MIN,
    "BARGE_COLORS",
    ()=>BARGE_COLORS,
    "BARGE_DOCK_TIME_MAX",
    ()=>BARGE_DOCK_TIME_MAX,
    "BARGE_DOCK_TIME_MIN",
    ()=>BARGE_DOCK_TIME_MIN,
    "BARGE_MIN_ZOOM",
    ()=>BARGE_MIN_ZOOM,
    "BARGE_SPAWN_INTERVAL_MAX",
    ()=>BARGE_SPAWN_INTERVAL_MAX,
    "BARGE_SPAWN_INTERVAL_MIN",
    ()=>BARGE_SPAWN_INTERVAL_MIN,
    "BARGE_SPEED_MAX",
    ()=>BARGE_SPEED_MAX,
    "BARGE_SPEED_MIN",
    ()=>BARGE_SPEED_MIN,
    "BARGE_WAKE_SPAWN_INTERVAL",
    ()=>BARGE_WAKE_SPAWN_INTERVAL,
    "BOATS_PER_DOCK",
    ()=>BOATS_PER_DOCK,
    "BOATS_PER_DOCK_MOBILE",
    ()=>BOATS_PER_DOCK_MOBILE,
    "BOAT_COLORS",
    ()=>BOAT_COLORS,
    "BOAT_MIN_ZOOM",
    ()=>BOAT_MIN_ZOOM,
    "BOAT_MIN_ZOOM_FAR",
    ()=>BOAT_MIN_ZOOM_FAR,
    "BUS_COLORS",
    ()=>BUS_COLORS,
    "BUS_MIN_POPULATION",
    ()=>BUS_MIN_POPULATION,
    "BUS_MIN_ZOOM",
    ()=>BUS_MIN_ZOOM,
    "BUS_SPAWN_INTERVAL_MAX",
    ()=>BUS_SPAWN_INTERVAL_MAX,
    "BUS_SPAWN_INTERVAL_MIN",
    ()=>BUS_SPAWN_INTERVAL_MIN,
    "BUS_SPEED_MAX",
    ()=>BUS_SPEED_MAX,
    "BUS_SPEED_MIN",
    ()=>BUS_SPEED_MIN,
    "BUS_STOP_DURATION_MAX",
    ()=>BUS_STOP_DURATION_MAX,
    "BUS_STOP_DURATION_MIN",
    ()=>BUS_STOP_DURATION_MIN,
    "CAR_COLORS",
    ()=>CAR_COLORS,
    "CAR_MIN_ZOOM",
    ()=>CAR_MIN_ZOOM,
    "CAR_MIN_ZOOM_MOBILE",
    ()=>CAR_MIN_ZOOM_MOBILE,
    "CLOUD_COVERAGE_FADE_END",
    ()=>CLOUD_COVERAGE_FADE_END,
    "CLOUD_DESPAWN_MARGIN",
    ()=>CLOUD_DESPAWN_MARGIN,
    "CLOUD_FADE_ZOOM",
    ()=>CLOUD_FADE_ZOOM,
    "CLOUD_LAYER_OPACITY",
    ()=>CLOUD_LAYER_OPACITY,
    "CLOUD_LAYER_SPEEDS",
    ()=>CLOUD_LAYER_SPEEDS,
    "CLOUD_MAX_COUNT",
    ()=>CLOUD_MAX_COUNT,
    "CLOUD_MAX_COUNT_MOBILE",
    ()=>CLOUD_MAX_COUNT_MOBILE,
    "CLOUD_MAX_COVERAGE",
    ()=>CLOUD_MAX_COVERAGE,
    "CLOUD_MAX_ZOOM",
    ()=>CLOUD_MAX_ZOOM,
    "CLOUD_MIN_ZOOM",
    ()=>CLOUD_MIN_ZOOM,
    "CLOUD_NIGHT_OPACITY_MULT",
    ()=>CLOUD_NIGHT_OPACITY_MULT,
    "CLOUD_PUFF_COUNT_MAX",
    ()=>CLOUD_PUFF_COUNT_MAX,
    "CLOUD_PUFF_COUNT_MIN",
    ()=>CLOUD_PUFF_COUNT_MIN,
    "CLOUD_PUFF_SIZE_MAX",
    ()=>CLOUD_PUFF_SIZE_MAX,
    "CLOUD_PUFF_SIZE_MIN",
    ()=>CLOUD_PUFF_SIZE_MIN,
    "CLOUD_SCALE_MAX",
    ()=>CLOUD_SCALE_MAX,
    "CLOUD_SCALE_MIN",
    ()=>CLOUD_SCALE_MIN,
    "CLOUD_SPAWN_INTERVAL",
    ()=>CLOUD_SPAWN_INTERVAL,
    "CLOUD_SPAWN_INTERVAL_MOBILE",
    ()=>CLOUD_SPAWN_INTERVAL_MOBILE,
    "CLOUD_SPEED_MAX",
    ()=>CLOUD_SPEED_MAX,
    "CLOUD_SPEED_MIN",
    ()=>CLOUD_SPEED_MIN,
    "CLOUD_TYPES_ORDERED",
    ()=>CLOUD_TYPES_ORDERED,
    "CLOUD_TYPE_CONFIG",
    ()=>CLOUD_TYPE_CONFIG,
    "CLOUD_TYPE_WEIGHTS_BY_HOUR",
    ()=>CLOUD_TYPE_WEIGHTS_BY_HOUR,
    "CLOUD_TYPE_WEIGHTS_DEFAULT",
    ()=>CLOUD_TYPE_WEIGHTS_DEFAULT,
    "CLOUD_WIDTH",
    ()=>CLOUD_WIDTH,
    "CLOUD_WIND_ANGLE",
    ()=>CLOUD_WIND_ANGLE,
    "COL1_DIRECTION_OVERRIDES",
    ()=>COL1_DIRECTION_OVERRIDES,
    "COL1_OVERRIDE_PLANE_TYPES",
    ()=>COL1_OVERRIDE_PLANE_TYPES,
    "COMMERCIAL_BUILDING_TYPES",
    ()=>COMMERCIAL_BUILDING_TYPES,
    "CONTRAIL_MAX_AGE",
    ()=>CONTRAIL_MAX_AGE,
    "CONTRAIL_SPAWN_INTERVAL",
    ()=>CONTRAIL_SPAWN_INTERVAL,
    "DIRECTION_ARROWS_MIN_ZOOM",
    ()=>DIRECTION_ARROWS_MIN_ZOOM,
    "DIRECTION_META",
    ()=>DIRECTION_META,
    "FIREWORK_BUILDINGS",
    ()=>FIREWORK_BUILDINGS,
    "FIREWORK_COLORS",
    ()=>FIREWORK_COLORS,
    "FIREWORK_LAUNCH_SPEED",
    ()=>FIREWORK_LAUNCH_SPEED,
    "FIREWORK_MIN_ZOOM",
    ()=>FIREWORK_MIN_ZOOM,
    "FIREWORK_PARTICLE_COUNT",
    ()=>FIREWORK_PARTICLE_COUNT,
    "FIREWORK_PARTICLE_MAX_AGE",
    ()=>FIREWORK_PARTICLE_MAX_AGE,
    "FIREWORK_PARTICLE_SPEED",
    ()=>FIREWORK_PARTICLE_SPEED,
    "FIREWORK_SHOW_CHANCE",
    ()=>FIREWORK_SHOW_CHANCE,
    "FIREWORK_SHOW_DURATION",
    ()=>FIREWORK_SHOW_DURATION,
    "FIREWORK_SPAWN_INTERVAL_MAX",
    ()=>FIREWORK_SPAWN_INTERVAL_MAX,
    "FIREWORK_SPAWN_INTERVAL_MIN",
    ()=>FIREWORK_SPAWN_INTERVAL_MIN,
    "HELICOPTER_COLORS",
    ()=>HELICOPTER_COLORS,
    "HELICOPTER_MIN_POPULATION",
    ()=>HELICOPTER_MIN_POPULATION,
    "HELICOPTER_MIN_ZOOM",
    ()=>HELICOPTER_MIN_ZOOM,
    "HELICOPTER_MIN_ZOOM_FAR",
    ()=>HELICOPTER_MIN_ZOOM_FAR,
    "LANE_MARKINGS_MEDIAN_MIN_ZOOM",
    ()=>LANE_MARKINGS_MEDIAN_MIN_ZOOM,
    "LANE_MARKINGS_MIN_ZOOM",
    ()=>LANE_MARKINGS_MIN_ZOOM,
    "MAX_BARGES",
    ()=>MAX_BARGES,
    "MAX_BARGES_MOBILE",
    ()=>MAX_BARGES_MOBILE,
    "MAX_BEACH_MATS_PER_EDGE",
    ()=>MAX_BEACH_MATS_PER_EDGE,
    "MAX_BEACH_SWIMMERS_PER_TILE",
    ()=>MAX_BEACH_SWIMMERS_PER_TILE,
    "MAX_BOATS",
    ()=>MAX_BOATS,
    "MAX_BOATS_MOBILE",
    ()=>MAX_BOATS_MOBILE,
    "MAX_BUSES",
    ()=>MAX_BUSES,
    "MAX_BUSES_MOBILE",
    ()=>MAX_BUSES_MOBILE,
    "MAX_SEAPLANES",
    ()=>MAX_SEAPLANES,
    "MAX_SEAPLANES_MOBILE",
    ()=>MAX_SEAPLANES_MOBILE,
    "MAX_TRAINS",
    ()=>MAX_TRAINS,
    "MAX_TRAINS_MOBILE",
    ()=>MAX_TRAINS_MOBILE,
    "MEDIAN_PLANTS_MIN_ZOOM",
    ()=>MEDIAN_PLANTS_MIN_ZOOM,
    "MIN_RAIL_TILES_FOR_TRAINS",
    ()=>MIN_RAIL_TILES_FOR_TRAINS,
    "NON_LIT_BUILDING_TYPES",
    ()=>NON_LIT_BUILDING_TYPES,
    "OPPOSITE_DIRECTION",
    ()=>OPPOSITE_DIRECTION,
    "PEDESTRIAN_APPROACH_TIME",
    ()=>PEDESTRIAN_APPROACH_TIME,
    "PEDESTRIAN_BAG_CHANCE",
    ()=>PEDESTRIAN_BAG_CHANCE,
    "PEDESTRIAN_BEACH_CHANCE",
    ()=>PEDESTRIAN_BEACH_CHANCE,
    "PEDESTRIAN_BEACH_MAX_TIME",
    ()=>PEDESTRIAN_BEACH_MAX_TIME,
    "PEDESTRIAN_BEACH_MIN_TIME",
    ()=>PEDESTRIAN_BEACH_MIN_TIME,
    "PEDESTRIAN_BEACH_SWIM_CHANCE",
    ()=>PEDESTRIAN_BEACH_SWIM_CHANCE,
    "PEDESTRIAN_BUILDING_ENTER_TIME",
    ()=>PEDESTRIAN_BUILDING_ENTER_TIME,
    "PEDESTRIAN_BUILDING_MAX_TIME",
    ()=>PEDESTRIAN_BUILDING_MAX_TIME,
    "PEDESTRIAN_BUILDING_MIN_TIME",
    ()=>PEDESTRIAN_BUILDING_MIN_TIME,
    "PEDESTRIAN_DOG_CHANCE",
    ()=>PEDESTRIAN_DOG_CHANCE,
    "PEDESTRIAN_HAT_CHANCE",
    ()=>PEDESTRIAN_HAT_CHANCE,
    "PEDESTRIAN_HAT_COLORS",
    ()=>PEDESTRIAN_HAT_COLORS,
    "PEDESTRIAN_IDLE_CHANCE",
    ()=>PEDESTRIAN_IDLE_CHANCE,
    "PEDESTRIAN_MAT_COLORS",
    ()=>PEDESTRIAN_MAT_COLORS,
    "PEDESTRIAN_MAX_ACTIVITY_TIME",
    ()=>PEDESTRIAN_MAX_ACTIVITY_TIME,
    "PEDESTRIAN_MAX_COUNT",
    ()=>PEDESTRIAN_MAX_COUNT,
    "PEDESTRIAN_MAX_COUNT_MOBILE",
    ()=>PEDESTRIAN_MAX_COUNT_MOBILE,
    "PEDESTRIAN_MIN_ACTIVITY_TIME",
    ()=>PEDESTRIAN_MIN_ACTIVITY_TIME,
    "PEDESTRIAN_MIN_ZOOM",
    ()=>PEDESTRIAN_MIN_ZOOM,
    "PEDESTRIAN_MIN_ZOOM_MOBILE",
    ()=>PEDESTRIAN_MIN_ZOOM_MOBILE,
    "PEDESTRIAN_PANTS_COLORS",
    ()=>PEDESTRIAN_PANTS_COLORS,
    "PEDESTRIAN_ROAD_TILE_DENSITY",
    ()=>PEDESTRIAN_ROAD_TILE_DENSITY,
    "PEDESTRIAN_ROAD_TILE_DENSITY_MOBILE",
    ()=>PEDESTRIAN_ROAD_TILE_DENSITY_MOBILE,
    "PEDESTRIAN_SHIRT_COLORS",
    ()=>PEDESTRIAN_SHIRT_COLORS,
    "PEDESTRIAN_SKIN_COLORS",
    ()=>PEDESTRIAN_SKIN_COLORS,
    "PEDESTRIAN_SOCIAL_CHANCE",
    ()=>PEDESTRIAN_SOCIAL_CHANCE,
    "PEDESTRIAN_SOCIAL_DURATION",
    ()=>PEDESTRIAN_SOCIAL_DURATION,
    "PEDESTRIAN_SPAWN_BATCH_SIZE",
    ()=>PEDESTRIAN_SPAWN_BATCH_SIZE,
    "PEDESTRIAN_SPAWN_BATCH_SIZE_MOBILE",
    ()=>PEDESTRIAN_SPAWN_BATCH_SIZE_MOBILE,
    "PEDESTRIAN_SPAWN_INTERVAL",
    ()=>PEDESTRIAN_SPAWN_INTERVAL,
    "PEDESTRIAN_SPAWN_INTERVAL_MOBILE",
    ()=>PEDESTRIAN_SPAWN_INTERVAL_MOBILE,
    "PEDESTRIAN_UPDATE_SKIP_DISTANCE",
    ()=>PEDESTRIAN_UPDATE_SKIP_DISTANCE,
    "PLANE_DIRECTION_COLS",
    ()=>PLANE_DIRECTION_COLS,
    "PLANE_SCALES",
    ()=>PLANE_SCALES,
    "PLANE_TYPES",
    ()=>PLANE_TYPES,
    "PLANE_TYPE_ROWS",
    ()=>PLANE_TYPE_ROWS,
    "RESIDENTIAL_BUILDING_TYPES",
    ()=>RESIDENTIAL_BUILDING_TYPES,
    "ROTOR_WASH_MAX_AGE",
    ()=>ROTOR_WASH_MAX_AGE,
    "ROTOR_WASH_SPAWN_INTERVAL",
    ()=>ROTOR_WASH_SPAWN_INTERVAL,
    "SEAPLANE_COLORS",
    ()=>SEAPLANE_COLORS,
    "SEAPLANE_DOCK_APPROACH_SPEED",
    ()=>SEAPLANE_DOCK_APPROACH_SPEED,
    "SEAPLANE_DOCK_TIME_MAX",
    ()=>SEAPLANE_DOCK_TIME_MAX,
    "SEAPLANE_DOCK_TIME_MIN",
    ()=>SEAPLANE_DOCK_TIME_MIN,
    "SEAPLANE_FLIGHT_SPEED_MAX",
    ()=>SEAPLANE_FLIGHT_SPEED_MAX,
    "SEAPLANE_FLIGHT_SPEED_MIN",
    ()=>SEAPLANE_FLIGHT_SPEED_MIN,
    "SEAPLANE_FLIGHT_TIME_MAX",
    ()=>SEAPLANE_FLIGHT_TIME_MAX,
    "SEAPLANE_FLIGHT_TIME_MIN",
    ()=>SEAPLANE_FLIGHT_TIME_MIN,
    "SEAPLANE_MAX_FLIGHTS",
    ()=>SEAPLANE_MAX_FLIGHTS,
    "SEAPLANE_MIN_BAY_SIZE",
    ()=>SEAPLANE_MIN_BAY_SIZE,
    "SEAPLANE_MIN_POPULATION",
    ()=>SEAPLANE_MIN_POPULATION,
    "SEAPLANE_MIN_ZOOM",
    ()=>SEAPLANE_MIN_ZOOM,
    "SEAPLANE_SPAWN_INTERVAL_MAX",
    ()=>SEAPLANE_SPAWN_INTERVAL_MAX,
    "SEAPLANE_SPAWN_INTERVAL_MIN",
    ()=>SEAPLANE_SPAWN_INTERVAL_MIN,
    "SEAPLANE_TAKEOFF_SPEED",
    ()=>SEAPLANE_TAKEOFF_SPEED,
    "SEAPLANE_TAXI_TIME_MAX",
    ()=>SEAPLANE_TAXI_TIME_MAX,
    "SEAPLANE_TAXI_TIME_MIN",
    ()=>SEAPLANE_TAXI_TIME_MIN,
    "SEAPLANE_WATER_SPEED",
    ()=>SEAPLANE_WATER_SPEED,
    "SIDEWALK_MIN_ZOOM",
    ()=>SIDEWALK_MIN_ZOOM,
    "SIDEWALK_MIN_ZOOM_MOBILE",
    ()=>SIDEWALK_MIN_ZOOM_MOBILE,
    "SKIP_SMALL_ELEMENTS_ZOOM_THRESHOLD",
    ()=>SKIP_SMALL_ELEMENTS_ZOOM_THRESHOLD,
    "SMOG_BASE_OPACITY",
    ()=>SMOG_BASE_OPACITY,
    "SMOG_BUILDINGS",
    ()=>SMOG_BUILDINGS,
    "SMOG_DRIFT_SPEED",
    ()=>SMOG_DRIFT_SPEED,
    "SMOG_FADE_ZOOM",
    ()=>SMOG_FADE_ZOOM,
    "SMOG_MAX_PARTICLES_PER_FACTORY",
    ()=>SMOG_MAX_PARTICLES_PER_FACTORY,
    "SMOG_MAX_PARTICLES_PER_FACTORY_MOBILE",
    ()=>SMOG_MAX_PARTICLES_PER_FACTORY_MOBILE,
    "SMOG_MAX_ZOOM",
    ()=>SMOG_MAX_ZOOM,
    "SMOG_MIN_ZOOM",
    ()=>SMOG_MIN_ZOOM,
    "SMOG_PARTICLE_GROWTH",
    ()=>SMOG_PARTICLE_GROWTH,
    "SMOG_PARTICLE_MAX_AGE",
    ()=>SMOG_PARTICLE_MAX_AGE,
    "SMOG_PARTICLE_MAX_AGE_MOBILE",
    ()=>SMOG_PARTICLE_MAX_AGE_MOBILE,
    "SMOG_PARTICLE_SIZE_MAX",
    ()=>SMOG_PARTICLE_SIZE_MAX,
    "SMOG_PARTICLE_SIZE_MIN",
    ()=>SMOG_PARTICLE_SIZE_MIN,
    "SMOG_RISE_SPEED",
    ()=>SMOG_RISE_SPEED,
    "SMOG_SPAWN_INTERVAL_LARGE",
    ()=>SMOG_SPAWN_INTERVAL_LARGE,
    "SMOG_SPAWN_INTERVAL_MEDIUM",
    ()=>SMOG_SPAWN_INTERVAL_MEDIUM,
    "SMOG_SPAWN_INTERVAL_MOBILE_MULTIPLIER",
    ()=>SMOG_SPAWN_INTERVAL_MOBILE_MULTIPLIER,
    "TRAFFIC_LIGHT_CYCLE",
    ()=>TRAFFIC_LIGHT_CYCLE,
    "TRAFFIC_LIGHT_GREEN_DURATION",
    ()=>TRAFFIC_LIGHT_GREEN_DURATION,
    "TRAFFIC_LIGHT_MIN_ZOOM",
    ()=>TRAFFIC_LIGHT_MIN_ZOOM,
    "TRAFFIC_LIGHT_YELLOW_DURATION",
    ()=>TRAFFIC_LIGHT_YELLOW_DURATION,
    "TRAIN_MIN_ZOOM",
    ()=>TRAIN_MIN_ZOOM,
    "TRAIN_MIN_ZOOM_FAR",
    ()=>TRAIN_MIN_ZOOM_FAR,
    "TRAIN_SMOKE_BASE_OPACITY",
    ()=>TRAIN_SMOKE_BASE_OPACITY,
    "TRAIN_SMOKE_DRIFT_SPEED",
    ()=>TRAIN_SMOKE_DRIFT_SPEED,
    "TRAIN_SMOKE_MAX_PARTICLES",
    ()=>TRAIN_SMOKE_MAX_PARTICLES,
    "TRAIN_SMOKE_MAX_PARTICLES_MOBILE",
    ()=>TRAIN_SMOKE_MAX_PARTICLES_MOBILE,
    "TRAIN_SMOKE_PARTICLE_GROWTH",
    ()=>TRAIN_SMOKE_PARTICLE_GROWTH,
    "TRAIN_SMOKE_PARTICLE_MAX_AGE",
    ()=>TRAIN_SMOKE_PARTICLE_MAX_AGE,
    "TRAIN_SMOKE_PARTICLE_SIZE_MAX",
    ()=>TRAIN_SMOKE_PARTICLE_SIZE_MAX,
    "TRAIN_SMOKE_PARTICLE_SIZE_MIN",
    ()=>TRAIN_SMOKE_PARTICLE_SIZE_MIN,
    "TRAIN_SMOKE_RISE_SPEED",
    ()=>TRAIN_SMOKE_RISE_SPEED,
    "TRAIN_SMOKE_SPAWN_INTERVAL",
    ()=>TRAIN_SMOKE_SPAWN_INTERVAL,
    "TRAIN_SMOKE_SPAWN_INTERVAL_MOBILE",
    ()=>TRAIN_SMOKE_SPAWN_INTERVAL_MOBILE,
    "TRAIN_SPAWN_INTERVAL",
    ()=>TRAIN_SPAWN_INTERVAL,
    "TRAIN_SPAWN_INTERVAL_MOBILE",
    ()=>TRAIN_SPAWN_INTERVAL_MOBILE,
    "VEHICLE_FAR_ZOOM_THRESHOLD",
    ()=>VEHICLE_FAR_ZOOM_THRESHOLD,
    "WAKE_MAX_AGE",
    ()=>WAKE_MAX_AGE,
    "WAKE_MIN_ZOOM_MOBILE",
    ()=>WAKE_MIN_ZOOM_MOBILE,
    "WAKE_SPAWN_INTERVAL",
    ()=>WAKE_SPAWN_INTERVAL,
    "WATER_ASSET_PATH",
    ()=>WATER_ASSET_PATH,
    "ZOOM_MAX",
    ()=>ZOOM_MAX,
    "ZOOM_MIN",
    ()=>ZOOM_MIN
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/isometric-city/src/components/game/types.ts [app-client] (ecmascript)");
;
const CAR_COLORS = [
    '#d97777',
    '#d4a01f',
    '#2ba67a',
    '#4d84c8',
    '#9a6ac9'
];
const BUS_COLORS = [
    '#f59e0b',
    '#ef4444',
    '#3b82f6',
    '#10b981',
    '#9333ea'
];
const BUS_MIN_POPULATION = 600; // Minimum population required for buses
const BUS_MIN_ZOOM = 0.35; // Minimum zoom to show buses
const BUS_SPEED_MIN = 0.3;
const BUS_SPEED_MAX = 0.45;
const MAX_BUSES = 35;
const MAX_BUSES_MOBILE = 8;
const BUS_SPAWN_INTERVAL_MIN = 2.5;
const BUS_SPAWN_INTERVAL_MAX = 6.0;
const BUS_STOP_DURATION_MIN = 1.6;
const BUS_STOP_DURATION_MAX = 3.5;
const PEDESTRIAN_SKIN_COLORS = [
    '#ffe4c4',
    '#ffd5b8',
    '#ffc8a8',
    '#fdbf7e',
    '#e0ac69',
    '#c68642',
    '#8d5524',
    '#613318'
];
const PEDESTRIAN_SHIRT_COLORS = [
    '#ef4444',
    '#f97316',
    '#eab308',
    '#22c55e',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#ffffff',
    '#1f2937'
];
const PEDESTRIAN_PANTS_COLORS = [
    '#1f2937',
    '#374151',
    '#4b5563',
    '#1e3a8a',
    '#7c2d12',
    '#365314'
];
const PEDESTRIAN_HAT_COLORS = [
    '#ef4444',
    '#3b82f6',
    '#22c55e',
    '#f97316',
    '#8b5cf6',
    '#1f2937',
    '#ffffff'
];
const PEDESTRIAN_BUILDING_ENTER_TIME = 2.0; // Time to enter/exit building (seconds) - slow enough to see
const PEDESTRIAN_APPROACH_TIME = 3.0; // Time spent walking from road to shop entrance
const PEDESTRIAN_MIN_ACTIVITY_TIME = 20.0; // Minimum time at an activity
const PEDESTRIAN_MAX_ACTIVITY_TIME = 120.0; // Maximum time at an activity
const PEDESTRIAN_BUILDING_MIN_TIME = 15.0; // Minimum time inside buildings (reduced for more flow)
const PEDESTRIAN_BUILDING_MAX_TIME = 60.0; // Maximum time inside buildings (reduced for more flow)
const PEDESTRIAN_SOCIAL_CHANCE = 0.02; // Chance to stop and socialize (reduced for perf)
const PEDESTRIAN_SOCIAL_DURATION = 4.0; // How long socializing lasts
const PEDESTRIAN_DOG_CHANCE = 0.05; // Chance of walking a dog (reduced for perf)
const PEDESTRIAN_BAG_CHANCE = 0.15; // Chance of carrying a bag
const PEDESTRIAN_HAT_CHANCE = 0.15; // Chance of wearing a hat
const PEDESTRIAN_IDLE_CHANCE = 0.01; // Chance to stop and idle briefly (reduced for perf)
const PEDESTRIAN_BEACH_CHANCE = 0.15; // Chance a park-bound pedestrian goes to beach instead
const PEDESTRIAN_BEACH_MIN_TIME = 30.0; // Minimum time at beach
const PEDESTRIAN_BEACH_MAX_TIME = 180.0; // Maximum time at beach
const PEDESTRIAN_BEACH_SWIM_CHANCE = 0.6; // Chance of swimming vs lying on mat
const PEDESTRIAN_MAT_COLORS = [
    '#e74c3c',
    '#3498db',
    '#2ecc71',
    '#f1c40f',
    '#9b59b6',
    '#e67e22',
    '#1abc9c',
    '#ff69b4'
];
const MAX_BEACH_SWIMMERS_PER_TILE = 3; // Max swimmers per water tile
const MAX_BEACH_MATS_PER_EDGE = 2; // Max mats per beach edge
const PEDESTRIAN_MAX_COUNT = 560; // Maximum pedestrians (hard cap) - reduced ~30%
const PEDESTRIAN_MAX_COUNT_MOBILE = 80; // Mobile: much lower for performance
const PEDESTRIAN_ROAD_TILE_DENSITY = 1.7; // Target pedestrians per road tile - reduced ~30%
const PEDESTRIAN_ROAD_TILE_DENSITY_MOBILE = 0.5; // Mobile: lower density
const PEDESTRIAN_SPAWN_BATCH_SIZE = 25; // How many to try spawning at once
const PEDESTRIAN_SPAWN_BATCH_SIZE_MOBILE = 5; // Mobile: smaller batches
const PEDESTRIAN_SPAWN_INTERVAL = 0.03; // Seconds between spawn batches
const PEDESTRIAN_SPAWN_INTERVAL_MOBILE = 0.15; // Mobile: slower spawning
const PEDESTRIAN_UPDATE_SKIP_DISTANCE = 30; // Skip detailed updates for pedestrians this far from view
const ZOOM_MIN = 0.3; // Minimum zoom level (most zoomed out - for large maps/multiple cities)
const ZOOM_MAX = 5; // Maximum zoom level (most zoomed in)
const CAR_MIN_ZOOM = 0.4; // Desktop car threshold (cars hidden when very zoomed out)
const CAR_MIN_ZOOM_MOBILE = 0.45; // Mobile car threshold (slightly higher for perf)
const PEDESTRIAN_MIN_ZOOM = 0.5; // Desktop pedestrian threshold
const PEDESTRIAN_MIN_ZOOM_MOBILE = 0.55; // Mobile pedestrian threshold (slightly higher for perf)
const VEHICLE_FAR_ZOOM_THRESHOLD = 0.25; // Below this zoom: hide ALL vehicles/pedestrians on desktop too
const TRAIN_MIN_ZOOM_FAR = 0.20; // Trains visible slightly further out than cars
const BOAT_MIN_ZOOM_FAR = 0.20; // Boats visible at moderate zoom
const HELICOPTER_MIN_ZOOM_FAR = 0.20; // Helicopters visible at moderate zoom
const AIRPLANE_MIN_ZOOM_FAR = 0; // Airplanes always visible at all zoom levels
const TRAFFIC_LIGHT_MIN_ZOOM = 0.45; // Traffic lights at intersections
const DIRECTION_ARROWS_MIN_ZOOM = 0.65; // Directional arrows on merged roads
const MEDIAN_PLANTS_MIN_ZOOM = 0.55; // Plants/shrubs on road medians
const LANE_MARKINGS_MIN_ZOOM = 0.5; // Lane markings and road lines
const LANE_MARKINGS_MEDIAN_MIN_ZOOM = 0.6; // Median markings for avenues/highways
const SIDEWALK_MIN_ZOOM = 0.25; // Sidewalks on road edges (desktop)
const SIDEWALK_MIN_ZOOM_MOBILE = 0.25; // Sidewalks on mobile (lower = visible when more zoomed out)
const SKIP_SMALL_ELEMENTS_ZOOM_THRESHOLD = 0.5; // Desktop: hide boats/helis/smog during pan/zoom when below this
const AIRPLANE_MIN_POPULATION = 2000; // Minimum population required for airplane activity
const AIRPLANE_COLORS = [
    '#ffffff',
    '#1e40af',
    '#dc2626',
    '#059669',
    '#7c3aed'
]; // Airline liveries (fallback)
const CONTRAIL_MAX_AGE = 3.0; // seconds
const CONTRAIL_SPAWN_INTERVAL = 0.02; // seconds between contrail particles
const AIRPLANE_SPRITE_SRC = '/assets/sprites_red_water_new_planes.png';
const AIRPLANE_SPRITE_COLS = 5; // 5 columns per row
const AIRPLANE_SPRITE_ROWS = 6; // 6 rows total
const PLANE_TYPE_ROWS = {
    '737': 0,
    '777': 1,
    '747': 2,
    'a380': 3,
    'seaplane': 4,
    'g650': 5
};
const PLANE_TYPES = [
    '737',
    '737',
    '737',
    '777',
    '777',
    '747',
    'g650'
];
const PLANE_DIRECTION_COLS = {
    // Original sprites - baseAngle is what direction the sprite is drawn facing
    'sw': {
        col: 0,
        mirrorX: false,
        mirrorY: false,
        baseAngle: 3 * Math.PI / 4 + 0.26
    },
    'ne': {
        col: 1,
        mirrorX: false,
        mirrorY: false,
        baseAngle: -Math.PI / 4 + 0.17
    },
    'w': {
        col: 2,
        mirrorX: false,
        mirrorY: false,
        baseAngle: Math.PI
    },
    'n': {
        col: 3,
        mirrorX: false,
        mirrorY: false,
        baseAngle: 3 * Math.PI / 2
    },
    // Derived directions through mirroring
    'se': {
        col: 0,
        mirrorX: true,
        mirrorY: false,
        baseAngle: Math.PI / 4 - 0.26
    },
    'nw': {
        col: 1,
        mirrorX: false,
        mirrorY: true,
        baseAngle: Math.PI / 4 - 0.26
    },
    'e': {
        col: 2,
        mirrorX: true,
        mirrorY: false,
        baseAngle: 0
    },
    's': {
        col: 3,
        mirrorX: false,
        mirrorY: true,
        baseAngle: Math.PI / 2
    }
};
const COL1_OVERRIDE_PLANE_TYPES = [
    'seaplane',
    'g650'
];
const COL1_DIRECTION_OVERRIDES = {
    'ne': {
        col: 3,
        mirrorX: true,
        mirrorY: false,
        baseAngle: -Math.PI / 4 - 0.69
    },
    'se': {
        col: 3,
        mirrorX: true,
        mirrorY: true,
        baseAngle: 3 * Math.PI / 4 - 0.78
    },
    'nw': {
        col: 3,
        mirrorX: false,
        mirrorY: false,
        baseAngle: 3 * Math.PI / 2
    }
};
const PLANE_SCALES = {
    '737': 0.152,
    '777': 0.184,
    '747': 0.196,
    'a380': 0.224,
    'g650': 0.112,
    'seaplane': 0.09
};
const SEAPLANE_MIN_POPULATION = 3000; // Minimum population for seaplanes
const SEAPLANE_MIN_BAY_SIZE = 12; // Minimum water tiles for a bay to support seaplanes
const SEAPLANE_COLORS = [
    '#ffffff',
    '#1e40af',
    '#dc2626',
    '#f97316',
    '#059669'
]; // Seaplane liveries
const MAX_SEAPLANES = 25; // Maximum seaplanes in the city
const MAX_SEAPLANES_MOBILE = 5; // Mobile: fewer seaplanes for performance
const SEAPLANE_SPAWN_INTERVAL_MIN = 4; // Minimum seconds between spawns
const SEAPLANE_SPAWN_INTERVAL_MAX = 10; // Maximum seconds between spawns
const SEAPLANE_TAXI_TIME_MIN = 4; // Minimum seconds taxiing on water before takeoff
const SEAPLANE_TAXI_TIME_MAX = 10; // Maximum seconds taxiing
const SEAPLANE_DOCK_TIME_MIN = 8; // Minimum seconds docked at marina/pier
const SEAPLANE_DOCK_TIME_MAX = 20; // Maximum seconds docked
const SEAPLANE_FLIGHT_TIME_MIN = 25; // Minimum flight time in seconds
const SEAPLANE_FLIGHT_TIME_MAX = 50; // Maximum flight time
const SEAPLANE_WATER_SPEED = 18; // Speed when taxiing on water (px/sec)
const SEAPLANE_DOCK_APPROACH_SPEED = 12; // Speed when approaching dock
const SEAPLANE_TAKEOFF_SPEED = 60; // Speed during takeoff run
const SEAPLANE_FLIGHT_SPEED_MIN = 70; // Minimum cruising speed
const SEAPLANE_FLIGHT_SPEED_MAX = 100; // Maximum cruising speed
const SEAPLANE_MIN_ZOOM = 0.3; // Minimum zoom to show seaplanes
const SEAPLANE_MAX_FLIGHTS = 3; // Maximum flights before despawning
const HELICOPTER_MIN_POPULATION = 3000; // Minimum population required for helicopter activity
const HELICOPTER_COLORS = [
    '#dc2626',
    '#ffffff',
    '#1e3a8a',
    '#f97316',
    '#059669'
]; // Red cross, white, navy, orange, green
const ROTOR_WASH_MAX_AGE = 1.0; // seconds - shorter than plane contrails
const ROTOR_WASH_SPAWN_INTERVAL = 0.04; // seconds between rotor wash particles
const WATER_ASSET_PATH = '/assets/water.png';
const BOAT_COLORS = [
    '#ffffff',
    '#1e3a5f',
    '#8b4513',
    '#2f4f4f',
    '#c41e3a',
    '#1e90ff'
]; // Various boat hull colors
const BOAT_MIN_ZOOM = 0.3; // Minimum zoom level to show boats
const WAKE_MIN_ZOOM_MOBILE = 0.45; // Minimum zoom level to show wakes on mobile (matches traffic lights threshold)
const BOATS_PER_DOCK = 1.5; // Number of boats per marina/pier
const BOATS_PER_DOCK_MOBILE = 0.5; // Mobile: fewer boats per dock
const MAX_BOATS = 12; // Maximum total boats in the city
const MAX_BOATS_MOBILE = 4; // Mobile: fewer boats for performance
const WAKE_MAX_AGE = 2.0; // seconds - how long wake particles last
const WAKE_SPAWN_INTERVAL = 0.03; // seconds between wake particles
const BARGE_COLORS = [
    '#2c3e50',
    '#34495e',
    '#7f8c8d',
    '#c0392b',
    '#27ae60',
    '#2980b9'
]; // Industrial ship colors
const BARGE_MIN_ZOOM = 0.25; // Minimum zoom level to show barges (slightly lower than boats)
const BARGE_SPEED_MIN = 8; // Minimum speed (pixels/second) - slower than boats
const BARGE_SPEED_MAX = 12; // Maximum speed (pixels/second)
const MAX_BARGES = 4; // Maximum barges in the city at once
const MAX_BARGES_MOBILE = 2; // Mobile: fewer barges for performance
const BARGE_SPAWN_INTERVAL_MIN = 8; // Minimum seconds between barge spawns
const BARGE_SPAWN_INTERVAL_MAX = 20; // Maximum seconds between barge spawns
const BARGE_DOCK_TIME_MIN = 8; // Minimum seconds docked at marina
const BARGE_DOCK_TIME_MAX = 15; // Maximum seconds docked at marina
const BARGE_CARGO_VALUE_MIN = 100; // Minimum cargo value (adds to city income per delivery)
const BARGE_CARGO_VALUE_MAX = 350; // Maximum cargo value (makes ocean marinas worthwhile)
const BARGE_WAKE_SPAWN_INTERVAL = 0.05; // Slower wake spawn than boats (larger vessel)
const SMOG_BUILDINGS = [
    'factory_medium',
    'factory_large'
];
const SMOG_PARTICLE_MAX_AGE = 8.0; // seconds - how long smog particles last
const SMOG_PARTICLE_MAX_AGE_MOBILE = 5.0; // seconds - shorter on mobile for performance
const SMOG_SPAWN_INTERVAL_MEDIUM = 0.4; // seconds between particles for medium factory
const SMOG_SPAWN_INTERVAL_LARGE = 0.2; // seconds between particles for large factory
const SMOG_SPAWN_INTERVAL_MOBILE_MULTIPLIER = 2.0; // Spawn less frequently on mobile
const SMOG_DRIFT_SPEED = 8; // pixels per second horizontal drift
const SMOG_RISE_SPEED = 12; // pixels per second upward drift
const SMOG_MAX_ZOOM = 1.2; // Zoom level above which smog starts to fade
const SMOG_FADE_ZOOM = 1.8; // Zoom level at which smog is fully invisible
const SMOG_BASE_OPACITY = 0.25; // Base opacity of smog particles
const SMOG_PARTICLE_SIZE_MIN = 8; // Minimum particle size
const SMOG_PARTICLE_SIZE_MAX = 20; // Maximum particle size
const SMOG_PARTICLE_GROWTH = 0.5; // How much particles grow per second
const SMOG_MAX_PARTICLES_PER_FACTORY = 25; // Maximum particles per factory to prevent memory issues
const SMOG_MAX_PARTICLES_PER_FACTORY_MOBILE = 12; // Lower limit on mobile
const TRAIN_SMOKE_PARTICLE_MAX_AGE = 1.8; // seconds - short-lived compact puffs
const TRAIN_SMOKE_SPAWN_INTERVAL = 0.15; // seconds between puffs
const TRAIN_SMOKE_SPAWN_INTERVAL_MOBILE = 0.3; // Less frequent on mobile
const TRAIN_SMOKE_DRIFT_SPEED = 8; // pixels per second horizontal drift (slower)
const TRAIN_SMOKE_RISE_SPEED = 18; // pixels per second upward drift
const TRAIN_SMOKE_BASE_OPACITY = 0.5; // Higher opacity for compact puffs
const TRAIN_SMOKE_PARTICLE_SIZE_MIN = 2; // Tiny puffs
const TRAIN_SMOKE_PARTICLE_SIZE_MAX = 4; // Small max size
const TRAIN_SMOKE_PARTICLE_GROWTH = 0.8; // Slow growth - stays compact
const TRAIN_SMOKE_MAX_PARTICLES = 12; // Max particles per train
const TRAIN_SMOKE_MAX_PARTICLES_MOBILE = 6;
const FIREWORK_BUILDINGS = [
    'baseball_stadium',
    'amusement_park',
    'marina_docks_small',
    'pier_large'
];
const FIREWORK_COLORS = [
    '#ff4444',
    '#ff6b6b',
    '#44ff44',
    '#6bff6b',
    '#4444ff',
    '#6b6bff',
    '#ffff44',
    '#ffff6b',
    '#ff44ff',
    '#ff6bff',
    '#44ffff',
    '#6bffff',
    '#ff8844',
    '#ffaa44',
    '#ffffff',
    '#ffffee'
];
const FIREWORK_PARTICLE_COUNT = 40; // Particles per explosion
const FIREWORK_PARTICLE_SPEED = 120; // Initial particle velocity
const FIREWORK_PARTICLE_MAX_AGE = 1.5; // seconds - how long particles last
const FIREWORK_LAUNCH_SPEED = 180; // pixels per second upward
const FIREWORK_SPAWN_INTERVAL_MIN = 0.3; // seconds between firework launches
const FIREWORK_SPAWN_INTERVAL_MAX = 1.2; // seconds between firework launches
const FIREWORK_SHOW_DURATION = 45; // seconds - how long a firework show lasts
const FIREWORK_SHOW_CHANCE = 0.35; // 35% chance of fireworks on any given night
// Direction metadata helpers
function createDirectionMeta(step, vec) {
    const length = Math.hypot(vec.dx, vec.dy) || 1;
    return {
        step,
        vec,
        angle: Math.atan2(vec.dy, vec.dx),
        normal: {
            nx: -vec.dy / length,
            ny: vec.dx / length
        }
    };
}
const DIRECTION_META = {
    north: createDirectionMeta({
        x: -1,
        y: 0
    }, {
        dx: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
        dy: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
    }),
    east: createDirectionMeta({
        x: 0,
        y: -1
    }, {
        dx: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
        dy: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
    }),
    south: createDirectionMeta({
        x: 1,
        y: 0
    }, {
        dx: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
        dy: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
    }),
    west: createDirectionMeta({
        x: 0,
        y: 1
    }, {
        dx: -__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
        dy: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
    })
};
const OPPOSITE_DIRECTION = {
    north: 'south',
    east: 'west',
    south: 'north',
    west: 'east'
};
const TRAFFIC_LIGHT_GREEN_DURATION = 3.0; // Seconds
const TRAFFIC_LIGHT_YELLOW_DURATION = 0.8; // Seconds
const TRAFFIC_LIGHT_CYCLE = 7.6; // Full cycle time
const TRAIN_MIN_ZOOM = 0.35; // Minimum zoom to show trains (normal)
const TRAIN_SPAWN_INTERVAL = 3.0; // Seconds between train spawn attempts
const TRAIN_SPAWN_INTERVAL_MOBILE = 6.0; // Mobile: slower train spawning
const MIN_RAIL_TILES_FOR_TRAINS = 10; // Minimum rail tiles needed
const MAX_TRAINS = 35; // Maximum trains in city
const MAX_TRAINS_MOBILE = 8; // Mobile: fewer trains for performance
const HELICOPTER_MIN_ZOOM = 0.3; // Minimum zoom to show helicopters
const SMOG_MIN_ZOOM = 0.35; // Minimum zoom to show factory smog
const FIREWORK_MIN_ZOOM = 0.3; // Minimum zoom to show fireworks
const NON_LIT_BUILDING_TYPES = new Set([
    'grass',
    'empty',
    'water',
    'road',
    'tree',
    'park',
    'park_large',
    'tennis'
]);
const RESIDENTIAL_BUILDING_TYPES = new Set([
    'house_small',
    'house_medium',
    'mansion',
    'apartment_low',
    'apartment_high'
]);
const COMMERCIAL_BUILDING_TYPES = new Set([
    'shop_small',
    'shop_medium',
    'office_low',
    'office_high',
    'mall'
]);
const CLOUD_MIN_ZOOM = 0.2; // Minimum zoom to show clouds (always visible when not super zoomed out)
const CLOUD_MAX_ZOOM = 1.0; // Zoom level above which clouds start to fade when zoomed in (focus on city)
const CLOUD_FADE_ZOOM = 1.6; // Zoom level at which clouds are fully invisible when zoomed in
const CLOUD_MAX_COVERAGE = 0.35; // Viewport fraction (0–1) above which clouds start to fade (e.g. 35% covered)
const CLOUD_COVERAGE_FADE_END = 0.7; // At this coverage fraction, clouds are fully faded (e.g. 70% covered)
const CLOUD_MAX_COUNT = 18; // Maximum clouds on screen (increased for diversity)
const CLOUD_MAX_COUNT_MOBILE = 10; // Fewer clouds on mobile for performance
const CLOUD_SPAWN_INTERVAL = 2.5; // Seconds between cloud spawn attempts
const CLOUD_SPAWN_INTERVAL_MOBILE = 4.5; // Slower spawning on mobile
const CLOUD_SPEED_MIN = 8; // Minimum cloud drift speed (pixels/second)
const CLOUD_SPEED_MAX = 24; // Maximum cloud drift speed (cirrus moves faster)
const CLOUD_SCALE_MIN = 0.5; // Minimum cloud scale
const CLOUD_SCALE_MAX = 1.8; // Maximum cloud scale
const CLOUD_PUFF_COUNT_MIN = 4; // Minimum puffs per cloud (cumulus)
const CLOUD_PUFF_COUNT_MAX = 10; // Maximum puffs per cloud
const CLOUD_PUFF_SIZE_MIN = 20; // Minimum puff radius
const CLOUD_PUFF_SIZE_MAX = 55; // Maximum puff radius
const CLOUD_WIDTH = 150; // Approximate cloud width for spawn offset
const CLOUD_DESPAWN_MARGIN = 300; // Distance past viewport to despawn clouds
const CLOUD_WIND_ANGLE = -Math.PI / 4; // ~-45 degrees (southwest to northeast)
const CLOUD_LAYER_SPEEDS = [
    0.7,
    1.0,
    1.4
]; // Speed multipliers for low/mid/high layers
const CLOUD_LAYER_OPACITY = [
    0.85,
    1.0,
    0.9
]; // Opacity multipliers for layers
const CLOUD_NIGHT_OPACITY_MULT = 0.6; // Clouds are less visible at night
const CLOUD_TYPE_WEIGHTS_BY_HOUR = {
    0: [
        2,
        4,
        5,
        0,
        3
    ],
    1: [
        2,
        4,
        5,
        0,
        3
    ],
    2: [
        2,
        4,
        5,
        0,
        3
    ],
    3: [
        2,
        4,
        5,
        0,
        3
    ],
    4: [
        2,
        4,
        5,
        0,
        3
    ],
    5: [
        3,
        5,
        4,
        0,
        4
    ],
    6: [
        4,
        6,
        3,
        0,
        5
    ],
    7: [
        5,
        5,
        3,
        0,
        5
    ],
    8: [
        6,
        4,
        3,
        0,
        5
    ],
    9: [
        7,
        3,
        3,
        0,
        4
    ],
    10: [
        8,
        2,
        4,
        1,
        4
    ],
    11: [
        9,
        2,
        4,
        1,
        3
    ],
    12: [
        9,
        2,
        4,
        2,
        3
    ],
    13: [
        8,
        2,
        4,
        3,
        3
    ],
    14: [
        8,
        2,
        4,
        3,
        3
    ],
    15: [
        7,
        2,
        4,
        3,
        4
    ],
    16: [
        6,
        3,
        4,
        2,
        4
    ],
    17: [
        5,
        4,
        4,
        2,
        5
    ],
    18: [
        4,
        5,
        4,
        1,
        6
    ],
    19: [
        3,
        5,
        5,
        1,
        5
    ],
    20: [
        2,
        5,
        5,
        0,
        4
    ],
    21: [
        2,
        4,
        5,
        0,
        3
    ],
    22: [
        2,
        4,
        5,
        0,
        3
    ],
    23: [
        2,
        4,
        5,
        0,
        3
    ]
};
const CLOUD_TYPE_WEIGHTS_DEFAULT = [
    6,
    3,
    4,
    1,
    4
];
const CLOUD_TYPES_ORDERED = [
    'cumulus',
    'stratus',
    'cirrus',
    'cumulonimbus',
    'altocumulus'
];
const CLOUD_TYPE_CONFIG = {
    cumulus: {
        opacityMin: 0.2,
        opacityMax: 0.4,
        layerRestriction: -1,
        speedMult: 1.0,
        scaleMin: 0.7,
        scaleMax: 1.5,
        puffCountMin: 5,
        puffCountMax: 9,
        puffStretchX: [
            1,
            1
        ],
        puffStretchY: [
            1,
            1
        ]
    },
    stratus: {
        opacityMin: 0.25,
        opacityMax: 0.45,
        layerRestriction: 0,
        speedMult: 0.85,
        scaleMin: 1.0,
        scaleMax: 1.6,
        puffCountMin: 8,
        puffCountMax: 14,
        puffStretchX: [
            2,
            3
        ],
        puffStretchY: [
            0.4,
            0.6
        ]
    },
    cirrus: {
        opacityMin: 0.06,
        opacityMax: 0.18,
        layerRestriction: 2,
        speedMult: 1.5,
        scaleMin: 0.8,
        scaleMax: 1.4,
        puffCountMin: 2,
        puffCountMax: 5,
        puffStretchX: [
            2,
            4
        ],
        puffStretchY: [
            0.3,
            0.5
        ]
    },
    cumulonimbus: {
        opacityMin: 0.3,
        opacityMax: 0.5,
        layerRestriction: 0,
        speedMult: 0.7,
        scaleMin: 1.2,
        scaleMax: 1.9,
        puffCountMin: 6,
        puffCountMax: 10,
        puffStretchX: [
            1,
            1.2
        ],
        puffStretchY: [
            1,
            1.3
        ]
    },
    altocumulus: {
        opacityMin: 0.15,
        opacityMax: 0.35,
        layerRestriction: 1,
        speedMult: 1.1,
        scaleMin: 0.6,
        scaleMax: 1.2,
        puffCountMin: 4,
        puffCountMax: 8,
        puffStretchX: [
            1,
            1.5
        ],
        puffStretchY: [
            0.7,
            1
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/isometric-city/src/components/game/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findNearestRoadToBuilding",
    ()=>findNearestRoadToBuilding,
    "findPathOnRoads",
    ()=>findPathOnRoads,
    "getDirectionOptions",
    ()=>getDirectionOptions,
    "getDirectionToTile",
    ()=>getDirectionToTile,
    "getOppositeDirection",
    ()=>getOppositeDirection,
    "gridToScreen",
    ()=>gridToScreen,
    "isRoadTile",
    ()=>isRoadTile,
    "pickNextDirection",
    ()=>pickNextDirection,
    "screenToGrid",
    ()=>screenToGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/isometric-city/src/components/game/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/isometric-city/src/components/game/constants.ts [app-client] (ecmascript)");
;
;
// PERF: Pre-allocated typed arrays for BFS pathfinding to reduce GC pressure
// Max path length of 2048 nodes should be sufficient for most city sizes
const MAX_PATH_LENGTH = 2048;
const BFS_QUEUE_X = new Int16Array(MAX_PATH_LENGTH);
const BFS_QUEUE_Y = new Int16Array(MAX_PATH_LENGTH);
const BFS_PARENT_X = new Int16Array(MAX_PATH_LENGTH); // Parent index for path reconstruction
const BFS_PARENT_Y = new Int16Array(MAX_PATH_LENGTH);
const BFS_VISITED = new Uint8Array(256 * 256); // Max 256x256 grid size
function getOppositeDirection(direction) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPPOSITE_DIRECTION"][direction];
}
function isRoadTile(gridData, gridSizeValue, x, y) {
    if (x < 0 || y < 0 || x >= gridSizeValue || y >= gridSizeValue) return false;
    const tile = gridData[y][x];
    const type = tile.building.type;
    // Road bridges are valid, rail bridges are not
    if (type === 'bridge') {
        return tile.building.bridgeTrackType !== 'rail';
    }
    return type === 'road';
}
// Check if a car can enter a tile from a given direction
// Bridges can only be entered along their orientation (ns bridges: north/south, ew bridges: east/west)
function canEnterTileFromDirection(gridData, gridSizeValue, x, y, direction) {
    if (x < 0 || y < 0 || x >= gridSizeValue || y >= gridSizeValue) return false;
    const tile = gridData[y]?.[x];
    if (!tile) return false;
    // If it's a bridge, check if the direction matches the bridge orientation
    if (tile.building.type === 'bridge') {
        // Rail bridges are not valid for cars
        if (tile.building.bridgeTrackType === 'rail') return false;
        const orientation = tile.building.bridgeOrientation;
        // ns bridges only allow north/south travel
        if (orientation === 'ns' && (direction === 'north' || direction === 'south')) return true;
        // ew bridges only allow east/west travel
        if (orientation === 'ew' && (direction === 'east' || direction === 'west')) return true;
        // Direction doesn't match bridge orientation - can't enter
        return false;
    }
    // Regular road tiles can be entered from any direction
    return tile.building.type === 'road';
}
function getDirectionOptions(gridData, gridSizeValue, x, y) {
    const options = [];
    if (isRoadTile(gridData, gridSizeValue, x - 1, y)) options.push('north');
    if (isRoadTile(gridData, gridSizeValue, x, y - 1)) options.push('east');
    if (isRoadTile(gridData, gridSizeValue, x + 1, y)) options.push('south');
    if (isRoadTile(gridData, gridSizeValue, x, y + 1)) options.push('west');
    return options;
}
function pickNextDirection(previousDirection, gridData, gridSizeValue, x, y) {
    const options = getDirectionOptions(gridData, gridSizeValue, x, y);
    if (options.length === 0) return null;
    // Check if current tile is a bridge - if so, only allow going straight
    const currentTile = gridData[y]?.[x];
    if (currentTile?.building.type === 'bridge') {
        // On a bridge, only continue in the same direction (no turning)
        if (options.includes(previousDirection)) {
            return previousDirection;
        }
    // If we can't continue straight, fall back to normal behavior
    }
    // Filter out directions that would enter a bridge from an invalid angle
    // For each direction, check if the target tile can be entered from that direction
    const directionOffsets = {
        'north': {
            dx: -1,
            dy: 0
        },
        'south': {
            dx: 1,
            dy: 0
        },
        'east': {
            dx: 0,
            dy: -1
        },
        'west': {
            dx: 0,
            dy: 1
        }
    };
    const validOptions = options.filter((dir)=>{
        const offset = directionOffsets[dir];
        const targetX = x + offset.dx;
        const targetY = y + offset.dy;
        return canEnterTileFromDirection(gridData, gridSizeValue, targetX, targetY, dir);
    });
    if (validOptions.length === 0) return null;
    const incoming = getOppositeDirection(previousDirection);
    const filtered = validOptions.filter((dir)=>dir !== incoming);
    const pool = filtered.length > 0 ? filtered : validOptions;
    return pool[Math.floor(Math.random() * pool.length)];
}
// PERF: Pre-allocated arrays for findNearestRoadToBuilding BFS
const ROAD_BFS_MAX_SIZE = 4096; // Max tiles to check
const ROAD_BFS_QUEUE_X = new Int16Array(ROAD_BFS_MAX_SIZE);
const ROAD_BFS_QUEUE_Y = new Int16Array(ROAD_BFS_MAX_SIZE);
const ROAD_BFS_QUEUE_DIST = new Int16Array(ROAD_BFS_MAX_SIZE);
const ROAD_BFS_VISITED = new Uint8Array(256 * 256); // Max 256x256 grid
// Direction offsets for 8-directional search
const ADJ_DX = [
    -1,
    1,
    0,
    0,
    -1,
    -1,
    1,
    1
];
const ADJ_DY = [
    0,
    0,
    -1,
    1,
    -1,
    1,
    -1,
    1
];
function findNearestRoadToBuilding(gridData, gridSizeValue, buildingX, buildingY) {
    // Check adjacent tiles first (distance 1) - including diagonals
    for(let d = 0; d < 8; d++){
        const nx = buildingX + ADJ_DX[d];
        const ny = buildingY + ADJ_DY[d];
        if (isRoadTile(gridData, gridSizeValue, nx, ny)) {
            return {
                x: nx,
                y: ny
            };
        }
    }
    // For larger grids or edge cases, use optimized BFS
    const maxIdx = gridSizeValue * gridSizeValue;
    if (maxIdx > ROAD_BFS_VISITED.length) {
        // Fallback to string-based Set for very large grids
        return findNearestRoadLegacy(gridData, gridSizeValue, buildingX, buildingY);
    }
    // Clear visited array for the area we need
    for(let i = 0; i < maxIdx; i++){
        ROAD_BFS_VISITED[i] = 0;
    }
    // BFS using pre-allocated arrays
    let queueHead = 0;
    let queueTail = 1;
    ROAD_BFS_QUEUE_X[0] = buildingX;
    ROAD_BFS_QUEUE_Y[0] = buildingY;
    ROAD_BFS_QUEUE_DIST[0] = 0;
    ROAD_BFS_VISITED[buildingY * gridSizeValue + buildingX] = 1;
    while(queueHead < queueTail && queueTail < ROAD_BFS_MAX_SIZE){
        const cx = ROAD_BFS_QUEUE_X[queueHead];
        const cy = ROAD_BFS_QUEUE_Y[queueHead];
        const dist = ROAD_BFS_QUEUE_DIST[queueHead];
        queueHead++;
        if (dist > 20) break; // Max search distance
        for(let d = 0; d < 8; d++){
            const nx = cx + ADJ_DX[d];
            const ny = cy + ADJ_DY[d];
            if (nx < 0 || ny < 0 || nx >= gridSizeValue || ny >= gridSizeValue) continue;
            const visitedIdx = ny * gridSizeValue + nx;
            if (ROAD_BFS_VISITED[visitedIdx]) continue;
            ROAD_BFS_VISITED[visitedIdx] = 1;
            if (isRoadTile(gridData, gridSizeValue, nx, ny)) {
                return {
                    x: nx,
                    y: ny
                };
            }
            ROAD_BFS_QUEUE_X[queueTail] = nx;
            ROAD_BFS_QUEUE_Y[queueTail] = ny;
            ROAD_BFS_QUEUE_DIST[queueTail] = dist + 1;
            queueTail++;
        }
    }
    return null;
}
// Legacy fallback for very large grids
function findNearestRoadLegacy(gridData, gridSizeValue, buildingX, buildingY) {
    const queue = [
        {
            x: buildingX,
            y: buildingY,
            dist: 0
        }
    ];
    const visited = new Set(); // PERF: Use numeric keys
    visited.add(buildingY * gridSizeValue + buildingX);
    while(queue.length > 0){
        const current = queue.shift();
        if (current.dist > 20) break;
        for(let d = 0; d < 8; d++){
            const nx = current.x + ADJ_DX[d];
            const ny = current.y + ADJ_DY[d];
            if (nx < 0 || ny < 0 || nx >= gridSizeValue || ny >= gridSizeValue) continue;
            const key = ny * gridSizeValue + nx;
            if (visited.has(key)) continue;
            visited.add(key);
            if (isRoadTile(gridData, gridSizeValue, nx, ny)) {
                return {
                    x: nx,
                    y: ny
                };
            }
            queue.push({
                x: nx,
                y: ny,
                dist: current.dist + 1
            });
        }
    }
    return null;
}
function findPathOnRoads(gridData, gridSizeValue, startX, startY, targetX, targetY) {
    // Find the nearest road tile to the target (since buildings aren't on roads)
    const targetRoad = findNearestRoadToBuilding(gridData, gridSizeValue, targetX, targetY);
    if (!targetRoad) return null;
    // Find the nearest road tile to the start (station)
    const startRoad = findNearestRoadToBuilding(gridData, gridSizeValue, startX, startY);
    if (!startRoad) return null;
    // If start and target roads are the same, return a simple path
    if (startRoad.x === targetRoad.x && startRoad.y === targetRoad.y) {
        return [
            {
                x: startRoad.x,
                y: startRoad.y
            }
        ];
    }
    // PERF: Clear visited array only for the area we need (faster than full clear)
    // Using numeric keys: index = y * gridSize + x
    const maxIdx = gridSizeValue * gridSizeValue;
    if (maxIdx > BFS_VISITED.length) {
        // Fallback to old method for very large grids
        return findPathOnRoadsLegacy(gridData, gridSizeValue, startRoad, targetRoad);
    }
    // Clear visited (only the portion we'll use)
    for(let i = 0; i < maxIdx; i++){
        BFS_VISITED[i] = 0;
    }
    // BFS using pre-allocated arrays
    let queueHead = 0;
    let queueTail = 1;
    BFS_QUEUE_X[0] = startRoad.x;
    BFS_QUEUE_Y[0] = startRoad.y;
    BFS_PARENT_X[0] = -1; // -1 indicates start node
    BFS_PARENT_Y[0] = -1;
    BFS_VISITED[startRoad.y * gridSizeValue + startRoad.x] = 1;
    // Direction offsets
    const DX = [
        -1,
        1,
        0,
        0
    ];
    const DY = [
        0,
        0,
        -1,
        1
    ];
    let foundIdx = -1;
    while(queueHead < queueTail && queueTail < MAX_PATH_LENGTH){
        const cx = BFS_QUEUE_X[queueHead];
        const cy = BFS_QUEUE_Y[queueHead];
        const currentIdx = queueHead;
        queueHead++;
        // Check if we reached the target road
        if (cx === targetRoad.x && cy === targetRoad.y) {
            foundIdx = currentIdx;
            break;
        }
        for(let d = 0; d < 4; d++){
            const nx = cx + DX[d];
            const ny = cy + DY[d];
            if (nx < 0 || ny < 0 || nx >= gridSizeValue || ny >= gridSizeValue) continue;
            const visitedIdx = ny * gridSizeValue + nx;
            if (BFS_VISITED[visitedIdx]) continue;
            if (!isRoadTile(gridData, gridSizeValue, nx, ny)) continue;
            BFS_VISITED[visitedIdx] = 1;
            BFS_QUEUE_X[queueTail] = nx;
            BFS_QUEUE_Y[queueTail] = ny;
            BFS_PARENT_X[queueTail] = cx;
            BFS_PARENT_Y[queueTail] = cy;
            queueTail++;
        }
    }
    if (foundIdx === -1) return null;
    // Reconstruct path by walking back through parents
    const pathReverse = [];
    let idx = foundIdx;
    // Walk back through the BFS tree to reconstruct path
    while(idx >= 0){
        pathReverse.push({
            x: BFS_QUEUE_X[idx],
            y: BFS_QUEUE_Y[idx]
        });
        // Find parent index by searching queue
        const px = BFS_PARENT_X[idx];
        const py = BFS_PARENT_Y[idx];
        if (px === -1) break; // Reached start
        // Search backwards for parent position in queue
        let parentIdx = -1;
        for(let i = idx - 1; i >= 0; i--){
            if (BFS_QUEUE_X[i] === px && BFS_QUEUE_Y[i] === py) {
                parentIdx = i;
                break;
            }
        }
        idx = parentIdx;
    }
    // Reverse to get path from start to target
    return pathReverse.reverse();
}
// Legacy implementation for very large grids (fallback)
function findPathOnRoadsLegacy(gridData, gridSizeValue, startRoad, targetRoad) {
    const queue = [
        {
            x: startRoad.x,
            y: startRoad.y,
            path: [
                {
                    x: startRoad.x,
                    y: startRoad.y
                }
            ]
        }
    ];
    const visited = new Set();
    visited.add(`${startRoad.x},${startRoad.y}`);
    const directions = [
        {
            dx: -1,
            dy: 0
        },
        {
            dx: 1,
            dy: 0
        },
        {
            dx: 0,
            dy: -1
        },
        {
            dx: 0,
            dy: 1
        }
    ];
    while(queue.length > 0){
        const current = queue.shift();
        if (current.x === targetRoad.x && current.y === targetRoad.y) {
            return current.path;
        }
        for (const { dx, dy } of directions){
            const nx = current.x + dx;
            const ny = current.y + dy;
            const key = `${nx},${ny}`;
            if (nx < 0 || ny < 0 || nx >= gridSizeValue || ny >= gridSizeValue) continue;
            if (visited.has(key)) continue;
            if (!isRoadTile(gridData, gridSizeValue, nx, ny)) continue;
            visited.add(key);
            queue.push({
                x: nx,
                y: ny,
                path: [
                    ...current.path,
                    {
                        x: nx,
                        y: ny
                    }
                ]
            });
        }
    }
    return null;
}
function getDirectionToTile(fromX, fromY, toX, toY) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    if (dx === -1 && dy === 0) return 'north';
    if (dx === 1 && dy === 0) return 'south';
    if (dx === 0 && dy === -1) return 'east';
    if (dx === 0 && dy === 1) return 'west';
    return null;
}
function gridToScreen(x, y, offsetX, offsetY) {
    const screenX = (x - y) * (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2) + offsetX;
    const screenY = (x + y) * (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2) + offsetY;
    return {
        screenX,
        screenY
    };
}
function screenToGrid(screenX, screenY, offsetX, offsetY) {
    // Adjust for the fact that tile centers are offset by half a tile from gridToScreen coordinates
    // gridToScreen returns the top-left corner of the bounding box, but the visual center of the
    // diamond tile is at (screenX + TILE_WIDTH/2, screenY + TILE_HEIGHT/2)
    const adjustedX = screenX - offsetX - __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
    const adjustedY = screenY - offsetY - __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2;
    const gridX = (adjustedX / (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2) + adjustedY / (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2)) / 2;
    const gridY = (adjustedY / (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2) - adjustedX / (__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2)) / 2;
    // Use Math.round for accurate tile selection - this gives us the tile whose center is closest
    return {
        gridX: Math.round(gridX),
        gridY: Math.round(gridY)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RoomPlanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPlanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/isometric-city/src/components/game/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/isometric-city/src/components/game/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
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
const ROOM_COLORS = {
    bedroom: {
        fill: 'rgba(86, 140, 214, 0.65)',
        label: 'rgba(86, 140, 214, 0.9)'
    },
    living_room: {
        fill: 'rgba(120, 201, 172, 0.6)',
        label: 'rgba(120, 201, 172, 0.9)'
    },
    kitchen: {
        fill: 'rgba(242, 192, 107, 0.7)',
        label: 'rgba(242, 192, 107, 0.95)'
    },
    bathroom: {
        fill: 'rgba(109, 178, 207, 0.65)',
        label: 'rgba(109, 178, 207, 0.95)'
    },
    hallway: {
        fill: 'rgba(195, 164, 122, 0.6)',
        label: 'rgba(195, 164, 122, 0.9)'
    },
    office: {
        fill: 'rgba(135, 206, 125, 0.6)',
        label: 'rgba(135, 206, 125, 0.9)'
    }
};
const MOCK_ROOMS = [
    {
        type: 'living_room',
        label: 'Living Room',
        x: 0,
        y: 0,
        w: 5,
        h: 4
    },
    {
        type: 'kitchen',
        label: 'Kitchen',
        x: 5,
        y: 0,
        w: 3,
        h: 3
    },
    {
        type: 'hallway',
        label: 'Hallway',
        x: 8,
        y: 0,
        w: 4,
        h: 8
    },
    {
        type: 'bedroom',
        label: 'Bedroom',
        x: 0,
        y: 4,
        w: 5,
        h: 4
    },
    {
        type: 'bathroom',
        label: 'Bath',
        x: 5,
        y: 3,
        w: 3,
        h: 2
    },
    {
        type: 'office',
        label: 'Office',
        x: 5,
        y: 5,
        w: 3,
        h: 3
    }
];
function createFloor(width, height) {
    return Array.from({
        length: height
    }, ()=>Array.from({
            length: width
        }, ()=>true));
}
function findRoomAt(rooms, x, y) {
    for (const room of rooms){
        if (x >= room.x && x < room.x + room.w && y >= room.y && y < room.y + room.h) {
            return room;
        }
    }
    return null;
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
    _s();
    const isoCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RoomPlanner.useState": ()=>createFloor(DEFAULT_WIDTH, DEFAULT_HEIGHT)
    }["RoomPlanner.useState"]);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RoomPlanner.useState": ()=>[
                buildItem('sofa', 2, 2, 0),
                buildItem('table', 5, 3, 0),
                buildItem('bed', 7, 2, 0),
                buildItem('plant', 1, 5, 0)
            ]
    }["RoomPlanner.useState"]);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('floor');
    const [activeFurniture, setActiveFurniture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sofa');
    const [rotation, setRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Drag furniture in the isometric view to move it.');
    const [selectedItemId, setSelectedItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "RoomPlanner.useState": ()=>MOCK_ROOMS
    }["RoomPlanner.useState"]);
    const gridWidth = grid[0]?.length ?? 0;
    const gridHeight = grid.length;
    const roomCount = rooms.length;
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPlanner.useCallback[handleDownload]": ()=>{
            const canvas = isoCanvasRef.current;
            if (!canvas) return;
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'iso-room.png';
            link.href = url;
            link.click();
        }
    }["RoomPlanner.useCallback[handleDownload]"], []);
    const occupancy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RoomPlanner.useMemo[occupancy]": ()=>{
            const map = new Map();
            for (const item of items){
                for (const cell of itemCells(item)){
                    map.set(`${cell.x},${cell.y}`, item.type);
                }
            }
            return map;
        }
    }["RoomPlanner.useMemo[occupancy]"], [
        items
    ]);
    const handleCellClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPlanner.useCallback[handleCellClick]": (x, y)=>{
            if (tool === 'floor' || tool === 'erase') {
                setGrid({
                    "RoomPlanner.useCallback[handleCellClick]": (prev)=>{
                        const next = prev.map({
                            "RoomPlanner.useCallback[handleCellClick].next": (row, rowIndex)=>row.map({
                                    "RoomPlanner.useCallback[handleCellClick].next": (cell, colIndex)=>{
                                        if (rowIndex !== y || colIndex !== x) return cell;
                                        return tool === 'floor';
                                    }
                                }["RoomPlanner.useCallback[handleCellClick].next"])
                        }["RoomPlanner.useCallback[handleCellClick].next"]);
                        setItems({
                            "RoomPlanner.useCallback[handleCellClick]": (current)=>sanitizeItems(next, current)
                        }["RoomPlanner.useCallback[handleCellClick]"]);
                        return next;
                    }
                }["RoomPlanner.useCallback[handleCellClick]"]);
                return;
            }
            if (tool === 'furniture') {
                const candidate = buildItem(activeFurniture, x, y, rotation);
                if (canPlaceItem(grid, items, candidate)) {
                    setItems({
                        "RoomPlanner.useCallback[handleCellClick]": (prev)=>[
                                ...prev,
                                candidate
                            ]
                    }["RoomPlanner.useCallback[handleCellClick]"]);
                    setSelectedItemId(candidate.id);
                    setStatus('Placed furniture. Drag to move.');
                } else {
                    setStatus('Cannot place there. Try another tile.');
                }
            }
        }
    }["RoomPlanner.useCallback[handleCellClick]"], [
        activeFurniture,
        grid,
        items,
        rotation,
        tool
    ]);
    const resetScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPlanner.useCallback[resetScene]": ()=>{
            const nextGrid = createFloor(DEFAULT_WIDTH, DEFAULT_HEIGHT);
            setGrid(nextGrid);
            setItems([
                buildItem('sofa', 2, 2, 0),
                buildItem('table', 5, 3, 0),
                buildItem('bed', 7, 2, 0),
                buildItem('plant', 1, 5, 0)
            ]);
            setStatus('Reset to a clean, playable scene.');
        }
    }["RoomPlanner.useCallback[resetScene]"], []);
    const clearFurniture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoomPlanner.useCallback[clearFurniture]": ()=>{
            setItems([]);
            setSelectedItemId(null);
            setStatus('Cleared all furniture.');
        }
    }["RoomPlanner.useCallback[clearFurniture]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "planner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "canvas-layer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IsoRoomCanvas, {
                        grid: grid,
                        items: items,
                        rooms: rooms,
                        onMoveItem: (id, nextX, nextY)=>{
                            setItems((prev)=>prev.map((item)=>item.id === id ? {
                                        ...item,
                                        x: nextX,
                                        y: nextY
                                    } : item));
                        },
                        selectedItemId: selectedItemId,
                        onSelectItem: setSelectedItemId,
                        canvasRef: isoCanvasRef
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoomPlanner.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RoomPlanner.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hud",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hud-button",
                                    type: "button",
                                    children: "Pause"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "hud-button secondary",
                                    type: "button",
                                    children: "Play"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoomPlanner.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Floor Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tool-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `tool-button ${tool === 'floor' ? 'active' : ''}`,
                                                    onClick: ()=>setTool('floor'),
                                                    type: "button",
                                                    children: "Add Floor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `tool-button ${tool === 'erase' ? 'active' : ''}`,
                                                    onClick: ()=>setTool('erase'),
                                                    type: "button",
                                                    children: "Erase"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `tool-button ${tool === 'furniture' ? 'active' : ''}`,
                                                    onClick: ()=>setTool('furniture'),
                                                    type: "button",
                                                    children: "Place Furniture"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "furniture-list",
                                            children: Object.entries(FURNITURE_CATALOG).map(([key, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `furniture-card ${activeFurniture === key ? 'active' : ''}`,
                                                    onClick: ()=>{
                                                        setActiveFurniture(key);
                                                        setTool('furniture');
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "furniture-swatch",
                                                            style: {
                                                                background: data.swatch
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: data.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "note",
                                                            children: [
                                                                data.w,
                                                                "x",
                                                                data.h,
                                                                " tiles"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tool-row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "tool-button",
                                                onClick: ()=>setRotation((prev)=>prev === 0 ? 90 : 0),
                                                type: "button",
                                                children: [
                                                    "Rotate ",
                                                    rotation === 0 ? '0°' : '90°'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid",
                                            style: {
                                                gridTemplateColumns: `repeat(${gridWidth}, 24px)`
                                            },
                                            children: grid.map((row, y)=>row.map((cell, x)=>{
                                                    const key = `${x},${y}`;
                                                    const itemType = occupancy.get(key);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        lineNumber: 385,
                                                        columnNumber: 23
                                                    }, this);
                                                }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "legend",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            style: {
                                                                background: 'rgba(108, 212, 197, 0.6)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 405,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Floor"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            style: {
                                                                background: 'rgba(224, 122, 95, 0.5)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Empty"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            style: {
                                                                background: 'var(--accent)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Furniture"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hud-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "action-button primary",
                                                    onClick: resetScene,
                                                    type: "button",
                                                    children: "Reset Scene"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "action-button",
                                                    onClick: clearFurniture,
                                                    type: "button",
                                                    children: "Clear Furniture"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "action-button primary",
                                                    onClick: handleDownload,
                                                    type: "button",
                                                    children: "Download PNG"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "status",
                                            children: [
                                                status,
                                                " Rooms: ",
                                                roomCount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "note",
                                            children: "Tip: click any tile while in Place Furniture mode to drop items. Drag items around in the isometric view."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoomPlanner.tsx",
                                            lineNumber: 419,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoomPlanner.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoomPlanner.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hud-bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hud-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hud-title",
                                        children: "Iso Room Planner"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Rooms: ",
                                            roomCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoomPlanner.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoomPlanner.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoomPlanner.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoomPlanner.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RoomPlanner.tsx",
            lineNumber: 294,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(RoomPlanner, "sttdeASukmXKdqRqBpOjuXwqLvg=");
_c = RoomPlanner;
function IsoRoomCanvas({ grid, items, rooms, onMoveItem, selectedItemId, onSelectItem, canvasRef }) {
    _s1();
    const internalCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resolvedCanvasRef = canvasRef ?? internalCanvasRef;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [panOffset, setPanOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [canvasSize, setCanvasSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 600,
        height: 520
    });
    const gridWidth = grid[0]?.length ?? 0;
    const gridHeight = grid.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IsoRoomCanvas.useEffect": ()=>{
            if (!containerRef.current) return;
            const observer = new ResizeObserver({
                "IsoRoomCanvas.useEffect": (entries)=>{
                    for (const entry of entries){
                        const { width, height } = entry.contentRect;
                        setCanvasSize({
                            width,
                            height
                        });
                    }
                }
            }["IsoRoomCanvas.useEffect"]);
            observer.observe(containerRef.current);
            return ({
                "IsoRoomCanvas.useEffect": ()=>observer.disconnect()
            })["IsoRoomCanvas.useEffect"];
        }
    }["IsoRoomCanvas.useEffect"], []);
    const drawScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IsoRoomCanvas.useCallback[drawScene]": ()=>{
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(0, 0, 0, 0),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(gridWidth - 1, 0, 0, 0),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(0, gridHeight - 1, 0, 0),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(gridWidth - 1, gridHeight - 1, 0, 0)
            ];
            const minX = Math.min(...corners.map({
                "IsoRoomCanvas.useCallback[drawScene].minX": (c)=>c.screenX
            }["IsoRoomCanvas.useCallback[drawScene].minX"]));
            const maxX = Math.max(...corners.map({
                "IsoRoomCanvas.useCallback[drawScene].maxX": (c)=>c.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"]
            }["IsoRoomCanvas.useCallback[drawScene].maxX"]));
            const minY = Math.min(...corners.map({
                "IsoRoomCanvas.useCallback[drawScene].minY": (c)=>c.screenY
            }["IsoRoomCanvas.useCallback[drawScene].minY"]));
            const maxY = Math.max(...corners.map({
                "IsoRoomCanvas.useCallback[drawScene].maxY": (c)=>c.screenY + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] + wallHeight
            }["IsoRoomCanvas.useCallback[drawScene].maxY"]));
            const roomWidth = maxX - minX;
            const roomHeight = maxY - minY;
            const offsetX = (canvasSize.width - roomWidth) / 2 - minX + panOffset.x;
            const offsetY = (canvasSize.height - roomHeight) / 2 - minY + 24 + panOffset.y;
            offsetRef.current = {
                x: offsetX,
                y: offsetY
            };
            const drawDiamond = {
                "IsoRoomCanvas.useCallback[drawScene].drawDiamond": (x, y, fill, stroke)=>{
                    ctx.beginPath();
                    ctx.moveTo(x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, y);
                    ctx.lineTo(x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"], y + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                    ctx.lineTo(x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2, y + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"]);
                    ctx.lineTo(x, y + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2);
                    ctx.closePath();
                    ctx.fillStyle = fill;
                    ctx.fill();
                    if (stroke) {
                        ctx.strokeStyle = stroke;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }["IsoRoomCanvas.useCallback[drawScene].drawDiamond"];
            const drawLabelPill = {
                "IsoRoomCanvas.useCallback[drawScene].drawLabelPill": (x, y, text, color)=>{
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
                }
            }["IsoRoomCanvas.useCallback[drawScene].drawLabelPill"];
            const drawNorthWall = {
                "IsoRoomCanvas.useCallback[drawScene].drawNorthWall": (x, y)=>{
                    const baseLeft = {
                        x: x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                        y
                    };
                    const baseRight = {
                        x: x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"],
                        y: y + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
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
                }
            }["IsoRoomCanvas.useCallback[drawScene].drawNorthWall"];
            const drawWestWall = {
                "IsoRoomCanvas.useCallback[drawScene].drawWestWall": (x, y)=>{
                    const baseLeft = {
                        x,
                        y: y + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2
                    };
                    const baseRight = {
                        x: x + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
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
                }
            }["IsoRoomCanvas.useCallback[drawScene].drawWestWall"];
            for(let y = 0; y < gridHeight; y += 1){
                for(let x = 0; x < gridWidth; x += 1){
                    if (!isFloorTile(grid, x, y)) continue;
                    const room = findRoomAt(rooms, x, y);
                    const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(x, y, offsetX, offsetY);
                    const fill = room ? ROOM_COLORS[room.type].fill : 'rgba(55, 77, 95, 0.75)';
                    drawDiamond(screenX, screenY, fill, 'rgba(36, 55, 70, 0.8)');
                }
            }
            for(let y = 0; y < gridHeight; y += 1){
                for(let x = 0; x < gridWidth; x += 1){
                    if (!isFloorTile(grid, x, y)) continue;
                    const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(x, y, offsetX, offsetY);
                    if (!isFloorTile(grid, x, y - 1)) {
                        drawNorthWall(screenX, screenY);
                    }
                    if (!isFloorTile(grid, x - 1, y)) {
                        drawWestWall(screenX, screenY);
                    }
                }
            }
            for (const room of rooms){
                const centerX = room.x + room.w / 2;
                const centerY = room.y + room.h / 2;
                const { screenX, screenY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(centerX, centerY, offsetX, offsetY);
                const labelX = screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2;
                const labelY = screenY + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_HEIGHT"] / 2 - 18;
                drawLabelPill(labelX, labelY, room.label, ROOM_COLORS[room.type].label);
            }
            const sortedItems = [
                ...items
            ].sort({
                "IsoRoomCanvas.useCallback[drawScene].sortedItems": (a, b)=>a.x + a.y - (b.x + b.y)
            }["IsoRoomCanvas.useCallback[drawScene].sortedItems"]);
            for (const item of sortedItems){
                const palette = FURNITURE_CATALOG[item.type];
                const height = palette.height;
                const top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(item.x, item.y, offsetX, offsetY);
                const right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(item.x + item.w, item.y, offsetX, offsetY);
                const bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(item.x + item.w, item.y + item.h, offsetX, offsetY);
                const left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridToScreen"])(item.x, item.y + item.h, offsetX, offsetY);
                const topPoint = {
                    x: top.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                    y: top.screenY - height
                };
                const rightPoint = {
                    x: right.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                    y: right.screenY - height
                };
                const bottomPoint = {
                    x: bottom.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
                    y: bottom.screenY - height
                };
                const leftPoint = {
                    x: left.screenX + __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TILE_WIDTH"] / 2,
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
        }
    }["IsoRoomCanvas.useCallback[drawScene]"], [
        canvasSize,
        grid,
        gridHeight,
        gridWidth,
        items,
        rooms,
        selectedItemId,
        resolvedCanvasRef,
        panOffset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IsoRoomCanvas.useEffect": ()=>{
            drawScene();
        }
    }["IsoRoomCanvas.useEffect"], [
        drawScene
    ]);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IsoRoomCanvas.useCallback[handlePointerDown]": (event)=>{
            const canvas = resolvedCanvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const { gridX, gridY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenToGrid"])(x, y, offsetRef.current.x, offsetRef.current.y);
            const item = findItemAt(items, gridX, gridY);
            if (item) {
                dragRef.current = {
                    id: item.id,
                    offsetX: gridX - item.x,
                    offsetY: gridY - item.y
                };
                onSelectItem(item.id);
                panRef.current = null;
            } else {
                onSelectItem(null);
                panRef.current = {
                    startX: event.clientX,
                    startY: event.clientY,
                    baseX: panOffset.x,
                    baseY: panOffset.y
                };
            }
        }
    }["IsoRoomCanvas.useCallback[handlePointerDown]"], [
        items,
        onSelectItem,
        panOffset,
        resolvedCanvasRef
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IsoRoomCanvas.useCallback[handlePointerMove]": (event)=>{
            if (panRef.current) {
                const dx = event.clientX - panRef.current.startX;
                const dy = event.clientY - panRef.current.startY;
                setPanOffset({
                    x: panRef.current.baseX + dx,
                    y: panRef.current.baseY + dy
                });
                return;
            }
            if (!dragRef.current) return;
            const canvas = resolvedCanvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const { gridX, gridY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$isometric$2d$city$2f$src$2f$components$2f$game$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["screenToGrid"])(x, y, offsetRef.current.x, offsetRef.current.y);
            const active = items.find({
                "IsoRoomCanvas.useCallback[handlePointerMove].active": (item)=>item.id === dragRef.current?.id
            }["IsoRoomCanvas.useCallback[handlePointerMove].active"]);
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
        }
    }["IsoRoomCanvas.useCallback[handlePointerMove]"], [
        grid,
        gridHeight,
        gridWidth,
        items,
        onMoveItem,
        resolvedCanvasRef
    ]);
    const handlePointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "IsoRoomCanvas.useCallback[handlePointerUp]": ()=>{
            dragRef.current = null;
            panRef.current = null;
        }
    }["IsoRoomCanvas.useCallback[handlePointerUp]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "canvas-wrap",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: resolvedCanvasRef,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerLeave: handlePointerUp
        }, void 0, false, {
            fileName: "[project]/src/components/RoomPlanner.tsx",
            lineNumber: 725,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RoomPlanner.tsx",
        lineNumber: 724,
        columnNumber: 5
    }, this);
}
_s1(IsoRoomCanvas, "nBbUlqclV6IppGkhh4pH7Do/b14=");
_c1 = IsoRoomCanvas;
var _c, _c1;
__turbopack_context__.k.register(_c, "RoomPlanner");
__turbopack_context__.k.register(_c1, "IsoRoomCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoomPlanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoomPlanner.tsx [app-client] (ecmascript)");
'use client';
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoomPlanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a5c38b8b._.js.map