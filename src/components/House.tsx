import React from "react";

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

export default function House(P: {
  list: Array<character>;
  house: string;
  logo: string;
}) {
  return (
    <div>
      <div>
        <div className="column">
          <img src={P.logo} className="houseLogo" alt=""/>
          <hr />
          <nav className="panel">
            {P.list.map((elem,index)=> (
              <a key={index} className="panel-block" href='# '>{elem.name}</a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
