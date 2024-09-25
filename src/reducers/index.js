import { combineReducers } from "redux";
import mutualForm from "./mutualForm/mutualForm";
import contact from "./contact/contact";
import reachOut from "./reachOut/reachOut";
import blog from "./blog/blog";

export const reducers = combineReducers({
    mutualForm,
    contact,
    reachOut,
    blog
});
