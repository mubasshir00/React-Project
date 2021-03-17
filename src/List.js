import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
 

const List = ({People}) => {
    const classes = useStyles();
    return (
        <>
            {
                People.map((Person) => {
                const { id, name, age, image } = Person;
                return (
                    <Grid item xs={2}>
                            <article key={id} >
                            <img src={image} alt={name}></img>
                            <p>{name}</p>
                            <p>{age}</p>
                            </article>
                    </Grid>
                        )
                    })
            }
              
        </>       
    )
}

export default List
