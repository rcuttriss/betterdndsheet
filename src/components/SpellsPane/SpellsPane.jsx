import "./SpellsPane.css";
import React, { useContext } from "react";
import CharacterContext from "../../lib/context";
import Loader from "../Loader/Loader";
import SpellsCounters from "./SpellsCounters";
// spell icons
import { ReactComponent as AbjurationIcon } from '../../assets/images/abjuration.svg';
import { ReactComponent as ConjurationIcon } from '../../assets/images/conjuration.svg';
import { ReactComponent as DivinationIcon } from '../../assets/images/divination.svg';
import { ReactComponent as EnchantmentIcon } from '../../assets/images/enchantment.svg';
import { ReactComponent as EvocationIcon } from '../../assets/images/evocation.svg';
import { ReactComponent as IllusionIcon } from '../../assets/images/illusion.svg';
import { ReactComponent as NecromancyIcon } from '../../assets/images/necromancy.svg';
import { ReactComponent as TransmutationIcon } from '../../assets/images/transmutation.svg';


const SpellsPane = () => {
  const { spellData } = useContext(CharacterContext);

  if (!spellData) {
    return <Loader></Loader>;
  }

  function getLevelSuffix(level) {
    if (level === 1) {
      return "st";
    } else if (level === 2) {
      return "nd";
    } else if (level === 3) {
      return "rd";
    } else {
      return "th";
    }
  }
  
  const SPELL_ICONS = {
    abjuration: AbjurationIcon,
    conjuration: ConjurationIcon,
    divination: DivinationIcon,
    enchantment: EnchantmentIcon,
    evocation: EvocationIcon,
    illusion: IllusionIcon,
    necromancy: NecromancyIcon,
    transmutation: TransmutationIcon
  };
  

  return (
    <div className="spells-pane">
      <SpellsCounters></SpellsCounters>
      {spellData.map((levelSpells, levelIndex) => {
        if (levelSpells.length === 0) {
          return null;  // Skip rendering if levelSpells is empty
        }

        return (
          <div key={levelIndex} className="spell-level-container">
            <div className="spell-level-header">{`${levelIndex + 1}${getLevelSuffix(levelIndex + 1)} Level`}</div>
            <div className="spell-level-list">
            {levelSpells.map((spell, spellIndex) => {
              const SpellIcon = SPELL_ICONS[spell.school];
              return (
                <div key={spellIndex} className="spell-details">
                  <SpellIcon className="spell-icon" />
                  <div>{spell.name}</div>
                  <div>{spell.castTime}</div>
                  <div>{spell.range}</div>
                </div>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpellsPane;
