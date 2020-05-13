import React from 'react';

import {
    GridList,
    GridListTile,
    GridListTileBar,
    ListSubheader,
    IconButton,
    Grid,
    Link
} from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import useStyles from './style';
const ImagesList = ({ search, images }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <GridList cellHeight={180} className={classes.gridList} cols={12}>
                <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{search}</ListSubheader>
                </GridListTile>
            </GridList>

            <Grid container justify="center" spacing={1}>

                {images.map((image) => (

                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={image.id} >
                        <GridList cellHeight={180} className={classes.gridList} cols={1}>
                            <GridListTile cols={1} rows={1}>
                                <img src={image.previewURL} alt={image.tags} />
                                <GridListTileBar
                                    // title={image.tags}
                                    subtitle={
                                        <React.Fragment>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item>
                                                    <ThumbUpAltIcon />
                                                </Grid>
                                                <Grid item>
                                                    {image.likes}
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item>
                                                    <VisibilityOutlinedIcon />
                                                </Grid>
                                                <Grid item>
                                                    {image.views}
                                                </Grid>
                                            </Grid>
                                        </React.Fragment>
                                    }
                                    actionIcon={
                                        <Link
                                            href={image.largeImageURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <IconButton aria-label={`goto ${image.imageURL}`} className={classes.icon}>
                                                <ArrowForwardIcon />
                                            </IconButton>
                                        </Link>
                                    }

                                />
                            </GridListTile>
                        </GridList>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment >

    );
}
export default ImagesList;