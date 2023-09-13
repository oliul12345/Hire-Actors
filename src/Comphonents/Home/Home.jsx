import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';


const Home = () => {
    const [createCart,setCreateCart] = useState([]);
    const [showCart,setShowCart] = useState([]);
    const [showBalance,setBalanceTotal] = useState(0)
    const [balance,setBalance] = useState(0)
    useEffect(() => {
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setCreateCart(data))
    },[])

    const handleCart = (actor)=>{
        const isShow = showCart.find(item => item.id == actor.id);
        let count = actor.salary;
        if(isShow){
            return alert('Already choose this Actor')
        }else{
            showCart.forEach(item => {
                count = count + item.salary;
            })
           
          let remaining = 20000 - count ;
        if(count > 20000){
            return alert('Your Balance Limit is Over');
        }else{
           
            setBalance([remaining])
            setBalanceTotal([count])
            setShowCart([...showCart,actor]);
        }
            
        }
        

   

    }
    console.log(showCart)
    return (
        <div className='flex gap-5'>
            <div className='w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4'>
               {
                createCart.map(actor => (
                    <div className='border my-5 items-center'>
                    <div>
                    <img className='rounded-full mx-auto' src={actor.image} alt="" />
                      <h1 className='text-3xl font-bold text-center'>oliul {actor.name}</h1>
                   
                      <div className='flex text-2xl font-bold justify-around'>
                          <h1>Salary:{actor.salary}</h1>
                          <h1>{actor.role}</h1>
                      </div>
                      <button
                      onClick={()=>handleCart(actor)}
                       className='bg-red-500 px-6 py-3 rounded my-4 ms-[190px]'>Select</button>
                    </div>
                  </div>
                ))
               }
            </div>
            <div className='w-1/3'>
                <Cart showCart={showCart}
                showBalance={showBalance}
                balance={balance}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;