import { sum } from "../sum";


test("Sum function should calculate the sum of two numbers",()=>{

    const res = sum(114,100);
     // Assertion 
    expect(res).toBe(214);

});