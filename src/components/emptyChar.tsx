type character = {
    id: string;
    name: string;
    house: string;
    patronus: string;
    species: string;
    bloodStatus: string;
    role: string;
    school: string;
    deathEater: boolean;
    dumbledoresArmy: boolean;
    orderOfThePhoenix: boolean;
    ministryOfMagic: boolean;
    alias: string;
    wand: string;
    boggart: string;
    animagus: string;
  };

  //the empty character
const emptyChar:character={
    id:'empty',
    name: '',
    house: '',
    patronus: '',
    species: '',
    bloodStatus: '',
    role: '',
    school: '',
    deathEater: false,
    dumbledoresArmy: false,
    orderOfThePhoenix: false,
    ministryOfMagic: false,
    alias: '',
    wand: '',
    boggart: '',
    animagus: ''
}

export default (emptyChar);