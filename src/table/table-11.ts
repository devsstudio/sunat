export enum Table11 {
  ADUANA_019 = "019",
  ADUANA_028 = "028",
  ADUANA_046 = "046",
  ADUANA_055 = "055",
  ADUANA_082 = "082",
  ADUANA_091 = "091",
  ADUANA_118 = "118",
  ADUANA_127 = "127",
  ADUANA_145 = "145",
  ADUANA_154 = "154",
  ADUANA_163 = "163",
  ADUANA_172 = "172",
  ADUANA_181 = "181",
  ADUANA_190 = "190",
  ADUANA_217 = "217",
  ADUANA_226 = "226",
  ADUANA_235 = "235",
  ADUANA_244 = "244",
  ADUANA_262 = "262",
  ADUANA_271 = "271",
  ADUANA_280 = "280",
  ADUANA_299 = "299",
  ADUANA_884 = "884",
  ADUANA_893 = "893",
  ADUANA_910 = "910",
  ADUANA_929 = "929",
  ADUANA_938 = "938",
  ADUANA_947 = "947",
  ADUANA_956 = "956",
  ADUANA_965 = "965",
}

export const TABLE_11_ITEMS: { [key: string]: string } = {
  [Table11.ADUANA_019]: "TUMBES",
  [Table11.ADUANA_028]: "TALARA",
  [Table11.ADUANA_046]: "PAITA",
  [Table11.ADUANA_055]: "CHICLAYO",
  [Table11.ADUANA_082]: "SALAVERRY",
  [Table11.ADUANA_091]: "CHIMBOTE",
  [Table11.ADUANA_118]: "MARÍTIMA DEL CALLAO",
  [Table11.ADUANA_127]: "PISCO",
  [Table11.ADUANA_145]: "MOLLENDO MATARANI",
  [Table11.ADUANA_154]: "AREQUIPA",
  [Table11.ADUANA_163]: "ILO",
  [Table11.ADUANA_172]: "TACNA",
  [Table11.ADUANA_181]: "PUNO",
  [Table11.ADUANA_190]: "CUZCO",
  [Table11.ADUANA_217]: "PUCALLPA",
  [Table11.ADUANA_226]: "IQUITOS",
  [Table11.ADUANA_235]: "AÉREA DEL CALLAO",
  [Table11.ADUANA_244]: "POSTAL DE LIMA",
  [Table11.ADUANA_262]: "DESAGUADERO",
  [Table11.ADUANA_271]: "TARAPOTO",
  [Table11.ADUANA_280]: "PUERTO MALDONADO",
  [Table11.ADUANA_299]: "LA TINA",
  [Table11.ADUANA_884]: "DEPENDENCIA FERROVIARIA TACNA",
  [Table11.ADUANA_893]: "DEPENDENCIA POSTAL TACNA",
  [Table11.ADUANA_910]: "DEPENDENCIA POSTAL AREQUIPA",
  [Table11.ADUANA_929]: "COMPLEJO FRONTERIZO STA ROSA TACNA",
  [Table11.ADUANA_938]: "TERMINAL TERRESTRE TACNA",
  [Table11.ADUANA_947]: "AEROPUERTO TACNA",
  [Table11.ADUANA_956]: "CETICOS TACNA",
  [Table11.ADUANA_965]: "DEPENDENCIA POSTAL DE SALAVERRY",
};

export function validateCode(code: string) {
  return Object.values<string>(Table11).includes(code);
}

export function getName(value: string): string {
  return TABLE_11_ITEMS[value];
}

export function getSQLCase(field: string) {
  var sql = `CASE ${field} `;
  for (let [key, value] of Object.entries(TABLE_11_ITEMS)) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
