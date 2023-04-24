import validator from "validator";

export enum Table2 {
  ID_1 = "1",
  ID_4 = "4",
  ID_6 = "6",
  ID_7 = "7",
  ID_A = "A",
  ID_0 = "0",
}

export const TABLE_2_ITEMS: { [key: string]: string } = {
  [Table2.ID_1]: "DNI",
  [Table2.ID_4]: "Carnet de extranjería",
  [Table2.ID_6]: "RUC",
  [Table2.ID_7]: "Pasaporte",
  [Table2.ID_A]: "Cedula diplomática de identidad",
  [Table2.ID_0]: "Otro",
};

export function validateCode(code: string) {
  return Object.values<string>(Table2).includes(code + "");
}

export function validateNumber(code: string, number: string) {
  switch (code) {
    case Table2.ID_1:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 8, max: 8 })
      );
    case Table2.ID_4:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case Table2.ID_6:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 11, max: 11 })
      );
    case Table2.ID_7:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case Table2.ID_A:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case Table2.ID_0:
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
