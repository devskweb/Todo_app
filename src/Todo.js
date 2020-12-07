import { List,ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <div>
            <List className="todo_list">
                <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Deadline coming  ⏰"></ListItemText>
                <ListItemAvatar>
                <DeleteForeverIcon onClick={event => {db.collection('Todos').doc(props.todo.id).delete()}}/>
                </ListItemAvatar>
                </ListItem>
               {/* <Button  > Delete this</Button>*/}
            </List>
            {/*<li>{props.text}</li>*/}
        </div>
    )
}

export default Todo
