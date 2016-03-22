// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    
    // {/* start app */}
    var BlogView = React.createClass({
        render: function() {
        
            console.log(this)
            return ( 
            	<div className = "container">
                <AboutResults/>
                <ListingGrid/>
                </div>
            )
        }
    })

 
    var AboutResults = React.createClass({
        render: function() {
            return (

                <div id= "header">
                <img id= "skyline" src ="http://magentanova.github.io/html-intro-1/images/houston.jpg"></img>
                <img id= "TIY" src ="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"></img>
                </div>

            )
        }

    })


    var ListingGrid = React.createClass({


        render: function() {
        		return (
        		<div id = "content" >
                <div id = "words1" >
                <div id = "updates" >
                <p>
                <h1> The Iron Yard | Houston </h1> 
                <h2 id = "happenings" > Happenings and Updates from the Iron Yard in Houston, TX <p> </p></h2>
                <h3> SEARCH </h3> <h4 > <p id= "key"> Search Keywords </p> </h4>
                </p> 
                </div>

            <div id ="sep22" >
                <p >
                <h1> September 22 nd Starts a New class of the Iron Yard Houston students </h1> <p>
                <div id = "brian" >
                <h2 > by Brian Dorton, Campus Director at 
                <div id = "iron" > The Iron Yard 
                </div> Houston </h2>
                <div>
                <img id = "classroom"
            src = "http://magentanova.github.io/html-intro-1/images/classroom.jpg"
            alt = "" ></img>
                <p id = "ramble" > Unicorn experiential human - centered design entreprenur latte agile ideate human - centered design fund physical computing boostrapping ticky note engagin minimum viable product.Moleskine earned media human - centered dseign experiential entrepreneur
            grok parallax waterfall is so 2000 and</p> 
            </div> 
            </div> 
            </p> 
            </p>
            </div> 
            <div id = "iframe" >
                <iframe src = "//giphy.com/embed/xTk9ZFcYZjdgFoOkyA" scrolling = "yes" >
                </iframe> 
                <div id = "nevermiss" >
                <h5 id= "nevermisswords" > Never Miss a Post! 
                </h5> 
                <img id = "TIY2" src= "http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"></img>
                <p id= "houston" > tiyhouston 
                </p> 
                <p id = "tiyhouston2"> The Iron Yard | Houston </p> <img id = "follow" src = "https://nycquirk.files.wordpress.com/2014/04/twitter_follow_button.png"></img>
                </div> 
                </div> 
                </div>
                </div>
                	)
        }
    })

	DOM.render(<BlogView />,document.querySelector(".container"))
}

app()
