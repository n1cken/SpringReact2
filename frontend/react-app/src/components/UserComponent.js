import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

   constructor(props) {
       super(props);

        /* Create so that the state of this component has a
         empty users array. */

       this.state = {
           users:[]
       }

   }


    /*Called immediately after mounted, calling setState here
    will trigger to re-render. */

   componentDidMount() {
       UserService.getUsers().then((response) => {
           this.setState({users: response.data})
       });

   }

    render () {
        return (
            <div>
                <h1 className="text text-center"> User List </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Mail</td>

                        </tr>
                    </thead>
                <tbody>
                {
                    this.state.users.map(
                        /* map is called for each object
                            in an array.

                        function user() {

                         } */

                        user =>
                            <tr key={user.id}>
                                <td> {user.id}</td>
                                <td> {user.firstName}</td>
                                <td> {user.lastName}</td>
                                <td> {user.email}</td>
                            </tr>
                    )
                }
                </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;
