import React from 'react';
import TodoListItem from './TodoListItem';
import { Container, Paper, Table, TableBody, TableContainer } from '@material-ui/core';

export default function TodoList({ list,  onDelete, onToggle }) {
    return (

    <Container maxWidth="xl">
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    {list.map((todo) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>
    );
}
