import "./SpellsPane.css"
import fireballPng from "../../assets/images/fireball.png"

function SpellsPane() {
    return (<div className="spells-pane">
        <div className="spells-counters">
            <div className="">Spell Level</div>
            <div className="spell-level">1st</div>
            <div className="spell-level">2nd</div>
            <div className="spell-level">3rd</div>
            <div className="spell-level">4th</div>
            <div className="spell-level">5th</div>
            <div className="spell-level">6th</div>
            <div className="spell-level">7th</div>
            <div className="spell-level">8th</div>
            <div className="spell-level">9th</div>
            <div className="">Slots Remaining</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
            <div className="spell-slot-curr-val">1</div>
        </div>
        <div className="spells-list">
            <div className="spell-level-header">Cantrips</div>
            <div className="spells-option-header">
                <span></span>
                <span>ATTACK</span>
                <span>Cast Time</span>
                <span>RANGE</span>
                <span>HIT / DC</span>
                <span>DAMAGE</span>
                <span>NOTES</span>
            </div>
            <div className="spells-flex">
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
            <div className="spell-level-header">1st Level</div>
            <div className="spells-flex">
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="spells-options">
                    <img src={fireballPng} alt="fireball" />
                    <div>Fireball</div>
                    <div>1 Action</div>
                    <div>150ft</div>
                    <div>-</div>
                    <div>8d6 (+1d6 per level)</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
            <div className="spell-level-header">2nd Level</div>
            <div className="spell-level-header">3rd Level</div>
            <div className="spell-level-header">4th Level</div>
        </div>
    </div>);

}

export default SpellsPane;