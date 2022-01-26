import  CategoryPage  from "../../components/ui/CategoryPage/CategoryPage";
import { heroInfo, optionOne, optionTwo, optionThree } from "./categoryOptions"

function ArtistsScreen() {
  return (
    <CategoryPage 
      cardOptions = {heroInfo} 
      optionOne = {optionOne}
      optionTwo = {optionTwo}
      optionThree = {optionThree}
    />
  )
}

export default ArtistsScreen;
