import'./styles.css'

export const TextInput= ({searchValue, handleChange}) =>{
    return (
        <input placeholder='Type your search' className='text-input' onChange={handleChange} value={searchValue} type ='search'></input>
    )
}