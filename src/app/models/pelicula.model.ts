export class PeliculaModel {
    _id:           ID;
    Id_Pelicula:   string;
    Titulo:        string;
    Descripcion:   string;
    Duracion:      string;
    Categoria:     string;
    Fecha_estreno: string;
    Url_imagen: string;
    Url_pelicula: string;
}

export class ID {
    $oid: string;
}
