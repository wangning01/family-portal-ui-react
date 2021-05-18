import {Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';
import {PortalContext} from 'components/PortalContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const  Header = () => {
    const {setPortalState} = useContext(PortalContext);
    const logout = () => { setPortalState(null); };
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {t('lable.home')}
                </Typography>
                <Button color="inherit" onClick={logout} >{t('lable.logout')}</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;