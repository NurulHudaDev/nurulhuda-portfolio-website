import React from "react";
import './Logos.css';
import ReactModal from "../ReactModal/ReactModal";

const Logos = (props) => {

    console.log(props.logo);

    return (
        <section className="logos">
            <div className="logos_row">
                <div className="logo_col">
                <img src={props.logo.logo} alt='' />
                   <div className="modal_btn">
                   <ReactModal logo={props.logo}></ReactModal>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Logos;