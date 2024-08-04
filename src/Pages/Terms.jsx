import React from 'react'

function Terms() {
    return (
        <div className='shadow-lg shadow-gray-700 border-[#872374] border rounded-2xl mt-6   container mx-auto px-7 py-4 flex flex-col gap-5'>
            <h1 className='text-2xl text-center mb-6 mt-5'>Terms & Conditions</h1>

            <div className="textSection">
                <b>Introduction</b>
                <p>
                    TThese Terms and Conditions govern your use of this website, <a href="hmhasibul.netlify.app">hmhasibul.netlify.app</a> By accessing and using this website, you agree to be bound by these terms.
                </p>
            </div>

            <div className="textSection">
                <b>Website Content</b>
                <p>The content on this website, including but not limited to text, images, code, and design, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without prior written consent</p>
            </div>

            <div className="textSection">
                <b>Disclaimer</b>
                <p>The information provided on this website is for informational purposes only and does not constitute professional advice. Reliance on any information provided on this website is at your own risk.</p>
            </div>

            <div className="textSection">
                <b>Limitation of Liability</b>
                <p>Hasibul shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with your use of this website or the information contained therein.</p>
            </div>

            <div className="textSection">
                <b>Indemnification</b>
                <p>
                    You agree to indemnify and hold Hasibul harmless from any claims, damages, liabilities, costs, and expenses arising out of your use of this website or violation of these Terms and Conditions.</p>
            </div>
            <div className="textSection">
                <b>Changes to Terms and Conditions</b>
                <p>
                    Hasibul reserves the right to modify these Terms and Conditions at any time without prior notice. Your continued use of this website after any changes indicates your acceptance of the modified terms.</p>
            </div>
            <div className="textSection">
                <b>Contact Us</b>
                <p>
                    If you have any questions about Terms and Conditions, please contact me at <a className={'text-yellow-300'} href="mailto:hmhasibul48@gmail.com">hmhasibul48@gmail.com</a>
                </p>
            </div>
        </div>
    )
}

export default Terms