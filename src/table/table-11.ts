export const ADUANA_019 = "019";
export const ADUANA_028 = "028";
export const ADUANA_046 = "046";
export const ADUANA_055 = "055";
export const ADUANA_082 = "082";
export const ADUANA_091 = "091";
export const ADUANA_118 = "118";
export const ADUANA_127 = "127";
export const ADUANA_145 = "145";
export const ADUANA_154 = "154";
export const ADUANA_163 = "163";
export const ADUANA_172 = "172";
export const ADUANA_181 = "181";
export const ADUANA_190 = "190";
export const ADUANA_217 = "217";
export const ADUANA_226 = "226";
export const ADUANA_235 = "235";
export const ADUANA_244 = "244";
export const ADUANA_262 = "262";
export const ADUANA_271 = "271";
export const ADUANA_280 = "280";
export const ADUANA_299 = "299";
export const ADUANA_884 = "884";
export const ADUANA_893 = "893";
export const ADUANA_910 = "910";
export const ADUANA_929 = "929";
export const ADUANA_938 = "938";
export const ADUANA_947 = "947";
export const ADUANA_956 = "956";
export const ADUANA_965 = "965";

export const TABLE_11_ITEMS: { [key: string]: string } = {
  [ADUANA_019]: "TUMBES",
  [ADUANA_028]: "TALARA",
  [ADUANA_046]: "PAITA",
  [ADUANA_055]: "CHICLAYO",
  [ADUANA_082]: "SALAVERRY",
  [ADUANA_091]: "CHIMBOTE",
  [ADUANA_118]: "MARÍTIMA DEL CALLAO",
  [ADUANA_127]: "PISCO",
  [ADUANA_145]: "MOLLENDO MATARANI",
  [ADUANA_154]: "AREQUIPA",
  [ADUANA_163]: "ILO",
  [ADUANA_172]: "TACNA",
  [ADUANA_181]: "PUNO",
  [ADUANA_190]: "CUZCO",
  [ADUANA_217]: "PUCALLPA",
  [ADUANA_226]: "IQUITOS",
  [ADUANA_235]: "AÉREA DEL CALLAO",
  [ADUANA_244]: "POSTAL DE LIMA",
  [ADUANA_262]: "DESAGUADERO",
  [ADUANA_271]: "TARAPOTO",
  [ADUANA_280]: "PUERTO MALDONADO",
  [ADUANA_299]: "LA TINA",
  [ADUANA_884]: "DEPENDENCIA FERROVIARIA TACNA",
  [ADUANA_893]: "DEPENDENCIA POSTAL TACNA",
  [ADUANA_910]: "DEPENDENCIA POSTAL AREQUIPA",
  [ADUANA_929]: "COMPLEJO FRONTERIZO STA ROSA TACNA",
  [ADUANA_938]: "TERMINAL TERRESTRE TACNA",
  [ADUANA_947]: "AEROPUERTO TACNA",
  [ADUANA_956]: "CETICOS TACNA",
  [ADUANA_965]: "DEPENDENCIA POSTAL DE SALAVERRY",
};

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
