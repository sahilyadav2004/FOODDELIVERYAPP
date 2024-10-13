
import React, { useContext, useState } from "react";
import { StoreContext } from '../context/StoreContext'
const Placeorder = () => {
    const {gettotalamount,cartItem}=useContext(StoreContext)
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      });
      const placeorder = async (event) => {
        event.preventDefault();
        let orderitems=[]
        food_list.map((item)=>{
          if(cartItem[item._id]>0){
            let iteminfo=item;
            iteminfo["quantity"]=cartItem[item._id]
            orderitems.push(iteminfo)
          }
        })
        let orderdata={
          address:data,
          items:orderitems,
          amount:gettotalamount()+2
        }
      };
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setdata((data) => ({ ...data, [name]: value }));
      };
  return (
    <form onSubmit={placeorder}  className='place-order flex mt-[100px] justify-between items-start gap-[50px] '>
        <div className="place-order-left w-96 ">
        <p className="title font-bold text-[30px] mb-[50px] ">Delivery Informmation</p>
        <div className="multi-fields flex gap-{10px} ">
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600"  required
            name="firstname"
            onChange={onChangeHandler}
            value={data.firstname}
            type="text"
            placeholder="firstname"
          />
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
            name="lastname"
            onChange={onChangeHandler}
            value={data.lastname}
            type="text"
            placeholder="lastname"
          />
        </div>
        <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields flex gap-[10px]">
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600"  required
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            type="text"
            placeholder="City"
          />
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600  "required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input className=" w-96 mb-[15px] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input className=" w-96 mb-[15px}] p-[10px] border-stone-400 border-solid border-[1px] border-r-4 outline-red-600 " required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right w-96">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totals-details">
              <p>Subtotal</p>
              <p>${gettotalamount()}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <p>Delivery Fee</p>
              <p>${gettotalamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-totals-details">
              <b>Total</b>
              <b>
                ${gettotalamount() === 0 ? 0 : gettotalamount() + 2}
              </b>
            </div>
          </div>
          <button className="mt-[30px]"  type="submit">Pay</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
