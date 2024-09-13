import React, { Component } from "react";
import { FormWrap, FormName, FormList, FormItem, FormItemName, FormItemInfo, FormItemPost, FormInfoList, FormInfoItem, FormPost, FormBtn, FormInfoWrap, FormCloseBtn } from "./modal.styled";
import location from "../images/location.png"
import copy from "../images/copy.png"
import faceBook from "../images/FaceBook.png"
import Instagram from "../images/Instagram.png"
import Youtube from "../images/Youtube.png"

function ModalForm({ onClose }) {
    return (
        <>
            <FormWrap>
                <FormCloseBtn onClick={onClose}>X</FormCloseBtn>
                <FormName>Інна Пономаренко</FormName>
                <FormList>
                    <FormItem>
                        <FormItemName>Адреса</FormItemName>
                        <FormItemInfo>Київ, Симиренка 23а</FormItemInfo>
                        <FormItemPost href="https://www.figma.com/design/FokA1WSqLjd6uA1FvZe9Rz/MyCake-(Copy)?node-id=0-1&node-type=CANVAS&m=dev"><img src={location} alt="img" /></FormItemPost>
                    </FormItem>
                    <FormItem>
                        <FormItemName>Телефон</FormItemName>
                        <FormItemInfo>+56 085 345 76 34</FormItemInfo>
                        <FormItemPost href="https://www.figma.com/design/FokA1WSqLjd6uA1FvZe9Rz/MyCake-(Copy)?node-id=0-1&node-type=CANVAS&m=dev"><img src={copy} alt="img" /></FormItemPost>
                    </FormItem>
                    <FormItem>
                        <FormItemName>Пошта</FormItemName>
                        <FormItemInfo>Mail@example.com</FormItemInfo>
                        <FormItemPost href="https://www.figma.com/design/FokA1WSqLjd6uA1FvZe9Rz/MyCake-(Copy)?node-id=0-1&node-type=CANVAS&m=dev"><img src={copy} alt="img" /></FormItemPost>
                    </FormItem>
                </FormList>
                <FormItemName>Доставка</FormItemName>
                <FormInfoList>
                    <FormInfoItem><FormItemName>Таксі за тарифами перевізника</FormItemName></FormInfoItem>
                    <FormInfoItem><FormItemName>Cамовивіз, Київ, Симиренка 23а</FormItemName></FormInfoItem>
                    <FormInfoItem><FormItemName>Власна доставка, 150 грн</FormItemName></FormInfoItem>
                    <FormInfoItem><FormItemName>Власна доставка, безкоштовно для замовлення від 1000 грн</FormItemName></FormInfoItem>
                </FormInfoList>
                <FormInfoWrap>
                    <FormItemName>Оплата</FormItemName>
                    <FormItemName>Передплата 50%</FormItemName>
                </FormInfoWrap>
                <FormItem>
                    <FormPost><img src={faceBook} alt="img" /></FormPost>
                    <FormPost><img src={Instagram} alt="img" /></FormPost>
                    <FormPost><img src={Youtube} alt="img" /></FormPost>
                </FormItem>
                <FormBtn type="button">Написати кондитеру</FormBtn>
            </FormWrap>
        </>
    )
}
export default ModalForm