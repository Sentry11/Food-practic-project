/*jshint esversion: 8 */ 

import tabs from './modules/tabs';
import modal from'./modules/modal';
import calcullator from'./modules/calculator';
import cards from './modules/cards';
import forms from'./modules/forms';
import slider from'./modules/slider';
import timer from'./modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
   
    const modalTimerId = setTimeout(() => openModal('.modal',modalTimerId ), 300000);


    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal',modalTimerId );
    calcullator();
    cards();
    forms('form',modalTimerId);
    slider({
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current'
    });
    timer('.timer','2022-02-20');
});