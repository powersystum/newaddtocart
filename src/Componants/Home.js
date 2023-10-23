import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

export const Home = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  }


  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setData(jsonData);
  }

 // const send = (e) => {
    // console.log(e)
   // dispatch(ADD(e));
  //}

  return (
    <div className='container d-flex justify-content-center align-item-center mt-4'>
      <div className='row justify-content-around align-item-center p-4'>
        {data.map((element, k) => {
          return (
            <>
              <Card style={{ width: '16rem' }} className='mb-4 p-4'>
                <Card.Img variant="top" src={element.image} style={{ height: '16rem' }} />
                <Card.Body >
                  <Card.Title>{element.titel}</Card.Title>
                  <p>Price:{element.price}</p>
                  <Button variant="primary"
                    onClick={() => send(element)}
                    className='col-lg-12'>Add to cart</Button>
                </Card.Body>
              </Card>
            </>
          )
        })}


      </div>
    </div>
  )
}

export default Home;

