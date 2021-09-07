export class RentaModel {
    _id:                ID;
    Id_socio:           string;
    Id_peli_serie:      string;
    Fecha_inicio_renta: string;
    Fecha_fin_renta:    string;
}

export class ID {
    $oid: string;
}
