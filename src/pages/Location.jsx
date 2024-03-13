export default function Location() {
  return (
    <section id='location' className='franklin text-lg'>
      <h2 className='chili p-5 m-5 text-center'>Find us at:</h2>
      {/* canyonlake div */}
      <div className='flex flex-col flex-wrap w-full m-5'>
        <h2 className='text-center m-4'>Canyon Lake Farmer's Market</h2>
        <div className='mt-4 flex w-full justify-center'>
          <div className='m-5 flex w-1/2 justify-center hide'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.4056163169844!2d-117.25635190687316!3d33.672559904464606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9c1261f2c8b7%3A0xb09447897d5a6d66!2sCanyon%20Lake%20Certified%20Farmers%20Market!5e0!3m2!1sen!2sus!4v1710268422612!5m2!1sen!2sus'
              width='600'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='m-5 w-1/2'>
            <h3 className='mb-3'>Address</h3>
            <p className='mb-3'>31516 Railroad Canyon Rd, Canyon Lake, CA 92587</p>
            <h3 className='mb-3'>Hours</h3>
            <p>Sundays</p>
            <p>9:00am - 1:00pm</p>
          </div>
        </div>
      </div>
      {/* sun city div */}
      <div className='flex flex-col w-full m-5'>
        <h2 className='text-center m-4'>Sun City Farmer's Market</h2>
        <div className='mt-4 flex w-full justify-center'>
          <div className='m-5 flex w-1/2 justify-center hide'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.051747348886!2d-117.19566672291377!3d33.70760987328851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9e0a4f5c0e6f%3A0x74c1d24922cf9f70!2s26850%20Sun%20City%20Blvd%2C%20Sun%20City%2C%20CA%2092586!5e0!3m2!1sen!2sus!4v1710268359100!5m2!1sen!2sus'
              width='600'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='m-5 w-1/2'>
            <h3 className='mb-3'>Address</h3>
            <p className='mb-3'>26850 Sun City Blvd Sun City, CA 92586</p>
            <h3 className='mb-3'>Hours</h3>
            <p>Saturdays</p>
            <p>8:00am - 12:00pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
