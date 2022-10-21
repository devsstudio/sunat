var validator = require("validator");

export const DOC_1 = "1";
export const DOC_4 = "4";
export const DOC_6 = "6";
export const DOC_7 = "7";
export const DOC_A = "A";
export const DOC_0 = "0";

export function validateCode(code) {
  return [DOC_1, DOC_4, DOC_6, DOC_7, DOC_A, DOC_0].includes(code + "");
}

export function validateNumber(code, number) {
  switch (code) {
    case DOC_1:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 8, max: 8 })
      );
    case DOC_4:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case DOC_6:
      return (
        validator.isInt(number, { allow_leading_zeroes: true }) &&
        validator.isLength(number, { min: 11, max: 11 })
      );
    case DOC_7:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case DOC_A:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 12 })
      );
    case DOC_0:
      return (
        validator.isAlphanumeric(number) &&
        validator.isLength(number, { min: 1, max: 15 })
      );
    default:
      return false;
  }
}

export function getItems() {
  return {
    DOC_1: "DNI",
    DOC_4: "Carnet de extranjería",
    DOC_6: "RUC",
    DOC_7: "Pasaporte",
    DOC_A: "Cedula diplomática de identidad",
    DOC_0: "Otro",
  };
}

export function getName(value) {
  return getItems()[value];
}

export function getSQLCase(field) {
  var sql = `CASE ${field} `;
  for (let [key, value] of getItems()) {
    sql += `WHEN '${key}' THEN '${value}' `;
  }
  sql += `END`;

  return sql;
}
