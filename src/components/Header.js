import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showAdd ? '#ED254E' : '#A1C181'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
