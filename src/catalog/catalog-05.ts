
export enum Catalog05 {
    IGV_1000 = '1000',
    ISC_2000 = '2000',
    EXPORTACION_9995 = '9995',
    GRATUITO_9996 = '9996',
    EXONERADO_9997 = '9997',
    INAFECTO_9998 = '9998',
    OTROS_CONCEPTOS_DE_PAGO_9999 = '9999',
}

export const CATALOG_05_ITEMS: { [key: string]: string } = {
    [Catalog05.IGV_1000]: 'IMPUESTO GENERAL A LAS VENTAS',
    [Catalog05.ISC_2000]: 'IMPUESTO SELECTIVO AL CONSUMO',
    [Catalog05.EXPORTACION_9995]: 'EXPORTACIÓN',
    [Catalog05.GRATUITO_9996]: 'GRATUITO',
    [Catalog05.EXONERADO_9997]: 'EXONERADO',
    [Catalog05.INAFECTO_9998]: 'INAFECTO',
    [Catalog05.OTROS_CONCEPTOS_DE_PAGO_9999]: 'OTROS CONCEPTOS DE PAGO',
};

export function validateCode(value: string) {
    return Object.values<string>(Catalog05).includes(value);
}

export function getName(value: string): string {
    return CATALOG_05_ITEMS[value];
}

export function getSQLCase(field: string) {
    var sql = `CASE ${field} `;
    for (let [key, value] of Object.entries(CATALOG_05_ITEMS)) {
        sql += `WHEN '${key}' THEN '${value}' `;
    }
    sql += `END`;

    return sql;
}