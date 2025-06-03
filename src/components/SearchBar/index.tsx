import './styles.css';

export default function SearchBar() {

    return (
        <form className="dsc-search-bar">
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Descrição Objeto Perdido" />
            <button type="reset">🗙</button>
        </form>
    );
}
