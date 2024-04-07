const CampSite = ()=>{
  return (
    <div>
      
    </div>
  )
}

const Camp = () => {
  return (
    <section className='border-2 border-red-500 
    2xl:max-container relative-flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar border-2 border-blue-500 flex 
      h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
      <CampSite 
        backgroundImage= "bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50+joined"
      />
      </div>
    </section>
  )
}

export default Camp
