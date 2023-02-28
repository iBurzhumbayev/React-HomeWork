import './Filter.css'

const Filter = (props) => {
    console.log(props)
    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'done', label: 'Done'},
        {name: 'important', label: 'Important'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-active' : '';
        return (
            <button type="button"
                className={`${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button> 
        )
    })
    return (
        <>
            {buttons}
        </>
    )
}

export default Filter;