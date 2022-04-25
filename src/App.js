import React, { useEffect, createRef } from 'react'
import Row from './components/Row'
import Components from './components'
import contacts from './data'
import './utils'

const App = () => {
  const ref = createRef()
  const filters = ['🧳 business', '👫 friends', ' 👪 family']
   useEffect(() => {
     ref.current.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   }, [ref])
  return (
    <div className='container'>
      {/** modal */}

      <div className='content d-flex justify-content-center align-items-center'>
        <div className='contacts-list list-group'>
          <a
            href='#'
            className='list-group-item list-group-item-action active'
            aria-current='true'
          >
          <div className='d-flex w-100 flex-column flex-md-row justify-content-between'>
            <div className='d-flex justify-content-between align-items-center' style={{ width: '170px' }}>
              <h5 className='mr-2'>Contacts List</h5>
              <button
                className='btn btn-light btn-sm'
                data-bs-toggle='modal'
                data-bs-target='#addContact'
              >
                +

              </button>
            </div>
            <div className='d-flex justify-content-around' style={{width: "250px"}}>

                {filters.map((filter) => (
                  <Components.Badge 
                    key={filter}
                    filter={filter}
                  />
                ))}

            </div>
          </div>
          </a>
          <div className='list-scroll' ref={ref}>
            {contacts.map(contact => <Row key={contact.id} contact={contact} /> )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App