import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { updateIncident } from '../services/incidencesService'

const EditIncidenceModal = ({incidence, incidenceEdited}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const { id, IncidentId, CreatedDateTime } = incidence;
        const updatedIncident = {
            ...data,
            CreatedDateTime: CreatedDateTime,
            IncidentId: IncidentId, 
            id: id
        };

        updateIncident(updatedIncident)
        .then(response => {
            const data = {
                isEdited: response,
                editedIncident: updatedIncident
            };
            incidenceEdited(data);
            setShow(false);
        })
    };
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Inicidence Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Assignee</label>
                            <input type="text" className="form-control" name="AssignedTo" id="AssignedTo" aria-describedby="emailHelp" ref={register} placeholder="Name of worker" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Country</label>
                            <select className="form-control" name="Country" ref={register} id="sel1">
                                <option>DE</option>
                                <option>DK</option>
                                <option>ES</option>
                                <option>FR</option>
                                <option>GB</option>
                                <option>SK</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Group to Assign</label>
                            <select className="form-control" name="FirstAssignementGroup" ref={register} id="sel1">
                                <option>development-int-integration</option>
                                <option>data-platform-int-integration</option>
                                <option>product-int-software-support</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Grop of Creation:</label>
                            <select className="form-control" name="CreatedBy" ref={register} id="sel1">
                                <option>Customer Services</option>
                                <option>Messaging Support Services</option>
                                <option>Marketing Support Team</option>
                                <option>SSO Support</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Priority:</label>
                            <select className="form-control" name="Priority" ref={register} id="sel1">
                                <option>Prio 1</option>
                                <option>Prio 2</option>
                                <option>Prio 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            <label>Status:</label>
                            <select className="form-control" name="State" ref={register} id="sel1">
                                <option>Open</option>
                                <option>Wait for external</option>
                                <option>Resolved</option>
                                <option>Closed</option>
                            </select>
                        </div>
                    </div> 
                    <input type="submit" className="btn btn-danger" />
                </form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default EditIncidenceModal;