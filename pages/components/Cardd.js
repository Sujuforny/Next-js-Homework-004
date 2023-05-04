import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { YT } from '../lib';
export default function Cardd({title ,image ,overview ,ID}) {
  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {overview}
            </Card.Text>
            <Button type="button"
              className="btn btn-primary float-right mt-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" variant='dark'>Watch Trailer</Button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered modal-xl ">
                <div class="modal-content">
                  <iframe style={{height: 500}} src={YT +ID} frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
            </Card.Body>
        </Card>
  )
}
