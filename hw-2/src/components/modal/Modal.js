import React, {Component, createRef} from 'react';
import s from './modal.module.css'

export default class Modal extends Component {

    containerRef = createRef()
    
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyKloseModal);
        window.addEventListener('click', this.handleClick)

    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyKloseModal);
        window.removeEventListener('click', this.handleClick)
    }

    handleKeyKloseModal=(ev)=>{
        if(ev.keyCode == 27) this.props.modalClose()
    }

    handleClick = (ev) =>{
        const modalWindowRefsClick = this.containerRef.current.contains(ev.target)
        if(!modalWindowRefsClick && ev.target.nodeName !== 'BUTTON') this.props.modalClose()
    }
    render() {
        
        const {modalClose}  = this.props
    
        return(


        <div className = {s.modal__backdrop}>
            <div className = {s.modal__window} ref ={this.containerRef}>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?</p>

            <button type='button'> Agree</button>
            <button 
            className = 'modal__button'
            type='button'
            onClick={modalClose}
            > Close</button>
            </div>
        </div>
    )}
}