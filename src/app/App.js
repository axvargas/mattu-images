import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Grid,
	Container,
	Fab,


} from '@material-ui/core';

import { Pagination } from '@material-ui/lab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



import useStyles from './style';
import Footer from '../components/footer';
import Header from '../components/header';
import Searcher from '../components/searcher';
import ImagesList from '../components/images';
import ScrollTop from '../components/scrollTop';


const APIKEY = '16518672-993c14d56f9fe9948afa09039';

const App = () => {

	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);

	//State
	const [search, setSearch] = useState('');
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	//Effect
	useEffect(() => {
		const consultAPI = async () => {
			if (!search) return;
			const imagesPerPage = 30;
			const url = `https://pixabay.com/api/?key=${APIKEY}&q=${search}&per_page=${imagesPerPage}&page=${page}`;
			console.log('searching...')
			const response = await axios.get(url);
			setTotalPages(Math.ceil(response.data.totalHits / imagesPerPage));
			setImages(response.data.hits);

			//back to top
			handleGoUp()
		}
		consultAPI();
	}, [search, page]);


	const handleGoUp = () => {
		const anchor = (document).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<MuiThemeProvider theme={theme}>
			<Header title="MattuImgs" />
			<Container>
				<Searcher setSearch={setSearch} />
				<Grid container justify="center" spacing={2} className={classes.grid}>
					{images.length > 0 &&
						<React.Fragment>
							<Grid item>
								<ImagesList search={search} images={images} />
							</Grid>
							<Grid item>


								<Pagination
									count={totalPages}
									variant="outlined"
									shape="rounded"
									onChange={(event, pag) => {
										console.log("Changing " + pag);
										setPage(pag);
									}}
								/>


							</Grid>
						</React.Fragment>
					}


				</Grid>
			</Container>


			<Footer />
			<ScrollTop>
				<Fab className={classes.fab} size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</MuiThemeProvider>
	);
}


export default App;
