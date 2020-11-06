import React, {Component} from 'react';

import Button from '../../../../components/Layout/Button/Button';
import Input from '../../../Layout/Input/Input';
import Spinner from '../../../Layout/Spinner/Spinner';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: ''
            },
            street:  {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: ''
            },
            zipCode:  {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP',
                },
                value: ''
            },
            email:  {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Mail',
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}]
                }
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            
       
        }
        fetch('http://localhost:3000/orders',{
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        // klonuję stan ale bez klonowania głębokiego, nie mam dostępu do wartości wewnątrz name, street itd
        // muszę sklonować je osobno:    , teraz mam dostęp do elementType, value nie mam do elementConfig 
        let updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    };


    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                <Input elementType='' elementConfig='' value='' />
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
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