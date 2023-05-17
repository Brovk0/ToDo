import { useContext } from 'react'
import { ModalContext } from '../modalContext/infoContext';
import style from './modal.module.css'

export default function Modal(){

const {modal, setmodal} = useContext(ModalContext);

   return (
      modal.isShow && <div className={style.modal} style={{backgroundColor: modal.backgroundColor}}>
         <p>{modal.desc}</p>
      </div>
   )
}