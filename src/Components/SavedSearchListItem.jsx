export default function SavedSearchListItem({ eachSave }) {
  return (
    <li>
      {eachSave}
      <button>Search Now</button>
      <button>Edit Criteria</button>
      <button>Delete</button>
    </li>
  );
}
