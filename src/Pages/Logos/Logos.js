import React from "react";
import './Logos.css';
import ReactModal from "../ReactModal/ReactModal";

const Logos = (props) => {

    console.log(props.logo);

    return (
        // <section className="logos">
        //     <div className="logos_row">
        //         <div className="logo_col">
        //         <img src={props.logo.logo} alt='' />
        //            <div className="modal_btn">
        //            <ReactModal logo={props.logo}></ReactModal>
        //            </div>
        //         </div>
        //     </div>
        // </section>

        <div className='logos'>
            <div className='container1'>
                <div className='box22 box44'>
                    <img src={props.logo.logo} alt='' />
                    <div className="modal">
                       <div className="modal_btn">
                       <ReactModal logo={props.logo}></ReactModal>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logos;