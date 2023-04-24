export enum File {
  PURCHASE_8 = "8",
  SALE_14 = "14"
}

export enum PleFile {
  SALE_14_1 = "14.1",
  SALE_14_2 = "14.2",
  PURCHASE_8_1 = "8.1",
  PURCHASE_8_2 = "8.2",
  PURCHASE_8_3 = "8.3"
}

/**
 * Determina si un código de libro es venta
 * @param string file_code Código de libro
 * @return boolean
 */
export function isSale(file_code: string): boolean {
  return [File.SALE_14.toString(), PleFile.SALE_14_1.toString(), PleFile.SALE_14_2.toString()].includes(file_code);
}

/**
 * Determina si un código de libro es compra
 * @param string file_code Código de libro
 * @return boolean
 */
export function isPurchase(file_code: string): boolean {
  return [File.PURCHASE_8.toString(), PleFile.PURCHASE_8_1.toString(), PleFile.PURCHASE_8_2.toString(), PleFile.PURCHASE_8_3.toString()].includes(
    file_code
  );
}

/**
 * Determina si un código de libro es venta o compra
 * @param string file_code Código de libro
 * @return boolean
 */
export function isSaleOrPurchase(file_code: string): boolean {

  return Object.values<string>(File).includes(file_code) || Object.values<string>(PleFile).includes(file_code);
}
