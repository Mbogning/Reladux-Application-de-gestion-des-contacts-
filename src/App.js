import React, { useEffect, createRef, useState, useMemo } from 'react'
import Row from './components/Row'
import Components from './components'
import AddContactModal from './components/AddContactModal'
import contacts from './data'
import './utils'

const App = () => {
  const ref = createRef()
  const filters = ['🧳 business', '👫 friends', '👪 family']
  const [list, setList] = useState(contacts)
  const [selectedFilter, setFilter] = useState(null)
  const selectFilter = (filter) => {
    if(filter.unshiftForm(3) === selectedFilter) {
      return setFilter(null)
    }

    const substring = filter.unshiftForm(3)
    setFilter(substring)
  }
  /** fonction pour enregister un contact en prenant en parametre contact. puis il merge la liste des contact */
  const add = (contact) => {
    const newContact = {...contact, id: list.length +1, name: `${contact.first} ${contact.last}`}
    setList([contact, ...list])
  }
  const contactsList = useMemo(() => {
    if(!selectedFilter) {
      return list
    }
    return list.filterList(selectedFilter)
  }, [selectedFilter, contacts])

   useEffect(() => {
     ref.current.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   }, [ref])
  return (
    <div className='container'>
      {/** modal */}
      <AddContactModal add={add} />

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
                    setFilter={selectFilter}
                    selectedFilter={selectedFilter}
                  />
                ))}

            </div>
          </div>
          </a>
          <div className='list-scroll' ref={ref}>
            {contactsList.map(contact => <Row key={contact.id} contact={contact} /> )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App