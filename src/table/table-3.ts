export enum Table3 {
  BANK_01 = '01',
  BANK_02 = '02',
  BANK_03 = '03',
  BANK_05 = '05',
  BANK_07 = '07',
  BANK_08 = '08',
  BANK_09 = '09',
  BANK_11 = '11',
  BANK_12 = '12',
  BANK_16 = '16',
  BANK_18 = '18',
  BANK_22 = '22',
  BANK_23 = '23',
  BANK_25 = '25',
  BANK_26 = '26',
  BANK_29 = '29',
  BANK_35 = '35',
  BANK_37 = '37',
  BANK_38 = '38',
  BANK_39 = '39',
  BANK_40 = '40',
  BANK_41 = '41',
  BANK_42 = '42',
  BANK_43 = '43',
  BANK_44 = '44',
  BANK_45 = '45',
  BANK_46 = '46',
  BANK_47 = '47',
  BANK_48 = '48',
  BANK_49 = '49',
  BANK_50 = '50',
  BANK_51 = '51',
  BANK_53 = '53',
  BANK_54 = '54',
  BANK_55 = '55',
  BANK_56 = '56',
  BANK_58 = '58',
  BANK_99 = '99',
}

export const TABLE_3_ITEMS: { [key: string]: string } = {
  [Table3.BANK_01]: "CENTRAL RESERVA DEL PERU",
  [Table3.BANK_02]: "DE CREDITO DEL PERU",
  [Table3.BANK_03]: "INTERNACIONAL DEL PERU",
  [Table3.BANK_05]: "LATINO",
  [Table3.BANK_07]: "CITIBANK DEL PERU S.A.",
  [Table3.BANK_08]: "STANDARD CHARTERED",
  [Table3.BANK_09]: "SCOTIABANK PERU",
  [Table3.BANK_11]: "CONTINENTAL",
  [Table3.BANK_12]: "DE LIMA",
  [Table3.BANK_16]: "MERCANTIL",
  [Table3.BANK_18]: "NACION",
  [Table3.BANK_22]: "SANTANDER CENTRAL HISPANO",
  [Table3.BANK_23]: "DE COMERCIO",
  [Table3.BANK_25]: "REPUBLICA",
  [Table3.BANK_26]: "NBK BANK",
  [Table3.BANK_29]: "BANCOSUR",
  [Table3.BANK_35]: "FINANCIERO DEL PERU",
  [Table3.BANK_37]: "DEL PROGRESO",
  [Table3.BANK_38]: "INTERAMERICANO FINANZAS",
  [Table3.BANK_39]: "BANEX",
  [Table3.BANK_40]: "NUEVO MUNDO",
  [Table3.BANK_41]: "SUDAMERICANO",
  [Table3.BANK_42]: "DEL LIBERTADOR",
  [Table3.BANK_43]: "DEL TRABAJO",
  [Table3.BANK_44]: "SOLVENTA",
  [Table3.BANK_45]: "SERBANCO SA.",
  [Table3.BANK_46]: "BANK OF BOSTON",
  [Table3.BANK_47]: "ORION",
  [Table3.BANK_48]: "DEL PAIS",
  [Table3.BANK_49]: "MI BANCO",
  [Table3.BANK_50]: "BNP PARIBAS",
  [Table3.BANK_51]: "AGROBANCO",
  [Table3.BANK_53]: "HSBC BANK PERU S.A.",
  [Table3.BANK_54]: "BANCO FALABELLA S.A.",
  [Table3.BANK_55]: "BANCO RIPLEY",
  [Table3.BANK_56]: "BANCO SANTANDER PERU S.A.",
  [Table3.BANK_58]: "BANCO AZTECA DEL PERU",
  [Table3.BANK_99]: "OTROS",
};

export function validateCode(bank: string) {
  return Object.values<string>(Table3).includes(bank);
}

export function getName(value: string): string {
  return TABLE_3_ITEMS[value];
}

export function getSQLCase(field: string) {
  var sql = `CASE ${field} `;
  for (let [key, value] of Object.entries(TABLE_3_ITEMS)) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
