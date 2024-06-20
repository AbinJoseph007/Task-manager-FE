import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { edittaskApi } from '../services/Allapi';

function Edittask({ update }) {
  const [taskData, setTaskData] = useState({
    id: update._id,
    title: update.title,
    description: update.description,
    state: update.state
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setTaskData({
      id: update._id,
      title: update.title,
      description: update.description,
      state: update.state
    })
  }

  const HandleUpdate = async () => {
    const { id, title, description, state } = taskData

    if (!title || !description || !state) {
      alert("please fill the form completely")
    }
    else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description", description)
      reqBody.append("state", state)

      const result = await edittaskApi(id, reqBody)
      console.log(result);
      if (result.status === 200) {
        alert('updated successfully')
        handleClose()
        setTimeout(() => {
          window.location.reload();
        }, 100);
        setTaskData(result.data)
      }
      else {
        console.log(result.response.data);
      }
    }

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className='mb-3'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Task Title'
                  value={taskData.title}
                  onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="textarea"
                  className='form-control'
                  placeholder='Task Description'
                  value={taskData.description}
                  onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Status'
                  value={taskData.state}
                  onChange={(e) => setTaskData({ ...taskData, state: e.target.value })}
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edittask;
