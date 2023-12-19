import React from 'react';
import { DefaultImg } from '../Header/Logo';
import LogoFooter from '../Assets/Images/FooterLogo.svg'
import CircumIcon from "@klarr-agency/circum-icons-react";



const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <footer className="relative w-full bg-primary text-[#ffffff]">
            <div className=' mx-auto xl:max-w-[1190px] px-[15px] py-[50px]'>
                <div className=' grid grid-cols-2 lg:grid-cols-4 mb-[80px]'>

                    <div>
                        <DefaultImg logo={LogoFooter} />
                    </div>

                    <div>
                        <h5 className=' category-title mb-3'>Товари</h5>
                        <ul className=' flex flex-col gap-3 text-lg'>
                            <li>Собакам</li>
                            <li>Котам</li>
                            <li>Гризунам</li>
                            <li>Рибам</li>
                            <li>Рептиліям</li>
                        </ul>
                    </div>

                    <div className=' flex flex-col gap-3'>
                        <h5 className='category-title'  >Контакти</h5>
                        <a href="tel:+380971224154">+38-(097)-122-41-54</a>
                        <a href="mailto:felinecanine@gmail.com">felinecanine@gmail.com</a>
                        <ul className=' flex gap-5'>
                            <li >
                                <CircumIcon name="instagram" width="24px" height="24px" />
                            </li>
                            <li>
                                <CircumIcon name="facebook" />
                            </li>
                            <li>
                            <CircumIcon name="twitter" />
                            </li>
                        </ul>
                    </div>

                    <div className=' flex flex-col gap-3'>
                        <p>Графік роботи: Пн-Нд: 9:00-18:00</p>
                        <p>Адреса: Харків, вул. Героїв Праці, 9 ТРЦ «Дафі»</p>
                    </div>
                </div>
                <div className='text-center'>&copy; {currentYear} <a href="/">Feline Canine.</a>. All
                    Rights Reserved.</div>
            </div>
        </footer>
    )
}

export default Footer