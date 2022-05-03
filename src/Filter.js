import {useEffect} from 'react';

function Filter({ projects, setFiltered, activeFilter, setActiveFilter }){
    
    useEffect(() => {
        var selected = projects;
        if (activeFilter !== 'all') {
            selected = selected.filter((project) => project.filters.includes(activeFilter));
        }
        selected = selected.filter((project) => !(project.hidden));
        setFiltered(selected);
    }, [activeFilter])
    
    return (
        <div className="filter-container">
            <button className={activeFilter === 'all' ? "active" : ""} onClick={() => setActiveFilter('all')}>All</button>
            <button className={activeFilter === 'Game' ? "active" : ""} onClick={() => setActiveFilter('Game')}>Games</button>
            <button className={activeFilter === 'Environment' ? "active" : ""} onClick={() => setActiveFilter('Environment')}>Environments</button>
            <button className={activeFilter === 'VFX' ? "active" : ""} onClick={() => setActiveFilter('VFX')}>VFX</button>
            <button className={activeFilter === 'TeamProject' ? "active" : ""} onClick={() => setActiveFilter('TeamProject')}>Team Projects</button>
        </div>
    )
}

export default Filter;
