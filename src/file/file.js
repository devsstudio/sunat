export const PURCHASE_8 = "8";
export const SALE_14 = "14";
//Especificos del PLE
export const SALE_14_1 = "14.1";
export const SALE_14_2 = "14.2";
export const PURCHASE_8_1 = "8.1";
export const PURCHASE_8_2 = "8.2";
export const PURCHASE_8_3 = "8.3";

/**
 * Determina si un código de libro es venta
 * @param string file_code Código de libro
 * @return boolean
 */
export function isSale(file_code) {
  return [SALE_14, SALE_14_1, SALE_14_2].includes(file_code);
}

/**
 * Determina si un código de libro es compra
 * @param string file_code Código de libro
 * @return boolean
 */
export function isPurchase(file_code) {
  return [PURCHASE_8, PURCHASE_8_1, PURCHASE_8_2, PURCHASE_8_3].includes(
    file_code
  );
}

/**
 * Determina si un código de libro es venta o compra
 * @param string file_code Código de libro
 * @return boolean
 */
export function isSaleOrPurchase(file_code) {
  return [
    SALE_14,
    SALE_14_1,
    SALE_14_2,
    PURCHASE_8,
    PURCHASE_8_1,
    PURCHASE_8_2,
    PURCHASE_8_3,
  ].includes(file_code);
}
