import { Shop } from './types';
import { foodDeliveryShops } from './foodDeliveryShops';
import { groceryShops } from './groceryShops';
import { pharmacyShops } from './pharmacyShops';
import { localFavoriteShops } from './localFavoriteShops';
import { healthyOptionShops } from './healthyOptionShops';
import { quickMealShops } from './quickMealShops';

export const shops: Shop[] = [
  ...foodDeliveryShops,
  ...groceryShops,
  ...pharmacyShops,
  ...localFavoriteShops,
  ...healthyOptionShops,
  ...quickMealShops
];