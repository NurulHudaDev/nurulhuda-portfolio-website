// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';
// import './ReactModal.css'
// import { FaExternalLinkAlt } from 'react-icons/fa';

// const ReactModal = (props) => {

//     const { logo } = props.logo;

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div className='react_modal'>
//             <div>
//             <a variant="primary" onClick={handleShow}>
//                 <FaExternalLinkAlt />
//             </a>
//             </div>

//             <Modal className='modals' show={show} onHide={handleClose}>
//                 <Modal.Header closeButton className='model'>
//                     <div className='model_images'>
//                     <img className='w-50' src={logo} alt='' />
//                     </div>
//                     <a className='close_btn' variant="secondary" onClick={handleClose}>
//                         Close
//                     </a>
//                 </Modal.Header>
//             </Modal>
//         </div>
//     );
// };

// export default ReactModal;