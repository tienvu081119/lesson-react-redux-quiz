import React, { Component } from 'react';

class VideoForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Video</h1>
                <div>
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                </div>
            </>
        )
    }
}

export default VideoForm
