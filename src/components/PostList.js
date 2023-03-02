import React from 'react'
import {List, Datagrid, TestField, DateField, EditButton, DeleteButton} from 'react-admin'


const PostList = (props) => {

    return( <List{...props}>
        <Datagrid>
        <TestField source='id' />
        <TestField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
        </Datagrid>

    </List>
    )

}
export default PostList