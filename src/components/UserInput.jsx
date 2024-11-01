export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment:</label>
          <input type="number" />
        </div>
        <div>
          <label>Annual Investment:</label>
          <input type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Exptected return:</label>
          <input type="number" />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}
