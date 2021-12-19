import React , {Component } from 'react';
import axios from 'axios';
import { ListContextProvider } from '../contexts/ListContext'
import { GlobalContextProvider } from '../contexts/GlobalContext'
class List extends Component{
   
    componentDidMount(){
        this.getPeopleData()
    }
    constructor(props) {
        super(props);
         this.state = {
            people:[] ,
            loading:false , baseUrl:'' ,
            input:{
                id:-1,
                name:"",
                email:"",
                title:""
            } 
       };
    }
    async  getPeopleData() {
        try{
          const res = await axios.get(`${this.props.baseUrl}getPeoples`)
          if(res.status == 200){ 
            console.log(this.props, "people")
            this.props.storePeopleData(res.data )
          }
       }catch(error){
  
       }
    }
    async  deleteItemFromBAck(index, id) {
    try{
        const res = await axios.post(`${this.props.baseUrl}deletePeople`, {id:id})
        if(res.status == 200){
            this.props.deletePeopleData(index)
        }
     }catch(error){

     }
    }
    render(){
        const deleteItem =( e,person, index) =>{
            console.log("delete on",e, index)
            var id = -1
            if(person.id) {id = person.id}
            this.deleteItemFromBAck(index, id )
        }
        const editItem =( e,person, index) =>{
            var id = -1
            this.props.updateItemEdit(index)
            if(person.id) {id = person.id}
            this.state.input.id = person.id
            this.state.input.name = person.name
            this.state.input.email = person.email
            this.state.input.title = person.title
            this.props.updateItem(index, person)
            // this.setState({
            //     id: person.id,
            //     name: person.name,
            //     email: person.email,
            //     title: person.title,
            // });
            console.log(this.state, "state")
        }
        const renderList =  this.props.people.map(function(person, index){
            return (
                <div className="col-xl col-md col-sm col-12">
                    <div className="_react_card_content">
                        <div className="_react_card_content_inner">
                            <p>
                            <span className="cross_icon"  onClick={((e) => deleteItem(e, person, index))}   >X &nbsp; </span>
                            <span  onClick={((e) => editItem(e, person, index))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4853 13.4853L34.4142 6.41421C33.6332 5.63317 32.3668 5.63316 31.5858 6.41421L14.6153 23.3848L24.5147 33.2842L41.4853 16.3137C42.2663 15.5327 42.2663 14.2663 41.4853 13.4853ZM21.7995 34.8116L13.0879 26.1L9.66548 38.234L21.7995 34.8116Z" fill="black"/>
                                </svg>
                            </span>
                            </p>                        
                            <div className="_react_card_img_wrap">
                                <img src={person.image_url} alt="Image" className="_react_card_img"/>
                            </div>
                            { person.isEdit ? 
                                <div className="_react_card_txt" >
                                <input type="text" className="form-control" id="name"   
                                    name="name" placeholder="Name"   
                                />
                                <input type="text" className="form-control" id="email"   
                                    name="email" placeholder="Email"  
                                />
                                <input type="text" className="form-control" id="title"   
                                    name="title" placeholder="Title"  
                                />
                            </div>:
                                <div className="_react_card_txt" >
                                <p>{person.isEdit? 'true' :'false'}</p>
                                <h3 className="_react_card_name">{person.name}</h3>
                                <p className="_react_card_email">{person.email}</p>
                                <h4 className="_react_card_title">{ person.title}</h4>
                            </div> 
                            }
                            
                            
                        </div>
                        
                    </div>
                </div>
            )
        });
        return (
            <div className="_react_card_wrapper">
                <div className="_react_card_wrap">
                    <div className="container">
                        <div className="_react_card_content_wrap">
                            <div className="row">
                            {renderList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default List 
export default props => ( <GlobalContextProvider.Consumer>{(globalContext) => (
    <ListContextProvider.Consumer>{(listContext)=>{
        return <List {...props} people={listContext.people} loading={listContext.loading} storePeopleData= {listContext.storePeopleData} updatePeopleData = {listContext.updatePeopleData} updateItem={listContext.updateItem} updateItemEdit={listContext.updateItemEdit} deletePeopleData = {listContext.deletePeopleData} baseUrl ={globalContext.baseUrl}  />
        }}
    </ListContextProvider.Consumer>
)}
</GlobalContextProvider.Consumer>
)
// static contextType  = ListContextProvider;
// render(){
//    console.log(this.context, "context");
//    const people = this.context.people;
//    console.log(people, "people")
//    var renderList =  people.map(function(person, index){
//        return (
//            <div className="col-xl col-md col-sm col-12">
//                <div className="_react_card_content">
//                    <div className="_react_card_content_inner">
//                        <p>
//                        <span className="cross_icon"    >X &nbsp; </span>
                       
//                        <span   >
                           
//                        </span>
                       
//                        </p>                        
//                        <div className="_react_card_img_wrap">
//                            <img src={person.image_url} alt="Image" className="_react_card_img"/>
//                        </div>
//                        <div className="_react_card_txt">
//                            <h3 className="_react_card_name">{person.name}</h3>
//                            <p className="_react_card_email">{person.email}</p>
//                            <h4 className="_react_card_title">{ person.title}</h4>
//                        </div>
                      
//                    </div>
                   
//                </div>
               
//            </div>
//        )
//    });
//    return (
//        <GlobalContextProvider.Consumer>{(globalContext)=>{
           
//            return (
//                <div className="_react_card_wrapper">
//                    <div className="_react_card_wrap">
//                        <div className="container">
//                            <div className="_react_card_content_wrap">
                                   
//                                <div className="row">
//                                {renderList}
//                                <div className="col-xl col-md col-sm col-12">
//                                    <div className="_react_card_content">
//                                        <div className="_react_card_content_inner">
//                                            <p>
//                                            <span className="cross_icon"    >X &nbsp; </span>
                                           
//                                            <span >
                                               
//                                            </span>
                                           
//                                            </p>                        
//                                            <div className="_react_card_img_wrap">
//                                                <img   alt="Image" className="_react_card_img"/>
//                                            </div>
//                                            <div className="_react_card_txt">
                                           
                                       
//                                                <h3 className="_react_card_name"> NasuhaAkhter </h3>
//                                                <p className="_react_card_email"> nasuha@gmail.com</p>
//                                                <h4 className="_react_card_title"> this is title </h4>
//                                            </div>
                                           
//                                        </div>
                                       
//                                    </div>
//                                </div>
                   
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            )
//        }}
//        </GlobalContextProvider.Consumer>
       
//    );
   
// }
