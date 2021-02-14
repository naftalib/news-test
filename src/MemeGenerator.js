import React, {Component} from "react"

class MemeGenerator extends Component {
 
            state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    
    componentDidMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
              targetUrl = "https://api.imgflip.com/get_memes"
        fetch(proxyUrl + targetUrl)
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator

// fetch('http://catfacts-api.appspot.com/api/facts?number=99', { mode: 'no-cors'})
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });

//   var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
// fetch(proxyUrl + targetUrl)
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });