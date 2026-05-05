export enum Catalog16 {
    PRECIO_UNITARIO_INCLUYE_IGV_01 = '01',
    VALOR_REFERENCIAL_UNITARIO_NO_ONEROSAS_02 = '02',
}

export const CATALOG_16_ITEMS: { [key: string]: string } = {
    [Catalog16.PRECIO_UNITARIO_INCLUYE_IGV_01]: 'Precio unitario (incluye el IGV)',
    [Catalog16.VALOR_REFERENCIAL_UNITARIO_NO_ONEROSAS_02]:
        'Valor referencial unitario en operaciones no onerosas',
};

export function validateCode(value: string) {
    return Object.values<string>(Catalog16).includes(value);
}

export function getName(value: string): string {
    return CATALOG_16_ITEMS[value];
}

export function getSQLCase(field: string) {
    var sql = `CASE ${field} `;
    for (let [key, value] of Object.entries(CATALOG_16_ITEMS)) {
        sql += `WHEN '${key}' THEN '${value}' `;
    }
    sql += `END`;

    return sql;
}