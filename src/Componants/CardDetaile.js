import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const CardDetaile = () => {
  const [data, setData] = useState([]);
  console.log(data);


  const { id } = useParams();
  //console.log(id);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare = () => {
    let camparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(camparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <div>
      {data.map((val, k) => {
        return (
          <>
            <div className='container mt-4 justify-content-between align-item-center d-flex box' style={{ width: 250 }}>
              <div >
              <img src={val.image} alt='' style={{width:200}}/>
              </div>
              <div>
                <p className='disc'>{val.description}</p>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default CardDetaile
