export class SocioModel {
    _id:        ID;
    Id_socio:   string;
    Nombre:     string;
    Apellidos:  string;
    Contrasenia: string;
    Correo:     string;
    Telefono:   string;
}

export class ID {
    $oid: string;
}