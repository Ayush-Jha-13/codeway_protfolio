import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className='text-xl mt-15'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste odio in asperiores a aliquam dolores iure corrupti temporibus amet? Iusto, quis, ab soluta explicabo in dolorem, atque voluptatum sit ducimus repellendus nihil eum. Ex necessitatibus a quisquam illo ipsum ab aspernatur, beatae voluptates aliquam hic esse, eligendi, non unde maiores dicta assumenda. Saepe cupiditate sit excepturi praesentium aperiam nulla.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quisquam eius, assumenda ipsam nostrum sint laudantium ratione? Vel, suscipit ducimus repellat, laborum cum nulla exercitationem vitae aperiam neque magni optio!
            </p>
        </div>
    </div>
  )
}

export default About