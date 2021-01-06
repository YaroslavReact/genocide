import React from "react";
import { connect } from "react-redux";
import enemy from "../images/2656.jpg";

function EnemyFields(props) {
    const { hideEnemy,ShowEnemy } = props;
    return (
        <div className="enemyFields" onClick={ShowEnemy}>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
           <div className="enemy" onClick={hideEnemy} ><img className="hide" src={enemy} alt="hero"/></div>
        </div>
      );
}

const mapStateToProps = state => ({
    isMoles: state.moles.moles,
  });
  
export default connect(mapStateToProps)(EnemyFields);