export interface Table13District {
    dist_name: string;
}

export interface Table13Province {
    prov_name: string;
    districts: { [dist_code: string]: Table13District }
}

export interface Table13Dept {
    dept_name: string;
    provinces: { [prov_code: string]: Table13Province }
}

export interface UbigeoDist {
    dist_code: string;
    dist_name: string;
}

export interface UbigeoProv {
    prov_code: string;
    prov_name: string;
}

export interface UbigeoDept {
    dept_code: string;
    dept_name: string;
}

export interface Ubigeo {
    ubigeo: string;
    dept_name: string;
    prov_name: string;
    dist_name: string;
}


export const ubigeos: { [dept_code: string]: Table13Dept } = {
    "01": {
        "dept_name": "AMAZONAS",
        "provinces": {
            "02": {
                "prov_name": "BAGUA",
                "districts": {
                    "02": {
                        "dist_name": "ARAMANGO"
                    },
                    "01": {
                        "dist_name": "BAGUA"
                    },
                    "03": {
                        "dist_name": "COPALLIN"
                    },
                    "04": {
                        "dist_name": "EL PARCO"
                    },
                    "05": {
                        "dist_name": "IMAZA"
                    },
                    "06": {
                        "dist_name": "LA PECA"
                    }
                }
            },
            "03": {
                "prov_name": "BONGARA",
                "districts": {
                    "02": {
                        "dist_name": "CHISQUILLA"
                    },
                    "03": {
                        "dist_name": "CHURUJA"
                    },
                    "04": {
                        "dist_name": "COROSHA"
                    },
                    "05": {
                        "dist_name": "CUISPES"
                    },
                    "06": {
                        "dist_name": "FLORIDA"
                    },
                    "07": {
                        "dist_name": "JAZAN"
                    },
                    "01": {
                        "dist_name": "JUMBILLA"
                    },
                    "08": {
                        "dist_name": "RECTA"
                    },
                    "09": {
                        "dist_name": "SAN CARLOS"
                    },
                    "10": {
                        "dist_name": "SHIPASBAMBA"
                    },
                    "11": {
                        "dist_name": "VALERA"
                    },
                    "12": {
                        "dist_name": "YAMBRASBAMBA"
                    }
                }
            },
            "01": {
                "prov_name": "CHACHAPOYAS",
                "districts": {
                    "02": {
                        "dist_name": "ASUNCION"
                    },
                    "03": {
                        "dist_name": "BALSAS"
                    },
                    "01": {
                        "dist_name": "CHACHAPOYAS"
                    },
                    "04": {
                        "dist_name": "CHETO"
                    },
                    "05": {
                        "dist_name": "CHILIQUIN"
                    },
                    "06": {
                        "dist_name": "CHUQUIBAMBA"
                    },
                    "07": {
                        "dist_name": "GRANADA"
                    },
                    "08": {
                        "dist_name": "HUANCAS"
                    },
                    "09": {
                        "dist_name": "LA JALCA"
                    },
                    "10": {
                        "dist_name": "LEIMEBAMBA"
                    },
                    "11": {
                        "dist_name": "LEVANTO"
                    },
                    "12": {
                        "dist_name": "MAGDALENA"
                    },
                    "13": {
                        "dist_name": "MARISCAL CASTILLA"
                    },
                    "14": {
                        "dist_name": "MOLINOPAMPA"
                    },
                    "15": {
                        "dist_name": "MONTEVIDEO"
                    },
                    "16": {
                        "dist_name": "OLLEROS"
                    },
                    "17": {
                        "dist_name": "QUINJALCA"
                    },
                    "18": {
                        "dist_name": "SAN FRANCISCO DE DAGUAS"
                    },
                    "19": {
                        "dist_name": "SAN ISIDRO DE MAINO"
                    },
                    "20": {
                        "dist_name": "SOLOCO"
                    },
                    "21": {
                        "dist_name": "SONCHE"
                    }
                }
            },
            "04": {
                "prov_name": "CONDORCANQUI",
                "districts": {
                    "02": {
                        "dist_name": "EL CENEPA"
                    },
                    "01": {
                        "dist_name": "NIEVA"
                    },
                    "03": {
                        "dist_name": "RIO SANTIAGO"
                    }
                }
            },
            "05": {
                "prov_name": "LUYA",
                "districts": {
                    "02": {
                        "dist_name": "CAMPORREDONDO"
                    },
                    "03": {
                        "dist_name": "COCABAMBA"
                    },
                    "04": {
                        "dist_name": "COLCAMAR"
                    },
                    "05": {
                        "dist_name": "CONILA"
                    },
                    "06": {
                        "dist_name": "INGUILPATA"
                    },
                    "01": {
                        "dist_name": "LAMUD"
                    },
                    "07": {
                        "dist_name": "LONGUITA"
                    },
                    "08": {
                        "dist_name": "LONYA CHICO"
                    },
                    "09": {
                        "dist_name": "LUYA"
                    },
                    "10": {
                        "dist_name": "LUYA VIEJO"
                    },
                    "11": {
                        "dist_name": "MARIA"
                    },
                    "12": {
                        "dist_name": "OCALLI"
                    },
                    "13": {
                        "dist_name": "OCUMAL"
                    },
                    "14": {
                        "dist_name": "PISUQUIA"
                    },
                    "15": {
                        "dist_name": "PROVIDENCIA"
                    },
                    "16": {
                        "dist_name": "SAN CRISTOBAL"
                    },
                    "17": {
                        "dist_name": "SAN FRANCISCO DE YESO"
                    },
                    "18": {
                        "dist_name": "SAN JERONIMO"
                    },
                    "19": {
                        "dist_name": "SAN JUAN DE LOPECANCHA"
                    },
                    "20": {
                        "dist_name": "SANTA CATALINA"
                    },
                    "21": {
                        "dist_name": "SANTO TOMAS"
                    },
                    "22": {
                        "dist_name": "TINGO"
                    },
                    "23": {
                        "dist_name": "TRITA"
                    }
                }
            },
            "06": {
                "prov_name": "RODRIGUEZ DE MENDOZA",
                "districts": {
                    "02": {
                        "dist_name": "CHIRIMOTO"
                    },
                    "03": {
                        "dist_name": "COCHAMAL"
                    },
                    "04": {
                        "dist_name": "HUAMBO"
                    },
                    "05": {
                        "dist_name": "LIMABAMBA"
                    },
                    "06": {
                        "dist_name": "LONGAR"
                    },
                    "07": {
                        "dist_name": "MARISCAL BENAVIDES"
                    },
                    "08": {
                        "dist_name": "MILPUCC"
                    },
                    "09": {
                        "dist_name": "OMIA"
                    },
                    "01": {
                        "dist_name": "SAN NICOLAS"
                    },
                    "10": {
                        "dist_name": "SANTA ROSA"
                    },
                    "11": {
                        "dist_name": "TOTORA"
                    },
                    "12": {
                        "dist_name": "VISTA ALEGRE"
                    }
                }
            },
            "07": {
                "prov_name": "UTCUBAMBA",
                "districts": {
                    "01": {
                        "dist_name": "BAGUA GRANDE"
                    },
                    "02": {
                        "dist_name": "CAJARURO"
                    },
                    "03": {
                        "dist_name": "CUMBA"
                    },
                    "04": {
                        "dist_name": "EL MILAGRO"
                    },
                    "05": {
                        "dist_name": "JAMALCA"
                    },
                    "06": {
                        "dist_name": "LONYA GRANDE"
                    },
                    "07": {
                        "dist_name": "YAMON"
                    }
                }
            }
        }
    },
    "02": {
        "dept_name": "ANCASH",
        "provinces": {
            "02": {
                "prov_name": "AIJA",
                "districts": {
                    "01": {
                        "dist_name": "AIJA"
                    },
                    "02": {
                        "dist_name": "CORIS"
                    },
                    "03": {
                        "dist_name": "HUACLLAN"
                    },
                    "04": {
                        "dist_name": "LA MERCED"
                    },
                    "05": {
                        "dist_name": "SUCCHA"
                    }
                }
            },
            "03": {
                "prov_name": "ANTONIO RAIMONDI",
                "districts": {
                    "02": {
                        "dist_name": "ACZO"
                    },
                    "03": {
                        "dist_name": "CHACCHO"
                    },
                    "04": {
                        "dist_name": "CHINGAS"
                    },
                    "01": {
                        "dist_name": "LLAMELLIN"
                    },
                    "05": {
                        "dist_name": "MIRGAS"
                    },
                    "06": {
                        "dist_name": "SAN JUAN DE RONTOY"
                    }
                }
            },
            "04": {
                "prov_name": "ASUNCION",
                "districts": {
                    "02": {
                        "dist_name": "ACOCHACA"
                    },
                    "01": {
                        "dist_name": "CHACAS"
                    }
                }
            },
            "05": {
                "prov_name": "BOLOGNESI",
                "districts": {
                    "02": {
                        "dist_name": "ABELARDO PARDO LEZAMETA"
                    },
                    "03": {
                        "dist_name": "ANTONIO RAIMONDI"
                    },
                    "04": {
                        "dist_name": "AQUIA"
                    },
                    "05": {
                        "dist_name": "CAJACAY"
                    },
                    "06": {
                        "dist_name": "CANIS"
                    },
                    "01": {
                        "dist_name": "CHIQUIAN"
                    },
                    "07": {
                        "dist_name": "COLQUIOC"
                    },
                    "08": {
                        "dist_name": "HUALLANCA"
                    },
                    "09": {
                        "dist_name": "HUASTA"
                    },
                    "10": {
                        "dist_name": "HUAYLLACAYAN"
                    },
                    "11": {
                        "dist_name": "LA PRIMAVERA"
                    },
                    "12": {
                        "dist_name": "MANGAS"
                    },
                    "13": {
                        "dist_name": "PACLLON"
                    },
                    "14": {
                        "dist_name": "SAN MIGUEL DE CORPANQUI"
                    },
                    "15": {
                        "dist_name": "TICLLOS"
                    }
                }
            },
            "06": {
                "prov_name": "CARHUAZ",
                "districts": {
                    "02": {
                        "dist_name": "ACOPAMPA"
                    },
                    "03": {
                        "dist_name": "AMASHCA"
                    },
                    "04": {
                        "dist_name": "ANTA"
                    },
                    "05": {
                        "dist_name": "ATAQUERO"
                    },
                    "01": {
                        "dist_name": "CARHUAZ"
                    },
                    "06": {
                        "dist_name": "MARCARA"
                    },
                    "07": {
                        "dist_name": "PARIAHUANCA"
                    },
                    "08": {
                        "dist_name": "SAN MIGUEL DE ACO"
                    },
                    "09": {
                        "dist_name": "SHILLA"
                    },
                    "10": {
                        "dist_name": "TINCO"
                    },
                    "11": {
                        "dist_name": "YUNGAR"
                    }
                }
            },
            "07": {
                "prov_name": "CARLOS FERMIN FITZCARRALD",
                "districts": {
                    "01": {
                        "dist_name": "SAN LUIS"
                    },
                    "02": {
                        "dist_name": "SAN NICOLAS"
                    },
                    "03": {
                        "dist_name": "YAUYA"
                    }
                }
            },
            "08": {
                "prov_name": "CASMA",
                "districts": {
                    "02": {
                        "dist_name": "BUENA VISTA ALTA"
                    },
                    "01": {
                        "dist_name": "CASMA"
                    },
                    "03": {
                        "dist_name": "COMANDANTE NOEL"
                    },
                    "04": {
                        "dist_name": "YAUTAN"
                    }
                }
            },
            "09": {
                "prov_name": "CORONGO",
                "districts": {
                    "02": {
                        "dist_name": "ACO"
                    },
                    "03": {
                        "dist_name": "BAMBAS"
                    },
                    "01": {
                        "dist_name": "CORONGO"
                    },
                    "04": {
                        "dist_name": "CUSCA"
                    },
                    "05": {
                        "dist_name": "LA PAMPA"
                    },
                    "06": {
                        "dist_name": "YANAC"
                    },
                    "07": {
                        "dist_name": "YUPAN"
                    }
                }
            },
            "01": {
                "prov_name": "HUARAZ",
                "districts": {
                    "02": {
                        "dist_name": "COCHABAMBA"
                    },
                    "03": {
                        "dist_name": "COLCABAMBA"
                    },
                    "04": {
                        "dist_name": "HUANCHAY"
                    },
                    "01": {
                        "dist_name": "HUARAZ"
                    },
                    "05": {
                        "dist_name": "INDEPENDENCIA"
                    },
                    "06": {
                        "dist_name": "JANGAS"
                    },
                    "07": {
                        "dist_name": "LA LIBERTAD"
                    },
                    "08": {
                        "dist_name": "OLLEROS"
                    },
                    "09": {
                        "dist_name": "PAMPAS GRANDE"
                    },
                    "10": {
                        "dist_name": "PARIACOTO"
                    },
                    "11": {
                        "dist_name": "PIRA"
                    },
                    "12": {
                        "dist_name": "TARICA"
                    }
                }
            },
            "10": {
                "prov_name": "HUARI",
                "districts": {
                    "02": {
                        "dist_name": "ANRA"
                    },
                    "03": {
                        "dist_name": "CAJAY"
                    },
                    "04": {
                        "dist_name": "CHAVIN DE HUANTAR"
                    },
                    "05": {
                        "dist_name": "HUACACHI"
                    },
                    "06": {
                        "dist_name": "HUACCHIS"
                    },
                    "07": {
                        "dist_name": "HUACHIS"
                    },
                    "08": {
                        "dist_name": "HUANTAR"
                    },
                    "01": {
                        "dist_name": "HUARI"
                    },
                    "09": {
                        "dist_name": "MASIN"
                    },
                    "10": {
                        "dist_name": "PAUCAS"
                    },
                    "11": {
                        "dist_name": "PONTO"
                    },
                    "12": {
                        "dist_name": "RAHUAPAMPA"
                    },
                    "13": {
                        "dist_name": "RAPAYAN"
                    },
                    "14": {
                        "dist_name": "SAN MARCOS"
                    },
                    "15": {
                        "dist_name": "SAN PEDRO DE CHANA"
                    },
                    "16": {
                        "dist_name": "UCO"
                    }
                }
            },
            "11": {
                "prov_name": "HUARMEY",
                "districts": {
                    "02": {
                        "dist_name": "COCHAPETI"
                    },
                    "03": {
                        "dist_name": "CULEBRAS"
                    },
                    "01": {
                        "dist_name": "HUARMEY"
                    },
                    "04": {
                        "dist_name": "HUAYAN"
                    },
                    "05": {
                        "dist_name": "MALVAS"
                    }
                }
            },
            "12": {
                "prov_name": "HUAYLAS",
                "districts": {
                    "01": {
                        "dist_name": "CARAZ"
                    },
                    "02": {
                        "dist_name": "HUALLANCA"
                    },
                    "03": {
                        "dist_name": "HUATA"
                    },
                    "04": {
                        "dist_name": "HUAYLAS"
                    },
                    "05": {
                        "dist_name": "MATO"
                    },
                    "06": {
                        "dist_name": "PAMPAROMAS"
                    },
                    "07": {
                        "dist_name": "PUEBLO LIBRE"
                    },
                    "08": {
                        "dist_name": "SANTA CRUZ"
                    },
                    "09": {
                        "dist_name": "SANTO TORIBIO"
                    },
                    "10": {
                        "dist_name": "YURACMARCA"
                    }
                }
            },
            "13": {
                "prov_name": "MARISCAL LUZURIAGA",
                "districts": {
                    "02": {
                        "dist_name": "CASCA"
                    },
                    "03": {
                        "dist_name": "ELEAZAR GUZMAN BARRON"
                    },
                    "04": {
                        "dist_name": "FIDEL OLIVAS ESCUDERO"
                    },
                    "05": {
                        "dist_name": "LLAMA"
                    },
                    "06": {
                        "dist_name": "LLUMPA"
                    },
                    "07": {
                        "dist_name": "LUCMA"
                    },
                    "08": {
                        "dist_name": "MUSGA"
                    },
                    "01": {
                        "dist_name": "PISCOBAMBA"
                    }
                }
            },
            "14": {
                "prov_name": "OCROS",
                "districts": {
                    "02": {
                        "dist_name": "ACAS"
                    },
                    "03": {
                        "dist_name": "CAJAMARQUILLA"
                    },
                    "04": {
                        "dist_name": "CARHUAPAMPA"
                    },
                    "05": {
                        "dist_name": "COCHAS"
                    },
                    "06": {
                        "dist_name": "CONGAS"
                    },
                    "07": {
                        "dist_name": "LLIPA"
                    },
                    "01": {
                        "dist_name": "OCROS"
                    },
                    "08": {
                        "dist_name": "SAN CRISTOBAL DE RAJAN"
                    },
                    "09": {
                        "dist_name": "SAN PEDRO"
                    },
                    "10": {
                        "dist_name": "SANTIAGO DE CHILCAS"
                    }
                }
            },
            "15": {
                "prov_name": "PALLASCA",
                "districts": {
                    "02": {
                        "dist_name": "BOLOGNESI"
                    },
                    "01": {
                        "dist_name": "CABANA"
                    },
                    "03": {
                        "dist_name": "CONCHUCOS"
                    },
                    "04": {
                        "dist_name": "HUACASCHUQUE"
                    },
                    "05": {
                        "dist_name": "HUANDOVAL"
                    },
                    "06": {
                        "dist_name": "LACABAMBA"
                    },
                    "07": {
                        "dist_name": "LLAPO"
                    },
                    "08": {
                        "dist_name": "PALLASCA"
                    },
                    "09": {
                        "dist_name": "PAMPAS"
                    },
                    "10": {
                        "dist_name": "SANTA ROSA"
                    },
                    "11": {
                        "dist_name": "TAUCA"
                    }
                }
            },
            "16": {
                "prov_name": "POMABAMBA",
                "districts": {
                    "02": {
                        "dist_name": "HUAYLLAN"
                    },
                    "03": {
                        "dist_name": "PAROBAMBA"
                    },
                    "01": {
                        "dist_name": "POMABAMBA"
                    },
                    "04": {
                        "dist_name": "QUINUABAMBA"
                    }
                }
            },
            "17": {
                "prov_name": "RECUAY",
                "districts": {
                    "02": {
                        "dist_name": "CATAC"
                    },
                    "03": {
                        "dist_name": "COTAPARACO"
                    },
                    "04": {
                        "dist_name": "HUAYLLAPAMPA"
                    },
                    "05": {
                        "dist_name": "LLACLLIN"
                    },
                    "06": {
                        "dist_name": "MARCA"
                    },
                    "07": {
                        "dist_name": "PAMPAS CHICO"
                    },
                    "08": {
                        "dist_name": "PARARIN"
                    },
                    "01": {
                        "dist_name": "RECUAY"
                    },
                    "09": {
                        "dist_name": "TAPACOCHA"
                    },
                    "10": {
                        "dist_name": "TICAPAMPA"
                    }
                }
            },
            "18": {
                "prov_name": "SANTA",
                "districts": {
                    "02": {
                        "dist_name": "CACERES DEL PERU"
                    },
                    "01": {
                        "dist_name": "CHIMBOTE"
                    },
                    "03": {
                        "dist_name": "COISHCO"
                    },
                    "04": {
                        "dist_name": "MACATE"
                    },
                    "05": {
                        "dist_name": "MORO"
                    },
                    "06": {
                        "dist_name": "NEPEÑA"
                    },
                    "09": {
                        "dist_name": "NUEVO CHIMBOTE"
                    },
                    "07": {
                        "dist_name": "SAMANCO"
                    },
                    "08": {
                        "dist_name": "SANTA"
                    }
                }
            },
            "19": {
                "prov_name": "SIHUAS",
                "districts": {
                    "02": {
                        "dist_name": "ACOBAMBA"
                    },
                    "03": {
                        "dist_name": "ALFONSO UGARTE"
                    },
                    "04": {
                        "dist_name": "CASHAPAMPA"
                    },
                    "05": {
                        "dist_name": "CHINGALPO"
                    },
                    "06": {
                        "dist_name": "HUAYLLABAMBA"
                    },
                    "07": {
                        "dist_name": "QUICHES"
                    },
                    "08": {
                        "dist_name": "RAGASH"
                    },
                    "09": {
                        "dist_name": "SAN JUAN"
                    },
                    "10": {
                        "dist_name": "SICSIBAMBA"
                    },
                    "01": {
                        "dist_name": "SIHUAS"
                    }
                }
            },
            "20": {
                "prov_name": "YUNGAY",
                "districts": {
                    "02": {
                        "dist_name": "CASCAPARA"
                    },
                    "03": {
                        "dist_name": "MANCOS"
                    },
                    "04": {
                        "dist_name": "MATACOTO"
                    },
                    "05": {
                        "dist_name": "QUILLO"
                    },
                    "06": {
                        "dist_name": "RANRAHIRCA"
                    },
                    "07": {
                        "dist_name": "SHUPLUY"
                    },
                    "08": {
                        "dist_name": "YANAMA"
                    },
                    "01": {
                        "dist_name": "YUNGAY"
                    }
                }
            }
        }
    },
    "03": {
        "dept_name": "APURIMAC",
        "provinces": {
            "01": {
                "prov_name": "ABANCAY",
                "districts": {
                    "01": {
                        "dist_name": "ABANCAY"
                    },
                    "02": {
                        "dist_name": "CHACOCHE"
                    },
                    "03": {
                        "dist_name": "CIRCA"
                    },
                    "04": {
                        "dist_name": "CURAHUASI"
                    },
                    "05": {
                        "dist_name": "HUANIPACA"
                    },
                    "06": {
                        "dist_name": "LAMBRAMA"
                    },
                    "07": {
                        "dist_name": "PICHIRHUA"
                    },
                    "08": {
                        "dist_name": "SAN PEDRO DE CACHORA"
                    },
                    "09": {
                        "dist_name": "TAMBURCO"
                    }
                }
            },
            "02": {
                "prov_name": "ANDAHUAYLAS",
                "districts": {
                    "01": {
                        "dist_name": "ANDAHUAYLAS"
                    },
                    "02": {
                        "dist_name": "ANDARAPA"
                    },
                    "03": {
                        "dist_name": "CHIARA"
                    },
                    "04": {
                        "dist_name": "HUANCARAMA"
                    },
                    "05": {
                        "dist_name": "HUANCARAY"
                    },
                    "06": {
                        "dist_name": "HUAYANA"
                    },
                    "19": {
                        "dist_name": "KAQUIABAMBA"
                    },
                    "07": {
                        "dist_name": "KISHUARA"
                    },
                    "08": {
                        "dist_name": "PACOBAMBA"
                    },
                    "09": {
                        "dist_name": "PACUCHA"
                    },
                    "10": {
                        "dist_name": "PAMPACHIRI"
                    },
                    "11": {
                        "dist_name": "POMACOCHA"
                    },
                    "12": {
                        "dist_name": "SAN ANTONIO DE CACHI"
                    },
                    "13": {
                        "dist_name": "SAN JERONIMO"
                    },
                    "14": {
                        "dist_name": "SAN MIGUEL DE CHACCRAMPA"
                    },
                    "15": {
                        "dist_name": "SANTA MARIA DE CHICMO"
                    },
                    "16": {
                        "dist_name": "TALAVERA"
                    },
                    "17": {
                        "dist_name": "TUMAY HUARACA"
                    },
                    "18": {
                        "dist_name": "TURPO"
                    }
                }
            },
            "03": {
                "prov_name": "ANTABAMBA",
                "districts": {
                    "01": {
                        "dist_name": "ANTABAMBA"
                    },
                    "02": {
                        "dist_name": "EL ORO"
                    },
                    "03": {
                        "dist_name": "HUAQUIRCA"
                    },
                    "04": {
                        "dist_name": "JUAN ESPINOZA MEDRANO"
                    },
                    "05": {
                        "dist_name": "OROPESA"
                    },
                    "06": {
                        "dist_name": "PACHACONAS"
                    },
                    "07": {
                        "dist_name": "SABAINO"
                    }
                }
            },
            "04": {
                "prov_name": "AYMARAES",
                "districts": {
                    "02": {
                        "dist_name": "CAPAYA"
                    },
                    "03": {
                        "dist_name": "CARAYBAMBA"
                    },
                    "01": {
                        "dist_name": "CHALHUANCA"
                    },
                    "04": {
                        "dist_name": "CHAPIMARCA"
                    },
                    "05": {
                        "dist_name": "COLCABAMBA"
                    },
                    "06": {
                        "dist_name": "COTARUSE"
                    },
                    "07": {
                        "dist_name": "HUAYLLO"
                    },
                    "08": {
                        "dist_name": "JUSTO APU SAHUARAURA"
                    },
                    "09": {
                        "dist_name": "LUCRE"
                    },
                    "10": {
                        "dist_name": "POCOHUANCA"
                    },
                    "11": {
                        "dist_name": "SAN JUAN DE CHACÑA"
                    },
                    "12": {
                        "dist_name": "SAÑAYCA"
                    },
                    "13": {
                        "dist_name": "SORAYA"
                    },
                    "14": {
                        "dist_name": "TAPAIRIHUA"
                    },
                    "15": {
                        "dist_name": "TINTAY"
                    },
                    "16": {
                        "dist_name": "TORAYA"
                    },
                    "17": {
                        "dist_name": "YANACA"
                    }
                }
            },
            "06": {
                "prov_name": "CHINCHEROS",
                "districts": {
                    "02": {
                        "dist_name": "ANCO HUALLO"
                    },
                    "01": {
                        "dist_name": "CHINCHEROS"
                    },
                    "03": {
                        "dist_name": "COCHARCAS"
                    },
                    "04": {
                        "dist_name": "HUACCANA"
                    },
                    "05": {
                        "dist_name": "OCOBAMBA"
                    },
                    "06": {
                        "dist_name": "ONGOY"
                    },
                    "08": {
                        "dist_name": "RANRACANCHA"
                    },
                    "07": {
                        "dist_name": "URANMARCA"
                    }
                }
            },
            "05": {
                "prov_name": "COTABAMBAS",
                "districts": {
                    "06": {
                        "dist_name": "CHALLHUAHUACHO"
                    },
                    "02": {
                        "dist_name": "COTABAMBAS"
                    },
                    "03": {
                        "dist_name": "COYLLURQUI"
                    },
                    "04": {
                        "dist_name": "HAQUIRA"
                    },
                    "05": {
                        "dist_name": "MARA"
                    },
                    "01": {
                        "dist_name": "TAMBOBAMBA"
                    }
                }
            },
            "07": {
                "prov_name": "GRAU",
                "districts": {
                    "01": {
                        "dist_name": "CHUQUIBAMBILLA"
                    },
                    "14": {
                        "dist_name": "CURASCO"
                    },
                    "02": {
                        "dist_name": "CURPAHUASI"
                    },
                    "03": {
                        "dist_name": "GAMARRA"
                    },
                    "04": {
                        "dist_name": "HUAILLATI"
                    },
                    "05": {
                        "dist_name": "MAMARA"
                    },
                    "06": {
                        "dist_name": "MICAELA BASTIDAS"
                    },
                    "07": {
                        "dist_name": "PATAYPAMPA"
                    },
                    "08": {
                        "dist_name": "PROGRESO"
                    },
                    "09": {
                        "dist_name": "SAN ANTONIO"
                    },
                    "10": {
                        "dist_name": "SANTA ROSA"
                    },
                    "11": {
                        "dist_name": "TURPAY"
                    },
                    "12": {
                        "dist_name": "VILCABAMBA"
                    },
                    "13": {
                        "dist_name": "VIRUNDO"
                    }
                }
            }
        }
    },
    "04": {
        "dept_name": "AREQUIPA",
        "provinces": {
            "01": {
                "prov_name": "AREQUIPA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO SELVA ALEGRE"
                    },
                    "01": {
                        "dist_name": "AREQUIPA"
                    },
                    "03": {
                        "dist_name": "CAYMA"
                    },
                    "04": {
                        "dist_name": "CERRO COLORADO"
                    },
                    "05": {
                        "dist_name": "CHARACATO"
                    },
                    "06": {
                        "dist_name": "CHIGUATA"
                    },
                    "07": {
                        "dist_name": "JACOBO HUNTER"
                    },
                    "29": {
                        "dist_name": "JOSE LUIS BUSTAMANTE Y RIVERO"
                    },
                    "08": {
                        "dist_name": "LA JOYA"
                    },
                    "09": {
                        "dist_name": "MARIANO MELGAR"
                    },
                    "10": {
                        "dist_name": "MIRAFLORES"
                    },
                    "11": {
                        "dist_name": "MOLLEBAYA"
                    },
                    "12": {
                        "dist_name": "PAUCARPATA"
                    },
                    "13": {
                        "dist_name": "POCSI"
                    },
                    "14": {
                        "dist_name": "POLOBAYA"
                    },
                    "15": {
                        "dist_name": "QUEQUEÑA"
                    },
                    "16": {
                        "dist_name": "SABANDIA"
                    },
                    "17": {
                        "dist_name": "SACHACA"
                    },
                    "18": {
                        "dist_name": "SAN JUAN DE SIGUAS"
                    },
                    "19": {
                        "dist_name": "SAN JUAN DE TARUCANI"
                    },
                    "20": {
                        "dist_name": "SANTA ISABEL DE SIGUAS"
                    },
                    "21": {
                        "dist_name": "SANTA RITA DE SIHUAS"
                    },
                    "22": {
                        "dist_name": "SOCABAYA"
                    },
                    "23": {
                        "dist_name": "TIABAYA"
                    },
                    "24": {
                        "dist_name": "UCHUMAYO"
                    },
                    "25": {
                        "dist_name": "VITOR"
                    },
                    "26": {
                        "dist_name": "YANAHUARA"
                    },
                    "27": {
                        "dist_name": "YARABAMBA"
                    },
                    "28": {
                        "dist_name": "YURA"
                    }
                }
            },
            "02": {
                "prov_name": "CAMANA",
                "districts": {
                    "01": {
                        "dist_name": "CAMANA"
                    },
                    "02": {
                        "dist_name": "JOSE MARIA QUIMPER"
                    },
                    "03": {
                        "dist_name": "MARIANO NICOLAS VALCARCEL"
                    },
                    "04": {
                        "dist_name": "MARISCAL CACERES"
                    },
                    "05": {
                        "dist_name": "NICOLAS DE PIEROLA"
                    },
                    "06": {
                        "dist_name": "OCOÑA"
                    },
                    "07": {
                        "dist_name": "QUILCA"
                    },
                    "08": {
                        "dist_name": "SAMUEL PASTOR"
                    }
                }
            },
            "03": {
                "prov_name": "CARAVELI",
                "districts": {
                    "02": {
                        "dist_name": "ACARI"
                    },
                    "03": {
                        "dist_name": "ATICO"
                    },
                    "04": {
                        "dist_name": "ATIQUIPA"
                    },
                    "05": {
                        "dist_name": "BELLA UNION"
                    },
                    "06": {
                        "dist_name": "CAHUACHO"
                    },
                    "01": {
                        "dist_name": "CARAVELI"
                    },
                    "07": {
                        "dist_name": "CHALA"
                    },
                    "08": {
                        "dist_name": "CHAPARRA"
                    },
                    "09": {
                        "dist_name": "HUANUHUANU"
                    },
                    "10": {
                        "dist_name": "JAQUI"
                    },
                    "11": {
                        "dist_name": "LOMAS"
                    },
                    "12": {
                        "dist_name": "QUICACHA"
                    },
                    "13": {
                        "dist_name": "YAUCA"
                    }
                }
            },
            "04": {
                "prov_name": "CASTILLA",
                "districts": {
                    "02": {
                        "dist_name": "ANDAGUA"
                    },
                    "01": {
                        "dist_name": "APLAO"
                    },
                    "03": {
                        "dist_name": "AYO"
                    },
                    "04": {
                        "dist_name": "CHACHAS"
                    },
                    "05": {
                        "dist_name": "CHILCAYMARCA"
                    },
                    "06": {
                        "dist_name": "CHOCO"
                    },
                    "07": {
                        "dist_name": "HUANCARQUI"
                    },
                    "08": {
                        "dist_name": "MACHAGUAY"
                    },
                    "09": {
                        "dist_name": "ORCOPAMPA"
                    },
                    "10": {
                        "dist_name": "PAMPACOLCA"
                    },
                    "11": {
                        "dist_name": "TIPAN"
                    },
                    "13": {
                        "dist_name": "URACA"
                    },
                    "12": {
                        "dist_name": "UÑON"
                    },
                    "14": {
                        "dist_name": "VIRACO"
                    }
                }
            },
            "05": {
                "prov_name": "CAYLLOMA",
                "districts": {
                    "02": {
                        "dist_name": "ACHOMA"
                    },
                    "03": {
                        "dist_name": "CABANACONDE"
                    },
                    "04": {
                        "dist_name": "CALLALLI"
                    },
                    "05": {
                        "dist_name": "CAYLLOMA"
                    },
                    "01": {
                        "dist_name": "CHIVAY"
                    },
                    "06": {
                        "dist_name": "COPORAQUE"
                    },
                    "07": {
                        "dist_name": "HUAMBO"
                    },
                    "08": {
                        "dist_name": "HUANCA"
                    },
                    "09": {
                        "dist_name": "ICHUPAMPA"
                    },
                    "10": {
                        "dist_name": "LARI"
                    },
                    "11": {
                        "dist_name": "LLUTA"
                    },
                    "12": {
                        "dist_name": "MACA"
                    },
                    "13": {
                        "dist_name": "MADRIGAL"
                    },
                    "20": {
                        "dist_name": "MAJES"
                    },
                    "14": {
                        "dist_name": "SAN ANTONIO DE CHUCA"
                    },
                    "15": {
                        "dist_name": "SIBAYO"
                    },
                    "16": {
                        "dist_name": "TAPAY"
                    },
                    "17": {
                        "dist_name": "TISCO"
                    },
                    "18": {
                        "dist_name": "TUTI"
                    },
                    "19": {
                        "dist_name": "YANQUE"
                    }
                }
            },
            "06": {
                "prov_name": "CONDESUYOS",
                "districts": {
                    "02": {
                        "dist_name": "ANDARAY"
                    },
                    "03": {
                        "dist_name": "CAYARANI"
                    },
                    "04": {
                        "dist_name": "CHICHAS"
                    },
                    "01": {
                        "dist_name": "CHUQUIBAMBA"
                    },
                    "05": {
                        "dist_name": "IRAY"
                    },
                    "06": {
                        "dist_name": "RIO GRANDE"
                    },
                    "07": {
                        "dist_name": "SALAMANCA"
                    },
                    "08": {
                        "dist_name": "YANAQUIHUA"
                    }
                }
            },
            "07": {
                "prov_name": "ISLAY",
                "districts": {
                    "02": {
                        "dist_name": "COCACHACRA"
                    },
                    "03": {
                        "dist_name": "DEAN VALDIVIA"
                    },
                    "04": {
                        "dist_name": "ISLAY"
                    },
                    "05": {
                        "dist_name": "MEJIA"
                    },
                    "01": {
                        "dist_name": "MOLLENDO"
                    },
                    "06": {
                        "dist_name": "PUNTA DE BOMBON"
                    }
                }
            },
            "08": {
                "prov_name": "LA UNION",
                "districts": {
                    "02": {
                        "dist_name": "ALCA"
                    },
                    "03": {
                        "dist_name": "CHARCANA"
                    },
                    "01": {
                        "dist_name": "COTAHUASI"
                    },
                    "04": {
                        "dist_name": "HUAYNACOTAS"
                    },
                    "05": {
                        "dist_name": "PAMPAMARCA"
                    },
                    "06": {
                        "dist_name": "PUYCA"
                    },
                    "07": {
                        "dist_name": "QUECHUALLA"
                    },
                    "08": {
                        "dist_name": "SAYLA"
                    },
                    "09": {
                        "dist_name": "TAURIA"
                    },
                    "10": {
                        "dist_name": "TOMEPAMPA"
                    },
                    "11": {
                        "dist_name": "TORO"
                    }
                }
            }
        }
    },
    "05": {
        "dept_name": "AYACUCHO",
        "provinces": {
            "02": {
                "prov_name": "CANGALLO",
                "districts": {
                    "01": {
                        "dist_name": "CANGALLO"
                    },
                    "02": {
                        "dist_name": "CHUSCHI"
                    },
                    "03": {
                        "dist_name": "LOS MOROCHUCOS"
                    },
                    "04": {
                        "dist_name": "MARIA PARADO DE BELLIDO"
                    },
                    "05": {
                        "dist_name": "PARAS"
                    },
                    "06": {
                        "dist_name": "TOTOS"
                    }
                }
            },
            "01": {
                "prov_name": "HUAMANGA",
                "districts": {
                    "02": {
                        "dist_name": "ACOCRO"
                    },
                    "03": {
                        "dist_name": "ACOS VINCHOS"
                    },
                    "01": {
                        "dist_name": "AYACUCHO"
                    },
                    "04": {
                        "dist_name": "CARMEN ALTO"
                    },
                    "05": {
                        "dist_name": "CHIARA"
                    },
                    "15": {
                        "dist_name": "JESUS NAZARENO"
                    },
                    "06": {
                        "dist_name": "OCROS"
                    },
                    "07": {
                        "dist_name": "PACAYCASA"
                    },
                    "08": {
                        "dist_name": "QUINUA"
                    },
                    "09": {
                        "dist_name": "SAN JOSE DE TICLLAS"
                    },
                    "10": {
                        "dist_name": "SAN JUAN BAUTISTA"
                    },
                    "11": {
                        "dist_name": "SANTIAGO DE PISCHA"
                    },
                    "12": {
                        "dist_name": "SOCOS"
                    },
                    "13": {
                        "dist_name": "TAMBILLO"
                    },
                    "14": {
                        "dist_name": "VINCHOS"
                    }
                }
            },
            "03": {
                "prov_name": "HUANCA SANCOS",
                "districts": {
                    "02": {
                        "dist_name": "CARAPO"
                    },
                    "03": {
                        "dist_name": "SACSAMARCA"
                    },
                    "01": {
                        "dist_name": "SANCOS"
                    },
                    "04": {
                        "dist_name": "SANTIAGO DE LUCANAMARCA"
                    }
                }
            },
            "04": {
                "prov_name": "HUANTA",
                "districts": {
                    "02": {
                        "dist_name": "AYAHUANCO"
                    },
                    "03": {
                        "dist_name": "HUAMANGUILLA"
                    },
                    "01": {
                        "dist_name": "HUANTA"
                    },
                    "04": {
                        "dist_name": "IGUAIN"
                    },
                    "08": {
                        "dist_name": "LLOCHEGUA"
                    },
                    "05": {
                        "dist_name": "LURICOCHA"
                    },
                    "06": {
                        "dist_name": "SANTILLANA"
                    },
                    "07": {
                        "dist_name": "SIVIA"
                    }
                }
            },
            "05": {
                "prov_name": "LA MAR",
                "districts": {
                    "02": {
                        "dist_name": "ANCO"
                    },
                    "03": {
                        "dist_name": "AYNA"
                    },
                    "04": {
                        "dist_name": "CHILCAS"
                    },
                    "05": {
                        "dist_name": "CHUNGUI"
                    },
                    "06": {
                        "dist_name": "LUIS CARRANZA"
                    },
                    "01": {
                        "dist_name": "SAN MIGUEL"
                    },
                    "07": {
                        "dist_name": "SANTA ROSA"
                    },
                    "08": {
                        "dist_name": "TAMBO"
                    }
                }
            },
            "06": {
                "prov_name": "LUCANAS",
                "districts": {
                    "02": {
                        "dist_name": "AUCARA"
                    },
                    "03": {
                        "dist_name": "CABANA"
                    },
                    "04": {
                        "dist_name": "CARMEN SALCEDO"
                    },
                    "05": {
                        "dist_name": "CHAVIÑA"
                    },
                    "06": {
                        "dist_name": "CHIPAO"
                    },
                    "07": {
                        "dist_name": "HUAC-HUAS"
                    },
                    "08": {
                        "dist_name": "LARAMATE"
                    },
                    "09": {
                        "dist_name": "LEONCIO PRADO"
                    },
                    "10": {
                        "dist_name": "LLAUTA"
                    },
                    "11": {
                        "dist_name": "LUCANAS"
                    },
                    "12": {
                        "dist_name": "OCAÑA"
                    },
                    "13": {
                        "dist_name": "OTOCA"
                    },
                    "01": {
                        "dist_name": "PUQUIO"
                    },
                    "14": {
                        "dist_name": "SAISA"
                    },
                    "15": {
                        "dist_name": "SAN CRISTOBAL"
                    },
                    "16": {
                        "dist_name": "SAN JUAN"
                    },
                    "17": {
                        "dist_name": "SAN PEDRO"
                    },
                    "18": {
                        "dist_name": "SAN PEDRO DE PALCO"
                    },
                    "19": {
                        "dist_name": "SANCOS"
                    },
                    "20": {
                        "dist_name": "SANTA ANA DE HUAYCAHUACHO"
                    },
                    "21": {
                        "dist_name": "SANTA LUCIA"
                    }
                }
            },
            "07": {
                "prov_name": "PARINACOCHAS",
                "districts": {
                    "02": {
                        "dist_name": "CHUMPI"
                    },
                    "01": {
                        "dist_name": "CORACORA"
                    },
                    "03": {
                        "dist_name": "CORONEL CASTAÑEDA"
                    },
                    "04": {
                        "dist_name": "PACAPAUSA"
                    },
                    "05": {
                        "dist_name": "PULLO"
                    },
                    "06": {
                        "dist_name": "PUYUSCA"
                    },
                    "07": {
                        "dist_name": "SAN FRANCISCO DE RAVACAYCO"
                    },
                    "08": {
                        "dist_name": "UPAHUACHO"
                    }
                }
            },
            "08": {
                "prov_name": "PAUCAR DEL SARA SARA",
                "districts": {
                    "02": {
                        "dist_name": "COLTA"
                    },
                    "03": {
                        "dist_name": "CORCULLA"
                    },
                    "04": {
                        "dist_name": "LAMPA"
                    },
                    "05": {
                        "dist_name": "MARCABAMBA"
                    },
                    "06": {
                        "dist_name": "OYOLO"
                    },
                    "07": {
                        "dist_name": "PARARCA"
                    },
                    "01": {
                        "dist_name": "PAUSA"
                    },
                    "08": {
                        "dist_name": "SAN JAVIER DE ALPABAMBA"
                    },
                    "09": {
                        "dist_name": "SAN JOSE DE USHUA"
                    },
                    "10": {
                        "dist_name": "SARA SARA"
                    }
                }
            },
            "09": {
                "prov_name": "SUCRE",
                "districts": {
                    "02": {
                        "dist_name": "BELEN"
                    },
                    "03": {
                        "dist_name": "CHALCOS"
                    },
                    "04": {
                        "dist_name": "CHILCAYOC"
                    },
                    "05": {
                        "dist_name": "HUACAÑA"
                    },
                    "06": {
                        "dist_name": "MORCOLLA"
                    },
                    "07": {
                        "dist_name": "PAICO"
                    },
                    "01": {
                        "dist_name": "QUEROBAMBA"
                    },
                    "08": {
                        "dist_name": "SAN PEDRO DE LARCAY"
                    },
                    "09": {
                        "dist_name": "SAN SALVADOR DE QUIJE"
                    },
                    "10": {
                        "dist_name": "SANTIAGO DE PAUCARAY"
                    },
                    "11": {
                        "dist_name": "SORAS"
                    }
                }
            },
            "10": {
                "prov_name": "VICTOR FAJARDO",
                "districts": {
                    "02": {
                        "dist_name": "ALCAMENCA"
                    },
                    "03": {
                        "dist_name": "APONGO"
                    },
                    "04": {
                        "dist_name": "ASQUIPATA"
                    },
                    "05": {
                        "dist_name": "CANARIA"
                    },
                    "06": {
                        "dist_name": "CAYARA"
                    },
                    "07": {
                        "dist_name": "COLCA"
                    },
                    "10": {
                        "dist_name": "HUALLA"
                    },
                    "08": {
                        "dist_name": "HUAMANQUIQUIA"
                    },
                    "01": {
                        "dist_name": "HUANCAPI"
                    },
                    "09": {
                        "dist_name": "HUANCARAYLLA"
                    },
                    "11": {
                        "dist_name": "SARHUA"
                    },
                    "12": {
                        "dist_name": "VILCANCHOS"
                    }
                }
            },
            "11": {
                "prov_name": "VILCAS HUAMAN",
                "districts": {
                    "02": {
                        "dist_name": "ACCOMARCA"
                    },
                    "03": {
                        "dist_name": "CARHUANCA"
                    },
                    "04": {
                        "dist_name": "CONCEPCION"
                    },
                    "05": {
                        "dist_name": "HUAMBALPA"
                    },
                    "06": {
                        "dist_name": "INDEPENDENCIA"
                    },
                    "07": {
                        "dist_name": "SAURAMA"
                    },
                    "01": {
                        "dist_name": "VILCAS HUAMAN"
                    },
                    "08": {
                        "dist_name": "VISCHONGO"
                    }
                }
            }
        }
    },
    "06": {
        "dept_name": "CAJAMARCA",
        "provinces": {
            "02": {
                "prov_name": "CAJABAMBA",
                "districts": {
                    "02": {
                        "dist_name": "CACHACHI"
                    },
                    "01": {
                        "dist_name": "CAJABAMBA"
                    },
                    "03": {
                        "dist_name": "CONDEBAMBA"
                    },
                    "04": {
                        "dist_name": "SITACOCHA"
                    }
                }
            },
            "01": {
                "prov_name": "CAJAMARCA",
                "districts": {
                    "02": {
                        "dist_name": "ASUNCION"
                    },
                    "01": {
                        "dist_name": "CAJAMARCA"
                    },
                    "03": {
                        "dist_name": "CHETILLA"
                    },
                    "04": {
                        "dist_name": "COSPAN"
                    },
                    "05": {
                        "dist_name": "ENCAÑADA"
                    },
                    "06": {
                        "dist_name": "JESUS"
                    },
                    "07": {
                        "dist_name": "LLACANORA"
                    },
                    "08": {
                        "dist_name": "LOS BAÑOS DEL INCA"
                    },
                    "09": {
                        "dist_name": "MAGDALENA"
                    },
                    "10": {
                        "dist_name": "MATARA"
                    },
                    "11": {
                        "dist_name": "NAMORA"
                    },
                    "12": {
                        "dist_name": "SAN JUAN"
                    }
                }
            },
            "03": {
                "prov_name": "CELENDIN",
                "districts": {
                    "01": {
                        "dist_name": "CELENDIN"
                    },
                    "02": {
                        "dist_name": "CHUMUCH"
                    },
                    "03": {
                        "dist_name": "CORTEGANA"
                    },
                    "04": {
                        "dist_name": "HUASMIN"
                    },
                    "05": {
                        "dist_name": "JORGE CHAVEZ"
                    },
                    "06": {
                        "dist_name": "JOSE GALVEZ"
                    },
                    "12": {
                        "dist_name": "LA LIBERTAD DE PALLAN"
                    },
                    "07": {
                        "dist_name": "MIGUEL IGLESIAS"
                    },
                    "08": {
                        "dist_name": "OXAMARCA"
                    },
                    "09": {
                        "dist_name": "SOROCHUCO"
                    },
                    "10": {
                        "dist_name": "SUCRE"
                    },
                    "11": {
                        "dist_name": "UTCO"
                    }
                }
            },
            "04": {
                "prov_name": "CHOTA",
                "districts": {
                    "02": {
                        "dist_name": "ANGUIA"
                    },
                    "03": {
                        "dist_name": "CHADIN"
                    },
                    "19": {
                        "dist_name": "CHALAMARCA"
                    },
                    "04": {
                        "dist_name": "CHIGUIRIP"
                    },
                    "05": {
                        "dist_name": "CHIMBAN"
                    },
                    "06": {
                        "dist_name": "CHOROPAMPA"
                    },
                    "01": {
                        "dist_name": "CHOTA"
                    },
                    "07": {
                        "dist_name": "COCHABAMBA"
                    },
                    "08": {
                        "dist_name": "CONCHAN"
                    },
                    "09": {
                        "dist_name": "HUAMBOS"
                    },
                    "10": {
                        "dist_name": "LAJAS"
                    },
                    "11": {
                        "dist_name": "LLAMA"
                    },
                    "12": {
                        "dist_name": "MIRACOSTA"
                    },
                    "13": {
                        "dist_name": "PACCHA"
                    },
                    "14": {
                        "dist_name": "PION"
                    },
                    "15": {
                        "dist_name": "QUEROCOTO"
                    },
                    "16": {
                        "dist_name": "SAN JUAN DE LICUPIS"
                    },
                    "17": {
                        "dist_name": "TACABAMBA"
                    },
                    "18": {
                        "dist_name": "TOCMOCHE"
                    }
                }
            },
            "05": {
                "prov_name": "CONTUMAZA",
                "districts": {
                    "02": {
                        "dist_name": "CHILETE"
                    },
                    "01": {
                        "dist_name": "CONTUMAZA"
                    },
                    "03": {
                        "dist_name": "CUPISNIQUE"
                    },
                    "04": {
                        "dist_name": "GUZMANGO"
                    },
                    "05": {
                        "dist_name": "SAN BENITO"
                    },
                    "06": {
                        "dist_name": "SANTA CRUZ DE TOLED"
                    },
                    "07": {
                        "dist_name": "TANTARICA"
                    },
                    "08": {
                        "dist_name": "YONAN"
                    }
                }
            },
            "06": {
                "prov_name": "CUTERVO",
                "districts": {
                    "02": {
                        "dist_name": "CALLAYUC"
                    },
                    "03": {
                        "dist_name": "CHOROS"
                    },
                    "04": {
                        "dist_name": "CUJILLO"
                    },
                    "01": {
                        "dist_name": "CUTERVO"
                    },
                    "05": {
                        "dist_name": "LA RAMADA"
                    },
                    "06": {
                        "dist_name": "PIMPINGOS"
                    },
                    "07": {
                        "dist_name": "QUEROCOTILLO"
                    },
                    "08": {
                        "dist_name": "SAN ANDRES DE CUTERVO"
                    },
                    "09": {
                        "dist_name": "SAN JUAN DE CUTERVO"
                    },
                    "10": {
                        "dist_name": "SAN LUIS DE LUCMA"
                    },
                    "11": {
                        "dist_name": "SANTA CRUZ"
                    },
                    "12": {
                        "dist_name": "SANTO DOMINGO DE LA CAPILLA"
                    },
                    "13": {
                        "dist_name": "SANTO TOMAS"
                    },
                    "14": {
                        "dist_name": "SOCOTA"
                    },
                    "15": {
                        "dist_name": "TORIBIO CASANOVA"
                    }
                }
            },
            "07": {
                "prov_name": "HUALGAYOC",
                "districts": {
                    "01": {
                        "dist_name": "BAMBAMARCA"
                    },
                    "02": {
                        "dist_name": "CHUGUR"
                    },
                    "03": {
                        "dist_name": "HUALGAYOC"
                    }
                }
            },
            "08": {
                "prov_name": "JAEN",
                "districts": {
                    "02": {
                        "dist_name": "BELLAVISTA"
                    },
                    "03": {
                        "dist_name": "CHONTALI"
                    },
                    "04": {
                        "dist_name": "COLASAY"
                    },
                    "05": {
                        "dist_name": "HUABAL"
                    },
                    "01": {
                        "dist_name": "JAEN"
                    },
                    "06": {
                        "dist_name": "LAS PIRIAS"
                    },
                    "07": {
                        "dist_name": "POMAHUACA"
                    },
                    "08": {
                        "dist_name": "PUCARA"
                    },
                    "09": {
                        "dist_name": "SALLIQUE"
                    },
                    "10": {
                        "dist_name": "SAN FELIPE"
                    },
                    "11": {
                        "dist_name": "SAN JOSE DEL ALTO"
                    },
                    "12": {
                        "dist_name": "SANTA ROSA"
                    }
                }
            },
            "09": {
                "prov_name": "SAN IGNACIO",
                "districts": {
                    "02": {
                        "dist_name": "CHIRINOS"
                    },
                    "03": {
                        "dist_name": "HUARANGO"
                    },
                    "04": {
                        "dist_name": "LA COIPA"
                    },
                    "05": {
                        "dist_name": "NAMBALLE"
                    },
                    "01": {
                        "dist_name": "SAN IGNACIO"
                    },
                    "06": {
                        "dist_name": "SAN JOSE DE LOURDES"
                    },
                    "07": {
                        "dist_name": "TABACONAS"
                    }
                }
            },
            "10": {
                "prov_name": "SAN MARCOS",
                "districts": {
                    "02": {
                        "dist_name": "CHANCAY"
                    },
                    "03": {
                        "dist_name": "EDUARDO VILLANUEVA"
                    },
                    "04": {
                        "dist_name": "GREGORIO PITA"
                    },
                    "05": {
                        "dist_name": "ICHOCAN"
                    },
                    "06": {
                        "dist_name": "JOSE MANUEL QUIROZ"
                    },
                    "07": {
                        "dist_name": "JOSE SABOGAL"
                    },
                    "01": {
                        "dist_name": "PEDRO GALVEZ"
                    }
                }
            },
            "11": {
                "prov_name": "SAN MIGUEL",
                "districts": {
                    "02": {
                        "dist_name": "BOLIVAR"
                    },
                    "03": {
                        "dist_name": "CALQUIS"
                    },
                    "04": {
                        "dist_name": "CATILLUC"
                    },
                    "05": {
                        "dist_name": "EL PRADO"
                    },
                    "06": {
                        "dist_name": "LA FLORIDA"
                    },
                    "07": {
                        "dist_name": "LLAPA"
                    },
                    "08": {
                        "dist_name": "NANCHOC"
                    },
                    "09": {
                        "dist_name": "NIEPOS"
                    },
                    "10": {
                        "dist_name": "SAN GREGORIO"
                    },
                    "01": {
                        "dist_name": "SAN MIGUEL"
                    },
                    "11": {
                        "dist_name": "SAN SILVESTRE DE COCHAN"
                    },
                    "12": {
                        "dist_name": "TONGOD"
                    },
                    "13": {
                        "dist_name": "UNION AGUA BLANCA"
                    }
                }
            },
            "12": {
                "prov_name": "SAN PABLO",
                "districts": {
                    "02": {
                        "dist_name": "SAN BERNARDINO"
                    },
                    "03": {
                        "dist_name": "SAN LUIS"
                    },
                    "01": {
                        "dist_name": "SAN PABLO"
                    },
                    "04": {
                        "dist_name": "TUMBADEN"
                    }
                }
            },
            "13": {
                "prov_name": "SANTA CRUZ",
                "districts": {
                    "02": {
                        "dist_name": "ANDABAMBA"
                    },
                    "03": {
                        "dist_name": "CATACHE"
                    },
                    "04": {
                        "dist_name": "CHANCAYBAÑOS"
                    },
                    "05": {
                        "dist_name": "LA ESPERANZA"
                    },
                    "06": {
                        "dist_name": "NINABAMBA"
                    },
                    "07": {
                        "dist_name": "PULAN"
                    },
                    "01": {
                        "dist_name": "SANTA CRUZ"
                    },
                    "08": {
                        "dist_name": "SAUCEPAMPA"
                    },
                    "09": {
                        "dist_name": "SEXI"
                    },
                    "10": {
                        "dist_name": "UTICYACU"
                    },
                    "11": {
                        "dist_name": "YAUYUCAN"
                    }
                }
            }
        }
    },
    "07": {
        "dept_name": "CALLAO",
        "provinces": {
            "01": {
                "prov_name": "CALLAO",
                "districts": {
                    "02": {
                        "dist_name": "BELLAVISTA"
                    },
                    "01": {
                        "dist_name": "CALLAO"
                    },
                    "03": {
                        "dist_name": "CARMEN DE LA LEGUA-REYNOSO"
                    },
                    "04": {
                        "dist_name": "LA PERLA"
                    },
                    "05": {
                        "dist_name": "LA PUNTA"
                    },
                    "06": {
                        "dist_name": "VENTANILLA"
                    }
                }
            }
        }
    },
    "08": {
        "dept_name": "CUSCO",
        "provinces": {
            "02": {
                "prov_name": "ACOMAYO",
                "districts": {
                    "01": {
                        "dist_name": "ACOMAYO"
                    },
                    "02": {
                        "dist_name": "ACOPIA"
                    },
                    "03": {
                        "dist_name": "ACOS"
                    },
                    "04": {
                        "dist_name": "MOSOC LLACTA"
                    },
                    "05": {
                        "dist_name": "POMACANCHI"
                    },
                    "06": {
                        "dist_name": "RONDOCAN"
                    },
                    "07": {
                        "dist_name": "SANGARARA"
                    }
                }
            },
            "03": {
                "prov_name": "ANTA",
                "districts": {
                    "02": {
                        "dist_name": "ANCAHUASI"
                    },
                    "01": {
                        "dist_name": "ANTA"
                    },
                    "03": {
                        "dist_name": "CACHIMAYO"
                    },
                    "04": {
                        "dist_name": "CHINCHAYPUJIO"
                    },
                    "05": {
                        "dist_name": "HUAROCONDO"
                    },
                    "06": {
                        "dist_name": "LIMATAMBO"
                    },
                    "07": {
                        "dist_name": "MOLLEPATA"
                    },
                    "08": {
                        "dist_name": "PUCYURA"
                    },
                    "09": {
                        "dist_name": "ZURITE"
                    }
                }
            },
            "04": {
                "prov_name": "CALCA",
                "districts": {
                    "01": {
                        "dist_name": "CALCA"
                    },
                    "02": {
                        "dist_name": "COYA"
                    },
                    "03": {
                        "dist_name": "LAMAY"
                    },
                    "04": {
                        "dist_name": "LARES"
                    },
                    "05": {
                        "dist_name": "PISAC"
                    },
                    "06": {
                        "dist_name": "SAN SALVADOR"
                    },
                    "07": {
                        "dist_name": "TARAY"
                    },
                    "08": {
                        "dist_name": "YANATILE"
                    }
                }
            },
            "05": {
                "prov_name": "CANAS",
                "districts": {
                    "02": {
                        "dist_name": "CHECCA"
                    },
                    "03": {
                        "dist_name": "KUNTURKANKI"
                    },
                    "04": {
                        "dist_name": "LANGUI"
                    },
                    "05": {
                        "dist_name": "LAYO"
                    },
                    "06": {
                        "dist_name": "PAMPAMARCA"
                    },
                    "07": {
                        "dist_name": "QUEHUE"
                    },
                    "08": {
                        "dist_name": "TUPAC AMARU"
                    },
                    "01": {
                        "dist_name": "YANAOCA"
                    }
                }
            },
            "06": {
                "prov_name": "CANCHIS",
                "districts": {
                    "02": {
                        "dist_name": "CHECACUPE"
                    },
                    "03": {
                        "dist_name": "COMBAPATA"
                    },
                    "04": {
                        "dist_name": "MARANGANI"
                    },
                    "05": {
                        "dist_name": "PITUMARCA"
                    },
                    "06": {
                        "dist_name": "SAN PABLO"
                    },
                    "07": {
                        "dist_name": "SAN PEDRO"
                    },
                    "01": {
                        "dist_name": "SICUANI"
                    },
                    "08": {
                        "dist_name": "TINTA"
                    }
                }
            },
            "07": {
                "prov_name": "CHUMBIVILCAS",
                "districts": {
                    "02": {
                        "dist_name": "CAPACMARCA"
                    },
                    "03": {
                        "dist_name": "CHAMACA"
                    },
                    "04": {
                        "dist_name": "COLQUEMARCA"
                    },
                    "05": {
                        "dist_name": "LIVITACA"
                    },
                    "06": {
                        "dist_name": "LLUSCO"
                    },
                    "07": {
                        "dist_name": "QUIÑOTA"
                    },
                    "01": {
                        "dist_name": "SANTO TOMAS"
                    },
                    "08": {
                        "dist_name": "VELILLE"
                    }
                }
            },
            "01": {
                "prov_name": "CUSCO",
                "districts": {
                    "02": {
                        "dist_name": "CCORCA"
                    },
                    "01": {
                        "dist_name": "CUSCO"
                    },
                    "03": {
                        "dist_name": "POROY"
                    },
                    "04": {
                        "dist_name": "SAN JERONIMO"
                    },
                    "05": {
                        "dist_name": "SAN SEBASTIAN"
                    },
                    "06": {
                        "dist_name": "SANTIAGO"
                    },
                    "07": {
                        "dist_name": "SAYLLA"
                    },
                    "08": {
                        "dist_name": "WANCHAQ"
                    }
                }
            },
            "08": {
                "prov_name": "ESPINAR",
                "districts": {
                    "08": {
                        "dist_name": "ALTO PICHIGUA"
                    },
                    "02": {
                        "dist_name": "CONDOROMA"
                    },
                    "03": {
                        "dist_name": "COPORAQUE"
                    },
                    "01": {
                        "dist_name": "ESPINAR"
                    },
                    "04": {
                        "dist_name": "OCORURO"
                    },
                    "05": {
                        "dist_name": "PALLPATA"
                    },
                    "06": {
                        "dist_name": "PICHIGUA"
                    },
                    "07": {
                        "dist_name": "SUYCKUTAMBO"
                    }
                }
            },
            "09": {
                "prov_name": "LA CONVENCION",
                "districts": {
                    "02": {
                        "dist_name": "ECHARATE"
                    },
                    "03": {
                        "dist_name": "HUAYOPATA"
                    },
                    "07": {
                        "dist_name": "KIMBIRI"
                    },
                    "04": {
                        "dist_name": "MARANURA"
                    },
                    "05": {
                        "dist_name": "OCOBAMBA"
                    },
                    "10": {
                        "dist_name": "PICHARI"
                    },
                    "06": {
                        "dist_name": "QUELLOUNO"
                    },
                    "01": {
                        "dist_name": "SANTA ANA"
                    },
                    "08": {
                        "dist_name": "SANTA TERESA"
                    },
                    "09": {
                        "dist_name": "VILCABAMBA"
                    }
                }
            },
            "10": {
                "prov_name": "PARURO",
                "districts": {
                    "02": {
                        "dist_name": "ACCHA"
                    },
                    "03": {
                        "dist_name": "CCAPI"
                    },
                    "04": {
                        "dist_name": "COLCHA"
                    },
                    "05": {
                        "dist_name": "HUANOQUITE"
                    },
                    "06": {
                        "dist_name": "OMACHA"
                    },
                    "07": {
                        "dist_name": "PACCARITAMBO"
                    },
                    "01": {
                        "dist_name": "PARURO"
                    },
                    "08": {
                        "dist_name": "PILLPINTO"
                    },
                    "09": {
                        "dist_name": "YAURISQUE"
                    }
                }
            },
            "11": {
                "prov_name": "PAUCARTAMBO",
                "districts": {
                    "02": {
                        "dist_name": "CAICAY"
                    },
                    "03": {
                        "dist_name": "CHALLABAMBA"
                    },
                    "04": {
                        "dist_name": "COLQUEPATA"
                    },
                    "05": {
                        "dist_name": "HUANCARANI"
                    },
                    "06": {
                        "dist_name": "KOSÑIPATA"
                    },
                    "01": {
                        "dist_name": "PAUCARTAMBO"
                    }
                }
            },
            "12": {
                "prov_name": "QUISPICANCHI",
                "districts": {
                    "02": {
                        "dist_name": "ANDAHUAYLILLAS"
                    },
                    "03": {
                        "dist_name": "CAMANTI"
                    },
                    "04": {
                        "dist_name": "CCARHUAYO"
                    },
                    "05": {
                        "dist_name": "CCATCA"
                    },
                    "06": {
                        "dist_name": "CUSIPATA"
                    },
                    "07": {
                        "dist_name": "HUARO"
                    },
                    "08": {
                        "dist_name": "LUCRE"
                    },
                    "09": {
                        "dist_name": "MARCAPATA"
                    },
                    "10": {
                        "dist_name": "OCONGATE"
                    },
                    "11": {
                        "dist_name": "OROPESA"
                    },
                    "12": {
                        "dist_name": "QUIQUIJANA"
                    },
                    "01": {
                        "dist_name": "URCOS"
                    }
                }
            },
            "13": {
                "prov_name": "URUBAMBA",
                "districts": {
                    "02": {
                        "dist_name": "CHINCHERO"
                    },
                    "03": {
                        "dist_name": "HUAYLLABAMBA"
                    },
                    "04": {
                        "dist_name": "MACHUPICCHU"
                    },
                    "05": {
                        "dist_name": "MARAS"
                    },
                    "06": {
                        "dist_name": "OLLANTAYTAMBO"
                    },
                    "01": {
                        "dist_name": "URUBAMBA"
                    },
                    "07": {
                        "dist_name": "YUCAY"
                    }
                }
            }
        }
    },
    "09": {
        "dept_name": "HUANCAVELICA",
        "provinces": {
            "02": {
                "prov_name": "ACOBAMBA",
                "districts": {
                    "01": {
                        "dist_name": "ACOBAMBA"
                    },
                    "02": {
                        "dist_name": "ANDABAMBA"
                    },
                    "03": {
                        "dist_name": "ANTA"
                    },
                    "04": {
                        "dist_name": "CAJA"
                    },
                    "05": {
                        "dist_name": "MARCAS"
                    },
                    "06": {
                        "dist_name": "PAUCARA"
                    },
                    "07": {
                        "dist_name": "POMACOCHA"
                    },
                    "08": {
                        "dist_name": "ROSARIO"
                    }
                }
            },
            "03": {
                "prov_name": "ANGARAES",
                "districts": {
                    "02": {
                        "dist_name": "ANCHONGA"
                    },
                    "03": {
                        "dist_name": "CALLANMARCA"
                    },
                    "04": {
                        "dist_name": "CCOCHACCASA"
                    },
                    "05": {
                        "dist_name": "CHINCHO"
                    },
                    "06": {
                        "dist_name": "CONGALLA"
                    },
                    "08": {
                        "dist_name": "HUALLAY-GRANDE"
                    },
                    "07": {
                        "dist_name": "HUANCA-HUANCA"
                    },
                    "09": {
                        "dist_name": "JULCAMARCA"
                    },
                    "01": {
                        "dist_name": "LIRCAY"
                    },
                    "10": {
                        "dist_name": "SAN ANTONIO DE ANTAPARCO"
                    },
                    "11": {
                        "dist_name": "SANTO TOMAS DE PATA"
                    },
                    "12": {
                        "dist_name": "SECCLLA"
                    }
                }
            },
            "04": {
                "prov_name": "CASTROVIRREYNA",
                "districts": {
                    "02": {
                        "dist_name": "ARMA"
                    },
                    "03": {
                        "dist_name": "AURAHUA"
                    },
                    "04": {
                        "dist_name": "CAPILLAS"
                    },
                    "01": {
                        "dist_name": "CASTROVIRREYNA"
                    },
                    "05": {
                        "dist_name": "CHUPAMARCA"
                    },
                    "06": {
                        "dist_name": "COCAS"
                    },
                    "07": {
                        "dist_name": "HUACHOS"
                    },
                    "08": {
                        "dist_name": "HUAMATAMBO"
                    },
                    "09": {
                        "dist_name": "MOLLEPAMPA"
                    },
                    "10": {
                        "dist_name": "SAN JUAN"
                    },
                    "11": {
                        "dist_name": "SANTA ANA"
                    },
                    "12": {
                        "dist_name": "TANTARA"
                    },
                    "13": {
                        "dist_name": "TICRAPO"
                    }
                }
            },
            "05": {
                "prov_name": "CHURCAMPA",
                "districts": {
                    "02": {
                        "dist_name": "ANCO"
                    },
                    "03": {
                        "dist_name": "CHINCHIHUASI"
                    },
                    "01": {
                        "dist_name": "CHURCAMPA"
                    },
                    "04": {
                        "dist_name": "EL CARMEN"
                    },
                    "05": {
                        "dist_name": "LA MERCED"
                    },
                    "06": {
                        "dist_name": "LOCROJA"
                    },
                    "10": {
                        "dist_name": "PACHAMARCA"
                    },
                    "07": {
                        "dist_name": "PAUCARBAMBA"
                    },
                    "08": {
                        "dist_name": "SAN MIGUEL DE MAYOCC"
                    },
                    "09": {
                        "dist_name": "SAN PEDRO DE CORIS"
                    }
                }
            },
            "01": {
                "prov_name": "HUANCAVELICA",
                "districts": {
                    "02": {
                        "dist_name": "ACOBAMBILLA"
                    },
                    "03": {
                        "dist_name": "ACORIA"
                    },
                    "18": {
                        "dist_name": "ASCENSION"
                    },
                    "04": {
                        "dist_name": "CONAYCA"
                    },
                    "05": {
                        "dist_name": "CUENCA"
                    },
                    "06": {
                        "dist_name": "HUACHOCOLPA"
                    },
                    "01": {
                        "dist_name": "HUANCAVELICA"
                    },
                    "19": {
                        "dist_name": "HUANDO"
                    },
                    "07": {
                        "dist_name": "HUAYLLAHUARA"
                    },
                    "08": {
                        "dist_name": "IZCUCHACA"
                    },
                    "09": {
                        "dist_name": "LARIA"
                    },
                    "10": {
                        "dist_name": "MANTA"
                    },
                    "11": {
                        "dist_name": "MARISCAL CACERES"
                    },
                    "12": {
                        "dist_name": "MOYA"
                    },
                    "13": {
                        "dist_name": "NUEVO OCCORO"
                    },
                    "14": {
                        "dist_name": "PALCA"
                    },
                    "15": {
                        "dist_name": "PILCHACA"
                    },
                    "16": {
                        "dist_name": "VILCA"
                    },
                    "17": {
                        "dist_name": "YAULI"
                    }
                }
            },
            "06": {
                "prov_name": "HUAYTARA",
                "districts": {
                    "02": {
                        "dist_name": "AYAVI"
                    },
                    "03": {
                        "dist_name": "CORDOVA"
                    },
                    "04": {
                        "dist_name": "HUAYACUNDO ARMA"
                    },
                    "01": {
                        "dist_name": "HUAYTARA"
                    },
                    "05": {
                        "dist_name": "LARAMARCA"
                    },
                    "06": {
                        "dist_name": "OCOYO"
                    },
                    "07": {
                        "dist_name": "PILPICHACA"
                    },
                    "08": {
                        "dist_name": "QUERCO"
                    },
                    "09": {
                        "dist_name": "QUITO ARMA"
                    },
                    "10": {
                        "dist_name": "SAN ANTONIO DE CUSICANCHA"
                    },
                    "11": {
                        "dist_name": "SAN FRANCISCO DE SANGAYAICO"
                    },
                    "12": {
                        "dist_name": "SAN ISIDRO"
                    },
                    "13": {
                        "dist_name": "SANTIAGO DE CHOCORVOS"
                    },
                    "14": {
                        "dist_name": "SANTIAGO DE QUIRAHUARA"
                    },
                    "15": {
                        "dist_name": "SANTO DOMINGO DE CAPILLAS"
                    },
                    "16": {
                        "dist_name": "TAMBO"
                    }
                }
            },
            "07": {
                "prov_name": "TAYACAJA",
                "districts": {
                    "02": {
                        "dist_name": "ACOSTAMBO"
                    },
                    "03": {
                        "dist_name": "ACRAQUIA"
                    },
                    "04": {
                        "dist_name": "AHUAYCHA"
                    },
                    "05": {
                        "dist_name": "COLCABAMBA"
                    },
                    "06": {
                        "dist_name": "DANIEL HERNANDEZ"
                    },
                    "07": {
                        "dist_name": "HUACHOCOLPA"
                    },
                    "09": {
                        "dist_name": "HUARIBAMBA"
                    },
                    "01": {
                        "dist_name": "PAMPAS"
                    },
                    "11": {
                        "dist_name": "PAZOS"
                    },
                    "13": {
                        "dist_name": "QUISHUAR"
                    },
                    "14": {
                        "dist_name": "SALCABAMBA"
                    },
                    "15": {
                        "dist_name": "SALCAHUASI"
                    },
                    "16": {
                        "dist_name": "SAN MARCOS DE ROCCHAC"
                    },
                    "17": {
                        "dist_name": "SURCUBAMBA"
                    },
                    "18": {
                        "dist_name": "TINTAY PUNCU"
                    },
                    "10": {
                        "dist_name": "ÑAHUIMPUQUIO"
                    }
                }
            }
        }
    },
    "10": {
        "dept_name": "HUANUCO",
        "provinces": {
            "02": {
                "prov_name": "AMBO",
                "districts": {
                    "01": {
                        "dist_name": "AMBO"
                    },
                    "02": {
                        "dist_name": "CAYNA"
                    },
                    "03": {
                        "dist_name": "COLPAS"
                    },
                    "04": {
                        "dist_name": "CONCHAMARCA"
                    },
                    "05": {
                        "dist_name": "HUACAR"
                    },
                    "06": {
                        "dist_name": "SAN FRANCISCO"
                    },
                    "07": {
                        "dist_name": "SAN RAFAEL"
                    },
                    "08": {
                        "dist_name": "TOMAY-KICHWA"
                    }
                }
            },
            "03": {
                "prov_name": "DOS DE MAYO",
                "districts": {
                    "07": {
                        "dist_name": "CHUQUIS"
                    },
                    "01": {
                        "dist_name": "LA UNION"
                    },
                    "11": {
                        "dist_name": "MARIAS"
                    },
                    "13": {
                        "dist_name": "PACHAS"
                    },
                    "16": {
                        "dist_name": "QUIVILLA"
                    },
                    "17": {
                        "dist_name": "RIPAN"
                    },
                    "21": {
                        "dist_name": "SHUNQUI"
                    },
                    "22": {
                        "dist_name": "SILLAPATA"
                    },
                    "23": {
                        "dist_name": "YANAS"
                    }
                }
            },
            "04": {
                "prov_name": "HUACAYBAMBA",
                "districts": {
                    "02": {
                        "dist_name": "CANCHABAMBA"
                    },
                    "03": {
                        "dist_name": "COCHABAMBA"
                    },
                    "01": {
                        "dist_name": "HUACAYBAMBA"
                    },
                    "04": {
                        "dist_name": "PINRA"
                    }
                }
            },
            "05": {
                "prov_name": "HUAMALIES",
                "districts": {
                    "02": {
                        "dist_name": "ARANCAY"
                    },
                    "03": {
                        "dist_name": "CHAVIN DE PARIARCA"
                    },
                    "04": {
                        "dist_name": "JACAS GRANDE"
                    },
                    "05": {
                        "dist_name": "JIRCAN"
                    },
                    "01": {
                        "dist_name": "LLATA"
                    },
                    "06": {
                        "dist_name": "MIRAFLORES"
                    },
                    "07": {
                        "dist_name": "MONZON"
                    },
                    "08": {
                        "dist_name": "PUNCHAO"
                    },
                    "09": {
                        "dist_name": "PUÑOS"
                    },
                    "10": {
                        "dist_name": "SINGA"
                    },
                    "11": {
                        "dist_name": "TANTAMAYO"
                    }
                }
            },
            "01": {
                "prov_name": "HUANUCO",
                "districts": {
                    "02": {
                        "dist_name": "AMARILIS"
                    },
                    "03": {
                        "dist_name": "CHINCHAO"
                    },
                    "04": {
                        "dist_name": "CHURUBAMBA"
                    },
                    "01": {
                        "dist_name": "HUANUCO"
                    },
                    "05": {
                        "dist_name": "MARGOS"
                    },
                    "11": {
                        "dist_name": "PILLCO MARCA"
                    },
                    "06": {
                        "dist_name": "QUISQUI"
                    },
                    "07": {
                        "dist_name": "SAN FRANCISCO DE CAYRAN"
                    },
                    "08": {
                        "dist_name": "SAN PEDRO DE CHAULAN"
                    },
                    "09": {
                        "dist_name": "SANTA MARIA DEL VALLE"
                    },
                    "10": {
                        "dist_name": "YARUMAYO"
                    }
                }
            },
            "10": {
                "prov_name": "LAURICOCHA",
                "districts": {
                    "02": {
                        "dist_name": "BAÑOS"
                    },
                    "01": {
                        "dist_name": "JESUS"
                    },
                    "03": {
                        "dist_name": "JIVIA"
                    },
                    "04": {
                        "dist_name": "QUEROPALCA"
                    },
                    "05": {
                        "dist_name": "RONDOS"
                    },
                    "06": {
                        "dist_name": "SAN FRANCISCO DE ASIS"
                    },
                    "07": {
                        "dist_name": "SAN MIGUEL DE CAURI"
                    }
                }
            },
            "06": {
                "prov_name": "LEONCIO PRADO",
                "districts": {
                    "02": {
                        "dist_name": "DANIEL ALOMIA ROBLES"
                    },
                    "03": {
                        "dist_name": "HERMILIO VALDIZAN"
                    },
                    "04": {
                        "dist_name": "JOSE CRESPO Y CASTILLO"
                    },
                    "05": {
                        "dist_name": "LUYANDO"
                    },
                    "06": {
                        "dist_name": "MARIANO DAMASO BERAUN"
                    },
                    "01": {
                        "dist_name": "RUPA-RUPA"
                    }
                }
            },
            "07": {
                "prov_name": "MARAÑON",
                "districts": {
                    "02": {
                        "dist_name": "CHOLON"
                    },
                    "01": {
                        "dist_name": "HUACRACHUCO"
                    },
                    "03": {
                        "dist_name": "SAN BUENAVENTURA"
                    }
                }
            },
            "08": {
                "prov_name": "PACHITEA",
                "districts": {
                    "02": {
                        "dist_name": "CHAGLLA"
                    },
                    "03": {
                        "dist_name": "MOLINO"
                    },
                    "01": {
                        "dist_name": "PANAO"
                    },
                    "04": {
                        "dist_name": "UMARI"
                    }
                }
            },
            "09": {
                "prov_name": "PUERTO INCA",
                "districts": {
                    "02": {
                        "dist_name": "CODO DEL POZUZO"
                    },
                    "03": {
                        "dist_name": "HONORIA"
                    },
                    "01": {
                        "dist_name": "PUERTO INCA"
                    },
                    "04": {
                        "dist_name": "TOURNAVISTA"
                    },
                    "05": {
                        "dist_name": "YUYAPICHIS"
                    }
                }
            },
            "11": {
                "prov_name": "YAROWILCA",
                "districts": {
                    "04": {
                        "dist_name": "APARICIO POMARES"
                    },
                    "02": {
                        "dist_name": "CAHUAC"
                    },
                    "03": {
                        "dist_name": "CHACABAMBA"
                    },
                    "01": {
                        "dist_name": "CHAVINILLO"
                    },
                    "08": {
                        "dist_name": "CHORAS"
                    },
                    "05": {
                        "dist_name": "JACAS CHICO"
                    },
                    "06": {
                        "dist_name": "OBAS"
                    },
                    "07": {
                        "dist_name": "PAMPAMARCA"
                    }
                }
            }
        }
    },
    "11": {
        "dept_name": "ICA",
        "provinces": {
            "02": {
                "prov_name": "CHINCHA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO LARAN"
                    },
                    "03": {
                        "dist_name": "CHAVIN"
                    },
                    "01": {
                        "dist_name": "CHINCHA ALTA"
                    },
                    "04": {
                        "dist_name": "CHINCHA BAJA"
                    },
                    "05": {
                        "dist_name": "EL CARMEN"
                    },
                    "06": {
                        "dist_name": "GROCIO PRADO"
                    },
                    "07": {
                        "dist_name": "PUEBLO NUEVO"
                    },
                    "08": {
                        "dist_name": "SAN JUAN DE YANAC"
                    },
                    "09": {
                        "dist_name": "SAN PEDRO DE HUACARPANA"
                    },
                    "10": {
                        "dist_name": "SUNAMPE"
                    },
                    "11": {
                        "dist_name": "TAMBO DE MORA"
                    }
                }
            },
            "01": {
                "prov_name": "ICA",
                "districts": {
                    "01": {
                        "dist_name": "ICA"
                    },
                    "02": {
                        "dist_name": "LA TINGUIÑA"
                    },
                    "03": {
                        "dist_name": "LOS AQUIJES"
                    },
                    "04": {
                        "dist_name": "OCUCAJE"
                    },
                    "05": {
                        "dist_name": "PACHACUTEC"
                    },
                    "06": {
                        "dist_name": "PARCONA"
                    },
                    "07": {
                        "dist_name": "PUEBLO NUEVO"
                    },
                    "08": {
                        "dist_name": "SALAS"
                    },
                    "09": {
                        "dist_name": "SAN JOSE DE LOS MOLINOS"
                    },
                    "10": {
                        "dist_name": "SAN JUAN BAUTISTA"
                    },
                    "11": {
                        "dist_name": "SANTIAGO"
                    },
                    "12": {
                        "dist_name": "SUBTANJALLA"
                    },
                    "13": {
                        "dist_name": "TATE"
                    },
                    "14": {
                        "dist_name": "YAUCA DEL ROSARIO"
                    }
                }
            },
            "03": {
                "prov_name": "NAZCA",
                "districts": {
                    "02": {
                        "dist_name": "CHANGUILLO"
                    },
                    "03": {
                        "dist_name": "EL INGENIO"
                    },
                    "04": {
                        "dist_name": "MARCONA"
                    },
                    "01": {
                        "dist_name": "NAZCA"
                    },
                    "05": {
                        "dist_name": "VISTA ALEGRE"
                    }
                }
            },
            "04": {
                "prov_name": "PALPA",
                "districts": {
                    "02": {
                        "dist_name": "LLIPATA"
                    },
                    "01": {
                        "dist_name": "PALPA"
                    },
                    "03": {
                        "dist_name": "RIO GRANDE"
                    },
                    "04": {
                        "dist_name": "SANTA CRUZ"
                    },
                    "05": {
                        "dist_name": "TIBILLO"
                    }
                }
            },
            "05": {
                "prov_name": "PISCO",
                "districts": {
                    "02": {
                        "dist_name": "HUANCANO"
                    },
                    "03": {
                        "dist_name": "HUMAY"
                    },
                    "04": {
                        "dist_name": "INDEPENDENCIA"
                    },
                    "05": {
                        "dist_name": "PARACAS"
                    },
                    "01": {
                        "dist_name": "PISCO"
                    },
                    "06": {
                        "dist_name": "SAN ANDRES"
                    },
                    "07": {
                        "dist_name": "SAN CLEMENTE"
                    },
                    "08": {
                        "dist_name": "TUPAC AMARU INCA"
                    }
                }
            }
        }
    },
    "12": {
        "dept_name": "JUNIN",
        "provinces": {
            "03": {
                "prov_name": "CHANCHAMAYO",
                "districts": {
                    "01": {
                        "dist_name": "CHANCHAMAYO"
                    },
                    "02": {
                        "dist_name": "PERENE"
                    },
                    "03": {
                        "dist_name": "PICHANAQUI"
                    },
                    "04": {
                        "dist_name": "SAN LUIS DE SHUARO"
                    },
                    "05": {
                        "dist_name": "SAN RAMON"
                    },
                    "06": {
                        "dist_name": "VITOC"
                    }
                }
            },
            "09": {
                "prov_name": "CHUPACA",
                "districts": {
                    "02": {
                        "dist_name": "AHUAC"
                    },
                    "03": {
                        "dist_name": "CHONGOS BAJO"
                    },
                    "01": {
                        "dist_name": "CHUPACA"
                    },
                    "04": {
                        "dist_name": "HUACHAC"
                    },
                    "05": {
                        "dist_name": "HUAMANCACA CHICO"
                    },
                    "07": {
                        "dist_name": "SAN JUAN DE JARPA"
                    },
                    "06": {
                        "dist_name": "SAN JUAN DE YSCOS"
                    },
                    "08": {
                        "dist_name": "TRES DE DICIEMBRE"
                    },
                    "09": {
                        "dist_name": "YANACANCHA"
                    }
                }
            },
            "02": {
                "prov_name": "CONCEPCION",
                "districts": {
                    "02": {
                        "dist_name": "ACO"
                    },
                    "03": {
                        "dist_name": "ANDAMARCA"
                    },
                    "04": {
                        "dist_name": "CHAMBARA"
                    },
                    "05": {
                        "dist_name": "COCHAS"
                    },
                    "06": {
                        "dist_name": "COMAS"
                    },
                    "01": {
                        "dist_name": "CONCEPCION"
                    },
                    "07": {
                        "dist_name": "HEROINAS TOLEDO"
                    },
                    "08": {
                        "dist_name": "MANZANARES"
                    },
                    "09": {
                        "dist_name": "MARISCAL CASTILLA"
                    },
                    "10": {
                        "dist_name": "MATAHUASI"
                    },
                    "11": {
                        "dist_name": "MITO"
                    },
                    "12": {
                        "dist_name": "NUEVE DE JULIO"
                    },
                    "13": {
                        "dist_name": "ORCOTUNA"
                    },
                    "14": {
                        "dist_name": "SAN JOSE DE QUERO"
                    },
                    "15": {
                        "dist_name": "SANTA ROSA DE OCOPA"
                    }
                }
            },
            "01": {
                "prov_name": "HUANCAYO",
                "districts": {
                    "04": {
                        "dist_name": "CARHUACALLANGA"
                    },
                    "05": {
                        "dist_name": "CHACAPAMPA"
                    },
                    "06": {
                        "dist_name": "CHICCHE"
                    },
                    "07": {
                        "dist_name": "CHILCA"
                    },
                    "08": {
                        "dist_name": "CHONGOS ALTO"
                    },
                    "11": {
                        "dist_name": "CHUPURO"
                    },
                    "12": {
                        "dist_name": "COLCA"
                    },
                    "13": {
                        "dist_name": "CULLHUAS"
                    },
                    "14": {
                        "dist_name": "EL TAMBO"
                    },
                    "16": {
                        "dist_name": "HUACRAPUQUIO"
                    },
                    "17": {
                        "dist_name": "HUALHUAS"
                    },
                    "19": {
                        "dist_name": "HUANCAN"
                    },
                    "01": {
                        "dist_name": "HUANCAYO"
                    },
                    "20": {
                        "dist_name": "HUASICANCHA"
                    },
                    "21": {
                        "dist_name": "HUAYUCACHI"
                    },
                    "22": {
                        "dist_name": "INGENIO"
                    },
                    "24": {
                        "dist_name": "PARIAHUANCA"
                    },
                    "25": {
                        "dist_name": "PILCOMAYO"
                    },
                    "26": {
                        "dist_name": "PUCARA"
                    },
                    "27": {
                        "dist_name": "QUICHUAY"
                    },
                    "28": {
                        "dist_name": "QUILCAS"
                    },
                    "29": {
                        "dist_name": "SAN AGUSTIN"
                    },
                    "30": {
                        "dist_name": "SAN JERONIMO DE TUNAN"
                    },
                    "35": {
                        "dist_name": "SANTO DOMINGO DE ACOBAMBA"
                    },
                    "33": {
                        "dist_name": "SAPALLANGA"
                    },
                    "32": {
                        "dist_name": "SAÑO"
                    },
                    "34": {
                        "dist_name": "SICAYA"
                    },
                    "36": {
                        "dist_name": "VIQUES"
                    }
                }
            },
            "04": {
                "prov_name": "JAUJA",
                "districts": {
                    "02": {
                        "dist_name": "ACOLLA"
                    },
                    "03": {
                        "dist_name": "APATA"
                    },
                    "04": {
                        "dist_name": "ATAURA"
                    },
                    "05": {
                        "dist_name": "CANCHAYLLO"
                    },
                    "06": {
                        "dist_name": "CURICACA"
                    },
                    "07": {
                        "dist_name": "EL MANTARO"
                    },
                    "08": {
                        "dist_name": "HUAMALI"
                    },
                    "09": {
                        "dist_name": "HUARIPAMPA"
                    },
                    "10": {
                        "dist_name": "HUERTAS"
                    },
                    "11": {
                        "dist_name": "JANJAILLO"
                    },
                    "01": {
                        "dist_name": "JAUJA"
                    },
                    "12": {
                        "dist_name": "JULCAN"
                    },
                    "13": {
                        "dist_name": "LEONOR ORDOÑEZ"
                    },
                    "14": {
                        "dist_name": "LLOCLLAPAMPA"
                    },
                    "15": {
                        "dist_name": "MARCO"
                    },
                    "16": {
                        "dist_name": "MASMA"
                    },
                    "17": {
                        "dist_name": "MASMA CHICCHE"
                    },
                    "18": {
                        "dist_name": "MOLINOS"
                    },
                    "19": {
                        "dist_name": "MONOBAMBA"
                    },
                    "20": {
                        "dist_name": "MUQUI"
                    },
                    "21": {
                        "dist_name": "MUQUIYAUYO"
                    },
                    "22": {
                        "dist_name": "PACA"
                    },
                    "23": {
                        "dist_name": "PACCHA"
                    },
                    "24": {
                        "dist_name": "PANCAN"
                    },
                    "25": {
                        "dist_name": "PARCO"
                    },
                    "26": {
                        "dist_name": "POMACANCHA"
                    },
                    "27": {
                        "dist_name": "RICRAN"
                    },
                    "28": {
                        "dist_name": "SAN LORENZO"
                    },
                    "29": {
                        "dist_name": "SAN PEDRO DE CHUNAN"
                    },
                    "30": {
                        "dist_name": "SAUSA"
                    },
                    "31": {
                        "dist_name": "SINCOS"
                    },
                    "32": {
                        "dist_name": "TUNAN MARCA"
                    },
                    "33": {
                        "dist_name": "YAULI"
                    },
                    "34": {
                        "dist_name": "YAUYOS"
                    }
                }
            },
            "05": {
                "prov_name": "JUNIN",
                "districts": {
                    "02": {
                        "dist_name": "CARHUAMAYO"
                    },
                    "01": {
                        "dist_name": "JUNIN"
                    },
                    "03": {
                        "dist_name": "ONDORES"
                    },
                    "04": {
                        "dist_name": "ULCUMAYO"
                    }
                }
            },
            "06": {
                "prov_name": "SATIPO",
                "districts": {
                    "02": {
                        "dist_name": "COVIRIALI"
                    },
                    "03": {
                        "dist_name": "LLAYLLA"
                    },
                    "04": {
                        "dist_name": "MAZAMARI"
                    },
                    "05": {
                        "dist_name": "PAMPA HERMOSA"
                    },
                    "06": {
                        "dist_name": "PANGOA"
                    },
                    "07": {
                        "dist_name": "RIO NEGRO"
                    },
                    "08": {
                        "dist_name": "RIO TAMBO"
                    },
                    "01": {
                        "dist_name": "SATIPO"
                    }
                }
            },
            "07": {
                "prov_name": "TARMA",
                "districts": {
                    "02": {
                        "dist_name": "ACOBAMBA"
                    },
                    "03": {
                        "dist_name": "HUARICOLCA"
                    },
                    "04": {
                        "dist_name": "HUASAHUASI"
                    },
                    "05": {
                        "dist_name": "LA UNION"
                    },
                    "06": {
                        "dist_name": "PALCA"
                    },
                    "07": {
                        "dist_name": "PALCAMAYO"
                    },
                    "08": {
                        "dist_name": "SAN PEDRO DE CAJAS"
                    },
                    "09": {
                        "dist_name": "TAPO"
                    },
                    "01": {
                        "dist_name": "TARMA"
                    }
                }
            },
            "08": {
                "prov_name": "YAULI",
                "districts": {
                    "02": {
                        "dist_name": "CHACAPALPA"
                    },
                    "03": {
                        "dist_name": "HUAY HUAY"
                    },
                    "01": {
                        "dist_name": "LA OROYA"
                    },
                    "04": {
                        "dist_name": "MARCAPOMACOCHA"
                    },
                    "05": {
                        "dist_name": "MOROCOCHA"
                    },
                    "06": {
                        "dist_name": "PACCHA"
                    },
                    "07": {
                        "dist_name": "SANTA BARBARA DE CARHUACAYAN"
                    },
                    "08": {
                        "dist_name": "SANTA ROSA DE SACCO"
                    },
                    "09": {
                        "dist_name": "SUITUCANCHA"
                    },
                    "10": {
                        "dist_name": "YAULI"
                    }
                }
            }
        }
    },
    "13": {
        "dept_name": "LA LIBERTAD",
        "provinces": {
            "02": {
                "prov_name": "ASCOPE",
                "districts": {
                    "01": {
                        "dist_name": "ASCOPE"
                    },
                    "08": {
                        "dist_name": "CASA GRANDE"
                    },
                    "02": {
                        "dist_name": "CHICAMA"
                    },
                    "03": {
                        "dist_name": "CHOCOPE"
                    },
                    "04": {
                        "dist_name": "MAGDALENA DE CAO"
                    },
                    "05": {
                        "dist_name": "PAIJAN"
                    },
                    "06": {
                        "dist_name": "RAZURI"
                    },
                    "07": {
                        "dist_name": "SANTIAGO DE CAO"
                    }
                }
            },
            "03": {
                "prov_name": "BOLIVAR",
                "districts": {
                    "02": {
                        "dist_name": "BAMBAMARCA"
                    },
                    "01": {
                        "dist_name": "BOLIVAR"
                    },
                    "03": {
                        "dist_name": "CONDORMARCA"
                    },
                    "04": {
                        "dist_name": "LONGOTEA"
                    },
                    "05": {
                        "dist_name": "UCHUMARCA"
                    },
                    "06": {
                        "dist_name": "UCUNCHA"
                    }
                }
            },
            "04": {
                "prov_name": "CHEPEN",
                "districts": {
                    "01": {
                        "dist_name": "CHEPEN"
                    },
                    "02": {
                        "dist_name": "PACANGA"
                    },
                    "03": {
                        "dist_name": "PUEBLO NUEVO"
                    }
                }
            },
            "11": {
                "prov_name": "GRAN CHIMU",
                "districts": {
                    "01": {
                        "dist_name": "CASCAS"
                    },
                    "03": {
                        "dist_name": "COMPIN"
                    },
                    "02": {
                        "dist_name": "LUCMA"
                    },
                    "04": {
                        "dist_name": "SAYAPULLO"
                    }
                }
            },
            "05": {
                "prov_name": "JULCAN",
                "districts": {
                    "02": {
                        "dist_name": "CALAMARCA"
                    },
                    "03": {
                        "dist_name": "CARABAMBA"
                    },
                    "04": {
                        "dist_name": "HUASO"
                    },
                    "01": {
                        "dist_name": "JULCAN"
                    }
                }
            },
            "06": {
                "prov_name": "OTUZCO",
                "districts": {
                    "02": {
                        "dist_name": "AGALLPAMPA"
                    },
                    "04": {
                        "dist_name": "CHARAT"
                    },
                    "05": {
                        "dist_name": "HUARANCHAL"
                    },
                    "06": {
                        "dist_name": "LA CUESTA"
                    },
                    "08": {
                        "dist_name": "MACHE"
                    },
                    "01": {
                        "dist_name": "OTUZCO"
                    },
                    "10": {
                        "dist_name": "PARANDAY"
                    },
                    "11": {
                        "dist_name": "SALPO"
                    },
                    "13": {
                        "dist_name": "SINSICAP"
                    },
                    "14": {
                        "dist_name": "USQUIL"
                    }
                }
            },
            "07": {
                "prov_name": "PACASMAYO",
                "districts": {
                    "02": {
                        "dist_name": "GUADALUPE"
                    },
                    "03": {
                        "dist_name": "JEQUETEPEQUE"
                    },
                    "04": {
                        "dist_name": "PACASMAYO"
                    },
                    "05": {
                        "dist_name": "SAN JOSE"
                    },
                    "01": {
                        "dist_name": "SAN PEDRO DE LLOC"
                    }
                }
            },
            "08": {
                "prov_name": "PATAZ",
                "districts": {
                    "02": {
                        "dist_name": "BULDIBUYO"
                    },
                    "03": {
                        "dist_name": "CHILLIA"
                    },
                    "04": {
                        "dist_name": "HUANCASPATA"
                    },
                    "05": {
                        "dist_name": "HUAYLILLAS"
                    },
                    "06": {
                        "dist_name": "HUAYO"
                    },
                    "07": {
                        "dist_name": "ONGON"
                    },
                    "08": {
                        "dist_name": "PARCOY"
                    },
                    "09": {
                        "dist_name": "PATAZ"
                    },
                    "10": {
                        "dist_name": "PIAS"
                    },
                    "11": {
                        "dist_name": "SANTIAGO DE CHALLAS"
                    },
                    "12": {
                        "dist_name": "TAURIJA"
                    },
                    "01": {
                        "dist_name": "TAYABAMBA"
                    },
                    "13": {
                        "dist_name": "URPAY"
                    }
                }
            },
            "09": {
                "prov_name": "SANCHEZ CARRION",
                "districts": {
                    "02": {
                        "dist_name": "CHUGAY"
                    },
                    "03": {
                        "dist_name": "COCHORCO"
                    },
                    "04": {
                        "dist_name": "CURGOS"
                    },
                    "01": {
                        "dist_name": "HUAMACHUCO"
                    },
                    "05": {
                        "dist_name": "MARCABAL"
                    },
                    "06": {
                        "dist_name": "SANAGORAN"
                    },
                    "07": {
                        "dist_name": "SARIN"
                    },
                    "08": {
                        "dist_name": "SARTIMBAMBA"
                    }
                }
            },
            "10": {
                "prov_name": "SANTIAGO DE CHUCO",
                "districts": {
                    "02": {
                        "dist_name": "ANGASMARCA"
                    },
                    "03": {
                        "dist_name": "CACHICADAN"
                    },
                    "04": {
                        "dist_name": "MOLLEBAMBA"
                    },
                    "05": {
                        "dist_name": "MOLLEPATA"
                    },
                    "06": {
                        "dist_name": "QUIRUVILCA"
                    },
                    "07": {
                        "dist_name": "SANTA CRUZ DE CHUCA"
                    },
                    "01": {
                        "dist_name": "SANTIAGO DE CHUCO"
                    },
                    "08": {
                        "dist_name": "SITABAMBA"
                    }
                }
            },
            "01": {
                "prov_name": "TRUJILLO",
                "districts": {
                    "02": {
                        "dist_name": "EL PORVENIR"
                    },
                    "03": {
                        "dist_name": "FLORENCIA DE MORA"
                    },
                    "04": {
                        "dist_name": "HUANCHACO"
                    },
                    "05": {
                        "dist_name": "LA ESPERANZA"
                    },
                    "06": {
                        "dist_name": "LAREDO"
                    },
                    "07": {
                        "dist_name": "MOCHE"
                    },
                    "08": {
                        "dist_name": "POROTO"
                    },
                    "09": {
                        "dist_name": "SALAVERRY"
                    },
                    "10": {
                        "dist_name": "SIMBAL"
                    },
                    "01": {
                        "dist_name": "TRUJILLO"
                    },
                    "11": {
                        "dist_name": "VICTOR LARCO HERRERA"
                    }
                }
            },
            "12": {
                "prov_name": "VIRU",
                "districts": {
                    "02": {
                        "dist_name": "CHAO"
                    },
                    "03": {
                        "dist_name": "GUADALUPITO"
                    },
                    "01": {
                        "dist_name": "VIRU"
                    }
                }
            }
        }
    },
    "14": {
        "dept_name": "LAMBAYEQUE",
        "provinces": {
            "01": {
                "prov_name": "CHICLAYO",
                "districts": {
                    "16": {
                        "dist_name": "CAYALTI"
                    },
                    "01": {
                        "dist_name": "CHICLAYO"
                    },
                    "02": {
                        "dist_name": "CHONGOYAPE"
                    },
                    "03": {
                        "dist_name": "ETEN"
                    },
                    "04": {
                        "dist_name": "ETEN PUERTO"
                    },
                    "05": {
                        "dist_name": "JOSE LEONARDO ORTIZ"
                    },
                    "06": {
                        "dist_name": "LA VICTORIA"
                    },
                    "07": {
                        "dist_name": "LAGUNAS"
                    },
                    "08": {
                        "dist_name": "MONSEFU"
                    },
                    "09": {
                        "dist_name": "NUEVA ARICA"
                    },
                    "10": {
                        "dist_name": "OYOTUN"
                    },
                    "17": {
                        "dist_name": "PATAPO"
                    },
                    "11": {
                        "dist_name": "PICSI"
                    },
                    "12": {
                        "dist_name": "PIMENTEL"
                    },
                    "18": {
                        "dist_name": "POMALCA"
                    },
                    "19": {
                        "dist_name": "PUCALA"
                    },
                    "13": {
                        "dist_name": "REQUE"
                    },
                    "14": {
                        "dist_name": "SANTA ROSA"
                    },
                    "15": {
                        "dist_name": "SAÑA"
                    },
                    "20": {
                        "dist_name": "TUMAN"
                    }
                }
            },
            "02": {
                "prov_name": "FERREÑAFE",
                "districts": {
                    "02": {
                        "dist_name": "CAÑARIS"
                    },
                    "01": {
                        "dist_name": "FERREÑAFE"
                    },
                    "03": {
                        "dist_name": "INCAHUASI"
                    },
                    "04": {
                        "dist_name": "MANUEL ANTONIO MESONES MURO"
                    },
                    "05": {
                        "dist_name": "PITIPO"
                    },
                    "06": {
                        "dist_name": "PUEBLO NUEVO"
                    }
                }
            },
            "03": {
                "prov_name": "LAMBAYEQUE",
                "districts": {
                    "02": {
                        "dist_name": "CHOCHOPE"
                    },
                    "03": {
                        "dist_name": "ILLIMO"
                    },
                    "04": {
                        "dist_name": "JAYANCA"
                    },
                    "01": {
                        "dist_name": "LAMBAYEQUE"
                    },
                    "05": {
                        "dist_name": "MOCHUMI"
                    },
                    "06": {
                        "dist_name": "MORROPE"
                    },
                    "07": {
                        "dist_name": "MOTUPE"
                    },
                    "08": {
                        "dist_name": "OLMOS"
                    },
                    "09": {
                        "dist_name": "PACORA"
                    },
                    "10": {
                        "dist_name": "SALAS"
                    },
                    "11": {
                        "dist_name": "SAN JOSE"
                    },
                    "12": {
                        "dist_name": "TUCUME"
                    }
                }
            }
        }
    },
    "15": {
        "dept_name": "LIMA",
        "provinces": {
            "02": {
                "prov_name": "BARRANCA",
                "districts": {
                    "01": {
                        "dist_name": "BARRANCA"
                    },
                    "02": {
                        "dist_name": "PARAMONGA"
                    },
                    "03": {
                        "dist_name": "PATIVILCA"
                    },
                    "04": {
                        "dist_name": "SUPE"
                    },
                    "05": {
                        "dist_name": "SUPE PUERTO"
                    }
                }
            },
            "03": {
                "prov_name": "CAJATAMBO",
                "districts": {
                    "01": {
                        "dist_name": "CAJATAMBO"
                    },
                    "02": {
                        "dist_name": "COPA"
                    },
                    "03": {
                        "dist_name": "GORGOR"
                    },
                    "04": {
                        "dist_name": "HUANCAPON"
                    },
                    "05": {
                        "dist_name": "MANAS"
                    }
                }
            },
            "04": {
                "prov_name": "CANTA",
                "districts": {
                    "02": {
                        "dist_name": "ARAHUAY"
                    },
                    "01": {
                        "dist_name": "CANTA"
                    },
                    "03": {
                        "dist_name": "HUAMANTANGA"
                    },
                    "04": {
                        "dist_name": "HUAROS"
                    },
                    "05": {
                        "dist_name": "LACHAQUI"
                    },
                    "06": {
                        "dist_name": "SAN BUENAVENTURA"
                    },
                    "07": {
                        "dist_name": "SANTA ROSA DE QUIVES"
                    }
                }
            },
            "05": {
                "prov_name": "CAÑETE",
                "districts": {
                    "02": {
                        "dist_name": "ASIA"
                    },
                    "03": {
                        "dist_name": "CALANGO"
                    },
                    "04": {
                        "dist_name": "CERRO AZUL"
                    },
                    "05": {
                        "dist_name": "CHILCA"
                    },
                    "06": {
                        "dist_name": "COAYLLO"
                    },
                    "07": {
                        "dist_name": "IMPERIAL"
                    },
                    "08": {
                        "dist_name": "LUNAHUANA"
                    },
                    "09": {
                        "dist_name": "MALA"
                    },
                    "10": {
                        "dist_name": "NUEVO IMPERIAL"
                    },
                    "11": {
                        "dist_name": "PACARAN"
                    },
                    "12": {
                        "dist_name": "QUILMANA"
                    },
                    "13": {
                        "dist_name": "SAN ANTONIO"
                    },
                    "14": {
                        "dist_name": "SAN LUIS"
                    },
                    "01": {
                        "dist_name": "SAN VICENTE DE CAÑETE"
                    },
                    "15": {
                        "dist_name": "SANTA CRUZ DE FLORES"
                    },
                    "16": {
                        "dist_name": "ZUÑIGA"
                    }
                }
            },
            "06": {
                "prov_name": "HUARAL",
                "districts": {
                    "02": {
                        "dist_name": "ATAVILLOS ALTO"
                    },
                    "03": {
                        "dist_name": "ATAVILLOS BAJO"
                    },
                    "04": {
                        "dist_name": "AUCALLAMA"
                    },
                    "05": {
                        "dist_name": "CHANCAY"
                    },
                    "01": {
                        "dist_name": "HUARAL"
                    },
                    "06": {
                        "dist_name": "IHUARI"
                    },
                    "07": {
                        "dist_name": "LAMPIAN"
                    },
                    "08": {
                        "dist_name": "PACARAOS"
                    },
                    "09": {
                        "dist_name": "SAN MIGUEL DE ACOS"
                    },
                    "10": {
                        "dist_name": "SANTA CRUZ DE ANDAMARCA"
                    },
                    "11": {
                        "dist_name": "SUMBILCA"
                    },
                    "12": {
                        "dist_name": "VEINTISIETE DE NOVIEMBRE"
                    }
                }
            },
            "07": {
                "prov_name": "HUAROCHIRI",
                "districts": {
                    "02": {
                        "dist_name": "ANTIOQUIA"
                    },
                    "03": {
                        "dist_name": "CALLAHUANCA"
                    },
                    "04": {
                        "dist_name": "CARAMPOMA"
                    },
                    "05": {
                        "dist_name": "CHICLA"
                    },
                    "06": {
                        "dist_name": "CUENCA"
                    },
                    "07": {
                        "dist_name": "HUACHUPAMPA"
                    },
                    "08": {
                        "dist_name": "HUANZA"
                    },
                    "09": {
                        "dist_name": "HUAROCHIRI"
                    },
                    "10": {
                        "dist_name": "LAHUAYTAMBO"
                    },
                    "11": {
                        "dist_name": "LANGA"
                    },
                    "12": {
                        "dist_name": "LARAOS"
                    },
                    "13": {
                        "dist_name": "MARIATANA"
                    },
                    "01": {
                        "dist_name": "MATUCANA"
                    },
                    "14": {
                        "dist_name": "RICARDO PALMA"
                    },
                    "15": {
                        "dist_name": "SAN ANDRES DE TUPICOCHA"
                    },
                    "16": {
                        "dist_name": "SAN ANTONIO"
                    },
                    "17": {
                        "dist_name": "SAN BARTOLOME"
                    },
                    "18": {
                        "dist_name": "SAN DAMIAN"
                    },
                    "19": {
                        "dist_name": "SAN JUAN DE IRIS"
                    },
                    "20": {
                        "dist_name": "SAN JUAN DE TANTARANCHE"
                    },
                    "21": {
                        "dist_name": "SAN LORENZO DE QUINTI"
                    },
                    "22": {
                        "dist_name": "SAN MATEO"
                    },
                    "23": {
                        "dist_name": "SAN MATEO DE OTAO"
                    },
                    "24": {
                        "dist_name": "SAN PEDRO DE CASTA"
                    },
                    "25": {
                        "dist_name": "SAN PEDRO DE HUANCAYRE"
                    },
                    "26": {
                        "dist_name": "SANGALLAYA"
                    },
                    "27": {
                        "dist_name": "SANTA CRUZ DE COCACHACRA"
                    },
                    "28": {
                        "dist_name": "SANTA EULALIA"
                    },
                    "29": {
                        "dist_name": "SANTIAGO DE ANCHUCAYA"
                    },
                    "30": {
                        "dist_name": "SANTIAGO DE TUNA"
                    },
                    "31": {
                        "dist_name": "SANTO DOMINGO DE LOS OLLEROS"
                    },
                    "32": {
                        "dist_name": "SURCO"
                    }
                }
            },
            "08": {
                "prov_name": "HUAURA",
                "districts": {
                    "02": {
                        "dist_name": "AMBAR"
                    },
                    "03": {
                        "dist_name": "CALETA DE CARQUIN"
                    },
                    "04": {
                        "dist_name": "CHECRAS"
                    },
                    "01": {
                        "dist_name": "HUACHO"
                    },
                    "05": {
                        "dist_name": "HUALMAY"
                    },
                    "06": {
                        "dist_name": "HUAURA"
                    },
                    "07": {
                        "dist_name": "LEONCIO PRADO"
                    },
                    "08": {
                        "dist_name": "PACCHO"
                    },
                    "09": {
                        "dist_name": "SANTA LEONOR"
                    },
                    "10": {
                        "dist_name": "SANTA MARIA"
                    },
                    "11": {
                        "dist_name": "SAYAN"
                    },
                    "12": {
                        "dist_name": "VEGUETA"
                    }
                }
            },
            "01": {
                "prov_name": "LIMA",
                "districts": {
                    "02": {
                        "dist_name": "ANCON"
                    },
                    "03": {
                        "dist_name": "ATE"
                    },
                    "04": {
                        "dist_name": "BARRANCO"
                    },
                    "05": {
                        "dist_name": "BREÑA"
                    },
                    "06": {
                        "dist_name": "CARABAYLLO"
                    },
                    "07": {
                        "dist_name": "CHACLACAYO"
                    },
                    "08": {
                        "dist_name": "CHORRILLOS"
                    },
                    "09": {
                        "dist_name": "CIENEGUILLA"
                    },
                    "10": {
                        "dist_name": "COMAS"
                    },
                    "11": {
                        "dist_name": "EL AGUSTINO"
                    },
                    "12": {
                        "dist_name": "INDEPENDENCIA"
                    },
                    "13": {
                        "dist_name": "JESUS MARIA"
                    },
                    "14": {
                        "dist_name": "LA MOLINA"
                    },
                    "15": {
                        "dist_name": "LA VICTORIA"
                    },
                    "01": {
                        "dist_name": "LIMA"
                    },
                    "16": {
                        "dist_name": "LINCE"
                    },
                    "17": {
                        "dist_name": "LOS OLIVOS"
                    },
                    "18": {
                        "dist_name": "LURIGANCHO"
                    },
                    "19": {
                        "dist_name": "LURIN"
                    },
                    "20": {
                        "dist_name": "MAGDALENA DEL MAR"
                    },
                    "22": {
                        "dist_name": "MIRAFLORES"
                    },
                    "23": {
                        "dist_name": "PACHACAMAC"
                    },
                    "24": {
                        "dist_name": "PUCUSANA"
                    },
                    "21": {
                        "dist_name": "PUEBLO LIBRE"
                    },
                    "25": {
                        "dist_name": "PUENTE PIEDRA"
                    },
                    "26": {
                        "dist_name": "PUNTA HERMOSA"
                    },
                    "27": {
                        "dist_name": "PUNTA NEGRA"
                    },
                    "28": {
                        "dist_name": "RIMAC"
                    },
                    "29": {
                        "dist_name": "SAN BARTOLO"
                    },
                    "30": {
                        "dist_name": "SAN BORJA"
                    },
                    "31": {
                        "dist_name": "SAN ISIDRO"
                    },
                    "32": {
                        "dist_name": "SAN JUAN DE LURIGANCHO"
                    },
                    "33": {
                        "dist_name": "SAN JUAN DE MIRAFLORES"
                    },
                    "34": {
                        "dist_name": "SAN LUIS"
                    },
                    "35": {
                        "dist_name": "SAN MARTIN DE PORRES"
                    },
                    "36": {
                        "dist_name": "SAN MIGUEL"
                    },
                    "37": {
                        "dist_name": "SANTA ANITA"
                    },
                    "38": {
                        "dist_name": "SANTA MARIA DEL MAR"
                    },
                    "39": {
                        "dist_name": "SANTA ROSA"
                    },
                    "40": {
                        "dist_name": "SANTIAGO DE SURCO"
                    },
                    "41": {
                        "dist_name": "SURQUILLO"
                    },
                    "42": {
                        "dist_name": "VILLA EL SALVADOR"
                    },
                    "43": {
                        "dist_name": "VILLA MARIA DEL TRIUNFO"
                    }
                }
            },
            "09": {
                "prov_name": "OYON",
                "districts": {
                    "02": {
                        "dist_name": "ANDAJES"
                    },
                    "03": {
                        "dist_name": "CAUJUL"
                    },
                    "04": {
                        "dist_name": "COCHAMARCA"
                    },
                    "05": {
                        "dist_name": "NAVAN"
                    },
                    "01": {
                        "dist_name": "OYON"
                    },
                    "06": {
                        "dist_name": "PACHANGARA"
                    }
                }
            },
            "10": {
                "prov_name": "YAUYOS",
                "districts": {
                    "02": {
                        "dist_name": "ALIS"
                    },
                    "03": {
                        "dist_name": "ALLAUCA"
                    },
                    "04": {
                        "dist_name": "AYAVIRI"
                    },
                    "05": {
                        "dist_name": "AZANGARO"
                    },
                    "06": {
                        "dist_name": "CACRA"
                    },
                    "07": {
                        "dist_name": "CARANIA"
                    },
                    "08": {
                        "dist_name": "CATAHUASI"
                    },
                    "09": {
                        "dist_name": "CHOCOS"
                    },
                    "10": {
                        "dist_name": "COCHAS"
                    },
                    "11": {
                        "dist_name": "COLONIA"
                    },
                    "12": {
                        "dist_name": "HONGOS"
                    },
                    "13": {
                        "dist_name": "HUAMPARA"
                    },
                    "14": {
                        "dist_name": "HUANCAYA"
                    },
                    "15": {
                        "dist_name": "HUANGASCAR"
                    },
                    "16": {
                        "dist_name": "HUANTAN"
                    },
                    "17": {
                        "dist_name": "HUAÑEC"
                    },
                    "18": {
                        "dist_name": "LARAOS"
                    },
                    "19": {
                        "dist_name": "LINCHA"
                    },
                    "20": {
                        "dist_name": "MADEAN"
                    },
                    "21": {
                        "dist_name": "MIRAFLORES"
                    },
                    "22": {
                        "dist_name": "OMAS"
                    },
                    "23": {
                        "dist_name": "PUTINZA"
                    },
                    "24": {
                        "dist_name": "QUINCHES"
                    },
                    "25": {
                        "dist_name": "QUINOCAY"
                    },
                    "26": {
                        "dist_name": "SAN JOAQUIN"
                    },
                    "27": {
                        "dist_name": "SAN PEDRO DE PILAS"
                    },
                    "28": {
                        "dist_name": "TANTA"
                    },
                    "29": {
                        "dist_name": "TAURIPAMPA"
                    },
                    "30": {
                        "dist_name": "TOMAS"
                    },
                    "31": {
                        "dist_name": "TUPE"
                    },
                    "33": {
                        "dist_name": "VITIS"
                    },
                    "32": {
                        "dist_name": "VIÑAC"
                    },
                    "01": {
                        "dist_name": "YAUYOS"
                    }
                }
            }
        }
    },
    "16": {
        "dept_name": "LORETO",
        "provinces": {
            "02": {
                "prov_name": "ALTO AMAZONAS",
                "districts": {
                    "02": {
                        "dist_name": "BALSAPUERTO"
                    },
                    "05": {
                        "dist_name": "JEBEROS"
                    },
                    "06": {
                        "dist_name": "LAGUNAS"
                    },
                    "10": {
                        "dist_name": "SANTA CRUZ"
                    },
                    "11": {
                        "dist_name": "TENIENTE CESAR LOPEZ ROJAS"
                    },
                    "01": {
                        "dist_name": "YURIMAGUAS"
                    }
                }
            },
            "07": {
                "prov_name": "DATEM DEL MARAÑON",
                "districts": {
                    "06": {
                        "dist_name": "ANDOAS"
                    },
                    "01": {
                        "dist_name": "BARRANCA"
                    },
                    "02": {
                        "dist_name": "CAHUAPANAS"
                    },
                    "03": {
                        "dist_name": "MANSERICHE"
                    },
                    "04": {
                        "dist_name": "MORONA"
                    },
                    "05": {
                        "dist_name": "PASTAZA"
                    }
                }
            },
            "03": {
                "prov_name": "LORETO",
                "districts": {
                    "01": {
                        "dist_name": "NAUTA"
                    },
                    "02": {
                        "dist_name": "PARINARI"
                    },
                    "03": {
                        "dist_name": "TIGRE"
                    },
                    "04": {
                        "dist_name": "TROMPETEROS"
                    },
                    "05": {
                        "dist_name": "URARINAS"
                    }
                }
            },
            "04": {
                "prov_name": "MARISCAL RAMON CASTILLA",
                "districts": {
                    "02": {
                        "dist_name": "PEBAS"
                    },
                    "01": {
                        "dist_name": "RAMON CASTILLA"
                    },
                    "04": {
                        "dist_name": "SAN PABLO"
                    },
                    "03": {
                        "dist_name": "YAVARI"
                    }
                }
            },
            "01": {
                "prov_name": "MAYNAS",
                "districts": {
                    "02": {
                        "dist_name": "ALTO NANAY"
                    },
                    "12": {
                        "dist_name": "BELEN"
                    },
                    "03": {
                        "dist_name": "FERNANDO LORES"
                    },
                    "04": {
                        "dist_name": "INDIANA"
                    },
                    "01": {
                        "dist_name": "IQUITOS"
                    },
                    "05": {
                        "dist_name": "LAS AMAZONAS"
                    },
                    "06": {
                        "dist_name": "MAZAN"
                    },
                    "07": {
                        "dist_name": "NAPO"
                    },
                    "08": {
                        "dist_name": "PUNCHANA"
                    },
                    "09": {
                        "dist_name": "PUTUMAYO"
                    },
                    "13": {
                        "dist_name": "SAN JUAN BAUTISTA"
                    },
                    "14": {
                        "dist_name": "TENIENTE MANUEL CLAVERO"
                    },
                    "10": {
                        "dist_name": "TORRES CAUSANA"
                    }
                }
            },
            "05": {
                "prov_name": "REQUENA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO TAPICHE"
                    },
                    "03": {
                        "dist_name": "CAPELO"
                    },
                    "04": {
                        "dist_name": "EMILIO SAN MARTIN"
                    },
                    "10": {
                        "dist_name": "JENARO HERRERA"
                    },
                    "05": {
                        "dist_name": "MAQUIA"
                    },
                    "06": {
                        "dist_name": "PUINAHUA"
                    },
                    "01": {
                        "dist_name": "REQUENA"
                    },
                    "07": {
                        "dist_name": "SAQUENA"
                    },
                    "08": {
                        "dist_name": "SOPLIN"
                    },
                    "09": {
                        "dist_name": "TAPICHE"
                    },
                    "11": {
                        "dist_name": "YAQUERANA"
                    }
                }
            },
            "06": {
                "prov_name": "UCAYALI",
                "districts": {
                    "01": {
                        "dist_name": "CONTAMANA"
                    },
                    "02": {
                        "dist_name": "INAHUAYA"
                    },
                    "03": {
                        "dist_name": "PADRE MARQUEZ"
                    },
                    "04": {
                        "dist_name": "PAMPA HERMOSA"
                    },
                    "05": {
                        "dist_name": "SARAYACU"
                    },
                    "06": {
                        "dist_name": "VARGAS GUERRA"
                    }
                }
            }
        }
    },
    "17": {
        "dept_name": "MADRE DE DIOS",
        "provinces": {
            "02": {
                "prov_name": "MANU",
                "districts": {
                    "02": {
                        "dist_name": "FITZCARRALD"
                    },
                    "04": {
                        "dist_name": "HUEPETUHE"
                    },
                    "03": {
                        "dist_name": "MADRE DE DIOS"
                    },
                    "01": {
                        "dist_name": "MANU"
                    }
                }
            },
            "03": {
                "prov_name": "TAHUAMANU",
                "districts": {
                    "02": {
                        "dist_name": "IBERIA"
                    },
                    "01": {
                        "dist_name": "IÑAPARI"
                    },
                    "03": {
                        "dist_name": "TAHUAMANU"
                    }
                }
            },
            "01": {
                "prov_name": "TAMBOPATA",
                "districts": {
                    "02": {
                        "dist_name": "INAMBARI"
                    },
                    "04": {
                        "dist_name": "LABERINTO"
                    },
                    "03": {
                        "dist_name": "LAS PIEDRAS"
                    },
                    "01": {
                        "dist_name": "TAMBOPATA"
                    }
                }
            }
        }
    },
    "18": {
        "dept_name": "MOQUEGUA",
        "provinces": {
            "02": {
                "prov_name": "GENERAL SANCHEZ CERRO",
                "districts": {
                    "02": {
                        "dist_name": "CHOJATA"
                    },
                    "03": {
                        "dist_name": "COALAQUE"
                    },
                    "04": {
                        "dist_name": "ICHUÑA"
                    },
                    "05": {
                        "dist_name": "LA CAPILLA"
                    },
                    "06": {
                        "dist_name": "LLOQUE"
                    },
                    "07": {
                        "dist_name": "MATALAQUE"
                    },
                    "01": {
                        "dist_name": "OMATE"
                    },
                    "08": {
                        "dist_name": "PUQUINA"
                    },
                    "09": {
                        "dist_name": "QUINISTAQUILLAS"
                    },
                    "10": {
                        "dist_name": "UBINAS"
                    },
                    "11": {
                        "dist_name": "YUNGA"
                    }
                }
            },
            "03": {
                "prov_name": "ILO",
                "districts": {
                    "02": {
                        "dist_name": "EL ALGARROBAL"
                    },
                    "01": {
                        "dist_name": "ILO"
                    },
                    "03": {
                        "dist_name": "PACOCHA"
                    }
                }
            },
            "01": {
                "prov_name": "MARISCAL NIETO",
                "districts": {
                    "02": {
                        "dist_name": "CARUMAS"
                    },
                    "03": {
                        "dist_name": "CUCHUMBAYA"
                    },
                    "01": {
                        "dist_name": "MOQUEGUA"
                    },
                    "04": {
                        "dist_name": "SAMEGUA"
                    },
                    "05": {
                        "dist_name": "SAN CRISTOBAL"
                    },
                    "06": {
                        "dist_name": "TORATA"
                    }
                }
            }
        }
    },
    "19": {
        "dept_name": "PASCO",
        "provinces": {
            "02": {
                "prov_name": "DANIEL ALCIDES CARRION",
                "districts": {
                    "02": {
                        "dist_name": "CHACAYAN"
                    },
                    "03": {
                        "dist_name": "GOYLLARISQUIZGA"
                    },
                    "04": {
                        "dist_name": "PAUCAR"
                    },
                    "05": {
                        "dist_name": "SAN PEDRO DE PILLAO"
                    },
                    "06": {
                        "dist_name": "SANTA ANA DE TUSI"
                    },
                    "07": {
                        "dist_name": "TAPUC"
                    },
                    "08": {
                        "dist_name": "VILCABAMBA"
                    },
                    "01": {
                        "dist_name": "YANAHUANCA"
                    }
                }
            },
            "03": {
                "prov_name": "OXAPAMPA",
                "districts": {
                    "02": {
                        "dist_name": "CHONTABAMBA"
                    },
                    "03": {
                        "dist_name": "HUANCABAMBA"
                    },
                    "01": {
                        "dist_name": "OXAPAMPA"
                    },
                    "04": {
                        "dist_name": "PALCAZU"
                    },
                    "05": {
                        "dist_name": "POZUZO"
                    },
                    "06": {
                        "dist_name": "PUERTO BERMUDEZ"
                    },
                    "07": {
                        "dist_name": "VILLA RICA"
                    }
                }
            },
            "01": {
                "prov_name": "PASCO",
                "districts": {
                    "01": {
                        "dist_name": "CHAUPIMARCA"
                    },
                    "02": {
                        "dist_name": "HUACHON"
                    },
                    "03": {
                        "dist_name": "HUARIACA"
                    },
                    "04": {
                        "dist_name": "HUAYLLAY"
                    },
                    "05": {
                        "dist_name": "NINACACA"
                    },
                    "06": {
                        "dist_name": "PALLANCHACRA"
                    },
                    "07": {
                        "dist_name": "PAUCARTAMBO"
                    },
                    "08": {
                        "dist_name": "SAN FCO DE ASIS DE YARUSYACAN"
                    },
                    "09": {
                        "dist_name": "SIMON BOLIVAR"
                    },
                    "10": {
                        "dist_name": "TICLACAYAN"
                    },
                    "11": {
                        "dist_name": "TINYAHUARCO"
                    },
                    "12": {
                        "dist_name": "VICCO"
                    },
                    "13": {
                        "dist_name": "YANACANCHA"
                    }
                }
            }
        }
    },
    "20": {
        "dept_name": "PIURA",
        "provinces": {
            "02": {
                "prov_name": "AYABACA",
                "districts": {
                    "01": {
                        "dist_name": "AYABACA"
                    },
                    "02": {
                        "dist_name": "FRIAS"
                    },
                    "03": {
                        "dist_name": "JILILI"
                    },
                    "04": {
                        "dist_name": "LAGUNAS"
                    },
                    "05": {
                        "dist_name": "MONTERO"
                    },
                    "06": {
                        "dist_name": "PACAIPAMPA"
                    },
                    "07": {
                        "dist_name": "PAIMAS"
                    },
                    "08": {
                        "dist_name": "SAPILLICA"
                    },
                    "09": {
                        "dist_name": "SICCHEZ"
                    },
                    "10": {
                        "dist_name": "SUYO"
                    }
                }
            },
            "03": {
                "prov_name": "HUANCABAMBA",
                "districts": {
                    "02": {
                        "dist_name": "CANCHAQUE"
                    },
                    "03": {
                        "dist_name": "EL CARMEN DE LA FRONTERA"
                    },
                    "01": {
                        "dist_name": "HUANCABAMBA"
                    },
                    "04": {
                        "dist_name": "HUARMACA"
                    },
                    "05": {
                        "dist_name": "LALAQUIZ"
                    },
                    "06": {
                        "dist_name": "SAN MIGUEL DE EL FAIQUE"
                    },
                    "07": {
                        "dist_name": "SONDOR"
                    },
                    "08": {
                        "dist_name": "SONDORILLO"
                    }
                }
            },
            "04": {
                "prov_name": "MORROPON",
                "districts": {
                    "02": {
                        "dist_name": "BUENOS AIRES"
                    },
                    "03": {
                        "dist_name": "CHALACO"
                    },
                    "01": {
                        "dist_name": "CHULUCANAS"
                    },
                    "04": {
                        "dist_name": "LA MATANZA"
                    },
                    "05": {
                        "dist_name": "MORROPON"
                    },
                    "06": {
                        "dist_name": "SALITRAL"
                    },
                    "07": {
                        "dist_name": "SAN JUAN DE BIGOTE"
                    },
                    "08": {
                        "dist_name": "SANTA CATALINA DE MOSSA"
                    },
                    "09": {
                        "dist_name": "SANTO DOMINGO"
                    },
                    "10": {
                        "dist_name": "YAMANGO"
                    }
                }
            },
            "05": {
                "prov_name": "PAITA",
                "districts": {
                    "02": {
                        "dist_name": "AMOTAPE"
                    },
                    "03": {
                        "dist_name": "ARENAL"
                    },
                    "04": {
                        "dist_name": "COLAN"
                    },
                    "05": {
                        "dist_name": "LA HUACA"
                    },
                    "01": {
                        "dist_name": "PAITA"
                    },
                    "06": {
                        "dist_name": "TAMARINDO"
                    },
                    "07": {
                        "dist_name": "VICHAYAL"
                    }
                }
            },
            "01": {
                "prov_name": "PIURA",
                "districts": {
                    "04": {
                        "dist_name": "CASTILLA"
                    },
                    "05": {
                        "dist_name": "CATACAOS"
                    },
                    "07": {
                        "dist_name": "CURA MORI"
                    },
                    "08": {
                        "dist_name": "EL TALLAN"
                    },
                    "09": {
                        "dist_name": "LA ARENA"
                    },
                    "10": {
                        "dist_name": "LA UNION"
                    },
                    "11": {
                        "dist_name": "LAS LOMAS"
                    },
                    "01": {
                        "dist_name": "PIURA"
                    },
                    "14": {
                        "dist_name": "TAMBO GRANDE"
                    }
                }
            },
            "08": {
                "prov_name": "SECHURA",
                "districts": {
                    "02": {
                        "dist_name": "BELLAVISTA DE LA UNION"
                    },
                    "03": {
                        "dist_name": "BERNAL"
                    },
                    "04": {
                        "dist_name": "CRISTO NOS VALGA"
                    },
                    "06": {
                        "dist_name": "RINCONADA-LLICUAR"
                    },
                    "01": {
                        "dist_name": "SECHURA"
                    },
                    "05": {
                        "dist_name": "VICE"
                    }
                }
            },
            "06": {
                "prov_name": "SULLANA",
                "districts": {
                    "02": {
                        "dist_name": "BELLAVISTA"
                    },
                    "03": {
                        "dist_name": "IGNACIO ESCUDERO"
                    },
                    "04": {
                        "dist_name": "LANCONES"
                    },
                    "05": {
                        "dist_name": "MARCAVELICA"
                    },
                    "06": {
                        "dist_name": "MIGUEL CHECA"
                    },
                    "07": {
                        "dist_name": "QUERECOTILLO"
                    },
                    "08": {
                        "dist_name": "SALITRAL"
                    },
                    "01": {
                        "dist_name": "SULLANA"
                    }
                }
            },
            "07": {
                "prov_name": "TALARA",
                "districts": {
                    "02": {
                        "dist_name": "EL ALTO"
                    },
                    "03": {
                        "dist_name": "LA BREA"
                    },
                    "04": {
                        "dist_name": "LOBITOS"
                    },
                    "05": {
                        "dist_name": "LOS ORGANOS"
                    },
                    "06": {
                        "dist_name": "MANCORA"
                    },
                    "01": {
                        "dist_name": "PARIÑAS"
                    }
                }
            }
        }
    },
    "21": {
        "dept_name": "PUNO",
        "provinces": {
            "02": {
                "prov_name": "AZANGARO",
                "districts": {
                    "02": {
                        "dist_name": "ACHAYA"
                    },
                    "03": {
                        "dist_name": "ARAPA"
                    },
                    "04": {
                        "dist_name": "ASILLO"
                    },
                    "01": {
                        "dist_name": "AZANGARO"
                    },
                    "05": {
                        "dist_name": "CAMINACA"
                    },
                    "06": {
                        "dist_name": "CHUPA"
                    },
                    "07": {
                        "dist_name": "JOSE DOMINGO CHOQUEHUANCA"
                    },
                    "08": {
                        "dist_name": "MUÑANI"
                    },
                    "09": {
                        "dist_name": "POTONI"
                    },
                    "10": {
                        "dist_name": "SAMAN"
                    },
                    "11": {
                        "dist_name": "SAN ANTON"
                    },
                    "12": {
                        "dist_name": "SAN JOSE"
                    },
                    "13": {
                        "dist_name": "SAN JUAN DE SALINAS"
                    },
                    "14": {
                        "dist_name": "SANTIAGO DE PUPUJA"
                    },
                    "15": {
                        "dist_name": "TIRAPATA"
                    }
                }
            },
            "03": {
                "prov_name": "CARABAYA",
                "districts": {
                    "02": {
                        "dist_name": "AJOYANI"
                    },
                    "03": {
                        "dist_name": "AYAPATA"
                    },
                    "04": {
                        "dist_name": "COASA"
                    },
                    "05": {
                        "dist_name": "CORANI"
                    },
                    "06": {
                        "dist_name": "CRUCERO"
                    },
                    "07": {
                        "dist_name": "ITUATA"
                    },
                    "01": {
                        "dist_name": "MACUSANI"
                    },
                    "08": {
                        "dist_name": "OLLACHEA"
                    },
                    "09": {
                        "dist_name": "SAN GABAN"
                    },
                    "10": {
                        "dist_name": "USICAYOS"
                    }
                }
            },
            "04": {
                "prov_name": "CHUCUITO",
                "districts": {
                    "02": {
                        "dist_name": "DESAGUADERO"
                    },
                    "03": {
                        "dist_name": "HUACULLANI"
                    },
                    "01": {
                        "dist_name": "JULI"
                    },
                    "04": {
                        "dist_name": "KELLUYO"
                    },
                    "05": {
                        "dist_name": "PISACOMA"
                    },
                    "06": {
                        "dist_name": "POMATA"
                    },
                    "07": {
                        "dist_name": "ZEPITA"
                    }
                }
            },
            "05": {
                "prov_name": "EL COLLAO",
                "districts": {
                    "02": {
                        "dist_name": "CAPASO"
                    },
                    "05": {
                        "dist_name": "CONDURIRI"
                    },
                    "01": {
                        "dist_name": "ILAVE"
                    },
                    "03": {
                        "dist_name": "PILCUYO"
                    },
                    "04": {
                        "dist_name": "SANTA ROSA"
                    }
                }
            },
            "06": {
                "prov_name": "HUANCANE",
                "districts": {
                    "02": {
                        "dist_name": "COJATA"
                    },
                    "01": {
                        "dist_name": "HUANCANE"
                    },
                    "03": {
                        "dist_name": "HUATASANI"
                    },
                    "04": {
                        "dist_name": "INCHUPALLA"
                    },
                    "05": {
                        "dist_name": "PUSI"
                    },
                    "06": {
                        "dist_name": "ROSASPATA"
                    },
                    "07": {
                        "dist_name": "TARACO"
                    },
                    "08": {
                        "dist_name": "VILQUE CHICO"
                    }
                }
            },
            "07": {
                "prov_name": "LAMPA",
                "districts": {
                    "02": {
                        "dist_name": "CABANILLA"
                    },
                    "03": {
                        "dist_name": "CALAPUJA"
                    },
                    "01": {
                        "dist_name": "LAMPA"
                    },
                    "04": {
                        "dist_name": "NICASIO"
                    },
                    "05": {
                        "dist_name": "OCUVIRI"
                    },
                    "06": {
                        "dist_name": "PALCA"
                    },
                    "07": {
                        "dist_name": "PARATIA"
                    },
                    "08": {
                        "dist_name": "PUCARA"
                    },
                    "09": {
                        "dist_name": "SANTA LUCIA"
                    },
                    "10": {
                        "dist_name": "VILAVILA"
                    }
                }
            },
            "08": {
                "prov_name": "MELGAR",
                "districts": {
                    "02": {
                        "dist_name": "ANTAUTA"
                    },
                    "01": {
                        "dist_name": "AYAVIRI"
                    },
                    "03": {
                        "dist_name": "CUPI"
                    },
                    "04": {
                        "dist_name": "LLALLI"
                    },
                    "05": {
                        "dist_name": "MACARI"
                    },
                    "06": {
                        "dist_name": "NUÑOA"
                    },
                    "07": {
                        "dist_name": "ORURILLO"
                    },
                    "08": {
                        "dist_name": "SANTA ROSA"
                    },
                    "09": {
                        "dist_name": "UMACHIRI"
                    }
                }
            },
            "09": {
                "prov_name": "MOHO",
                "districts": {
                    "02": {
                        "dist_name": "CONIMA"
                    },
                    "03": {
                        "dist_name": "HUAYRAPATA"
                    },
                    "01": {
                        "dist_name": "MOHO"
                    },
                    "04": {
                        "dist_name": "TILALI"
                    }
                }
            },
            "01": {
                "prov_name": "PUNO",
                "districts": {
                    "02": {
                        "dist_name": "ACORA"
                    },
                    "03": {
                        "dist_name": "AMANTANI"
                    },
                    "04": {
                        "dist_name": "ATUNCOLLA"
                    },
                    "05": {
                        "dist_name": "CAPACHICA"
                    },
                    "06": {
                        "dist_name": "CHUCUITO"
                    },
                    "07": {
                        "dist_name": "COATA"
                    },
                    "08": {
                        "dist_name": "HUATA"
                    },
                    "09": {
                        "dist_name": "MAÑAZO"
                    },
                    "10": {
                        "dist_name": "PAUCARCOLLA"
                    },
                    "11": {
                        "dist_name": "PICHACANI"
                    },
                    "12": {
                        "dist_name": "PLATERIA"
                    },
                    "01": {
                        "dist_name": "PUNO"
                    },
                    "13": {
                        "dist_name": "SAN ANTONIO"
                    },
                    "14": {
                        "dist_name": "TIQUILLACA"
                    },
                    "15": {
                        "dist_name": "VILQUE"
                    }
                }
            },
            "10": {
                "prov_name": "SAN ANTONIO DE PUTINA",
                "districts": {
                    "02": {
                        "dist_name": "ANANEA"
                    },
                    "03": {
                        "dist_name": "PEDRO VILCA APAZA"
                    },
                    "01": {
                        "dist_name": "PUTINA"
                    },
                    "04": {
                        "dist_name": "QUILCAPUNCU"
                    },
                    "05": {
                        "dist_name": "SINA"
                    }
                }
            },
            "11": {
                "prov_name": "SAN ROMAN",
                "districts": {
                    "02": {
                        "dist_name": "CABANA"
                    },
                    "03": {
                        "dist_name": "CABANILLAS"
                    },
                    "04": {
                        "dist_name": "CARACOTO"
                    },
                    "01": {
                        "dist_name": "JULIACA"
                    }
                }
            },
            "12": {
                "prov_name": "SANDIA",
                "districts": {
                    "09": {
                        "dist_name": "ALTO INAMBARI"
                    },
                    "02": {
                        "dist_name": "CUYOCUYO"
                    },
                    "03": {
                        "dist_name": "LIMBANI"
                    },
                    "04": {
                        "dist_name": "PATAMBUCO"
                    },
                    "05": {
                        "dist_name": "PHARA"
                    },
                    "06": {
                        "dist_name": "QUIACA"
                    },
                    "07": {
                        "dist_name": "SAN JUAN DEL ORO"
                    },
                    "10": {
                        "dist_name": "SAN PEDRO DE PUTINA PUNCO"
                    },
                    "01": {
                        "dist_name": "SANDIA"
                    },
                    "08": {
                        "dist_name": "YANAHUAYA"
                    }
                }
            },
            "13": {
                "prov_name": "YUNGUYO",
                "districts": {
                    "02": {
                        "dist_name": "ANAPIA"
                    },
                    "03": {
                        "dist_name": "COPANI"
                    },
                    "04": {
                        "dist_name": "CUTURAPI"
                    },
                    "05": {
                        "dist_name": "OLLARAYA"
                    },
                    "06": {
                        "dist_name": "TINICACHI"
                    },
                    "07": {
                        "dist_name": "UNICACHI"
                    },
                    "01": {
                        "dist_name": "YUNGUYO"
                    }
                }
            }
        }
    },
    "22": {
        "dept_name": "SAN MARTIN",
        "provinces": {
            "02": {
                "prov_name": "BELLAVISTA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO BIAVO"
                    },
                    "03": {
                        "dist_name": "BAJO BIAVO"
                    },
                    "01": {
                        "dist_name": "BELLAVISTA"
                    },
                    "04": {
                        "dist_name": "HUALLAGA"
                    },
                    "05": {
                        "dist_name": "SAN PABLO"
                    },
                    "06": {
                        "dist_name": "SAN RAFAEL"
                    }
                }
            },
            "03": {
                "prov_name": "EL DORADO",
                "districts": {
                    "02": {
                        "dist_name": "AGUA BLANCA"
                    },
                    "01": {
                        "dist_name": "SAN JOSE DE SISA"
                    },
                    "03": {
                        "dist_name": "SAN MARTIN"
                    },
                    "04": {
                        "dist_name": "SANTA ROSA"
                    },
                    "05": {
                        "dist_name": "SHATOJA"
                    }
                }
            },
            "04": {
                "prov_name": "HUALLAGA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO SAPOSOA"
                    },
                    "03": {
                        "dist_name": "EL ESLABON"
                    },
                    "04": {
                        "dist_name": "PISCOYACU"
                    },
                    "05": {
                        "dist_name": "SACANCHE"
                    },
                    "01": {
                        "dist_name": "SAPOSOA"
                    },
                    "06": {
                        "dist_name": "TINGO DE SAPOSOA"
                    }
                }
            },
            "05": {
                "prov_name": "LAMAS",
                "districts": {
                    "02": {
                        "dist_name": "ALONSO DE ALVARADO"
                    },
                    "03": {
                        "dist_name": "BARRANQUITA"
                    },
                    "04": {
                        "dist_name": "CAYNARACHI"
                    },
                    "05": {
                        "dist_name": "CUÑUMBUQUI"
                    },
                    "01": {
                        "dist_name": "LAMAS"
                    },
                    "06": {
                        "dist_name": "PINTO RECODO"
                    },
                    "07": {
                        "dist_name": "RUMISAPA"
                    },
                    "08": {
                        "dist_name": "SAN ROQUE DE CUMBAZA"
                    },
                    "09": {
                        "dist_name": "SHANAO"
                    },
                    "10": {
                        "dist_name": "TABALOSOS"
                    },
                    "11": {
                        "dist_name": "ZAPATERO"
                    }
                }
            },
            "06": {
                "prov_name": "MARISCAL CACERES",
                "districts": {
                    "02": {
                        "dist_name": "CAMPANILLA"
                    },
                    "03": {
                        "dist_name": "HUICUNGO"
                    },
                    "01": {
                        "dist_name": "JUANJUI"
                    },
                    "04": {
                        "dist_name": "PACHIZA"
                    },
                    "05": {
                        "dist_name": "PAJARILLO"
                    }
                }
            },
            "01": {
                "prov_name": "MOYOBAMBA",
                "districts": {
                    "02": {
                        "dist_name": "CALZADA"
                    },
                    "03": {
                        "dist_name": "HABANA"
                    },
                    "04": {
                        "dist_name": "JEPELACIO"
                    },
                    "01": {
                        "dist_name": "MOYOBAMBA"
                    },
                    "05": {
                        "dist_name": "SORITOR"
                    },
                    "06": {
                        "dist_name": "YANTALO"
                    }
                }
            },
            "07": {
                "prov_name": "PICOTA",
                "districts": {
                    "02": {
                        "dist_name": "BUENOS AIRES"
                    },
                    "03": {
                        "dist_name": "CASPIZAPA"
                    },
                    "01": {
                        "dist_name": "PICOTA"
                    },
                    "04": {
                        "dist_name": "PILLUANA"
                    },
                    "05": {
                        "dist_name": "PUCACACA"
                    },
                    "06": {
                        "dist_name": "SAN CRISTOBAL"
                    },
                    "07": {
                        "dist_name": "SAN HILARION"
                    },
                    "08": {
                        "dist_name": "SHAMBOYACU"
                    },
                    "09": {
                        "dist_name": "TINGO DE PONASA"
                    },
                    "10": {
                        "dist_name": "TRES UNIDOS"
                    }
                }
            },
            "08": {
                "prov_name": "RIOJA",
                "districts": {
                    "02": {
                        "dist_name": "AWAJUN"
                    },
                    "03": {
                        "dist_name": "ELIAS SOPLIN VARGAS"
                    },
                    "04": {
                        "dist_name": "NUEVA CAJAMARCA"
                    },
                    "05": {
                        "dist_name": "PARDO MIGUEL"
                    },
                    "06": {
                        "dist_name": "POSIC"
                    },
                    "01": {
                        "dist_name": "RIOJA"
                    },
                    "07": {
                        "dist_name": "SAN FERNANDO"
                    },
                    "08": {
                        "dist_name": "YORONGOS"
                    },
                    "09": {
                        "dist_name": "YURACYACU"
                    }
                }
            },
            "09": {
                "prov_name": "SAN MARTIN",
                "districts": {
                    "02": {
                        "dist_name": "ALBERTO LEVEAU"
                    },
                    "03": {
                        "dist_name": "CACATACHI"
                    },
                    "04": {
                        "dist_name": "CHAZUTA"
                    },
                    "05": {
                        "dist_name": "CHIPURANA"
                    },
                    "06": {
                        "dist_name": "EL PORVENIR"
                    },
                    "07": {
                        "dist_name": "HUIMBAYOC"
                    },
                    "08": {
                        "dist_name": "JUAN GUERRA"
                    },
                    "09": {
                        "dist_name": "LA BANDA DE SHILCAYO"
                    },
                    "10": {
                        "dist_name": "MORALES"
                    },
                    "11": {
                        "dist_name": "PAPAPLAYA"
                    },
                    "12": {
                        "dist_name": "SAN ANTONIO"
                    },
                    "13": {
                        "dist_name": "SAUCE"
                    },
                    "14": {
                        "dist_name": "SHAPAJA"
                    },
                    "01": {
                        "dist_name": "TARAPOTO"
                    }
                }
            },
            "10": {
                "prov_name": "TOCACHE",
                "districts": {
                    "02": {
                        "dist_name": "NUEVO PROGRESO"
                    },
                    "03": {
                        "dist_name": "POLVORA"
                    },
                    "04": {
                        "dist_name": "SHUNTE"
                    },
                    "01": {
                        "dist_name": "TOCACHE"
                    },
                    "05": {
                        "dist_name": "UCHIZA"
                    }
                }
            }
        }
    },
    "23": {
        "dept_name": "TACNA",
        "provinces": {
            "02": {
                "prov_name": "CANDARAVE",
                "districts": {
                    "02": {
                        "dist_name": "CAIRANI"
                    },
                    "03": {
                        "dist_name": "CAMILACA"
                    },
                    "01": {
                        "dist_name": "CANDARAVE"
                    },
                    "04": {
                        "dist_name": "CURIBAYA"
                    },
                    "05": {
                        "dist_name": "HUANUARA"
                    },
                    "06": {
                        "dist_name": "QUILAHUANI"
                    }
                }
            },
            "03": {
                "prov_name": "JORGE BASADRE",
                "districts": {
                    "02": {
                        "dist_name": "ILABAYA"
                    },
                    "03": {
                        "dist_name": "ITE"
                    },
                    "01": {
                        "dist_name": "LOCUMBA"
                    }
                }
            },
            "01": {
                "prov_name": "TACNA",
                "districts": {
                    "02": {
                        "dist_name": "ALTO DE LA ALIANZA"
                    },
                    "03": {
                        "dist_name": "CALANA"
                    },
                    "04": {
                        "dist_name": "CIUDAD NUEVA"
                    },
                    "10": {
                        "dist_name": "CORONEL GREGORIO ALBARRACIN L."
                    },
                    "05": {
                        "dist_name": "INCLAN"
                    },
                    "06": {
                        "dist_name": "PACHIA"
                    },
                    "07": {
                        "dist_name": "PALCA"
                    },
                    "08": {
                        "dist_name": "POCOLLAY"
                    },
                    "09": {
                        "dist_name": "SAMA"
                    },
                    "01": {
                        "dist_name": "TACNA"
                    }
                }
            },
            "04": {
                "prov_name": "TARATA",
                "districts": {
                    "03": {
                        "dist_name": "ESTIQUE"
                    },
                    "04": {
                        "dist_name": "ESTIQUE PAMPA"
                    },
                    "02": {
                        "dist_name": "HEROES ALBARRACIN"
                    },
                    "05": {
                        "dist_name": "SITAJARA"
                    },
                    "06": {
                        "dist_name": "SUSAPAYA"
                    },
                    "01": {
                        "dist_name": "TARATA"
                    },
                    "07": {
                        "dist_name": "TARUCACHI"
                    },
                    "08": {
                        "dist_name": "TICACO"
                    }
                }
            }
        }
    },
    "24": {
        "dept_name": "TUMBES",
        "provinces": {
            "02": {
                "prov_name": "CONTRALMIRANTE VILLAR",
                "districts": {
                    "03": {
                        "dist_name": "CANOAS DE PUNTA SAL"
                    },
                    "02": {
                        "dist_name": "CASITAS"
                    },
                    "01": {
                        "dist_name": "ZORRITOS"
                    }
                }
            },
            "01": {
                "prov_name": "TUMBES",
                "districts": {
                    "02": {
                        "dist_name": "CORRALES"
                    },
                    "03": {
                        "dist_name": "LA CRUZ"
                    },
                    "04": {
                        "dist_name": "PAMPAS DE HOSPITAL"
                    },
                    "05": {
                        "dist_name": "SAN JACINTO"
                    },
                    "06": {
                        "dist_name": "SAN JUAN DE LA VIRGEN"
                    },
                    "01": {
                        "dist_name": "TUMBES"
                    }
                }
            },
            "03": {
                "prov_name": "ZARUMILLA",
                "districts": {
                    "02": {
                        "dist_name": "AGUAS VERDES"
                    },
                    "03": {
                        "dist_name": "MATAPALO"
                    },
                    "04": {
                        "dist_name": "PAPAYAL"
                    },
                    "01": {
                        "dist_name": "ZARUMILLA"
                    }
                }
            }
        }
    },
    "25": {
        "dept_name": "UCAYALI",
        "provinces": {
            "02": {
                "prov_name": "ATALAYA",
                "districts": {
                    "01": {
                        "dist_name": "RAIMONDI"
                    },
                    "02": {
                        "dist_name": "SEPAHUA"
                    },
                    "03": {
                        "dist_name": "TAHUANIA"
                    },
                    "04": {
                        "dist_name": "YURUA"
                    }
                }
            },
            "01": {
                "prov_name": "CORONEL PORTILLO",
                "districts": {
                    "01": {
                        "dist_name": "CALLERIA"
                    },
                    "02": {
                        "dist_name": "CAMPOVERDE"
                    },
                    "03": {
                        "dist_name": "IPARIA"
                    },
                    "07": {
                        "dist_name": "MANANTAY"
                    },
                    "04": {
                        "dist_name": "MASISEA"
                    },
                    "06": {
                        "dist_name": "NUEVA REQUENA"
                    },
                    "05": {
                        "dist_name": "YARINACOCHA"
                    }
                }
            },
            "03": {
                "prov_name": "PADRE ABAD",
                "districts": {
                    "03": {
                        "dist_name": "CURIMANA"
                    },
                    "02": {
                        "dist_name": "IRAZOLA"
                    },
                    "01": {
                        "dist_name": "PADRE ABAD"
                    }
                }
            },
            "04": {
                "prov_name": "PURUS",
                "districts": {
                    "01": {
                        "dist_name": "PURUS"
                    }
                }
            }
        }
    }
};

export function getDepts(): UbigeoDept[] {
    var depts = Object.entries(ubigeos).reduce<UbigeoDept[]>((acc: UbigeoDept[], cur: [string, Table13Dept]) => {
        acc.push({
            dept_code: cur[0],
            dept_name: cur[1].dept_name
        });
        return acc;
    }, []);
    depts.sort((a: UbigeoDept, b: UbigeoDept) => (a.dept_name > b.dept_name ? 1 : -1));
    return depts;
}

export function getProvs(dept_code: string): UbigeoProv[] {
    var provs = Object.entries(ubigeos[dept_code].provinces).reduce<UbigeoProv[]>((acc: UbigeoProv[], cur: [string, Table13Province]) => {
        acc.push({
            prov_code: cur[0],
            prov_name: cur[1].prov_name
        });
        return acc;
    }, []);
    provs.sort((a: UbigeoProv, b: UbigeoProv) => (a.prov_name > b.prov_name ? 1 : -1));
    return provs;
}

export function getDists(dept_code: string, prov_code: string): UbigeoDist[] {
    var dists = Object.entries(ubigeos[dept_code].provinces[prov_code].districts).reduce<UbigeoDist[]>((acc: UbigeoDist[], cur: [string, Table13District]) => {
        acc.push({
            dist_code: cur[0],
            dist_name: cur[1].dist_name
        });
        return acc;
    }, []);
    dists.sort((a: UbigeoDist, b: UbigeoDist) => (a.dist_name > b.dist_name ? 1 : -1));
    return dists;
}

export function validateUbigeo(ubigeo: string) {
    return getUbigeo(ubigeo) !== null;
}

export function getUbigeo(ubigeo: string): Ubigeo | null {

    var dept_name: string = null;
    var prov_name: string = null;
    var dist_name: string = null;

    if (ubigeo.length === 6) {
        const dept_code: string = ubigeo.substring(0, 2);
        const prov_code: string = ubigeo.substring(2, 4);
        const dist_code: string = ubigeo.substring(4, 6);

        dept_name = ubigeos[dept_code]?.dept_name;
        prov_name = ubigeos[dept_code]?.provinces[prov_code]?.prov_name;
        dist_name = ubigeos[dept_code]?.provinces[prov_code]?.districts[dist_code]?.dist_name;
    }

    if (dept_name && prov_name && dist_name) {
        return {
            ubigeo,
            dept_name,
            prov_name,
            dist_name
        }
    } else {
        return null;
    }
}
