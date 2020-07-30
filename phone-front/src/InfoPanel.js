import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './InfoPanel.css';

function InfoPanel(props) {
  const imageString = `/assets/images/${props.selectedPhoneInfo.imageFileName}`;
  console.log(imageString);
  return (
    <div className="modalBg">
      <div className="flex-container">
        <div className="modal-window">
          <FontAwesomeIcon className="headerClose" icon={faTimesCircle} onClick={() => props.toggleIsSelected(false)} />
          <div className="overflow-container">
            <img src={imageString} />
            <br />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">#</label>
              <input type="email" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Id" value={props.selectedPhoneInfo.id} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Name</label>
              <input type="email" name="id" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" value={props.selectedPhoneInfo.name} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Manufacturer</label>
              <input type="name" name="firstName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Manufacturer" value={props.selectedPhoneInfo.manufacturer} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={props.selectedPhoneInfo.description} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Color</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Color" value={props.selectedPhoneInfo.color} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Price</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price" value={props.selectedPhoneInfo.price} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Screen</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Screen" value={props.selectedPhoneInfo.screen} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Processor</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Processor" value={props.selectedPhoneInfo.processor} readOnly />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="label-color-edit">Ram</label>
              <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ram" value={props.selectedPhoneInfo.ram} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;
