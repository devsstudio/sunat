import {
  PleFile,
  isSale,
  isPurchase,
  isSaleOrPurchase,
} from "../file/file";
import { Table10 } from "../table/table-10";
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

export interface Annex5Rule {
  sale?: Annex5RuleCondition,
  purchase?: Annex5RuleCondition,
  other: Annex5RuleCondition,
}

export interface Annex5RuleCondition {
  on?: string[],
  states: number[],
}

//Reglas basadas en "Estructura del PLE.xls"

const _getRules = (): { [key: string]: Annex5Rule } => {
  return {
    [Table10.DOC_00]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_2, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_01]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_02]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_03]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_04]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_05]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_06]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_07]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_08]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_09]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_10]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_11]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_12]: {
      sale: {
        on: [PleFile.SALE_14_1, PleFile.SALE_14_2],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_13]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_14]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_15]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_16]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_17]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_18]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_19]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_20]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_21]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_22]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_23]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_24]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_25]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_26]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_27]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_28]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_29]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_30]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_31]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_32]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_33]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_34]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_35]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_36]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_37]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_40]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_41]: {
      sale: null,
      purchase: null,
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_42]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_43]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_44]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_45]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_46]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_48]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_49]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_50]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_51]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_52]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_53]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_54]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_55]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_56]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [0, 1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_87]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_88]: {
      sale: {
        on: [PleFile.SALE_14_1],
        states: [1, 2, 8, 9],
      },
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_89]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_91]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_96]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_1, PleFile.PURCHASE_8_3],
        states: [0, 1, 6, 7, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_97]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
      },
    },
    [Table10.DOC_98]: {
      sale: null,
      purchase: {
        on: [PleFile.PURCHASE_8_2],
        states: [0, 9],
      },
      other: {
        states: [1, 8, 9],
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

export function validateDocumentCode(file_code: string, document_code: string): boolean {
  const rules = _getRules();
  //Existe??
  if (rules[document_code]) {
    //SI existe buscados si es compra o venta
    if (isSale(file_code)) {
      return rules[document_code].sale !== null;
    } else if (isPurchase(file_code)) {
      return rules[document_code].purchase !== null;
    } else {
      return true;
    }
  }

  return false;
}

export function validateDocument(
  file_code: string,
  document_code: string,
  state: number
): boolean {
  const rules = _getRules();
  //Existe??
  if (rules[document_code]) {
    //SI existe buscados si es compra o venta
    if (isSale(file_code)) {
      return (
        rules[document_code].sale &&
        rules[document_code].sale.on.includes(file_code) &&
        rules[document_code].sale.states.includes(state)
      );
    } else if (isPurchase(file_code)) {
      return (
        rules[document_code].purchase &&
        rules[document_code].purchase.on.includes(file_code) &&
        rules[document_code].purchase.states.includes(state)
      );
    } else {
      return rules[document_code].other.states.includes(state)
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
    case Table10.DOC_00:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_01:
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
    case Table10.DOC_02:
      if (isSale(file_code)) {
        return false;
      } else {
        if (electronic) {
          return validator.isIn(document_serie, ["E001"]);
        } else {
          return (
            validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
            validator.isLength(document_serie, { min: 4, max: 4 })
          );
        }
      }
    case Table10.DOC_03:
      if (electronic) {
        return (
          validator.isIn(document_serie, ["EB01"]) ||
          _alphanumericStartWith(document_serie, "B", 4, 4)
        );
      } else {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      }
    case Table10.DOC_04:
      if (electronic) {
        return validator.isIn(document_serie, ["E001"]);
      } else {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      }
    case Table10.DOC_05:
      return validator.isIn(document_serie, ticketTypes);
    case Table10.DOC_06:
      return (
        validator.isInt(document_serie, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_07:
    case Table10.DOC_08:
      if (electronic) {
        return (
          validator.isIn(document_serie, ["E001", "EB01"]) ||
          _alphanumericStartWith(document_serie, "F", 4, 4) ||
          _alphanumericStartWith(document_serie, "B", 4, 4)
        );
      } else {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      }
    case Table10.DOC_09:
      if (isSaleOrPurchase(file_code)) {
        return false;
      } else {
        return validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
      }
    case Table10.DOC_10:
      if (isSale(file_code)) {
        return false;
      } else {
        return validator.isIn(document_serie, ["1683"]);
      }
    case Table10.DOC_11:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_12:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 1, max: 20 })
      );
    case Table10.DOC_13:
    case Table10.DOC_14:
    case Table10.DOC_15:
    case Table10.DOC_16:
    case Table10.DOC_17:
    case Table10.DOC_18:
    case Table10.DOC_19:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_20:
      if (isSaleOrPurchase(file_code)) {
        return false;
      } else {
        return validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
      }
    case Table10.DOC_21:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_22:
      if (isSale(file_code)) {
        return false;
      } else {
        return validator.isIn(document_serie, ["0820"]);
      }
    case Table10.DOC_23:
      return (
        validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
        validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_24:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_25:
      return (
        validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
        validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_26:
    case Table10.DOC_27:
    case Table10.DOC_28:
    case Table10.DOC_29:
    case Table10.DOC_30:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_31:
      if (isSaleOrPurchase(file_code)) {
        return false;
      } else {
        return validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
      }
    case Table10.DOC_32:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_33:
      if (isSaleOrPurchase(file_code)) {
        return false;
      } else {
        return validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
      }
    case Table10.DOC_34:
    case Table10.DOC_35:
    case Table10.DOC_36:
      return (
        validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
        validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_37:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_40:
    case Table10.DOC_41:
      if (isSaleOrPurchase(file_code)) {
        return false;
      } else {
        return validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
      }
    case Table10.DOC_42:
    case Table10.DOC_43:
    case Table10.DOC_44:
    case Table10.DOC_45:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_46:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_serie, { allow_leading_zeroes: true }) &&
          validator.isLength(document_serie, { min: 4, max: 4 })
        );
      }
    case Table10.DOC_48:
      return (
        validator.isInt(document_serie, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_49:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_50:
    case Table10.DOC_51:
    case Table10.DOC_52:
    case Table10.DOC_53:
    case Table10.DOC_54:
      if (isSale(file_code)) {
        return false;
      } else {
        return validator.isIn(document_serie, table11Values);
      }
    case Table10.DOC_55:
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
    case Table10.DOC_56:
      return (
        validator.isInt(document_serie, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_serie, { min: 4, max: 4 })
      );
    case Table10.DOC_87:
    case Table10.DOC_88:
      return (
        validator.isAlphanumeric(document_serie) &&
        validator.isLength(document_serie, { min: 0, max: 20 })
      );
    case Table10.DOC_89:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_serie, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_serie, { min: 4, max: 4 })
        );
      }
    case Table10.DOC_91:
    case Table10.DOC_96:
    case Table10.DOC_97:
    case Table10.DOC_98:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isAlphanumeric(document_serie) &&
          validator.isLength(document_serie, { min: 0, max: 20 })
        );
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
    case Table10.DOC_00:
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_01:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 8 })
      );
    case Table10.DOC_02:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, {
            gt: 0,
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      }
    case Table10.DOC_03:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 8 })
      );
    case Table10.DOC_04:
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
    case Table10.DOC_05:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 11 })
      );
    case Table10.DOC_06:
    case Table10.DOC_07:
    case Table10.DOC_08:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 8 })
      );
    case Table10.DOC_09:
      return validator.isAlphanumeric(document_correlative) && validator.isLength(document_correlative, { min: 1, max: 8 })
    case Table10.DOC_10:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      }
    case Table10.DOC_11:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 15 })
      );
    case Table10.DOC_12:
      return (
        validator.isInt(document_correlative, {
          gt: 0,
          allow_leading_zeroes: true,
        }) && validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_13:
    case Table10.DOC_14:
    case Table10.DOC_15:
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 }) &&
        !/^0+$/.test(document_correlative)
      );
    case Table10.DOC_16:
    case Table10.DOC_17:
    case Table10.DOC_18:
    case Table10.DOC_19:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_20:
      return validator.isAlphanumeric(document_correlative) && validator.isLength(document_correlative, { min: 1, max: 8 })
    case Table10.DOC_21:
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 }) &&
        !/^0+$/.test(document_correlative)
      );
    case Table10.DOC_22:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      }
    case Table10.DOC_23:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 7 })
      );
    case Table10.DOC_24:
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 }) &&
        !/^0+$/.test(document_correlative)
      );
    case Table10.DOC_25:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 7 })
      );
    case Table10.DOC_26:
      return (
        validator.isAlphanumeric(document_correlative) &&
        validator.isLength(document_correlative, { min: 1, max: 20 }) &&
        !/^0+$/.test(document_correlative)
      );
    case Table10.DOC_27:
    case Table10.DOC_28:
    case Table10.DOC_29:
    case Table10.DOC_30:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_31:
      return validator.isAlphanumeric(document_correlative) && validator.isLength(document_correlative, { min: 1, max: 8 })
    case Table10.DOC_32:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_33:
      return validator.isAlphanumeric(document_correlative) && validator.isLength(document_correlative, { min: 1, max: 8 })
    case Table10.DOC_34:
    case Table10.DOC_35:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 7 })
      );
    case Table10.DOC_36:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 8 })
      );
    case Table10.DOC_37:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_40:
    case Table10.DOC_41:
      return validator.isAlphanumeric(document_correlative) && validator.isLength(document_correlative, { min: 1, max: 8 })
    case Table10.DOC_42:
    case Table10.DOC_43:
    case Table10.DOC_44:
    case Table10.DOC_45:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_46:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, {
            allow_leading_zeroes: true,
          }) && validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      }
    case Table10.DOC_48:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 7 })
      );
    case Table10.DOC_49:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_50:
    case Table10.DOC_51:
    case Table10.DOC_52:
    case Table10.DOC_53:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 6 })
        );
      }
    case Table10.DOC_54:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 20 })
        );
      }
    case Table10.DOC_55:
    case Table10.DOC_56:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 11 })
      );
    case Table10.DOC_87:
    case Table10.DOC_88:
      return (
        validator.isInt(document_correlative, { gt: 0 }) &&
        validator.isLength(document_correlative, { min: 1, max: 20 })
      );
    case Table10.DOC_89:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isInt(document_correlative, { gt: 0 }) &&
          validator.isLength(document_correlative, { min: 1, max: 7 })
        );
      }
    case Table10.DOC_91:
    case Table10.DOC_96:
    case Table10.DOC_97:
    case Table10.DOC_98:
      if (isSale(file_code)) {
        return false;
      } else {
        return (
          validator.isAlphanumeric(document_correlative) &&
          validator.isLength(document_correlative, { min: 1, max: 20 }) &&
          !/^0+$/.test(document_correlative)
        );
      }
    default:
      return false;
  }
}

export function isElectronic(sunat_code: string, document_serie: string) {
  switch (sunat_code) {
    case Table10.DOC_01:
      return (
        validator.isIn(document_serie, ["E001"]) ||
        _alphanumericStartWith(document_serie, "F", 4, 4)
      );
    case Table10.DOC_02:
      return validator.isIn(document_serie, ["E001"]);
    case Table10.DOC_03:
      return (
        validator.isIn(document_serie, ["EB01"]) ||
        _alphanumericStartWith(document_serie, "B", 4, 4)
      );
    case Table10.DOC_04:
      return validator.isIn(document_serie, ["E001"]);
    case Table10.DOC_07:
    case Table10.DOC_08:
      return (
        validator.isIn(document_serie, ["E001", "EB01"]) ||
        _alphanumericStartWith(document_serie, "F", 4, 4) ||
        _alphanumericStartWith(document_serie, "B", 4, 4)
      );
    default:
      return false;
  }
}
