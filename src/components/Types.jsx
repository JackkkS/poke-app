import React from "react";
import { MdGrass } from "react-icons/md";
import {
  GiPoisonBottle,
  GiLibertyWing,
  GiGroundSprout,
  GiStoneBlock,
  GiSpottedBug,
  GiGhost,
  GiSteelClaws,
  GiCelebrationFire,
  GiWaterSplash,
  GiElectricalCrescent,
  GiPsychicWaves,
  GiIceBolt,
  GiSpikedDragonHead,
  GiFairyWand,
  GiShadowFollower,
  GiPunchBlast
} from "react-icons/gi";
import { RiEmotionNormalLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { BsPatchQuestionFill } from "react-icons/bs";

function Types({ type }) {
  return (
    <>
      {type.type.name == "normal" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <RiEmotionNormalLine fontSize="30px" color="gray" />
                  Normal
                </div>
              ) : (
                ""
              )}
              {type.type.name == "fighting" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiPunchBlast fontSize="30px" color="crimson" />
                  Fighting
                </div>
              ) : (
                ""
              )}
              {type.type.name == "flying" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiLibertyWing fontSize="30px" color="steelblue" />
                  Flying
                </div>
              ) : (
                ""
              )}
              {type.type.name == "poison" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiPoisonBottle fontSize="30px" color="red" />
                  Poison
                </div>
              ) : (
                ""
              )}
              {type.type.name == "ground" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiGroundSprout fontSize="30px" color="brown" />
                  Ground
                </div>
              ) : (
                ""
              )}
              {type.type.name == "rock" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiStoneBlock fontSize="30px" color="brown" />
                  Rock
                </div>
              ) : (
                ""
              )}
              {type.type.name == "bug" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiSpottedBug fontSize="30px" color="forestgreen" />
                  Bug
                </div>
              ) : (
                ""
              )}
              {type.type.name == "ghost" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiGhost fontSize="30px" color="purple" />
                  Ghost
                </div>
              ) : (
                ""
              )}
              {type.type.name == "steel" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiSteelClaws fontSize="30px" color="dimgrey" />
                  Steel
                </div>
              ) : (
                ""
              )}
              {type.type.name == "fire" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiCelebrationFire fontSize="30px" color="orange" />
                  Fire
                </div>
              ) : (
                ""
              )}
              {type.type.name == "water" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiWaterSplash fontSize="30px" color="deepskyblue" />
                  Water
                </div>
              ) : (
                ""
              )}
              {type.type.name == "grass" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <MdGrass fontSize="30px" color="green" />
                  Grass
                </div>
              ) : (
                ""
              )}
              {type.type.name == "electric" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiElectricalCrescent fontSize="30px" color="gold" />
                  Electric
                </div>
              ) : (
                ""
              )}
              {type.type.name == "psychic" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiPsychicWaves fontSize="30px" color="blueviolet" />
                  Psychic
                </div>
              ) : (
                ""
              )}
              {type.type.name == "ice" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiIceBolt fontSize="30px" color="skyblue" />
                  Ice
                </div>
              ) : (
                ""
              )}
              {type.type.name == "dragon" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiSpikedDragonHead fontSize="30px" color="red" />
                  Dragon
                </div>
              ) : (
                ""
              )}
              {type.type.name == "dark" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <MdDarkMode fontSize="30px" color="blueviolet" />
                  Dark
                </div>
              ) : (
                ""
              )}
              {type.type.name == "unknown" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <BsPatchQuestionFill fontSize="30px" />
                  Unknown
                </div>
              ) : (
                ""
              )}
              {type.type.name == "shadow" ? (
                <div className="shadow-md p-5 text-center rounded-lg">
                  <GiShadowFollower fontSize="30px" />
                  Shadow
                </div>
              ) : (
                ""
              )}
    </>
  );
}

export default Types;
