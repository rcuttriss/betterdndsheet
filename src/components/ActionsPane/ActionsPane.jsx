import "./ActionsPane.css"

function ActionsPane() {
    return (<div className="actions-pane">
        <div className="actions-counters">
            <span>Actions :: 2</span>   
            <span>Bonus Actions :: 1</span>
        </div>
        <div className="actions-list">
            <div className="actions-header">Actions</div>
            <div className="actions-options-flex">
                <div className="actions-option-header">
                    <span>ATTACK</span>
                    <span>RANGE</span>
                    <span>HIT / DC</span>
                    <span>DAMAGE</span>
                    <span>NOTES</span>
                </div>
                <div className="actions-option">
                    <span>Alchemist's Crossbow</span>
                    <span>80</span>
                    <span>+9</span>
                    <span>1d8+4</span>
                    <span>Ammunition, Loading, Range, Two-Handed</span></div>
                <div className="actions-option">
                    <span>Shortsword</span>
                    <span>5ft</span>
                    <span>+7</span>
                    <span>1d6 + 4</span>
                    <span>Martial, Finesse, Light</span></div>
                <div className="actions-option">
                    <span>Unarmed Strike</span>
                    <span>5ft</span>
                    <span>+4</span>
                    <span>2</span>
                    <span></span></div>
            </div>
            <div className="actions-header">Extra Actions</div>
            <div className="actions-options-flex">
                <div className="actions-option-header">
                    <span>ATTACK</span>
                    <span>RANGE</span>
                    <span>HIT / DC</span>
                    <span>DAMAGE</span>
                    <span>NOTES</span>
                </div>
                <div className="actions-option">
                    <span>Alchemist's Crossbow</span>
                    <span>80</span>
                    <span>+9</span>
                    <span>1d8+4</span>
                    <span>Ammunition, Loading, Range, Two-Handed</span></div>
                <div className="actions-option">
                    <span>Shortsword</span>
                    <span>5ft</span>
                    <span>+7</span>
                    <span>1d6 + 4</span>
                    <span>Martial, Finesse, Light</span></div>
                <div className="actions-option">
                    <span>Unarmed Strike</span>
                    <span>5ft</span>
                    <span>+4</span>
                    <span>2</span>
                    <span></span>
                </div>
            </div>
            <div className="actions-header">Reactions</div>
            <div className="actions-options-flex">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores.</div>
            </div>
        </div>
    </div>);
}

export default ActionsPane;