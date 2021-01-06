import React from "react";
import { connect } from "react-redux";
import {Moles} from "./store/moles/actions";

function StartGame(props) {
    return (
        <div className="startGame">
           
          
        </div>
      );
}

const mapStateToProps = state => ({
    isMoles: state.moles.moles,
  });
  
export default connect(mapStateToProps)(StartGame);