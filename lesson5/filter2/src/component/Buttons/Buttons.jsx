import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export const Buttons = ({onFilter, onReset, formVal, onSort, checked}) => {

    return (
        <Box component="form"
            sx={{'& > :not(style)': { m: 1, width: '35ch', margin: "50px auto 0" }}}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={onFilter} value={formVal} id="outlined-basic" label="Поиск" variant="outlined" />
            <FormControlLabel onChange={onSort} sx={{justifyContent: "center"}} control={<Checkbox checked={checked}/>} label="Сортировать по алфавиту"/>
            <Button onClick={onReset} variant="contained">Сброс</Button>
        </Box>
    );
}


