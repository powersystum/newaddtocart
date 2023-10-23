import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import './style.css'
import { useDispatch } from 'react-redux';
import { DLT, ADD } from '../redux/actions/action'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Cart = () => {

  const getdata = useSelector((state)=>state.cartreducer.carts);
 console.log(getdata);

  const [price, setPrice] = useState(0);
  console.log(price);
  const [shoppingCart, setSoppingCart] = useState([]);
  useEffect(() => {
    setSoppingCart(getdata);
  }, [getdata])

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  const total = () => {
    let price = 0;
    getdata.map((dell, k) => {
      price = dell.price + price
    });
    setPrice(price);
  }
  useEffect(() => {
    total();
  }, [total])

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  }

  return (
    <div className='' style={{ marginTop: 6, marginLeft: '2rem' }}>
      {getdata.length === 0 &&
        <div className='text-center' style={{ marginTop: '7rem' }}>
          <img src='/image/cart.gif' style={{ width: '20rem', marginRight: '5rem' }} />
          <h3>Your cart is empty</h3>
        </div>
      }
      <Table>
        <tbody>
          {shoppingCart?.map((data, id) => {
            return (
              <>
                <tr>
                  <td>
                    <Link to={`/cardetails/${data.id}`}>  <img src={data.image} style={{ width: '40px' }} alt='' /> </Link>
                    <p>Price : {data.price}</p>
                    <p>{data.title}</p>
                    <div className='justify-content-between mt-5 align-item-center d-flex'
                      style={{ width: 100, cursor: 'pointer', backgroundColor: '#ddd', color: '#111' }}>
                      <span style={{ fontSize: 24 }}> - </span>
                      <span style={{ fontSize: 22 }}>0</span>
                      <span style={{ fontSize: 24 }} onClick={() => send(data)}>+</span>
                    </div>
                    <p onClick={() => dlt(data.id)} className='trash' style={{ fontSize: 25 }}>
                      <i class="fa-solid fa-trash"></i></p>
                  </td>

                </tr>

                <div className='hr' style={{ width: "700px" }}></div>

              </>
            )
          })}
        </tbody>
      </Table>
      <p><strong>TOTAL :{price} </strong></p>
    </div>
  )
}

export default Cart
