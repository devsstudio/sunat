import validator from "validator";

export const ID_1 = "1";
export const ID_4 = "4";
export const ID_6 = "6";
export const ID_7 = "7";
export const ID_A = "A";
export const ID_0 = "0";

export const TABLE_2_ITEMS: { [key: string]: string } = {
  [ID_1]: "DNI",
  [ID_4]: "Carnet de extranjería",
  [ID_6]: "RUC",
  [ID_7]: "Pasaporte",
  [ID_A]: "Cedula diplomática de identidad",
  [ID_0]: "Otro",
};

export function validateCode(code: string) {
  return [ID_1, ID_4, ID_6, ID_7, ID_A, ID_0].includes(code + "");
}

export function validateNumber(code: string, number: string) {
  switch (code) {
    case ID_1:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 8, max: 8 })
      );
    case ID_4:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case ID_6:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 11, max: 11 })
      );
    case ID_7:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case ID_A:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case ID_0:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 15 })
      );
    default:
      return false;
  }
}

export function getName(value: string): string {
  return TABLE_2_ITEMS[value];
}

export function getSQLCase(field: string) {
  var sql = `CASE ${field} `;
  for (let [key, value] of Object.entries(TABLE_2_ITEMS)) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
