export interface CityModel{
    id: number;
    nameCity: string;
}

export interface CityPageResponse {
  content: CityModel[];          // Aquí vienen tus ciudades
  totalElements: number;    // Cuántas hay en total en la DB
  totalPages: number;       // Cuántas páginas existen
  size: number;             // Tamaño de la página
  number: number;           // Número de página actual
  last: boolean;            // ¿Es la última página?
}