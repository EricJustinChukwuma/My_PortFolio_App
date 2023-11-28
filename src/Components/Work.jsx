import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2023,
    title: 'Content Creator',
    duration: '5 Months',
    details: 'Worked as a content creator for a local company starting up in my home town. I created a bunch of content for their shows and helped take off their brand'
  },
  {
    year: 2022,
    title: 'Google',
    duration: '1 Years',
    details: 'Worked with a team of four as a React developer to build and maintain visually appealing and functional websites with a focus on user accessibilty and user friendliness'
  },
  {
    year: 2021,
    title: 'PhykTech Remote',
    duration: '6 Months',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et consequuntur quia laborum, impedit odio blanditiis, nihil earum voluptatibus architecto praesentium cum consectetur sit ex voluptas, reiciendis quo dolorem commodi molestias?'
  },
  {
    year: 2020,
    title: 'Facebook',
    duration: '3 Years',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et consequuntur quia laborum, impedit odio blanditiis, nihil earum voluptatibus architecto praesentium cum consectetur sit ex voluptas, reiciendis quo dolorem commodi molestias?'
  },
]
const work = () => {
  return (
    <div id='work' className='max-w-[1040px] md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {
          data.map((item, idx) => (
              <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
              />
          ))
        }
    </div>
  )
}

export default work