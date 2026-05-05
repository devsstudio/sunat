
export enum Catalog07 {
    GRAVADO_OPERACION_ONEROSA_10 = '10',
    GRAVADO_RETIRO_POR_PREMIO_11 = '11',
    GRAVADO_RETIRO_POR_DONACION_12 = '12',
    GRAVADO_RETIRO_13 = '13',
    GRAVADO_RETIRO_POR_PUBLICIDAD_14 = '14',
    GRAVADO_BONIFICACIONES_15 = '15',
    GRAVADO_RETIRO_POR_ENTREGA_A_TRABAJADORES_16 = '16',
    GRAVADO_IVAP_17 = '17',
    EXONERADO_OPERACION_ONEROSA_20 = '20',
    EXONERADO_TRANSFERENCIA_GRATUITA_21 = '21',
    INAFECTO_OPERACION_ONEROSA_30 = '30',
    INAFECTO_RETIRO_POR_BONIFICACION_31 = '31',
    INAFECTO_RETIRO_32 = '32',
    INAFECTO_RETIRO_POR_MUESTRAS_MEDICAS_33 = '33',
    INAFECTO_RETIRO_POR_CONVENIO_COLECTIVO_34 = '34',
    INAFECTO_RETIRO_POR_PREMIO_35 = '35',
    INAFECTO_RETIRO_POR_PUBLICIDAD_36 = '36',
    EXPORTACION_40 = '40',
}

export const CATALOG_07_ITEMS: { [key: string]: string } = {
    [Catalog07.GRAVADO_OPERACION_ONEROSA_10]: 'Gravado - Operación Onerosa',
    [Catalog07.GRAVADO_RETIRO_POR_PREMIO_11]: 'Gravado – Retiro por premio',
    [Catalog07.GRAVADO_RETIRO_POR_DONACION_12]: 'Gravado – Retiro por donación',
    [Catalog07.GRAVADO_RETIRO_13]: 'Gravado – Retiro',
    [Catalog07.GRAVADO_RETIRO_POR_PUBLICIDAD_14]: 'Gravado – Retiro por publicidad',
    [Catalog07.GRAVADO_BONIFICACIONES_15]: 'Gravado – Bonificaciones',
    [Catalog07.GRAVADO_RETIRO_POR_ENTREGA_A_TRABAJADORES_16]: 'Gravado – Retiro por entrega a trabajadores',
    [Catalog07.GRAVADO_IVAP_17]: 'Gravado – IVAP',
    [Catalog07.EXONERADO_OPERACION_ONEROSA_20]: 'Exonerado - Operación Onerosa',
    [Catalog07.EXONERADO_TRANSFERENCIA_GRATUITA_21]: 'Exonerado – Transferencia Gratuita',
    [Catalog07.INAFECTO_OPERACION_ONEROSA_30]: 'Inafecto - Operación Onerosa',
    [Catalog07.INAFECTO_RETIRO_POR_BONIFICACION_31]: 'Inafecto – Retiro por Bonificación',
    [Catalog07.INAFECTO_RETIRO_32]: 'Inafecto – Retiro',
    [Catalog07.INAFECTO_RETIRO_POR_MUESTRAS_MEDICAS_33]: 'Inafecto – Retiro por Muestras Médicas',
    [Catalog07.INAFECTO_RETIRO_POR_CONVENIO_COLECTIVO_34]: 'Inafecto - Retiro por Convenio Colectivo',
    [Catalog07.INAFECTO_RETIRO_POR_PREMIO_35]: 'Inafecto – Retiro por premio',
    [Catalog07.INAFECTO_RETIRO_POR_PUBLICIDAD_36]: 'Inafecto - Retiro por publicidad',
    [Catalog07.EXPORTACION_40]: 'Exportación',
};

export function validateCode(value: string) {
    return Object.values<string>(Catalog07).includes(value);
}

export function getName(value: string): string {
    return CATALOG_07_ITEMS[value];
}

export function getSQLCase(field: string) {
    var sql = `CASE ${field} `;
    for (let [key, value] of Object.entries(CATALOG_07_ITEMS)) {
        sql += `WHEN '${key}' THEN '${value}' `;
    }
    sql += `END`;

    return sql;
}
