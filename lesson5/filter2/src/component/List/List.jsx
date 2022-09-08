import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ItemsList = ({arr}) => {
    return (
        <List
            sx={{
                margin: "50px auto",
                width: '100%',
                maxWidth: 600,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 400,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
        >    
            <ul>
                {arr.map((item) => (
                <ListItem key={`item-${item}`}>
                    <ListItemText primary={item}/>
                </ListItem>
                ))}
            </ul>
        </List>
    );
}