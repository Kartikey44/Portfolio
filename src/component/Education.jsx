import { education } from '../assets/data'

function Education() {
  return (
    <div  className='flex flex-col text-white gap-10 mb-10 max-w-6xl  px-5 mx-auto'>
      <h2 className='text-center font-bold text-3xl '>Education</h2>
      {education.map((edu, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row md:justify-between md:items-center shadow-xl bg-[#2a2a2a] p-5 rounded-xl '
        >
          <div className='text-left'>
            <h3 className='text-xl font-semibold'>{edu.degree}</h3>
            <p className="text-gray-400">{edu.college}</p>
            <p className="text-sm text-gray-500">{edu.location}</p>
          </div>
          <div className='text-left md:text-right mt-2 md:mt-0'>
            <p className="text-sm">{edu.year}</p>
            <p className="text-green-400 font-medium">{edu.score}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education