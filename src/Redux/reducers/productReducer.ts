const SELECT_PRODUCT = "SELECT_PRODUCT";
const REMOVE_SELECT = "REMOVE_SELECT";
const SET_DATA = "SET_DATA";

type someOrNull<T> = T|null;

type action = ISetDataAC & IActionCreatorWithId;

export interface IProduct{
    id:number;
    filling:string;
    portion:number;
    mouseCount:number;
    portionWeight:number;
    inStock:boolean;
    description:string;
    cartTopDescription:string;
    additionalText:string;
}
export interface IStateProductResucer {
    products:someOrNull<Array<IProduct>>;
    selected:number[];
}
interface IAction {
    type:string
}
interface IActionCreatorWithId extends IAction{
    id:number
}
interface ISetDataAC extends IAction{
    data:IProduct
}


const initialState:IStateProductResucer = {
    products:null,
    selected:[1]
}

const reducer = (state:IStateProductResucer = initialState,action:action)=>{

    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected:[...state.selected,action.id]
            }
        case REMOVE_SELECT:
            return {
                ...state,
                selected: state.selected.filter(id=>id!==action.id)
            }
        case SET_DATA:
            return {
                ...state,
                products:action.data
            }
        default:
            return state
    }
}

export default reducer;



export const setDataAC:(data:IProduct)=>ISetDataAC = (data)=>({type:SET_DATA,data})
export const selectProductAC:(id:number)=>IActionCreatorWithId = (id)=>({type:SELECT_PRODUCT,id})
export const removeSelectAC:(id:number)=>IActionCreatorWithId = (id)=>({type:REMOVE_SELECT,id})
