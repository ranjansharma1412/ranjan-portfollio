
interface ISearchField {
    onTextChange: (text: string) => void
}

const SearchField = ({ onTextChange }: ISearchField) => {
    return (
        <input placeholder="Search..." className="h-10 bg-slate-300 rounded-full p-2 focus:outline-none" onChange={(e) => {
            e.preventDefault()
            onTextChange(e.target.value)
        }} />
    )
}

export default SearchField