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
  episode: string[];
  episodio?: {
    name_episodio: string;
    episode: string;
    air_date: string; // debe ser string, no number
  };
}
