import DrinksList from "../../components/DrinkList";
import DrinkDetailModal from "../../components/DrinkModal";
import SearchForm from "../../components/SearchForm";

export default function Home (){
    return (
        <div>
            <SearchForm/>
            <DrinksList/>
            <DrinkDetailModal/>
        </div>
    )
}