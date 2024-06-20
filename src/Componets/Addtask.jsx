import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtaskApi } from '../services/Allapi';

function Addtask() {

    const [taskDeatils, settaskDetails] = useState({
        title: "",
        description: "",
        state: ""
    })
    console.log(taskDeatils);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const adTask = async (e) => {
        e.preventDefault()

        const { title, description, state } = taskDeatils

        if (!title || !description || !state) {
            alert("please fill the form")
        }
        else {
            const reqBody = new FormData()
            //add data to form data - append()
            reqBody.append("title", title)
            reqBody.append("description", description)

            reqBody.append("state", state)

            const result = await addtaskApi(reqBody)
            console.log(result);

            if (result.status === 200) {
                console.log(result.data);
                alert('task added successfully')
                handleClose()
                setTimeout(() => {
                    window.location.reload();
                  }, 100);
                settaskDetails({
                    title: "",
                    description: "",
                    state: ""
                })
            }
            else {
                console.log(result.response.data);
            }
        }
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                add a Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='task title' value={taskDeatils.title}
                                    onChange={(e) => settaskDetails({ ...taskDeatils, title: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="textarea" className='form-control' placeholder='task Description' value={taskDeatils.description}
                                    onChange={(e) => settaskDetails({ ...taskDeatils, description: e.target.value })} />
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='status' value={taskDeatils.state}
                                    onChange={(e) => settaskDetails({ ...taskDeatils, state: e.target.value })} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={adTask}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addtask