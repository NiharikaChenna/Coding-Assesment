import Dashboard from './Dashboard';
const Dropdown = ({ subcategory, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  console.log(depthLevel)
  const dropdownClass = depthLevel > 1 ? 'dropdown-subcategory' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {subcategory.map((subcategory, index) => (
        <Dashboard
          items={subcategory}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
