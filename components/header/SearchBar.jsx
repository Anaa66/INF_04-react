function SearchBar(){
    return(
        <form action="" className='d-flex align-items-center rounded-pill bg-secondary-subtle p-2'>
            <input type="text" className='form-control bg-transparent border-0 shadow-none custom-placeholder' placeholder='Wyszukaj...'/>
            <button type='submit' className='btn border-0 shadow-none'>
            <img src="./assets/icons/lupa.png" alt="lupa" width="20" height="20"/>
            </button>
        </form>
    );
}

export default SearchBar;