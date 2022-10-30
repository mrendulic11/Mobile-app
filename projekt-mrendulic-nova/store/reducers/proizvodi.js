//ovo kasnije ide iz baze
import { PROIZVODI } from '../../assets/data/products2.js';
import { UNOS } from '../../assets/data/unosProizvodaFilter';
import { SORTIRANJE_NIZA, UNOS_PROIZVODA } from '../actions/sortNiza';

const pocetnoStanje = {
  proizvodi: PROIZVODI,
  //ako nema primjenjen filter onda su filtrirani proizvodi svi proizvodi
  //filterProizvodi: PROIZVODI,
  sortiraniProizvodi: [],
  uneseniProizvodi: UNOS,
};

//prima trenutno stanje podatka i akciju, vraća novo stanje
//ako ne postoji trenutno stanje reducera vratit ce pocetnoStanje
const proizvodReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case SORTIRANJE_NIZA: {
      //VRATI NOVO STANJE
      const noviNiz = [...state.proizvodi];
      const novi = noviNiz.sort(function (a, b) {
        return a.cijena > b.cijena ? 1 : b.cijena > a.cijena ? -1 : 0;
      });
      return { ...state, sortiraniProizvodi: novi };
    }
    case UNOS_PROIZVODA: {
      return {
        ...state,
        uneseniProizvodi: [
          ...state.uneseniProizvodi,
          {
            naziv: action.payload.naziv,
            kolicina: action.payload.kolicina,
          },
        ],
      };
    }
    
    default:
      return state;
  }
};

export default proizvodReducer;
