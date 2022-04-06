function Compte ({ titre, montant, description }) {
  return (
    <section className='compte'>
      <div>
        <h3> {titre} </h3>
        <p className='compte-montant'> {montant} </p>
        <p className='compte-description'> {description} </p>
      </div>
      <div>
        <button> View transactions </button>
      </div>
    </section>
  )
}

export default Compte
