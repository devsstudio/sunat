export enum Catalog51 {
  FACTURA_0101 = '0101',
  FACTURA_0102 = '0102',
  FACTURA_0103 = '0103',
  FACTURA_0104 = '0104',
  FACTURA_0105 = '0105',
  FACTURA_0106 = '0106',
  FACTURA_0107 = '0107',
  FACTURA_0108 = '0108',
  FACTURA_0110 = '0110',
  FACTURA_0111 = '0111',
}

export const CATALOG_51_ITEMS: { [key: string]: string } = {
  [Catalog51.FACTURA_0101]: 'Venta Interna',
  [Catalog51.FACTURA_0102]: 'Exportación',
  [Catalog51.FACTURA_0103]: 'No Domiciliados',
  [Catalog51.FACTURA_0104]: 'Venta Interna – Anticipos',
  [Catalog51.FACTURA_0105]: 'Venta Itinerante',
  [Catalog51.FACTURA_0106]: 'Factura Guía',
  [Catalog51.FACTURA_0107]: 'Venta Arroz Pilado',
  [Catalog51.FACTURA_0108]: 'Factura - Comprobante de Percepción',
  [Catalog51.FACTURA_0110]: 'Factura - Guía remitente',
  [Catalog51.FACTURA_0111]: 'Factura - Guía transportista',
};

export function validateCode(value: string) {
  return Object.values<string>(Catalog51).includes(value);
}

export function getName(value: string): string {
  return CATALOG_51_ITEMS[value];
}

export function getSQLCase(field: string) {
  var sql = `CASE ${field} `;
  for (let [key, value] of Object.entries(CATALOG_51_ITEMS)) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
