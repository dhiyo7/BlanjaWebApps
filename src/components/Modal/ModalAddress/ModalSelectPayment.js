import React from "react";
import { Modal, Button } from "react-bootstrap";
import colors from "../../../assets/colors.module.css";
import text from "../../../assets/text.module.css";
import classname from "../../../helpers/classJoiner";
import "./ModalSelectPayment.css";

import gopay from "../../../assets/image/gopay1.png";
import pos from "../../../assets/image/pos1.png";
import mastercard from "../../../assets/image/mastercard1.png";

const ModalSelectPayment = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="shadow-sm">
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: 22, fontWeight: 500 }}
        >
          Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="no-border modal-body-container">
        <div className="container-modal">
          <div className="row container-item-payment">
            <h4 className={classname(colors.blackText)} style={{ fontSize: 16, fontWeight: 600 }}>Payment Method</h4>
          </div>
          <div className="row align-items-center container-item-payment">
            <img src={gopay} alt="" />
            <p style={{ fontSize: 16, fontWeight: 600, margin : 0, paddingLeft: 30 }}>Gopay</p>
            <input
              type="radio"
              name="payment"
              id="gopay"
              value="gopay"
              //   onChange={props.handleSelectPayment}
              className="ml-auto"
            />
          </div>
          <div className="row align-items-center container-item-payment">
            <img src={pos} alt="" />
            <p style={{ fontSize: 16, fontWeight: 600, margin : 0, paddingLeft: 30 }}>Pos Indonesia</p>
            <input
              type="radio"
              name="payment"
              id="pos"
              value="pos"
              //   onChange={props.handleSelectPayment}
              className="ml-auto"
            />
          </div>
          <div className="row align-items-center container-item-payment">
            <img src={mastercard} alt="" />
            <p style={{ fontSize: 16, fontWeight: 600, margin : 0, paddingLeft: 30 }}>Mastercard</p>
            <input
              type="radio"
              name="payment"
              id="mastercard"
              //   onChange={props.handleSelectPayment}
              value="mastercard"
              className="ml-auto"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Body className="no-border">
        <div className="container-modal">
          <div className="row container-item-payment">
            <p
              className={classname(colors.blackText)}
              style={{ fontSize: 16, fontWeight: 600 }}
            >
              Shopping summary
            </p>
          </div>
          <div className="row align-items-center container-item-summary">
            <p
              className={classname(colors.grayText)}
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Order
            </p>
            <p
              className="ml-auto"
              style={{ fontSize: 18, fontWeight: 600 }}
            >{`Rp. ${props.cart
              .reduce((total, item) => {
                return total + item.price * item.qty;
              }, 0)
              .toLocaleString("id-ID")}`}</p>
          </div>
          <div className="row align-items-center container-item-summary">
            <p
              className={classname(colors.grayText)}
              style={{ fontSize: 16, fontWeight: 500 }}
            >
              Delivery
            </p>
            <p className="ml-auto" style={{ fontSize: 18, fontWeight: 600 }}>
              Rp. 5.000
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Body className="shadow-lg">
        <div className="container-modal-footer">
          <div className="row">
            <div className="col">
              <p
                className={classname(colors.blackText)}
                style={{ fontSize: 16, fontWeight: 600 }}
              >
                Shopping summary
              </p>
              <p style={{color: '#DB3022', fontSize: 18, fontWeight: 600 }}>{`Rp. ${props.cart
                .reduce((total, item) => {
                  return total + item.price * item.qty;
                }, 5000)
                .toLocaleString("id-ID")}`}</p>
            </div>
            <div className="col-5 align-self-center">
              <button
                className="btn btn-danger btn-bu"
                style={{backgroundColor: '#DB3022'}}
                onClick={props.onSubmit}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSelectPayment;
