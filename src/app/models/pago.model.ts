export class PagosModel {
    _id:               ID;
    Id_socio:          string;
    Numero_tarjeta?:   string;
    Codigo:            string;
    Fecha_vencimiento: string;
    Id_tarjeta?:       string;
}

export class ID {
    $oid: string;
}
