import React from 'react'
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <Grid container justify="space-between">
            <Grid item xs={2}>Logo</Grid>
            <Grid item xs={4}>Nav</Grid>
        </Grid>
    )
}

export default Header
