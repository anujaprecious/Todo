import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const createTask =({modal,toggle})=>{
    return(
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
         <form>
            <div className='form-group'>
                <label>Task name</label>
              <input type='text' className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Discription</label>
               <textarea rows="5" className='form-control'></textarea>
            </div>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
}
export default createTask;
