export const CODE_8_1 = "080100";
export const CODE_8_2 = "080200";
export const CODE_8_3 = "080300";
export const CODE_14_1 = "140100";
export const CODE_14_2 = "140200";

export function getFilename(
  ruc: string,
  ple_code: string,
  year: number,
  period: number,
  has_content: boolean
): string {
  //01-02 Identificador fijo 'LE'
  var filename = "LE";
  //03-13 RUC
  filename += ruc;
  //14-17 AÑO
  filename += year.toString();
  //18-19 MES
  filename +=
    period == 0 || period == 13 ? "00" : period.toString().padStart(2, "0");
  //20-21 DIA (Sólo Inventarios y Balances)
  switch (ple_code) {
    default:
      filename += "00";
      break;
  }
  //22-27 Identificador del libro
  filename += ple_code;

  //28-29 DIA Código de oportunidad de presentación del EEFF (Sólo Inventarios y Balances)
  switch (ple_code) {
    default:
      filename += "00";
      break;
  }
  //30-30: Indicador de operaciones
  filename += "1";
  //31-31: Indicador del contenido del libro o registro
  filename += has_content ? "1" : "0";
  //32-32: MONEDA
  filename += "1";
  //33-33: Indicador de libro electrónico generado por el PLE
  filename += "1";

  filename += ".txt";

  return filename;
}
