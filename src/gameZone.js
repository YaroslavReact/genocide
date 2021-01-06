import React from "react";
import { connect } from "react-redux";
import EnemyFields from "./EnemyFields"
import { enemyHide } from "../store/moles/actions";


    
function GameZone(props) {
    function hideEnemy(enemy){
     enemy.target.classList.remove("show");
     enemy.target.classList.add("hide");
     props.enemyHide();
    }
    function ShowEnemy(){
      const enemies = document.querySelector(".enemyFields").children;
      Math.random()
      let rnd = getRandomInt(6)
      enemies[rnd].children[0].classList.remove("hide");
      enemies[rnd].children[0].classList.add("show");

    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    return (
        <div className="gameZone">
          <EnemyFields hideEnemy={hideEnemy} ShowEnemy={ShowEnemy}/>
        </div>
      );
}

const mapStateToProps = state => ({
    isMoles: state.moles.enemyHide,
  });
const mapDispatchToProps = dispatch => {
    return {
      enemyHide: () => dispatch(enemyHide()),
    };
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(GameZone);
