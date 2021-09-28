import React, { Component } from "react";

export default class ContactForm extends Component{
    state ={
        name: '',
        number: '',
    }
    onChangeName = e =>{
        let name_ = e.target.value;
        this.setState( prevState =>{
            return {name: name_}
        });
    }
    onChangeNumber = e =>{
        let number_ = e.target.value;
        this.setState(prevState =>{
            return {number: number_}  
        });
    }
    
    Click = () =>{
        this.props.onClickkk(this.state.name, this.state.number);
        this.setState(prevState =>{
            return {name: '', number: ''}
        })
    }

    render(){
        let {name, number} = this.state;
        return <>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <p>Telephone</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.onChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button type="submit" onClick={this.Click}>Add contact</button>
        </>
    }
}