import React from 'react';
import { Button, Container } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

export default function TodoForm({ onSave }) {
    let input;
    return (
        <Container maxWidth="sm">
            <form  onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                onSave(input.value)
                input.value = ''
                }}>
                <input
                required
                ref={node => (input = node)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    type="submit"
                >
                    Save
                </Button>
            </form>
        </Container>
    );
}
