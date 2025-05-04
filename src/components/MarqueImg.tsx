const MarqueImg = ({img}: {img: string}) => {
  return (
    <div>
      <img src={img} alt="" className="w-44 h-44 xl:h-52 object-contain grayscale mx-12 xl:mx-16" />
    </div>
  )
}

export default MarqueImg