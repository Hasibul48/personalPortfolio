import React from 'react'

import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';
function FooterComponent() {
    return (
        <Footer className='shadow-lg shadow-gray-700 mt-24 border-t-4 border-[#872374] bg-slate-900 text-white' container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='mb-5 md:mb-0'>
                        <Link to={'/'}><h1 className='font-thin text-2xl m-3 md:m-0'><span className='bg-gradient-to-r from-indigo-600 via-blue-800 to-pink-700 text-white px-3 rounded-xl py-1 font-semibold'>Hasibul</span>Islam</h1></Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Quick Links" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/about">About</Footer.Link>
                                <Footer.Link href="/blogs">Blogs</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow me" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/Hasibul48">Github</Footer.Link>
                                <Footer.Link href="https://www.linkedin.com/in/hm-hasibul-islam/">LinkedIn</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="/" by="Hasibul™" year={new Date().getFullYear()} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="/facebook" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/hmhasibul482023/" icon={BsInstagram} />
                        {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
                        <Footer.Icon href='https://www.linkedin.com/in/hm-hasibul-islam/' icon={BsLinkedin} />
                        <Footer.Icon href="https://github.com/Hasibul48" icon={BsGithub} />
                        {/* <Footer.Icon href="#" icon={BsDribbble} /> */}
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent