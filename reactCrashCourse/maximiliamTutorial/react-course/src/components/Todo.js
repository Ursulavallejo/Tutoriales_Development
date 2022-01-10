import { useState } from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
/*        console.log('Clicked!');
        console.log(props.text);*/
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (<div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <span>A span demo</span>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
  {/*      { modalIsOpen ?  <Modal/> : null}*/}
        { modalIsOpen &&  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
        { modalIsOpen &&  <Backdrop onCancel={closeModalHandler} /> }
    </div>
);
}

export default Todo;