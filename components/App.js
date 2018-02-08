

App = React.createClass({
	getInitialState() {
		return {
			loading: false,
			searchingText:'',
			gif: {}
		};
	},

	handleSearch: function (searchingText) {
		this.setState ({
			loading: true
		});
		this.getGif(searchingText).then(gif => {
			this.setState({
				loading:false,
				gif,
				searchingText
			});
		}).catch(err => console.log(err));
	},

	getGif: function (searchingText) {
		return new Promise(
			function (resolve, reject) {
				const GIPHY_API_URL = 'https://api.giphy.com';
				const GIPHY_PUB_KEY = 'Q4wbjx0izwoqp3JLUJSKAsQ2EB08vL1X';
				let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
				let xhr = new XMLHttpRequest();
				xhr.open('GET', url);
				xhr.onload = function() {
					if (xhr.status ===200) {
						let data = JSON.parse(xhr.responseText).data;
						const gif = {
							url: data.fixed_width_downsampled_url,
							sourceUrl: data.url
						};
						resolve(gif);
					} else {
						reject(new Error(this.statusText));
					}
				};
				request.onerror = function () {
					reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
				};
				xhr.send(); 
		});
	},



	render: function() {
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style= {styles}>
				<h1>Wyszukirwaka GIFow!</h1>
				<p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
				<Search onSearch={this.handleSearch}/>
			<Gif 
			loading={this.state.loading}
			url={this.state.gif.url}
			sourceUrl={this.state.gif.sourceUrl}
			/>
			</div>
		);
	}
});
