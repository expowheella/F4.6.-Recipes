import "./FilterCategories.css"

let FilterCategories = (props) => {
    function onFilterValueChanged(e) {
        props.filterValueSelected(e.target.value)
    }


    return (
        <div className="filter-area">
            <select name="Categories" onChange={onFilterValueChanged}>
                <option value="Soup">Soup</option>
                <option value="Porridge">Porridge</option>
                <option value="Deserts">Deserts</option>
                <option value="Bewerages">Bewerages</option>
            </select>
        </div>
    )
};

export default FilterCategories;