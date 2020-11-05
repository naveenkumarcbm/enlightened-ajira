import React from 'react'
import './index.scss';

const Subscriber = () => {

    return (
        <section className="subscriber">
            <h3>GET COUPONS & STYLE GUIDES</h3>
            <span>Subscribe to our Newsletter</span>
            <form>
                <input type="text" />
                <button className='btn btn-primary'>SUBSCRIBE</button>
            </form>
        </section>
    )
}

export default Subscriber;
