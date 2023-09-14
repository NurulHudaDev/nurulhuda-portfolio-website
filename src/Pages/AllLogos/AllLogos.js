import React, { useEffect, useState } from "react";
import './AllLogos.css';
import Logos from "../Logos/Logos";

const AllLogos = (props) => {

    const {setCardCount} = props;

    const [logo, setLogos] = useState([]);

    useEffect(() => {
        fetch('Logos.json')
            .then(res => res.json())
            .then(data => setLogos(data))
    }, [logo]);

    return (
        <section>
            <div className="all_logos">
            <h2>Logos</h2>
                <div className="all_logos_col">
                {
                    logo.map((pd) => (
                        <Logos setCardCount={setCardCount} key={pd.id} logo={pd}></Logos>
                    ))
                }
                </div>
            </div>
        </section>
    );
};

export default AllLogos;