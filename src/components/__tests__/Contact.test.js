import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",()=>{
   
    // beforeAll(()=>{
    //     console.log("Before All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterAll(()=>{
    //     console.log("After All");
    // })

    // afterEach(()=>{
    //     console.log("After each");
    // })


    it("Should load contact us component",()=>{


        render(<Contact/>);
        const heading = screen.getByRole("heading");
        
        //Assertion 
        expect(heading).toBeInTheDocument();
   });
   
   it("Should load button inside contact us component",()=>{
   
   
       render(<Contact/>);
       const button = screen.getByText("Submit");
       
       //Assertion 
       expect(button).toBeInTheDocument();
   });
   
   it("Should load input name inside contact us component",()=>{
   
   
       render(<Contact/>);
       const inputName = screen.getByPlaceholderText("name");
       
       //Assertion 
       expect(inputName).toBeInTheDocument();
   });
   
   it("Should load two input boxes inside contact us component",()=>{
   
   
       render(<Contact/>);
   
       //Querying 
       const inputBoxes = screen.getAllByRole("textbox");
       
       //Assertion 
       expect(inputBoxes.length).toBe(2);
   
   });

});