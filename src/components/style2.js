import { makeStyles } from '@material-ui/core/styles';

const useStyles1 = makeStyles({
    root: {
      background: 'red',
      '& p': {
        background: 'green',
        '&:hover': {
          background: 'aquamarine',
        }
      },
      '& input': {
        background: 'magenta',
      }
    },
  });
  
//   export default function Hook() {
//     const classes = useStyles();
//     return <Button className={classes.root}>Hook</Button>;
//   }
export default useStyles1;