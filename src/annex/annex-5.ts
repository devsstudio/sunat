import {
  PleFile,
  isSale,
  isPurchase,
  isSaleOrPurchase,
} from "../file/file";
import { Table11 } from "../table/table-11";
import validator from "validator";

export enum TicketType {
  TICKET_1 = '1',
  TICKET_2 = '2',
  TICKET_3 = '3',
  TICKET_4 = '4',
  TICKET_5 = '5',
}

export const TICKET_TYPES = {
  [TicketType.TICKET_1]: "Boleto Manual",
  [TicketType.TICKET_2]: "Boleto Automático",
  [TicketType.TICKET_3]: "Boleto Electrónico",
  [TicketType.TICKET_4]: "Otros",
  [TicketType.TICKET_5]: "Anulado",
};

export enum BvmeTicketType {
  BVME_1 = '1',
  BVME_2 = '2',
  BVME_5 = '5',
}


export const BVME_TICKET_TYPES = {
  [BvmeTicketType.BVME_1]: "Boleto Pre-Impreso",
  [BvmeTicketType.BVME_2]: "Boleto Electrónico",
  [BvmeTicketType.BVME_5]: "Anulado",
};

const _getRules = (): { [key: string]: any } => {
  return {
    "00": {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_2, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    "01": {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    "02": {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
    },
    "03": {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
    },
    "04": {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    "05": {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    "06": {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    "07": {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    "08": {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    "09": {
      sale: false,
      purchase: false,
    },
    10: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
    },
    11: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    12: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    13: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    14: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    15: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    16: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    17: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    18: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    19: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
    },
    20: {
      sale: false,
      purchase: false,
    },
    21: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
    },
    22: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
    },
    23: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    24: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    25: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    26: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    27: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    28: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    29: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    30: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    31: {
      sale: false,
      purchase: false,
    },
    32: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    33: {
      sale: false,
      purchase: false,
    },
    34: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    35: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    36: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    37: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    40: {
      sale: false,
      purchase: false,
    },
    41: {
      sale: false,
      purchase: false,
    },
    42: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    43: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    44: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
    },
    45: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
    },
    46: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    48: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    49: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
    },
    50: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    51: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    52: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    53: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    54: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    55: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    56: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    87: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    88: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    89: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
    },
    91: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
    },
    96: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
    },
    97: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
    },
    98: {
      sale: false,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
    },
  };
};

const _alphanumericStartWith = (
  value: string,
  startWith: string,
  min: number,
  max: number
) => {
  return (
    value.startsWith(startWith) &&
    validator.isAlphanumeric(value) &&
    validator.isLength(value, { min: min, max: max })
  );
};

export function validateDocumentCode(file_code: string, document_code: string) {
  const rules = _getRules();
  //Existe??
  if (rules[document_code]) {
    //SI existe buscados si es compra o venta
    if (isSale(file_code)) {
      return rules[document_code]["sale"] !== false;
    } else if (isPurchase(file_code)) {
      return rules[document_code]["purchase"] !== false;
    }
  }

  return false;
}

export function validateDocument(
  file_code: string,
  document_code: string,
  state: string
) {
  const rules = _getRules();
  //Existe??
  if (rules[document_code]) {
    //SI existe buscados si es compra o venta
    if (isSale(file_code)) {
      return (
        rules[document_code]["sale"] !== false &&
        rules[document_code]["sale"]["on"].includes(file_code) &&
        (state ? rules[document_code]["sale"]["states"].includes(state) : true)
      );
    } else if (isPurchase(file_code)) {
      return (
        rules[document_code]["purchase"] !== false &&
        rules[document_code]["purchase"]["on"].includes(file_code) &&
        (state
          ? rules[document_code]["purchase"]["states"].includes(state)
          : true)
      );
    }
  }

  return false;
}

export function validateSerie(
  file_code: string,
  document_code: string,
  document_serie: string,
  electronic: boolean = false
) {
  const ticketTypes = Object.values<string>(TicketType);
  const table11Values = Object.values<string>(Table11);
  const bvmeTicketTypes = Object.values<string>(BvmeTicketType);

  switch (document_code) {
    case "00":
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case "01":
      if (isSaleOrPurchase(file_code)) {
        if (electronic) {
          return (
            validator.isIn(document_serie, ["E001"]) ||
            _alphanumericStartWith(document_serie, "F", 4, 4)
          );
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      } else {
        return false;
      }
    case "02":
      if (isPurchase(file_code)) {
        if (electronic) {
          return validator.isIn(document_serie, ["E001"]);
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      } else {
        return false;
      }
    case "03":
      if (isSaleOrPurchase(file_code)) {
        if (electronic) {
          return (
            validator.isIn(document_serie, ["EB01"]) ||
            _alphanumericStartWith(document_serie, "B", 3, 3)
          );
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      } else {
        return false;
      }
    case "04":
      if (isSaleOrPurchase(file_code)) {
        if (electronic) {
          return validator.isIn(document_serie, ["E001"]);
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      } else {
        return false;
      }
    case "05":
      if (isSale(file_code)) {
        return validator.isIn(document_serie, ticketTypes);
      } else if (isPurchase(file_code)) {
        return (
          validator.isIn(document_serie, ticketTypes) &&
          !validator.isIn(document_serie, [5])
        );
      } else {
        return false;
      }
    case "06":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "07":
    case "08":
      if (isSaleOrPurchase(file_code)) {
        if (electronic) {
          return (
            validator.isIn(document_serie, ["E001", "EB01"]) ||
            _alphanumericStartWith(document_serie, "F", 3, 3) ||
            _alphanumericStartWith(document_serie, "B", 3, 3)
          );
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      } else {
        return false;
      }
    case "09":
      return !isSaleOrPurchase(file_code);
    case "10":
      if (isPurchase(file_code)) {
        return validator.isIn(document_serie, ["1683"]);
      } else {
        return false;
      }
    case "11":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "12":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "20":
      return !isSaleOrPurchase(file_code);
    case "21":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "22":
      if (isPurchase(file_code)) {
        return validator.isIn(document_serie, ["0820"]);
      } else {
        return false;
      }
    case "23":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "24":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "25":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "26":
    case "27":
    case "28":
    case "29":
    case "30":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "31":
      return !isSaleOrPurchase(file_code);
    case "32":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "33":
      return !isSaleOrPurchase(file_code);
    case "34":
    case "35":
    case "36":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "37":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "40":
    case "41":
      return !isSaleOrPurchase(file_code);
    case "42":
    case "43":
    case "44":
    case "45":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "46":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "48":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "49":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "50":
    case "51":
    case "52":
    case "53":
    case "54":
      if (isPurchase(file_code)) {
        return validator.isIn(document_serie, table11Values);
      } else {
        return false;
      }
    case "55":
      if (isSale(file_code)) {
        return validator.isIn(document_serie, bvmeTicketTypes);
      } else if (isPurchase(file_code)) {
        return (
          validator.isIn(document_serie, bvmeTicketTypes) &&
          !validator.isIn(document_serie, [5])
        );
      } else {
        return false;
      }
    case "56":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_serie, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "87":
    case "88":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    case "89":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_serie, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_serie, { min: 4, max: 4 })
        );
      } else {
        return false;
      }
    case "91":
    case "96":
    case "97":
    case "98":
      if (isPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
      } else {
        return false;
      }
    default:
      return false;
  }
}

export function validateCorrelative(
  file_code: string,
  document_code: string,
  document_correlative: string,
  electronic = false
) {
  switch (document_code) {
    case "00":
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case "01":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 8 })
        );
      } else {
        return false;
      }
    case "02":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "03":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 8 })
        );
      } else {
        return false;
      }
    case "04":
      if (isSaleOrPurchase(file_code)) {
        if (electronic) {
          return (
            validator.isInt(document_correlative, {
              gt: 0,
              allow_leading_zeroes: true,
            }) && validator.isLength(document_correlative, { min: 1, max: 8 })
          );
        } else {
          return (
            validator.isInt(document_correlative, {
              gt: 0,
              allow_leading_zeroes: true,
            }) && validator.isLength(document_correlative, { min: 1, max: 7 })
          );
        }
      } else {
        return false;
      }
    case "05":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 11 })
        );
      } else {
        return false;
      }
    case "06":
    case "07":
    case "08":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 8 })
        );
      } else {
        return false;
      }
    case "09":
      return !isSaleOrPurchase(file_code);
    case "10":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "11":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 15 })
        );
      } else {
        return false;
      }
    case "12":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "13":
    case "14":
    case "15":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      } else {
        return false;
      }
    case "16":
    case "17":
    case "18":
    case "19":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "20":
      return !isSaleOrPurchase(file_code);
    case "21":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      } else {
        return false;
      }
    case "22":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "23":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "24":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      } else {
        return false;
      }
    case "25":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "26":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      } else {
        return false;
      }
    case "27":
    case "28":
    case "29":
    case "30":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "31":
      return !isSaleOrPurchase(file_code);
    case "32":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "33":
      return !isSaleOrPurchase(file_code);
    case "34":
    case "35":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "36":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 8 })
        );
      } else {
        return false;
      }
    case "37":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "40":
    case "41":
      return !isSaleOrPurchase(file_code);
    case "42":
    case "43":
    case "44":
    case "45":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "46":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "48":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "49":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "50":
    case "51":
    case "52":
    case "53":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 6 })
        );
      } else {
        return false;
      }
    case "54":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "55":
    case "56":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 11 })
        );
      } else {
        return false;
      }
    case "87":
    case "88":
      if (isSaleOrPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      } else {
        return false;
      }
    case "89":
      if (isPurchase(file_code)) {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      } else {
        return false;
      }
    case "91":
    case "96":
    case "97":
    case "98":
      if (isPurchase(file_code)) {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      } else {
        return false;
      }
    default:
      return false;
  }
}

export function isElectronic(sunat_code: string, document_serie: string) {
  switch (sunat_code) {
    case "01":
      return (
        validator.isIn(document_serie, ["E001"]) ||
        _alphanumericStartWith(document_serie, "F", 4, 4)
      );
    case "02":
      return validator.isIn(document_serie, ["E001"]);
    case "03":
      return (
        validator.isIn(document_serie, ["EB01"]) ||
        _alphanumericStartWith(document_serie, "B", 4, 4)
      );
    case "04":
      return validator.isIn(document_serie, ["E001"]);
    case "07":
    case "08":
      return (
        validator.isIn(document_serie, ["E001", "EB01"]) ||
        _alphanumericStartWith(document_serie, "F", 4, 4) ||
        _alphanumericStartWith(document_serie, "B", 4, 4)
      );
    default:
      return false;
  }
}
