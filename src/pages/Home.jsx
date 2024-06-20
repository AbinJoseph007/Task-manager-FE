import React from 'react'
import Upportion from '../Componets/Upportion'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Upportion />
      <div data-aos="fade-up">
        <div className="container-fluid">
          <div>
            <Row>
              <Col lg={12} >
                <div class="hero">
                  <div class="container-fluid">
                    <div class="row align-items-center">
                      <div class="col-sm-12 col-md-6">
                        <div class="hero-text">
                          <h1>TASK MANAGER FOR YOU</h1>
                          <p>
                          A task management tool is used by an individual, team, or organization to complete projects efficiently by organizing and prioritizing related tasks. Task management tools come in many forms, like basic spreadsheets or online project management applications.
                          </p>
                          <div class="hero-btn">
                            <Link to={'/Taskchart'} className='btn btn-success rounded'>DashboArd</Link>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-6">
                        <div class="hero-image mt-5" data-aos="fade-left">
                          <img src="https://static.vecteezy.com/system/resources/previews/016/921/110/original/business-task-management-illustration-concept-on-white-background-vector.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home