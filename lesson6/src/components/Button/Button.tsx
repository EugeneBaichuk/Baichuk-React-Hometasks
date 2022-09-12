import Button from '@mui/material/Button';

type Props = {
    onGetAge: React.ReactEventHandler;
}

export const ContainedButton: React.FC<Props> = ({onGetAge}) => {
    return (
        <Button onClick={onGetAge} variant="contained">Получить данные</Button>
    );
}