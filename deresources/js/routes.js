import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";

const routes = [
    {path:'/', component:Bookables,name:"home"},
    {path:'/second',component:BookableListItem,name:"second"},
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history"
});

export default router;