import React from 'react'
import Card from '../components/Card'
const Home = () => {
  return (
  <div className='grid grid-cols-4 p-4'>

      {data.map((data) => <Card title={data.title} desc={data.desc} />)}
  </div>
  )
}

export default Home



const data = [
  {
    title: "Card 1",
    desc: "Description 1",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 3",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 2",
  },
  {
    title: "Card 2",
    desc: "Description 1",
  },
  {
    title: "Card 1",
    desc: "Description 1",
  },
];