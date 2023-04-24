export enum Table25 {
  CONVENIO_00 = "00",
  CONVENIO_01 = "01",
  CONVENIO_02 = "02",
  CONVENIO_03 = "03",
  CONVENIO_04 = "04",
  CONVENIO_05 = "05",
  CONVENIO_06 = "06",
  CONVENIO_07 = "07",
  CONVENIO_08 = "08",
  CONVENIO_09 = "09",
}

export const TABLE_25_ITEMS: { [key: string]: string } = {
  [Table25.CONVENIO_00]: "NINGUNO",
  [Table25.CONVENIO_01]: "CANADA",
  [Table25.CONVENIO_02]: "CHILE",
  [Table25.CONVENIO_03]: "COMUNIDAD ANDINA DE NACIONES (CAN)",
  [Table25.CONVENIO_04]: "BRASIL",
  [Table25.CONVENIO_05]: "ESTADOS UNIDOS MEXICANOS",
  [Table25.CONVENIO_06]: "REPUBLICA DE COREA",
  [Table25.CONVENIO_07]: "CONFEDERACIÓN SUIZA",
  [Table25.CONVENIO_08]: "PORTUGAL",
  [Table25.CONVENIO_09]: "OTROS",
};


export function validateCode(convenio: string) {
  return Object.values<string>(Table25).includes(convenio);
}

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
