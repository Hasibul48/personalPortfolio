import React from 'react'

function Privacy() {
  return (
    <div className='shadow-lg shadow-gray-700 border-[#872374] border rounded-2xl mt-6   container mx-auto px-7 py-4 flex flex-col gap-5'>
      <h1 className='text-2xl text-center mb-6 mt-5'>Privacy & Policy</h1>

      <div className="textSection">
        <b>Information We Collect</b>
        <p>
          This website does not actively collect any personally identifiable information (PII) about you, such as your name, email address, or phone number. However, I may collect non-personal information, such as your IP address, browser type, and operating system for analytical purposes. This information is used to improve the website's performance and user experience.
        </p>
      </div>

      <div className="textSection">
        <b>Cookies</b>
        <p>This website may use cookies to enhance your browsing experience. Cookies are small text files that are stored on your computer or device. They help me remember your preferences and track website usage. You can disable cookies through your browser settings, but this may affect your website experience.</p>
      </div>

      <div className="textSection">
        <b>Third-Party Services</b>
        <p>I may use third-party services, such as Google Analytics, to analyze website traffic. These services may collect non-personal information about your visit. Please refer to the respective privacy policies of these third-party services for more details.</p>
      </div>

      <div className="textSection">
        <b>Data Security</b>
        <p>
          I take reasonable measures to protect the security of your information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, I cannot guarantee absolute security.</p>
      </div>

      <div className="textSection">
        <b>Changes to This Privacy Policy</b>
        <p>
          I reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page.</p>
      </div>
      <div className="textSection">
        <b>Contact Us</b>
        <p>
          If you have any questions about this Privacy Policy, please contact me at <a className={'text-yellow-300'} href="mailto:hmhasibul48@gmail.com">hmhasibul48@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Privacy