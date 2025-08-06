export interface Tarjeta {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[]; // ✅
  episodio?: {       // ✅ Agregado manualmente luego
    name_episodio: string;
    episode: string;
    air_date: number;
  };
}
