export enum Catalog05UNECE5153 {
    VAT = 'VAT',
    EXC = 'EXC',
    FRE = 'FRE',
    OTH = 'OTH',
}

export const CATALOG_05_UNECE_5153_ITEMS: { [key: string]: string } = {
    [Catalog05UNECE5153.VAT]: 'IMPUESTO GENERAL A LAS VENTAS',
    [Catalog05UNECE5153.EXC]: 'IMPUESTO SELECTIVO AL CONSUMO',
    [Catalog05UNECE5153.FRE]: 'EXPORTACIÓN / GRATUITO / INAFECTO',
    [Catalog05UNECE5153.OTH]: 'OTROS CONCEPTOS DE PAGO',
};

export function validateCodeUNECE5153(value: string) {
    return Object.values<string>(Catalog05UNECE5153).includes(value);
}

export function getNameUNECE5153(value: string): string {
    return CATALOG_05_UNECE_5153_ITEMS[value];
}

export function getSQLCaseUNECE5153(field: string) {
    var sql = `CASE ${field} `;
    for (let [key, value] of Object.entries(CATALOG_05_UNECE_5153_ITEMS)) {
        sql += `WHEN '${key}' THEN '${value}' `;
    }
    sql += `END`;

    return sql;
}