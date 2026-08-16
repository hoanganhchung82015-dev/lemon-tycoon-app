export const BUTTON_TYPES = {
  INCOME: { name: 'Income Sources', color: '#22c55e' },
  MANAGER: { name: 'Managers', color: '#06b6d4' },
  BOOST: { name: 'Boosts', color: '#eab308' },
  GLOBAL_BOOST: { name: 'Global Boosts', color: '#84cc16' },
  STRUCTURE: { name: 'Structures', color: '#f97316' },
  DECORATION: { name: 'Decorations', color: '#ef4444' },
  MINIGAME: { name: 'Minigames', color: '#d946ef' },
};

export const INITIAL_BUTTONS = [
  { id: 'stand', name: 'Lemon Stand', type: 'INCOME', cost: 15, income: 1, level: 0 },
  { id: 'mgr_stand', name: 'Manager Lemon Stand', type: 'MANAGER', cost: 100, targetId: 'stand', unlocked: false },
  { id: 'dash', name: 'LemonDash Express', type: 'INCOME', cost: 100, income: 8, level: 0 },
  { id: 'depot', name: 'Lemon Depot', type: 'INCOME', cost: 1100, income: 48, level: 0 },
  { id: 'ufo_rebirth', name: 'UFO Joe Alien Rebirth', type: 'GLOBAL_BOOST', cost: 50000, investors: 1 },
];
