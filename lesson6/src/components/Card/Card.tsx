import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type PropsType = {
    name: string,
    age: number | string,
    gender: string,
    country: string,
}

export const UserCard: React.FC<PropsType> = ({name, age, gender, country}) => {
    return (
        <Card sx={{ maxWidth: 345, margin: "20px auto"}}>
            <CardActionArea>
            <CardMedia
                sx={{ m: "auto", width: 140 }}
                component="img"
                height="160"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BMwe19CuZpy0fsRTCAsQU9YR11XVqMmsrGFsz1JHYMxk3A_Urh2Iz_imwgxOUwToXbs&usqp=CAU"
                alt="user"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Name: {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Age: {age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Gender: {gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Country: {country}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}