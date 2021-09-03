export class Pelicula {
    _id:           ID;
    Id_Pelicula:   string;
    Titulo:        string;
    Descripcion:   string;
    Duracion:      string;
    Categoria:     string;
    Fecha_estreno: string;
}

export class ID {
    $oid: string;
}
