import React ,{createContext , useState, useEffect, Component} from 'react';
export const ListContextProvider =  createContext({});
const ListContext = ({children})=>{
    const [people, setPeople] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setPeople([{
                name:"Nasuha Akhter 52",
                email :"nasuhaakhter52@gmail.com",
                title : "Assistant Software Engineer at Appifylab",
                image_url: "This would be an image url"
            }] );
            setloading(false);

        }, 2000);
        return () =>{
            clearTimeout(timer);
        };
    }, []);
    async function updatePeopleData  (ob) {
        console.log(ob)
        setPeople( [ob,...people] )
    }
    async function storePeopleData(getPeople){
        console.log(getPeople, "getPeople")
        setPeople( getPeople );
    }
    async function updateItemEdit(index){
        let arr = people 
        let prev = people[index]
        prev.isEdit = 1
        const updatedData = [...arr.slice(0, index), Object.assign({}, arr[index], prev), ...arr.slice(index + 1)]
        setPeople(updatedData)
    }
    async function updateItem(index, person){
        let arr = people 
        let prev=  {
            name: person.name,
            email: person.email,
            title: person.title,
        }
        const updatedData = [...arr.slice(0, index), Object.assign({}, arr[index], prev), ...arr.slice(index + 1)]
        setPeople(updatedData)
    }
    async function deletePeopleData(index){
        let arr = people;
        let ix = index;
        const noOfRows = [...arr.slice(0, ix), ...arr.slice(ix+1)] ;
        setPeople( noOfRows );
    }
    const value= {
        people,
        setPeople,
        loading,
        setloading,
        updatePeopleData,
        storePeopleData,
        deletePeopleData,
        updateItem,
        updateItemEdit
    };
    return <ListContextProvider.Provider value ={value}> {children} </ListContextProvider.Provider>
             
}
export default ListContext
// export default class ListContext extends Component{
//      state ={
//         people :[
//             {
//                 name: "Juha Nasuha",
//                 email: "juha@gmail.com",
//                 title: "This is title",
//                 image_url: "this should be an url"
//             },
//             {
//                 name: "  Nasuha akhter",
//                 email: "nasuha@gmail.com",
//                 title: "This is title",
//                 image_url: "this should be an url"
//             },
//           ],
//     }
//     render(){
//         return (
//             <ListContextProvider.Provider value ={{ ...this.state }}>
//                 {this.props.children}
//             </ListContextProvider.Provider>
//         )
//     }
// } 

 
 

