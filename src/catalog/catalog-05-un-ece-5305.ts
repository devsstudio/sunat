export enum Catalog05UNECE5305 {
    S = 'S',
    G = 'G',
    Z = 'Z',
    E = 'E',
    O = 'O',
}

export const CATALOG_05_UNECE_5305_ITEMS: { [key: string]: string } = {
    [Catalog05UNECE5305.S]: 'Standard rate',
    [Catalog05UNECE5305.G]: 'Free export item, tax not charged',
    [Catalog05UNECE5305.Z]: 'Zero rated goods',
    [Catalog05UNECE5305.E]: 'Exempt from tax',
    [Catalog05UNECE5305.O]: 'Services outside scope of tax',
};

export function validateCodeUNECE5305(value: string) {
    return Object.values<string>(Catalog05UNECE5305).includes(value);
}

export function getNameUNECE5305(value: string): string {
    return CATALOG_05_UNECE_5305_ITEMS[value];
}

export function getSQLCaseUNECE5305(field: string) {
    var sql = `CASE ${field} `;
    for (let [key, value] of Object.entries(CATALOG_05_UNECE_5305_ITEMS)) {
        sql += `WHEN '${key}' THEN '${value}' `;
    }
    sql += `END`;

    return sql;
}
