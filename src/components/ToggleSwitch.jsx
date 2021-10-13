import "./ToggleSwitch.css";

const ToggleSwitch = ({ active }) => {
  if (active) {
    return (
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    );
  }

  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
