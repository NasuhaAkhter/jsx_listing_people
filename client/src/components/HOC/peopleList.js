import React from 'react';

const peopleList = (OriginalComponent) => {
    class NewComponent extends React.Component {
        people = [{
            name: "Juha Nasuha",
            email: "juha@gmail.com",
            title: "This is title",
            image_url: "this should be an url"
        }];
        storePerson = (newOb) =>{
            this.setPeople ([ ...this.people , newOb ])
        }
        render() {
            const  people  = this.people;
            console.log(people, "from peopleList")
            return  (
                // <React.Fragment>
                    <OriginalComponent  people={people} storePerson={this.storePerson} />
                // </React.Fragment>
            )
            // return <OriginalComponent people={this.people} storePerson={this.storePerson} />;
        }
    }
    return NewComponent;
};

export default peopleList;
