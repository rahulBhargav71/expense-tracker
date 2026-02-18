
export default function Filters({ setCategory, setSort }) {
    return (
      <div className="filters">
        <input
          placeholder="Filter by category"
          onChange={e => setCategory(e.target.value)}
        />
        <select onChange={e => setSort(e.target.value)}>
          <option value="date_desc">Newest First</option>
        </select>
      </div>
    );
  }
  