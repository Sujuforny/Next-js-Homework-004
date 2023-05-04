import { useRouter } from 'next/router';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function CardComponent({title,image,id,overview}) {
    const route = useRouter();
    const clickHandler = ()=>{
        route.push({
            pathname:`/movie/${id}`,
            query:{
                title:title,
                image:image,
                overview:overview
            }
        });

    };
  return (
        <Card style={{ width: '18rem' }} className='mt-5'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button onClick={clickHandler} variant="primary">view more</Button>
            </Card.Body>
        </Card>
  )
}
