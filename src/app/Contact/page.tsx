

import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
       <div className='container mx-auto mt-24'>
            <span className='opacity-50 font-poppin text-sm'>Home /</span><span className='text-black text-sm font-poppin'>Cantact</span>
            </div> 
      <div className="flex flex-col md:flex-row gap-7 ml-5 mt-[98px]">
        
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Call To Us */}
          <div className=" w-[340px] h-[457px] rounded border flex items-start space-x-4 bg-white shadow-md">
         
            <Image src="/Images/icons-phone.png" alt="phone"
            width={40} height={40}
            className="rounded-[31px] ml-8 mt-8"/>
            <div>
              <h1 className="text-[16px] font-poppin font-medium mt-11">Call To Us</h1>
              <p className="font-poppin text-sm mt-6 -ml-12">We are available 24/7, 7 days a week.</p>
              <p className="font-poppin text-sm mt-5 -ml-12">Phone: +999 987 2322</p>
              <hr className="mt-6 border-[#000000] border w-[276px] -ml-12"/>
            </div>
          </div>

          {/* Write To Us */}
          <div className="flex items-start space-x-4">
            <Image src="/Images/icons-mail.png" alt="email"
            width={40} height={40}
            className="rounded-[43px] ml-8 -mt-[270px]"/>
            <div>
              <h1 className="text-[16px] font-poppin font-medium -mt-[260px]">Write To US</h1>
              <p className="w-[250px] leading-[21px]font-poppin text-sm mt-7 -ml-11">Fill out our form, and we will contact you within 24 hours.</p>
              <p className="font-poppin mt-5 -ml-11 text-sm">Emails: customer@exclusive.com</p>
              <p className="font-poppin mt-5 -ml-11 text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-[800px] w-full h-[457px] border rounded  bg-white shadow-md p-6 pt-10">
          <form className="space-y-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#F5F5F5] px-4 py-2 md:w-full w-[235px] h-[50px]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#F5F5F5] px-4 py-2 md:w-full w-[235px] h-[50px]"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="bg-[#F5F5F5] px-4 py-2 md:w-full w-[235px] h-[50px]"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-[#F5F5F5] rounded px-4 py-2 w-[235px] md:w-[737px] h-[100px] md:h-[207px]"
            />
            <button
              type="submit"
              className="bg-[#DB4444] text-white px-6 py-2 md:ml-[530px] ml-10 w-[215px] md:h-14 h-11 rounded font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}