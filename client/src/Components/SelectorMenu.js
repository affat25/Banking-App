import React from "react";
import { 
    faWallet,
    faReceipt, 
    faMoneyBillTransfer,
    faCamera, 
    faMoneyBill1Wave    
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Link } from "react-router-dom";

function SelectorMenu(){
    
    return(
        <div className="selector-menu">
            <button><FontAwesomeIcon icon={faWallet} size="2x" alt="Accounts"/>
            </button>
            <button href="#"><FontAwesomeIcon icon={faMoneyBillTransfer} size="2x" alt="Transfer" />
            </button>
            <button><FontAwesomeIcon icon={faReceipt} size="2x" alt= "Pay a Bill"/></button>
            <button><FontAwesomeIcon icon={faCamera} size="2x" alt= "Deposit" /></button>
            <button><FontAwesomeIcon icon={faMoneyBill1Wave} size="2x" alt= "Send Money"/></button>
        </div>
    )
}
export default SelectorMenu
