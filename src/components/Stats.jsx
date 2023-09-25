import React from "react";
import {
  GiHealthCapsule,
  GiMightyForce,
  GiBoltShield,
  GiWindHole,
  GiMagicShield,
  GiWindSlap,
  GiTargetShot,
  GiEvasion
} from "react-icons/gi";

function Stats({ stats }) {
  return (
    <div className="flex justify-center">
      {stats.stat.name == "hp" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiHealthCapsule fontSize="30px" color="red" />
          Hp
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "attack" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiMightyForce fontSize="30px" color="orange" />
          Attack
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "defense" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiBoltShield fontSize="30px" color="dodgerblue" />
          Defense
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "special-attack" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiWindHole fontSize="30px" color="lightsalmon" />
          Special Attack
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "special-defense" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiMagicShield fontSize="30px" color="slateblue" />
          Special Defense
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "speed" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiWindSlap fontSize="30px" color="dodgerblue" />
          Speed
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "accuracy" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiTargetShot fontSize="30px" color="red" />
          Accuracy
        </div>
      ) : (
        ""
      )}
      {stats.stat.name == "evasion" ? (
        <div className="shadow-md p-3 text-center rounded-lg">
          <GiEvasion fontSize="30px" color="plum" />
          Evasion
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Stats;
