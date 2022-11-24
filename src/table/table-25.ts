export const CONVENIO_00 = "00";
export const CONVENIO_01 = "01";
export const CONVENIO_02 = "02";
export const CONVENIO_03 = "03";
export const CONVENIO_04 = "04";
export const CONVENIO_05 = "05";
export const CONVENIO_06 = "06";
export const CONVENIO_07 = "07";
export const CONVENIO_08 = "08";
export const CONVENIO_09 = "09";

export const TABLE_25_ITEMS: { [key: string]: string } = {
  [CONVENIO_00]: "NINGUNO",
  [CONVENIO_01]: "CANADA",
  [CONVENIO_02]: "CHILE",
  [CONVENIO_03]: "COMUNIDAD ANDINA DE NACIONES (CAN)",
  [CONVENIO_04]: "BRASIL",
  [CONVENIO_05]: "ESTADOS UNIDOS MEXICANOS",
  [CONVENIO_06]: "REPUBLICA DE COREA",
  [CONVENIO_07]: "CONFEDERACIÓN SUIZA",
  [CONVENIO_08]: "PORTUGAL",
  [CONVENIO_09]: "OTROS",
};

export function getName(value: string): string {
  return TABLE_25_ITEMS[value];
}

export function getSQLCase(field: string) {
  var sql = `CASE ${field} `;
  for (let [key, value] of Object.entries(TABLE_25_ITEMS)) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
