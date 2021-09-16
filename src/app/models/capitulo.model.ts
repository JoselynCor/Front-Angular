export class CapituloModel {
    _id:          IDSerie;
    Id_Capitulo?: string;
    Id_serie:     IDSerie;
    Temporada:    string;
    Titulo:       string;
    Descripcion:  string;
    Duración?:    string;
    Url_imagen:   string;
    Id_capitulo?: string;
    Duracion?:    string;
}

export class IDSerie {
    $oid: string;
}

