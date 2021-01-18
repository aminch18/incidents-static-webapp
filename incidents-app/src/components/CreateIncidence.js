import React from 'react'
import { useForm } from "react-hook-form";
import { createIncidence } from '../services/incidencesService'
import { v4 as uuidv4 } from 'uuid';

const CreateIncidence = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const incident = { id: uuidv4(), ...data }
        createIncidence(incident)
        .then(response => {
            props.incidenceCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Incidences List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Incident Number</label>
                            <input type="text" className="form-control" name="workerId" id="workerId" aria-describedby="emailHelp" ref={register} placeholder="Incident Number" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Assignee</label>
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
                            <label htmlFor="exampleInputEmail1">Group to Assign</label>
                            <select className="form-control" name="FirstAssignementGroup" ref={register} id="sel1">
                                <option>development-int-integration</option>
                                <option>data-platform-int-integration</option>
                                <option>product-int-software-support</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Grop of Creation:</label>
                            <select className="form-control" name="CreatedBy" ref={register} id="sel1">
                                <option>Customer Services</option>
                                <option>Messaging Support Services</option>
                                <option>Marketing Support Team</option>
                                <option>SSO Support</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Priority:</label>
                            <select className="form-control" name="Priority" ref={register} id="sel1">
                                <option>Prio 1</option>
                                <option>Prio 2</option>
                                <option>Prio 3</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Status:</label>
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
                </div>
            </div>
        </div>
    )
}

export default CreateIncidence;