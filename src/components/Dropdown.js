import Dashboard from './Dashboard';
const Dropdown = ({ subcategory, dropdown, level }) => {
  level = level + 1;
  console.log(level)
  const dropdownClass = level > 1 ? 'dropdown-subcategory' : '';
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
          level={level}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
