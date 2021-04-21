import React, { useState } from 'react'
import { postOrder } from '../../../store/actions/orderActions'
import { useDispatch } from 'react-redux'
import { Form, Input, TextArea, Button, Message } from 'semantic-ui-react'

const Order = (props) => {

    const success = props.orders.completed ? true : false;

    const [formValue, setFormValue] = useState({
        secondName : '',
        firstName : '',
        middleName : '',
        adress : '',
        dueDate : '',
        info : '',
        products : props.selected,
        timestamp : Date.now()
    })
    
    const dispatch = useDispatch()

    function formHandler() {

        dispatch(postOrder(formValue))

    }

    return (

        <Form success={success}>

            <Form.Group widths='equal'>
                <Form.Field
                required
                control={Input}
                label='Фамилия'
                placeholder='Петров'
                onChange={(e) => setFormValue({
                                    ...formValue,
                                    secondName : e.target.value
                                })
                        }
                />
                <Form.Field
                required
                control={Input}
                label='Имя'
                placeholder='Петр'
                onChange={(e) => setFormValue({
                                    ...formValue,
                                    firstName : e.target.value
                                })
                        }
                />
                <Form.Field
                required
                control={Input}
                label='Отчество'
                placeholder='Петрович'
                onChange={(e) => setFormValue({
                                    ...formValue,
                                    middleName : e.target.value
                                })
                        }
                />
            </Form.Group>

            <Form.Field
                required
                control={Input}
                label='Адрес'
                placeholder='ул. Петровская, д. Петрова, кв. 21'
                onChange={(e) => setFormValue({
                    ...formValue,
                    adress : e.target.value
                })
        }
            />

            <Form.Field
                required
                control={Input}
                label='Дата доставки'
                placeholder='21.04.2021'
                onChange={(e) => setFormValue({
                                    ...formValue,
                                    dueDate : e.target.value
                                })
                        }
            />


            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Дополнительная информация'
                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                onChange={(e) => setFormValue({
                                    ...formValue,
                                    info : e.target.value
                                })
                        }
            />


            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Заказать'
                onClick={formHandler}
            />

            <Message
                success
                header='Спасибо'
                content="Ваш заказ передан на обработку"
            />

        </Form>

    )

}

export default Order