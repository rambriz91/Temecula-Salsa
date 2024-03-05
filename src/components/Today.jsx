function Today(props) {
  const data = props.data;
  return (
    <section className='flex flex-wrap justify-around mb-5'>
      {data.map((mItem) => (
        <div className='flex flex-col flex-wrap menu-card p-2 m-1 mb-2 w-1/4' key={mItem.id}>
          <h3 className='text-3xl chili text-center'>{mItem.item}</h3>
          <img className='p-2' src={mItem.src} alt={mItem.alt} />
          <p className='p-2 franklin'>{mItem.desc}</p>
          <h4 className='p-2 text-center'>${mItem.price}</h4>
        </div>
      ))}
    </section>
  );
}

export default Today;
