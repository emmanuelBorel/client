import React from 'react'
import {List, Datagrid, TestField, EditButton, EmailField, DeleteButton} from 'react-admin'


const UserList = (props) => {

    return( <List{...props}>
        <Datagrid>
        <TestField source='id' />
        <TestField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
        </Datagrid>

    </List>
    )
}

export default UserList