import { coding } from '../assets/data'

function CodingProfile() {
  return (
    <div className='text-white py-16 px-4'>
      <div className='max-w-4xl mx-auto text-center space-y-12'>
        <h2 className='text-4xl font-bold'>Coding Profile</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
         {coding.map((items, index) => (
  <a
    key={index}
    href={items.links[0].url}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className='bg-[#4a4a4a] flex flex-col justify-center items-center p-8 rounded-xl 
                    hover:scale-105 transition cursor-pointer'>
      <img src={items.img} className="h-12 object-contain" />
      <p className="mt-3">{items.name}</p>
    </div>
  </a>
))}

        </div>
      </div>
    </div>
  )
}

export default CodingProfile