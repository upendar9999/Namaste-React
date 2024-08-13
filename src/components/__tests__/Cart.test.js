import { fireEvent, render , screen} from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=> Promise.resolve(MOCK_DATA)
        }
    );
}
);


it("Should load restaurant Menu Component",async ()=>{

    await act( async ()=> render(
        <BrowserRouter>
        <Provider store = {appStore}>
     <Header/>
    <RestaurantMenu/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Pot Rice(3)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    
    const addBtns = screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
    
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Cart is empty!! Please add items to the cart")).toBeInTheDocument();
 
})