
// import Service from '../public/src/Service';
// import AddCardButton from '../public/src/Layout/AddCardButton';

// // import { mocked } from 'ts-jest/utils'
// // import {Task} from '../public/src/types'


// describe('my first unit test', () => {
//   // beforeEach(() => {
//   //   // Clear all instances and calls to constructor and all methods:
//   //   Service.mockClear();
//   // });


//   jest.mock('../public/src/Service');
  
//   it('addCardButton', () => {

//     const btn = {parentElement: {
//       parentElement: {
//         id: "to-do"
//       },
      
//     }, 
   
    
//   } as HTMLButtonElement

//     console.log(btn);
//     const addBtn = new AddCardButton( btn );
    
//     const id = 'asd12345asd';

//     // const mockAddTask = jest.fn();
//     const MockService = (Service as jest.Mocked<typeof Service>);
//     // const MockService = mocked(Service, true);
//     // MockService.addTask.mockImplentation(mockAddTask)
//     jest.spyOn(MockService, "addTask").mockImplementation(async()=> id);
   

    
//     expect(addBtn.addTask()).toBe({
//       title: '',
//       description: '',
//       column: 'to-do-list',
//       categoryId: 1,
//       _id: 'asd12345asd',
//     })
//   })
// })
// import {addNumbers} from '../public/src/toTest'

// describe('first test', ()=>{
//   it("add numbers", ()=>{
//     expect(addNumbers(1,3)).toBe(4)
//   })
// })