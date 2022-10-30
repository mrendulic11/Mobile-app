export const SORTIRANJE_NIZA = 'SORTIRANJE_NIZA';
 
export const sortiranjeNiza = (niz) => {
  return {
    type: SORTIRANJE_NIZA,
    parametar: niz,
  }
}

export const UNOS_PROIZVODA = 'UNOS_PROIZVODA';

export const unosProizvoda = noviProizvod => (
  { 
    type: UNOS_PROIZVODA,
    payload: noviProizvod
  });