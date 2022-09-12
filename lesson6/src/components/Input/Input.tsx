import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

type PropsType = {
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

export const NameInput: React.FC<PropsType> = ({onNameChange, name}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: 5, mb: 5}}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField onChange={onNameChange} id="input-with-sx" value={name} label="Введите имя" variant="standard" />
        </Box>
    );
}