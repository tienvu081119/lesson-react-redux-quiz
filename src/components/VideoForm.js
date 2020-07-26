import React, { Component } from 'react';

class VideoForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Video</h1>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
            </>
        )
    }
}

export default VideoForm
