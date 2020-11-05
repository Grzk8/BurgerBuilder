import React, {Component} from 'react';

import Button from '../../../../components/Layout/Button/Button';
import Spinner from '../../../Layout/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Tester',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345'
                },
                email: 'test@test.com'
            }
       
        }
        fetch('https://burgerbuilder-166a2.firebaseio.com/orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              }, 
            body: JSON.stringify({order})})
        .then(resp => resp.json())
        .then(resp => 
            (this.setState({loading: false})))
        .catch(error => 
        (this.setState({loading: false})));
        this.props.history.push('/');
    }


    render () {
        let form = (
            <form>
                <input className='Input' type='text' name='name' placeholder='Your Name'/>
                <input className='Input' type='email' name='email' placeholder='Your email'/>
                <input className='Input' type='text' name='street' placeholder='Your street'/>
                <input className='Input' type='text' name='postal' placeholder='Postal code'/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className='ContactData'>
                <h4>Enter your Contact Data</h4>
            {form}
            </div>
        );
    }
};

export default ContactData;