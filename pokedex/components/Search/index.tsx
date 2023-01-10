import { InputSearch } from "./style";

export default function Search({ setSearch }: any) {
  return (
    <InputSearch>
      <input
        type="name"
        placeholder="Search by name or number"
        onChange={(event) => setSearch(event.target.value)}
      />
    </InputSearch>
  );
}
