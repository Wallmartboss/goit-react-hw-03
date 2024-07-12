import s from './SearchBox.module.css'; 

const SearchBox = ({ value, onFilter }) => {
    console.log(value);
    return (
        <div className={s.searchwrapper}>
            <p className={s.label}>Find contact by name</p>
            <input className={s.searchfield}
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    );
};
    
export default SearchBox;